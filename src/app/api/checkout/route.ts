import { NextRequest, NextResponse } from 'next/server'
import { isShopifyConfigured, createShopifyCheckout, ShopifyLine } from '@/lib/shopify'
import { PRODUCTS } from '@/data/products'

interface CartLine {
  productId: string
  quantity: number
}

// Map cart lines to Shopify Storefront variant IDs (set on each product as
// `shopifyVariantId`). Throws a clear error if a product hasn't been mapped yet.
function resolveShopifyLines(lines: CartLine[]): ShopifyLine[] {
  return lines.map((line) => {
    const product = PRODUCTS.find((p) => p.id === line.productId)
    if (!product) throw new Error(`Unknown product: ${line.productId}`)
    if (!product.inStock) throw new Error(`${product.title} is out of stock`)
    if (!product.shopifyVariantId) {
      throw new Error(`${product.title} is missing its Shopify variant ID (set shopifyVariantId in products.ts)`)
    }
    const qty = Math.min(Math.max(Math.floor(line.quantity), 1), 10)
    return { variantId: product.shopifyVariantId, quantity: qty }
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

    if (!isShopifyConfigured()) {
      return NextResponse.json(
        { error: 'Checkout is not configured. Set the SHOPIFY_* environment variables.' },
        { status: 503 }
      )
    }

    // Create a Shopify cart and return its hosted checkout URL.
    const url = await createShopifyCheckout(resolveShopifyLines(lines))
    return NextResponse.json({ url })
  } catch (err: any) {
    console.error('[CHECKOUT ERROR]', err.message)
    return NextResponse.json(
      { error: err.message || 'Checkout failed' },
      { status: 500 }
    )
  }
}
