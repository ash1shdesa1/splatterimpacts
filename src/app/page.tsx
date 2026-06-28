import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'

const SIGNATURE_PRODUCTS = PRODUCTS.filter((p) =>
  p.categories.includes('splatter-targets')
).slice(0, 4)

const MARQUEE_WORDS = [
  'See every hit',
  '·',
  'No spotting scope',
  '·',
  'AR500 steel',
  '·',
  'Reactive splatter targets',
  '·',
  'Built for the range',
  '·',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0F0F0F] to-[#000]" />
        {/* Decorative splatter accents */}
        <div className="absolute top-[18%] left-[12%] w-40 h-40 rounded-full bg-[#B6FF1B]/10 blur-3xl" />
        <div className="absolute bottom-[22%] right-[14%] w-52 h-52 rounded-full bg-[#FF7A00]/10 blur-3xl" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 opacity-75">Reactive Shooting Targets</p>
          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light tracking-widest uppercase leading-none mb-5">
            See Every
            <br />
            <em className="not-italic italic font-light">Impact</em>
          </h1>
          <span className="gold-line mb-6 mx-auto" />
          <p className="text-[13px] md:text-[15px] tracking-[0.1em] max-w-[420px] opacity-80 leading-relaxed mb-10">
            Splatter targets that burst on contact and AR500 steel that rings true. Call your shots
            without ever leaving the bench.
          </p>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
          >
            Shop Targets
            <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-300 inline-block" />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-white/30 overflow-hidden">
          <div
            className="w-full bg-white/70"
            style={{ height: '40%', animation: 'scrollDown 2s ease-in-out infinite' }}
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
            <div className="relative aspect-[3/4] overflow-hidden img-zoom-wrapper bg-[#F5F3F0]">
              <Image src="/images/products/splatter-bullseye.svg" alt="Reactive splatter bullseye" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden img-zoom-wrapper mt-10 bg-[#15171A]">
              <Image src="/images/products/steel-gong.svg" alt="AR500 steel gong" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>

          <div className="max-w-[480px]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Why Splatter Impacts</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
              Instant feedback.
              <br />
              <em className="not-italic italic">Every single round.</em>
            </h2>
            <span className="gold-line mb-6 block" />
            <p className="text-[14px] text-[#5C5A56] leading-[1.9] mb-4">
              Splatter Impacts started with one frustration: walking downrange between strings just to
              find out where your shots landed. Our reactive targets burst into bright color on contact,
              so you can read your group from the bench and stay focused on shooting.
            </p>
            <p className="text-[14px] text-[#5C5A56] leading-[1.9] mb-8">
              From rimfire plinking to long-range steel, every product is built to take a beating and
              keep performing — heavyweight paper, true AR500 plate, and hardware that holds up in the
              weather.
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
              { label: 'Splatter', href: '/shop?category=splatter-targets', img: '/images/products/splatter-bullseye.svg' },
              { label: 'Steel', href: '/shop?category=steel-targets', img: '/images/products/steel-gong.svg' },
              { label: 'Reactive', href: '/shop?category=reactive-targets', img: '/images/products/reactive-spinner.svg' },
              { label: 'Stands', href: '/shop?category=target-stands', img: '/images/products/target-stand.svg' },
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

      {/* ── BEST SELLERS ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">The Lineup</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-wide">Best Sellers</h2>
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
              View All Targets
            </Link>
          </div>
        </div>
      </section>

      {/* ── BULK / RANGE STATEMENT ───────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#000]" />
        <div className="absolute top-[20%] right-[18%] w-44 h-44 rounded-full bg-[#B6FF1B]/10 blur-3xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase opacity-70 mb-4">Ranges, Clubs & Teams</p>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-widest uppercase mb-4">Outfit Your Range</h2>
          <p className="text-[13px] max-w-[420px] opacity-70 leading-relaxed mb-8 tracking-wide">
            Bulk pricing on splatter packs, steel, and stands for ranges, clubs, and matches. Tell us
            what you run and we will build a kit.
          </p>
          <Link
            href="/contact"
            className="border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
          >
            Request Bulk Pricing
          </Link>
        </div>
      </section>

      {/* ── BRAND VALUES ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: <BurstIcon />,
              title: 'See Every Hit',
              desc: 'Reactive coatings burst into bright color on impact, so you can call your shots from the bench — no spotting scope, no walking downrange.',
            },
            {
              icon: <SteelIcon />,
              title: 'AR500 Tough',
              desc: 'Our steel is genuine through-hardened AR500 plate, laser-cut and deburred to take thousands of rounds and keep on ringing.',
            },
            {
              icon: <ShipIcon />,
              title: 'Fast, Flat-Rate Shipping',
              desc: 'Targets ship quick and ship cheap. Stock up on splatter packs and steel and get back to the range sooner.',
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
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-2">Follow the Range</p>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-2">
            @splatterimpacts
          </h2>
          <a
            href="https://www.instagram.com/splatterimpacts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase text-[#9B9892] hover:text-[#C8A96E] transition-colors"
          >
            View on Instagram →
          </a>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-10">
            {[
              '/images/products/splatter-bullseye.svg',
              '/images/products/steel-gong.svg',
              '/images/products/reactive-spinner.svg',
              '/images/products/sight-in-grid.svg',
              '/images/products/steel-popper.svg',
              '/images/products/rimfire-dots.svg',
            ].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/splatterimpacts/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#F5F3F0]"
              >
                <Image
                  src={src}
                  alt="Splatter Impacts targets"
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

function BurstIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <circle cx="16" cy="16" r="5" />
      <path d="M16 1v6M16 25v6M1 16h6M25 16h6M5 5l4 4M23 23l4 4M27 5l-4 4M9 23l-4 4" />
    </svg>
  )
}

function SteelIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <circle cx="16" cy="18" r="11" />
      <circle cx="16" cy="18" r="3" />
      <path d="M16 7V3M12 4h8" />
    </svg>
  )
}

function ShipIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" width="36" height="36">
      <path d="M2 10h14v12H2zM16 14h7l5 4v4h-12z" />
      <circle cx="9" cy="24" r="2.5" />
      <circle cx="23" cy="24" r="2.5" />
    </svg>
  )
}
