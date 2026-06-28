import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'

const SIGNATURE_PRODUCTS = PRODUCTS.filter((p) =>
  p.categories.includes('fine-jewelry')
).slice(0, 4)

const MARQUEE_WORDS = [
  'Crafted with intention',
  '·',
  'Worn with purpose',
  '·',
  'Made to be remembered',
  '·',
  'Handcrafted fine jewelry',
  '·',
  'Every jewel, a chapter',
  '·',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/*
          PLACEHOLDER: Replace with your hero photography.
          Recommended: 2400×1600px editorial jewelry shot.
        */}
        <Image
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2400&q=90"
          alt="Splatter Impacts Fine Jewelry — The Signature Collection"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/65" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 opacity-75">New Collection</p>
          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light tracking-widest uppercase leading-none mb-5">
            The Signature
            <br />
            <em className="not-italic italic font-light">Collection</em>
          </h1>
          <span className="gold-line mb-6 mx-auto" />
          <p className="text-[13px] md:text-[15px] tracking-[0.1em] max-w-[380px] opacity-80 leading-relaxed mb-10">
            Pieces born from belief. Crafted to accompany your most meaningful moments.
          </p>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
          >
            Shop Now
            <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-300 inline-block" />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-white/30 overflow-hidden">
          <div
            className="w-full bg-white/70"
            style={{
              height: '40%',
              animation: 'scrollDown 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-[#E8E5E0] py-4 bg-[#FAF8F5]">
        <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span key={i} className="text-[11px] tracking-[0.25em] uppercase text-[#9B9892] flex-shrink-0">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden img-zoom-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=90"
                alt="Splatter Impacts craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden img-zoom-wrapper mt-10">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=90"
                alt="Splatter Impacts diamond ring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          <div className="max-w-[480px]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Our Philosophy</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
              Jewelry born from belief.
              <br />
              <em className="not-italic italic">Beauty shaped by purpose.</em>
            </h2>
            <span className="gold-line mb-6 block" />
            <p className="text-[14px] text-[#5C5A56] leading-[1.9] mb-4">
              Splatter Impacts was born from a simple belief: that jewelry should be more than an accessory.
              It should be a reflection of a person's story — a piece that captures moments and
              transforms them into timeless treasures.
            </p>
            <p className="text-[14px] text-[#5C5A56] leading-[1.9] mb-8">
              Each piece is handcrafted with precision, a dance between gold, diamonds, and
              a designer's intuition. We make jewelry meant to accompany moments — a quiet morning,
              an evening of celebration, a lifetime of memories.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#0F0F0F] border-b border-[#C8A96E] pb-0.5 hover:text-[#C8A96E] transition-colors"
            >
              Our Story
              <span className="w-4 h-px bg-current inline-block" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ────────────────────────────────────── */}
      <section className="py-8 px-6 md:px-10 bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Rings', href: '/shop?category=rings', img: 'https://images.unsplash.com/photo-1677045419454-e8b201856472?auto=format&fit=crop&w=600&q=80' },
              { label: 'Necklaces', href: '/shop?category=necklaces', img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=600&q=80' },
              { label: 'Earrings', href: '/shop?category=earrings', img: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=600&q=80' },
              { label: 'Bracelets', href: '/shop?category=bracelets', img: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=600&q=80' },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative aspect-square overflow-hidden">
                <Image src={cat.img} alt={cat.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <p className="text-white font-[var(--font-cormorant)] text-xl font-light tracking-widest uppercase">{cat.label}</p>
                    <div className="w-0 h-px bg-[#C8A96E] group-hover:w-8 transition-all duration-300 mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE PIECES ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">The Collection</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-wide">Signature Pieces</h2>
            <span className="gold-line mt-5 mx-auto block" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {SIGNATURE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase border border-[#0F0F0F] px-10 py-4 hover:bg-[#0F0F0F] hover:text-white transition-all duration-300"
            >
              View All Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMISSION STATEMENT ─────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?auto=format&fit=crop&w=2000&q=90"
          alt="Splatter Impacts — Commission your story"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase opacity-70 mb-4">Bespoke Service</p>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-widest uppercase mb-4">Commission Your Story</h2>
          <p className="text-[13px] max-w-[400px] opacity-70 leading-relaxed mb-8 tracking-wide">
            Work directly with our designer to create a one-of-a-kind piece that becomes part of your legacy.
          </p>
          <Link
            href="/shop/custom-jewelry-order"
            className="border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
          >
            Begin Your Commission
          </Link>
        </div>
      </section>

      {/* ── BRAND VALUES ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: <DiamondIcon />,
              title: 'Genuine Stones',
              desc: 'Every piece features certified natural gemstones — never synthetic. The authenticity of our materials reflects the authenticity of your story.',
            },
            {
              icon: <CraftIcon />,
              title: 'Crafted to Last',
              desc: 'Our jewelry is built to be passed down. Each setting is hand-finished by skilled artisans with decades of experience.',
            },
            {
              icon: <ReturnIcon />,
              title: 'Complimentary Returns',
              desc: 'Shop with confidence. If a piece is not right, we make returns effortless — free shipping both ways within 30 days.',
            },
          ].map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-5">
              <div className="text-[#C8A96E]">{v.icon}</div>
              <h3 className="font-[var(--font-cormorant)] text-xl font-light tracking-widest uppercase">{v.title}</h3>
              <span className="gold-line" />
              <p className="text-[13px] text-[#5C5A56] leading-[1.9] max-w-[280px]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSTAGRAM ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-2">Follow the Journey</p>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-2">
            @kingofstudsandsolitaire
          </h2>
          <a
            href="https://www.instagram.com/kingofstudsandsolitaire/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase text-[#9B9892] hover:text-[#C8A96E] transition-colors"
          >
            View on Instagram →
          </a>
          {/* PLACEHOLDER: Connect Instagram Basic Display API for live feed */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-10">
            {[
              'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1633810517002-e8dc8a50ed1f?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
            ].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/kingofstudsandsolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Splatter Impacts on Instagram"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <path d="M16 4l3.5 7 7.5 1-5.5 5.5 1.5 7.5L16 22l-7 3.5 1.5-7.5L5 12.5l7.5-1L16 4z" />
    </svg>
  )
}

function CraftIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <circle cx="16" cy="16" r="12" />
      <path d="M12 20l-3-3 8-8 3 3-8 8z" />
      <path d="M17 9l3 3" />
    </svg>
  )
}

function ReturnIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <path d="M6 16a10 10 0 1010-10H8" />
      <path d="M8 6l-4 4 4 4" />
    </svg>
  )
}
