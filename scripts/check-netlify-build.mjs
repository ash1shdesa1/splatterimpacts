#!/usr/bin/env node
/**
 * Checks the latest Netlify deploy for the site.
 * Requires NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID env vars.
 * Exits 1 if the latest deploy is in a non-ready state.
 */

const { NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID } = process.env

if (!NETLIFY_AUTH_TOKEN || !NETLIFY_SITE_ID) {
  console.warn('NETLIFY_AUTH_TOKEN or NETLIFY_SITE_ID not set — skipping Netlify check.')
  process.exit(0)
}

const GOOD_STATES = new Set(['ready', 'current'])

async function run() {
  const res = await fetch(
    `https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys?per_page=1`,
    { headers: { Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}` } }
  )

  if (!res.ok) {
    console.error(`Netlify API error: ${res.status} ${res.statusText}`)
    process.exit(1)
  }

  const [deploy] = await res.json()
  if (!deploy) {
    console.warn('No deploys found.')
    process.exit(0)
  }

  const { state, created_at, deploy_url, error_message } = deploy
  console.log(`Latest deploy: ${state} (created ${new Date(created_at).toISOString()})`)
  console.log(`URL: ${deploy_url}`)

  if (!GOOD_STATES.has(state)) {
    console.error(`\n✗ Deploy is in state "${state}"${error_message ? ': ' + error_message : ''}`)
    process.exit(1)
  }

  console.log('✓ Netlify build is healthy.')
}

run().catch((err) => {
  console.error('Unexpected error:', err.message)
  process.exit(1)
})
