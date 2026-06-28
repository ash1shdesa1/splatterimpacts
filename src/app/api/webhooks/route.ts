import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import Stripe from 'stripe'

// ─────────────────────────────────────────────────────────────
// STRIPE WEBHOOK HANDLER
// Setup:
//   1. Set STRIPE_WEBHOOK_SECRET in .env.local
//   2. Create webhook in Stripe Dashboard → Webhooks
//      URL: https://your-domain.com/api/webhooks
//      Events: checkout.session.completed, payment_intent.payment_failed
//   3. For local testing: stripe listen --forward-to localhost:3000/api/webhooks
// ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('[WEBHOOK SIGNATURE ERROR]', err.message)
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 })
  }

  // Handle events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log('[ORDER COMPLETED]', session.id)

      // PLACEHOLDER: Add your order fulfillment logic here
      // Examples:
      //   - Save order to your database (Supabase, PlanetScale, etc.)
      //   - Send order confirmation email via Resend/SendGrid
      //   - Notify your fulfillment team
      //   - Update inventory counts
      //   - Send shipping notification
      //
      // The session object contains:
      //   session.customer_details.email   — customer email
      //   session.customer_details.name    — customer name
      //   session.amount_total             — total in cents
      //   session.shipping_details         — shipping address
      //   session.metadata                 — your custom metadata

      break
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.error('[PAYMENT FAILED]', paymentIntent.id)
      // PLACEHOLDER: Log the failure or notify your team
      break
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge
      console.log('[REFUND PROCESSED]', charge.id)
      // PLACEHOLDER: Update order status in your database
      break
    }

    default:
      console.log(`[WEBHOOK] Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
