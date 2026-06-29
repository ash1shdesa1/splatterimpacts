#!/usr/bin/env node
/**
 * Link checker — crawls the site and reports broken internal links.
 * Usage: node scripts/check-links.mjs [BASE_URL]
 * Defaults to https://splatterimpact.com when no argument is supplied.
 */

const BASE_URL = (process.argv[2] || 'https://splatterimpact.com').replace(/\/$/, '')
const CONCURRENCY = 5
const TIMEOUT_MS = 10_000

const visited = new Set()
const queue = ['/']
const broken = []
const skipped = []

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    return await fetch(url, { ...opts, signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

function isInternal(href) {
  try {
    const url = new URL(href, BASE_URL)
    return url.hostname === new URL(BASE_URL).hostname
  } catch {
    return false
  }
}

function normalise(href) {
  try {
    const url = new URL(href, BASE_URL)
    url.hash = ''
    url.search = ''
    const p = url.pathname
    // Skip Next.js static assets — they're not navigable pages
    if (p.startsWith('/_next/')) return null
    return p
  } catch {
    return null
  }
}

function extractLinks(html, sourcePath) {
  const links = []
  const hrefRe = /href="([^"]+)"/gi
  let m
  while ((m = hrefRe.exec(html)) !== null) {
    const raw = m[1]
    if (raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('#')) continue
    links.push(raw)
  }
  return links
}

async function checkInternal(path) {
  const url = `${BASE_URL}${path}`
  try {
    const res = await fetchWithTimeout(url)
    if (res.status >= 400) {
      broken.push({ path, status: res.status, type: 'internal' })
      return null
    }
    const ct = res.headers.get('content-type') || ''
    if (!ct.includes('text/html')) return null
    const html = await res.text()
    return extractLinks(html, path)
  } catch (err) {
    broken.push({ path, status: 'TIMEOUT/ERR', error: err.message, type: 'internal' })
    return null
  }
}

async function checkExternal(href) {
  try {
    const res = await fetchWithTimeout(href, { method: 'HEAD' })
    if (res.status >= 400) {
      broken.push({ path: href, status: res.status, type: 'external' })
    }
  } catch {
    skipped.push(href)
  }
}

async function run() {
  console.log(`Checking links on ${BASE_URL}\n`)

  while (queue.length > 0) {
    const batch = queue.splice(0, CONCURRENCY)
    const results = await Promise.all(batch.map(checkInternal))

    for (let i = 0; i < batch.length; i++) {
      const links = results[i]
      if (!links) continue

      for (const href of links) {
        if (isInternal(href)) {
          const path = normalise(href)
          if (path && !visited.has(path)) {
            visited.add(path)
            queue.push(path)
          }
        }
        // External link checking is best-effort; uncomment if needed:
        // else { await checkExternal(href) }
      }
    }
  }

  console.log(`Crawled ${visited.size} pages.`)

  if (broken.length === 0) {
    console.log('✓ No broken links found.')
    process.exit(0)
  } else {
    console.error(`\n✗ ${broken.length} broken link(s):\n`)
    for (const { path, status, type, error } of broken) {
      const detail = error ? ` (${error})` : ''
      console.error(`  [${status}] ${type}: ${path}${detail}`)
    }
    if (skipped.length) {
      console.log(`\n  ${skipped.length} external links skipped (unreachable from CI)`)
    }
    process.exit(1)
  }
}

run()
