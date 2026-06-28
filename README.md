# Splatter Impacts — Reactive Shooting Targets E-Commerce

Storefront for **splatterimpacts.com** — reactive splatter targets, AR500 steel, reactive steel, stands, and range accessories. Built with Next.js 16 + React 19, Shopify checkout, Zustand cart, and Tailwind CSS. Deployed on Netlify.

---

## Quick Start

```bash
cp .env.example .env.local   # fill in your values
npm install
npm run dev                  # → http://localhost:3000
```

The site runs locally without any keys. Checkout requires Shopify (see below).
Minimum `.env.local`:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16, React 19 (App Router) |
| Styling | Tailwind CSS v4, Cormorant Garamond + Inter fonts; blaze-orange tactical accent |
| Cart state | Zustand + `persist` (localStorage, key `splatterimpacts-cart`) |
| Payments | Shopify hosted checkout (Storefront API) |
| Images | First-party SVG target artwork in `public/images/products` (served via the Next image optimizer) |
| Deployment | Netlify + `@netlify/plugin-nextjs` |
| Security | CSP headers, server-side validation |

---

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    about/                # Brand story
    shop/
      page.tsx            # Shop listing (ShopContent.tsx handles client state)
      [slug]/page.tsx     # Product detail page
    checkout/page.tsx     # Order review page
    success/page.tsx      # Post-payment confirmation
    contact/              # Contact form
    journal/              # Range guides / blog
    sizing/               # Target sizing & distance guide
    care/                 # Range & care guide
    shipping-returns/     # Policy page
    stockists/            # Retailer locator placeholder
    api/
      checkout/route.ts        # Creates a Shopify cart, returns hosted checkout URL
      shopify/webhooks/route.ts # Shopify webhook receiver (HMAC-verified)
      contact/route.ts         # Contact form submission
      newsletter/route.ts      # Newsletter signup
  components/
    Navigation.tsx        # Fixed top nav with cart badge
    CartDrawer.tsx        # Slide-in cart panel
    AddToCartButton.tsx   # Client component used on product pages
    ProductCard.tsx       # Card used in shop listing
    Footer.tsx
  data/
    products.ts           # Product catalog + CATEGORIES (local SVG product art)
  lib/
    shopify.ts            # Shopify Storefront API client (checkout)
    types.ts              # Shared TypeScript types
  store/
    cart.ts               # Zustand cart store
  middleware.ts
public/
  images/products/        # Original in-house SVG target graphics
```

---

## Pages & Features

### Working
- **Homepage** — bold dark hero, marquee, "why splatter" section, category tiles, best sellers, bulk CTA, value props
- **Shop** — filterable grid by category (splatter-targets, paper-targets, steel-targets, reactive-targets, target-stands, accessories), sort
- **Product detail** — artwork, description, spec list, Add to Cart
- **Cart drawer** — slide-in, quantity controls, remove, Escape key, body scroll lock, persists across page loads
- **Checkout review** — order summary + totals before handing off to Shopify
- **Shopify Checkout** — hosted by Shopify, collects shipping address + card, supports discount codes
- **Success page** — post-payment confirmation screen
- **About** — targets brand story
- **Contact** — form with API route (general, order, bulk/club, dealer, press)
- **Care, Sizing, Shipping & Returns, Journal, Stockists** — content pages

### Known Issues / TODOs
- **Cart doesn't clear after payment** — handle this on the success page or via the Shopify webhook (`api/shopify/webhooks/route.ts`).
- **Redundant checkout step** — `/checkout` re-shows what's already in the cart drawer before redirecting to Shopify. Could be cut (Cart Drawer → Shopify directly).
- **Broken `total`/`count` getters in cart store** — `store/cart.ts` defines them as JS getters but Zustand's `persist` strips them on hydration. Components recalculate inline; the getters are dead code.
- **Product art is placeholder SVG** — `public/images/products/*.svg` is original in-house artwork. Swap in real product photography by replacing those files (keep the same paths).

---

## Checkout — Shopify

Checkout runs through Shopify's hosted checkout. `/api/checkout` creates a Shopify
cart from the line items and returns its `checkoutUrl`; the frontend redirects the
buyer there to pay. Until Shopify is configured, `/api/checkout` returns a clear
`503` and no payment can be taken.

To enable it:

1. In Shopify admin → **Settings → Apps and sales channels → Develop apps**, create
   an app with **Storefront API** access (scope `unauthenticated_write_checkouts`).
   Install it and copy the **Storefront API access token**.
2. Fill in the `SHOPIFY_*` placeholders in `.env.local` (see `.env.example`).
3. Map each product to its Shopify variant: set `shopifyVariantId` on the entries in
   `src/data/products.ts` to the variant GID (`gid://shopify/ProductVariant/...`).
   The checkout route returns a clear error for any product still missing this.
4. (Optional) Add a webhook in Shopify pointing at `/api/shopify/webhooks` and set
   `SHOPIFY_WEBHOOK_SECRET` to its signing secret.

Integration code lives in `src/lib/shopify.ts`; the checkout route is in
`src/app/api/checkout/route.ts`.

---

## Deployment (Netlify)

Config in `netlify.toml` is ready. Steps to go live:

1. Push to `github.com/ash1shdesa1/splatterimpacts`
2. Connect repo in Netlify → New site from Git
3. Add env vars in Netlify dashboard (Site Settings → Environment Variables):
   ```
   NEXT_PUBLIC_SITE_URL=https://www.splatterimpacts.com
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
   SHOPIFY_WEBHOOK_SECRET=...
   ```
4. Connect domain `splatterimpacts.com` in Netlify → Domain Management (Netlify shows the `[your-site].netlify.app` target)
5. **DNS is hosted at GoDaddy.** Manage records in GoDaddy → **My Products → splatterimpacts.com → Manage DNS**:

   | Type  | Name | Value                       | TTL    |
   |-------|------|-----------------------------|--------|
   | A     | @    | `75.2.60.5`                 | 1 hr   |
   | CNAME | www  | `[your-site].netlify.app`   | 1 hr   |

   - Delete GoDaddy's default parked `@` A record and `www` CNAME so they don't conflict.
   - The apex uses Netlify's A record `75.2.60.5` (GoDaddy can't CNAME the apex).
   - Verify with `dig splatterimpacts.com +short`.

---

## Product Catalog

26 SKUs across 6 categories, defined in `src/data/products.ts`. Every product uses first-party SVG artwork from `public/images/products`.

Categories: `splatter-targets` · `paper-targets` · `steel-targets` · `reactive-targets` · `target-stands` · `accessories`

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site origin (absolute image URLs, redirects) |
| `SHOPIFY_STORE_DOMAIN` | `your-store.myshopify.com` — enables checkout |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API token (checkout creation) |
| `SHOPIFY_API_VERSION` | Storefront API version (default `2025-01`) |
| `SHOPIFY_ADMIN_ACCESS_TOKEN` | Admin API token (optional — product/order sync) |
| `SHOPIFY_WEBHOOK_SECRET` | Verifies `/api/shopify/webhooks` signatures |
| `RESEND_API_KEY` | Email sending (not yet wired up) |
| `EMAIL_FROM` / `EMAIL_TO` | Email addresses for order/contact notifications |
