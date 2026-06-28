// ─────────────────────────────────────────────────────────────
// Shopify Storefront API integration (headless checkout)
//
// Configuration is read from environment variables. See `.env.example`
// for the placeholders that must be filled in to enable Shopify. When
// the env is not configured, `isShopifyConfigured()` returns false and
// the app falls back to the existing Stripe Checkout flow — so nothing
// breaks before Shopify is set up.
// ─────────────────────────────────────────────────────────────

const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN // e.g. your-store.myshopify.com
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
const API_VERSION = process.env.SHOPIFY_API_VERSION || '2025-01'

/** True only when both the store domain and Storefront token are present. */
export function isShopifyConfigured(): boolean {
  return Boolean(STORE_DOMAIN && STOREFRONT_TOKEN)
}

interface ShopifyResponse<T> {
  data?: T
  errors?: { message: string }[]
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!STORE_DOMAIN || !STOREFRONT_TOKEN) {
    throw new Error('Shopify is not configured. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN.')
  }

  const res = await fetch(`https://${STORE_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    // Storefront data is dynamic; never cache checkout/cart mutations.
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Shopify request failed: ${res.status} ${res.statusText}`)
  }

  const json = (await res.json()) as ShopifyResponse<T>
  if (json.errors?.length) {
    throw new Error(`Shopify error: ${json.errors.map((e) => e.message).join('; ')}`)
  }
  if (!json.data) {
    throw new Error('Shopify returned no data')
  }
  return json.data
}

export interface ShopifyLine {
  variantId: string // Storefront variant GID
  quantity: number
}

const CART_CREATE = /* GraphQL */ `
  mutation cartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`

interface CartCreateResult {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null
    userErrors: { field: string[]; message: string }[]
  }
}

/**
 * Create a Shopify cart from line items and return the hosted checkout URL.
 * The frontend redirects the buyer to this URL to complete payment on Shopify.
 */
export async function createShopifyCheckout(lines: ShopifyLine[]): Promise<string> {
  const data = await shopifyFetch<CartCreateResult>(CART_CREATE, {
    lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })),
  })

  const { cart, userErrors } = data.cartCreate
  if (userErrors.length) {
    throw new Error(`Shopify cart error: ${userErrors.map((e) => e.message).join('; ')}`)
  }
  if (!cart?.checkoutUrl) {
    throw new Error('Shopify did not return a checkout URL')
  }
  return cart.checkoutUrl
}
