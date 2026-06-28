import { NextRequest, NextResponse } from 'next/server'
import crypto from 'node:crypto'

// Shopify webhook receiver (orders/create, orders/paid, etc.).
// Verifies the HMAC signature, then hands off to your fulfillment logic.
// Configure the signing secret as SHOPIFY_WEBHOOK_SECRET (see .env.example).
export async function POST(req: NextRequest) {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Shopify webhooks not configured' }, { status: 503 })
  }

  const hmacHeader = req.headers.get('x-shopify-hmac-sha256') || ''
  const rawBody = await req.text()
  const digest = crypto.createHmac('sha256', secret).update(rawBody, 'utf8').digest('base64')

  const a = Buffer.from(hmacHeader)
  const b = Buffer.from(digest)
  const valid = a.length === b.length && crypto.timingSafeEqual(a, b)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const topic = req.headers.get('x-shopify-topic') || 'unknown'
  // PLACEHOLDER: branch on `topic` and process the verified payload
  // (e.g. record orders, trigger fulfillment, send confirmation email).
  console.log(`[SHOPIFY WEBHOOK] ${topic}`)

  return NextResponse.json({ received: true })
}
