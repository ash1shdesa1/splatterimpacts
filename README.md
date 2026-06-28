# Splatter Impacts — Fine Jewelry E-Commerce

Luxury jewelry storefront for **splatterimpacts.com**. Built with Next.js 16 + React 19, Stripe Checkout, Zustand cart, and Tailwind CSS. Deployed on Netlify.

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
| Styling | Tailwind CSS, Cormorant Garamond + Inter fonts |
| Cart state | Zustand + `persist` (localStorage) |
| Payments | Stripe Checkout (hosted, server-side session creation) |
| Images | Stuller CDN (`meteor.stullercloud.com`) for products; Unsplash for editorial (About page) |
| Deployment | Netlify + `@netlify/plugin-nextjs` |
| Security | CSP headers, bcrypt-style rate limiting, server-side price validation |

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
    journal/              # Editorial/blog placeholder
    sizing/               # Ring sizing guide
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
    products.ts           # Full product catalog (35 SKUs, all Stuller CDN images)
  lib/
    stripe.ts             # Stripe client (API version 2026-05-27.dahlia)
    types.ts              # Shared TypeScript types
  store/
    cart.ts               # Zustand cart store
  middleware.ts
```

---

## Pages & Features

### Working
- **Homepage** — hero, featured products, brand callouts
- **Shop** — filterable grid by category (rings, necklaces, earrings, bracelets, nose-rings, fine-jewelry, everyday-wear, custom-orders)
- **Product detail** — images, description, details list, Add to Cart
- **Cart drawer** — slide-in, quantity controls, remove, Escape key, body scroll lock, persists across page loads
- **Checkout review** — order summary + totals before handing off to Stripe
- **Stripe Checkout** — hosted by Stripe, collects shipping address + card, supports promo codes
- **Success page** — post-payment confirmation screen
- **About** — brand story, three editorial images (Unsplash)
- **Contact** — form with API route
- **Shipping & Returns, Sizing, Journal, Stockists** — static pages

### Known Issues / TODOs
- **Cart doesn't clear after payment** — webhook handler (`api/webhooks/route.ts`) is a stub. After a successful Stripe payment, the cart still shows the purchased items. Need to either: (a) read the Stripe session on the success page and call `clearCart()`, or (b) implement the webhook to trigger cart clear via some mechanism.
- **Redundant checkout step** — `/checkout` re-shows what's already in the cart drawer before redirecting to Stripe. Could be cut entirely (Cart Drawer → Stripe directly) or replaced with a real pre-checkout form.
- **Shipping calc mismatch** — `/checkout` page shows "Complimentary" for carts over $200, but the Stripe session always presents both free + $25 express as options regardless of total.
- **Broken `total`/`count` getters in cart store** — `store/cart.ts` defines `total` and `count` as JS getters but Zustand's `persist` middleware strips them on hydration. All components work around this by recalculating inline. The getters in the store are dead code.
- **No size/variant selection** — no ring size or bracelet length picker anywhere in the add-to-cart flow.
- **Webhook fulfillment is a stub** — `checkout.session.completed` logs the session ID but does nothing else (no email, no inventory update, no order record).

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
4. Connect domain `splatterimpacts.com` in Netlify → Domain Management
5. Add DNS records in Squarespace (account.squarespace.com/domains/managed/splatterimpacts.com/dns/dns-settings):
   ```
   A     @    75.2.60.5
   CNAME www  [your-site].netlify.app
   ```
6. Create Stripe webhook → `https://www.splatterimpacts.com/api/webhooks`, event: `checkout.session.completed`
7. Uncomment (already done) bare-domain → www redirect in `netlify.toml`

---

## Product Catalog

35 SKUs across 6 categories. All product images use verified Stuller CDN IDs (`meteor.stullercloud.com/das/[ID]?fmt=png&wid=900`). Prices range from $549 to $5,999. All marked `inStock: true`. Server-side price validation in the checkout API prevents client-side price manipulation.

Categories: `rings` · `necklaces` · `earrings` · `bracelets` · `nose-rings` · `fine-jewelry` · `everyday-wear` · `custom-orders`

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Stripe server-side key (create session, validate webhooks) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe client-side key |
| `STRIPE_WEBHOOK_SECRET` | Validates incoming Stripe webhook signatures |
| `NEXT_PUBLIC_SITE_URL` | Used for Stripe success/cancel redirect URLs |
| `RESEND_API_KEY` | Email sending (not yet wired up) |
| `EMAIL_FROM` / `EMAIL_TO` | Email addresses for order/contact notifications |
