import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'The story of Splatter Impacts — reactive targets and AR500 steel built by shooters who got tired of walking downrange.',
}

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#000]" />
        <div className="absolute top-[20%] left-[16%] w-44 h-44 rounded-full bg-[#B6FF1B]/10 blur-3xl" />
        <div className="absolute bottom-[18%] right-[16%] w-52 h-52 rounded-full bg-[#FF7A00]/10 blur-3xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase opacity-70 mb-4">The Story</p>
          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl font-light tracking-widest uppercase">
            The Story of Splatter Impacts
          </h1>
          <span className="gold-line mt-5 mx-auto" />
        </div>
      </div>

      {/* Quote */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-[var(--font-cormorant)] text-xl md:text-2xl font-light italic text-[#5C5A56] leading-[1.8]">
            &ldquo;See every hit. Skip the walk. Make every round count.&rdquo;
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Our Beginning</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-wide leading-tight mb-8">
              Built by shooters, for shooters
            </h2>

            <div className="space-y-5 text-[14px] text-[#5C5A56] leading-[1.95]">
              <p>
                Splatter Impacts started at the range, with one shared frustration: spending half of
                every session walking downrange just to see where rounds landed. There had to be a
                better way to train.
              </p>
              <p>
                So we built around a simple idea — targets that tell you the truth instantly. Reactive
                splatter coatings that burst into bright color on contact. AR500 steel that rings loud
                and clear. Stands and hardware that take a beating and keep working.
              </p>
              <p>
                Every product we sell has to earn its place in our own range bags first. If it does not
                hold up to a hard day of shooting, it does not make the lineup.
              </p>
              <p>
                We are not here to sell flimsy paper that falls apart in the wind. We are here to help
                you shoot more, walk less, and actually see your progress.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden img-zoom-wrapper bg-[#F5F3F0]">
              <Image
                src="/images/products/splatter-bullseye.svg"
                alt="Reactive splatter target"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 px-6 md:px-10 bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden img-zoom-wrapper bg-[#15171A]">
            <Image
              src="/images/products/steel-gong.svg"
              alt="AR500 steel gong"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Our Purpose</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-wide leading-tight mb-8">
              Better feedback, better shooting
            </h2>
            <div className="space-y-5 text-[14px] text-[#5C5A56] leading-[1.95]">
              <p>
                Shooters come to Splatter Impacts to get more out of every trip to the range — the new
                shooter learning trigger control on a reactive dot, the competitor running steel on the
                clock, the family making memories plinking on a weekend.
              </p>
              <p>
                Instant feedback is what makes practice stick. When you can see exactly where a shot
                landed without leaving the line, you fix mistakes faster and build real skill.
              </p>
              <p className="font-[var(--font-cormorant)] text-lg italic text-[#0F0F0F]">
                Every round tells a story. We just make it easy to read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">What We Stand For</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase">Our Values</h2>
            <span className="gold-line mt-5 mx-auto block" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: 'Durability',
                desc: 'Genuine AR500 plate and heavyweight materials. We build targets to outlast the season, not the afternoon.',
              },
              {
                title: 'Honesty',
                desc: 'Real specs, real distances, real safety guidance. We tell you exactly what a target is rated for — no marketing fluff.',
              },
              {
                title: 'Value',
                desc: 'Quality gear at a fair price, with bulk pricing for ranges and clubs. More rounds downrange, less money spent.',
              },
            ].map((v) => (
              <div key={v.title} className="space-y-5">
                <h3 className="font-[var(--font-cormorant)] text-2xl font-light tracking-widest uppercase">
                  {v.title}
                </h3>
                <span className="gold-line mx-auto block" />
                <p className="text-[13px] text-[#5C5A56] leading-[1.9]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-10 bg-[#0F0F0F] text-white text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-4">Get to the Range</p>
        <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase mb-6">
          Gear Up
        </h2>
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
        >
          Shop the Lineup
        </Link>
      </section>
    </div>
  )
}
