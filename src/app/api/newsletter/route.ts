import { NextRequest, NextResponse } from 'next/server'

// ─────────────────────────────────────────────────────────────
// NEWSLETTER SIGNUP
// PLACEHOLDER: Connect your email marketing service.
// Supported options:
//   - Mailchimp: https://mailchimp.com/developer/marketing/api/
//   - Klaviyo: https://developers.klaviyo.com/
//   - Resend Audiences: https://resend.com/docs/api-reference/audiences
//   - ConvertKit: https://developers.convertkit.com/
//
// Set the relevant API keys in .env.local
// ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const email = formData.get('email') as string

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // PLACEHOLDER: Replace with your email marketing API call
    // Example with Mailchimp:
    //
    // const response = await fetch(
    //   `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    //   }
    // )

    console.log('[NEWSLETTER] New subscriber:', email)

    // For now, redirect back with success
    return NextResponse.redirect(
      new URL('/?subscribed=true', req.url)
    )
  } catch (err) {
    console.error('[NEWSLETTER ERROR]', err)
    return NextResponse.redirect(new URL('/?subscribed=error', req.url))
  }
}
