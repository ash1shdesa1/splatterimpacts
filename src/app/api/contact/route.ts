import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_SUBJECTS = [
  'general',
  'order',
  'custom',
  'wholesale',
  'press',
  'other',
] as const

function sanitize(str: unknown, maxLen = 500): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, maxLen).replace(/[<>]/g, '')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const firstName = sanitize(body.firstName, 50)
    const lastName  = sanitize(body.lastName, 50)
    const email     = sanitize(body.email, 254)
    const subject   = sanitize(body.subject, 50)
    const message   = sanitize(body.message, 2000)

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Validate subject is one of the allowed values
    if (subject && !ALLOWED_SUBJECTS.includes(subject as any)) {
      return NextResponse.json({ error: 'Invalid subject' }, { status: 400 })
    }

    // PLACEHOLDER: Send email via Resend/SendGrid/Postmark
    // Example with Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: process.env.EMAIL_FROM!,          // e.g. 'Splatter Impacts <noreply@splatterimpact.com>'
    //   to: process.env.EMAIL_TO!,              // e.g. 'contact@splatterimpact.com'
    //   replyTo: email,
    //   subject: `Splatter Impacts Contact — ${subject || 'General Inquiry'}`,
    //   text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    // })

    console.log('[CONTACT FORM]', { firstName, lastName, email, subject, message })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('[CONTACT ERROR]', err.message)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
