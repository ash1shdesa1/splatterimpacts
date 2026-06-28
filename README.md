# Splatter Impacts — Reactive Shooting Targets E-Commerce

Storefront for **splatterimpacts.com** — reactive splatter targets, AR500 steel, reactive steel, stands, and range accessories. Built with Next.js 16 + React 19, Stripe Checkout, Zustand cart, and Tailwind CSS. Deployed on Netlify.

---

## Quick Start

```bash
cp .env.example .env.local   # fill in Stripe keys
npm install
npm run dev                  # → http://localhost:3000
```

Minimum `.env.local` to run locally:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16, React 19 (App Router) |
| Styling | Tailwind CSS v4, Cormorant Garamond + Inter fonts; blaze-orange tactical accent |
| Cart state | Zustand + `persist` (localStorage, key `splatterimpacts-cart`) |
| Payments | Stripe Checkout (hosted, server-side session creation) |
| Images | First-party SVG target artwork in `public/images/products` (served via the Next image optimizer) |
| Deployment | Netlify + `@netlify/plugin-nextjs` |
| Security | CSP headers, server-side price validation |

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
      checkout/route.ts   # Creates Stripe Checkout session (price-validated)
      webhooks/route.ts   # Stripe webhook handler (stub — needs fulfillment logic)
      contact/route.ts    # Contact form submission
      newsletter/route.ts # Newsletter signup
  components/
    Navigation.tsx        # Fixed top nav with cart badge
    CartDrawer.tsx        # Slide-in cart panel
    AddToCartButton.tsx   # Client component used on product pages
    ProductCard.tsx       # Card used in shop listing
    Footer.tsx
  data/
    products.ts           # Product catalog + CATEGORIES (local SVG product art)
  lib/
    stripe.ts             # Stripe client
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
- **Checkout review** — order summary + totals before handing off to Stripe
- **Stripe Checkout** — hosted by Stripe, collects shipping address + card, supports promo codes
- **Success page** — post-payment confirmation screen
- **About** — targets brand story
- **Contact** — form with API route (general, order, bulk/club, dealer, press)
- **Care, Sizing, Shipping & Returns, Journal, Stockists** — content pages

### Known Issues / TODOs
- **Cart doesn't clear after payment** — webhook handler (`api/webhooks/route.ts`) is a stub. After a successful payment the cart still shows the purchased items. Either read the Stripe session on the success page and call `clearCart()`, or implement the webhook to trigger it.
- **Redundant checkout step** — `/checkout` re-shows what's already in the cart drawer before redirecting to Stripe. Could be cut (Cart Drawer → Stripe directly) or replaced with a real pre-checkout form.
- **Broken `total`/`count` getters in cart store** — `store/cart.ts` defines `total` and `count` as JS getters but Zustand's `persist` middleware strips them on hydration. Components recalculate inline; the getters are dead code.
- **Webhook fulfillment is a stub** — `checkout.session.completed` logs the session ID but does nothing else (no email, no inventory update, no order record).
- **Product art is placeholder SVG** — `public/images/products/*.svg` is original in-house artwork. Swap in real product photography by replacing those files (keep the same paths).

---

## Deployment (Netlify)

Config in `netlify.toml` is ready. Steps to go live:

1. Push to `github.com/ash1shdesa1/splatterimpacts`
2. Connect repo in Netlify → New site from Git
3. Add env vars in Netlify dashboard (Site Settings → Environment Variables):
   ```
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   NEXT_PUBLIC_SITE_URL=https://www.splatterimpacts.com
   ```
4. Connect domain `splatterimpacts.com` in Netlify → Domain Management (Netlify will show the exact `[your-site].netlify.app` target)
5. **DNS is hosted at GoDaddy.** Keep GoDaddy's nameservers and manage records in
   GoDaddy → **My Products → splatterimpacts.com → DNS (Manage DNS)**. Add/edit:

   | Type  | Name | Value                       | TTL    |
   |-------|------|-----------------------------|--------|
   | A     | @    | `75.2.60.5`                 | 1 hr   |
   | CNAME | www  | `[your-site].netlify.app`   | 1 hr   |

   - Delete GoDaddy's default "parked" A record on `@` (and the `www` CNAME to
     parking) so they don't conflict.
   - GoDaddy can't CNAME the apex, so the apex uses Netlify's A record `75.2.60.5`.
   - Propagation usually completes within an hour. Verify with `dig splatterimpacts.com +short`.
6. Create Stripe webhook → `https://www.splatterimpacts.com/api/webhooks`, event: `checkout.session.completed`

---

## Product Catalog

26 SKUs across 6 categories, defined in `src/data/products.ts`. Every product uses first-party SVG artwork from `public/images/products`. Server-side price validation in the checkout API prevents client-side price manipulation.

Categories: `splatter-targets` · `paper-targets` · `steel-targets` · `reactive-targets` · `target-stands` · `accessories`

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Stripe server-side key (create session, validate webhooks) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe client-side key |
| `STRIPE_WEBHOOK_SECRET` | Validates incoming Stripe webhook signatures |
| `NEXT_PUBLIC_SITE_URL` | Used for Stripe success/cancel redirects and absolute image URLs |
| `RESEND_API_KEY` | Email sending (not yet wired up) |
| `EMAIL_FROM` / `EMAIL_TO` | Email addresses for order/contact notifications |
