# VERO — Decision Log

Key architectural and product decisions, in reverse-chronological order.

---

## 2026-06-20 — All product images migrated from Stuller to curated Unsplash

**Decision:** Replaced every product image (and the homepage category tiles) with hand-picked Unsplash photography. Removed Stuller from the catalog, CSP, and `remotePatterns` entirely.

**Why:** A visual audit (downloading and actually *viewing* all 30 unique Stuller images) revealed the earlier "verified 200 OK" check only confirmed the URLs loaded — not that the pictures matched. ~10 were merchandising display boards (birthstone charts, CTW sample trays, "DIAMOND HOOPS" boards) and ~12 were the wrong stone colour, shape, or product type (e.g. a "Sapphire Halo Ring" showing pink morganite, an "Emerald Solitaire" showing a 5-stone mother's ring, a "Leaf Bracelet" that was actually two rings). Unusable on a live storefront.

**Approach:** Gathered candidate Unsplash IDs via search, downloaded and visually verified each one against its product's title/description (stone colour, type), and mapped only confirmed matches. Colour-specific searches were used to source real sapphire/emerald/ruby/anklet photography.

**Constraints that shaped this:** Stuller's catalog is JavaScript-rendered and can't be scraped for new product-image IDs, and this environment has no image-generation capability — so "real product photo per SKU" and "custom-generated images" were both off the table. Curated stock that matches by stone/colour/type was chosen as the best achievable option.

**Trade-off:** Images are real, attractive, and category/colour-accurate, but are editorial stock rather than the exact SKU. A few products share an image, and hoop earrings use an elegant non-hoop earring shot (no suitable hoop in the free-stock pool).

---

## 2026-06-20 — About page images kept on Unsplash

**Decision:** The About page (`/about`) uses three Unsplash editorial images for the hero and story sections. These are *not* product images — they're atmospheric/brand photography. Kept on Unsplash rather than migrating to Stuller CDN (which only carries jewelry product shots).

**Why:** Stuller CDN has no suitable lifestyle/brand imagery. Unsplash is appropriate here since the About page is purely editorial and not business-critical to the purchase flow.

**Trade-off:** Adds a dependency on an external CDN for one page. If Unsplash changes their URL structure, About page breaks. Acceptable risk for now.

**Status:** Unsplash re-added to `remotePatterns` and CSP `img-src` in `next.config.ts` after being accidentally removed in the Stuller migration.

---

## 2026-06-20 — Bare domain redirects to www

**Decision:** `the-vero.com` permanently redirects (301) to `www.the-vero.com` via Netlify redirect rule.

**Why:** Canonical URL consistency for SEO and branding. HSTS preload also works better with a single canonical origin.

---

## 2026-06-20 — All product images migrated to Stuller CDN

**Decision:** Replaced all 35 product images with verified Stuller CDN URLs (`meteor.stullercloud.com/das/[ID]?fmt=png&wid=900`). Removed Unsplash from `remotePatterns` and `img-src` for product images.

**Why:** Unsplash images are stock photography not of actual VERO products. Stuller CDN provides real jewelry product photography. All IDs were individually verified (HTTP 200) before commit.

**Approach:** Introduced a `CDN(id)` helper in `products.ts` to keep URL construction DRY.

---

## 2026-06-19 — Stripe Checkout (hosted) over custom payment form

**Decision:** Payment is handled by Stripe's hosted Checkout page, not a custom form embedded in the site.

**Why:** PCI compliance, zero card data touching our servers, built-in 3DS/SCA handling, Apple Pay/Google Pay support for free, promo code support. Trade-off is less visual control over the payment step — but for a luxury brand, Stripe's clean hosted UI is acceptable.

**Implementation:** `POST /api/checkout` validates items server-side against the product catalog (prevents price manipulation), then creates a Stripe Checkout session and returns the hosted URL.

---

## 2026-06-19 — Server-side price validation

**Decision:** The checkout API (`/api/checkout/route.ts`) never trusts client-supplied prices. It looks up each `productId` in the server-side `PRODUCTS` catalog and uses that price to build the Stripe line items.

**Why:** Prevents trivial price manipulation attacks (e.g. `{"productId": "ring", "price": 1}`).

---

## 2026-06-19 — Zustand + persist for cart state

**Decision:** Cart state lives in Zustand with the `persist` middleware, stored in `localStorage` under the key `vero-cart`. Only `items` is persisted (not `isOpen` or computed values).

**Why:** Simple, no backend required for cart. Survives page refreshes and tab closes. No server-side session management needed for a catalog of this size.

**Known issue:** `total` and `count` are defined as JS getters in the store factory but Zustand's `persist` strips them on hydration — they return `undefined` after a page reload. All components work around this by recalculating inline. The getters are dead code and should be removed or replaced with selectors.

---

## 2026-06-19 — Netlify over Vercel for deployment

**Decision:** Deploying to Netlify rather than Vercel.

**Why:** User preference / existing account. `@netlify/plugin-nextjs` handles Next.js App Router support including API routes and middleware.

---

## 2026-06-19 — Stuller as product image source

**Decision:** Use Stuller's public CDN for all product photography instead of original product photos or stock photography.

**Why:** Real jewelry product photography is expensive to produce. Stuller is a major jewelry supplier whose CDN hosts high-quality professional product shots matching the types of pieces VERO sells. Images are used for design/presentation purposes.

---

## 2026-06-19 — No database / no backend persistence (yet)

**Decision:** The site has no database. Products are hardcoded in `src/data/products.ts`. Orders are processed via Stripe but not stored anywhere by the application.

**Why:** Fast to build and ship. For the initial launch, Stripe's dashboard serves as the order record. The webhook handler is stubbed out for future fulfillment logic.

**When to revisit:** Once order volume or operational needs require it — e.g. inventory management, order history, customer accounts, email automation tied to order state.

---

## Open Questions / Deferred Decisions

- **Cart clear after payment** — Should the success page read the Stripe session and clear the cart client-side? Or should we wire up the webhook + some server-push mechanism? Leaning toward: success page reads `session_id` from the query param, calls Stripe to verify payment, then calls `clearCart()`.
- **Checkout page vs. direct-to-Stripe** — The `/checkout` review page is redundant friction. Options: (a) remove it and send users directly from cart drawer to Stripe, or (b) replace it with a pre-checkout form that captures email/shipping before Stripe. Decision pending.
- **Size/variant selection** — No ring size or bracelet length picker exists. For a real sales flow, this is a blocker for rings. Needs to be added before launch.
- **Email on order** — `RESEND_API_KEY` is in `.env.example` but Resend is not wired up anywhere. Order confirmation emails don't send.
- **Analytics** — `NEXT_PUBLIC_GA_MEASUREMENT_ID` slot exists in `.env.example` but GA is not connected.
