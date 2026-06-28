import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS } from '@/data/products'

interface CartLine {
  productId: string
  quantity: number
}

// Validate prices server-side against the actual product catalog.
// Never trust client-supplied prices — this prevents price manipulation attacks.
function resolveLineItems(lines: CartLine[]) {
  return lines.map((line) => {
    const product = PRODUCTS.find((p) => p.id === line.productId)
    if (!product) throw new Error(`Unknown product: ${line.productId}`)
    if (!product.inStock) throw new Error(`${product.title} is out of stock`)

    const qty = Math.min(Math.max(Math.floor(line.quantity), 1), 10)

    return {
      price_data: {
        currency: 'usd',
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.title,
          images: [product.image],
          description: `VERO Fine Jewelry — ${product.title}`,
        },
      },
      quantity: qty,
    }
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const lines: CartLine[] = body?.items ?? []

    if (!Array.isArray(lines) || lines.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 })
    }

    if (lines.length > 20) {
      return NextResponse.json({ error: 'Too many items' }, { status: 400 })
    }

    const lineItems = resolveLineItems(lines)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'FR', 'DE', 'IT', 'ES'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'usd' },
            display_name: 'Complimentary Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 2500, currency: 'usd' },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 3 },
            },
          },
        },
      ],
      phone_number_collection: { enabled: true },
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout`,
      metadata: { source: 'vero-website' },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('[CHECKOUT ERROR]', err.message)
    return NextResponse.json(
      { error: err.message || 'Checkout session creation failed' },
      { status: 500 }
    )
  }
}
