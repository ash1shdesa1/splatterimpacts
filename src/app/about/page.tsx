import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'The story of Splatter Impacts — jewelry born from belief, beauty shaped by purpose, pieces made to be lived in.',
}

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2000&q=90"
          alt="The story of Splatter Impacts"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] tracking-[0.35em] uppercase opacity-70 mb-4">The Story</p>
          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl font-light tracking-widest uppercase">
            The Story of Splatter Impacts
          </h1>
          <span className="gold-line mt-5 mx-auto" />
        </div>
      </div>

      {/* Origin */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-[var(--font-cormorant)] text-xl md:text-2xl font-light italic text-[#5C5A56] leading-[1.8]">
            &ldquo;Jewelry born from belief. Beauty shaped by purpose. Pieces made to be lived in.&rdquo;
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Text */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Our Beginning</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-wide leading-tight mb-8">
              A dreamer with an eye for design
            </h2>

            <div className="space-y-5 text-[14px] text-[#5C5A56] leading-[1.95]">
              <p>
                Splatter Impacts was born from a simple belief: that jewelry should be more than an accessory.
                It should be a reflection of a person's story — a piece that captures moments and
                transforms them into timeless treasures.
              </p>
              <p>
                The founder is a dreamer with an eye for design. She drew upon her heritage and
                countless sketches to create pieces that blended modern lines with classic grace —
                rings that felt like poetry, necklaces that promised remembrance, earrings that
                framed a smile.
              </p>
              <p>
                Each piece is handcrafted with precision, a dance between gold, diamonds, and a
                designer's intuition. At Splatter Impacts, we work quietly, patiently, ensuring every jewel
                leaves the workshop imbued with emotion and craftsmanship.
              </p>
              <p>
                We are not making jewelry for display cases. We are making pieces meant to accompany
                moments — a quiet morning, an evening of celebration, a lifetime of memories.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden img-zoom-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?auto=format&fit=crop&w=800&q=90"
                alt="Splatter Impacts design process"
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
          <div className="relative aspect-[4/5] overflow-hidden img-zoom-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=90"
              alt="Splatter Impacts diamond jewelry"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-5">Our Purpose</p>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-wide leading-tight mb-8">
              Finding yourself in a piece of jewelry
            </h2>
            <div className="space-y-5 text-[14px] text-[#5C5A56] leading-[1.95]">
              <p>
                People come to Splatter Impacts to find more than jewelry; they come to find themselves. A woman
                searching for a gift for her daughter, a man seeking the perfect symbol of a promise,
                a couple choosing rings that would define their union — every piece becomes part of a
                larger story.
              </p>
              <p>
                Today, Splatter Impacts shines not just for its beauty, but for its belief that true elegance is
                timeless, quiet, and deeply personal. It is a brand for those who value craftsmanship,
                who seek beauty with a purpose, and who understand that the best designs are those that
                connect hearts across moments and generations.
              </p>
              <p className="font-[var(--font-cormorant)] text-lg italic text-[#0F0F0F]">
                At Splatter Impacts, every jewel is a chapter. And every chapter is an invitation to tell your story.
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
                title: 'Authenticity',
                desc: 'Every stone is natural, every metal is genuine. We never compromise on the integrity of our materials, because we never compromise on the integrity of your story.',
              },
              {
                title: 'Craftsmanship',
                desc: 'Each piece is hand-finished by artisans who understand that jewelry at its finest is a form of art — patient, precise, and profound.',
              },
              {
                title: 'Legacy',
                desc: 'We design for the long arc of a life. Every Splatter Impacts piece is made to be passed down, cherished across generations, and grow more meaningful with time.',
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
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-4">Begin Your Story</p>
        <h2 className="font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase mb-6">
          Find Your Chapter
        </h2>
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  )
}
