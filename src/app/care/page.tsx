import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jewelry Care',
  description: 'How to care for your Splatter Impacts fine jewelry so it lasts a lifetime.',
}

export default function CarePage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">Care Guide</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Caring for Your Jewelry
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[440px] mx-auto leading-relaxed">
          The pieces that last lifetimes are the ones that are loved and cared for.
          A little attention goes a long way.
        </p>
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-14">
        {[
          {
            title: 'Daily Wear',
            items: [
              {
                q: 'Put jewelry on last',
                a: 'Apply perfume, lotion, hairspray, and makeup before putting on your jewelry. Chemicals in these products can dull metals and damage gemstones over time.',
              },
              {
                q: 'Remove before water',
                a: 'Take off your jewelry before showering, swimming, or washing dishes. Prolonged exposure to water — especially chlorinated or salt water — can affect the finish and loosen settings.',
              },
              {
                q: 'Remove during physical activity',
                a: 'Remove pieces before exercise, gardening, or any activity where your jewelry might be knocked against hard surfaces. Impact can loosen prongs and scratch metals.',
              },
            ],
          },
          {
            title: 'Cleaning',
            items: [
              {
                q: 'Gold jewelry',
                a: 'Soak in warm water with a few drops of mild dish soap for 10–15 minutes. Gently scrub with a soft-bristle toothbrush. Rinse thoroughly and pat dry with a lint-free cloth. Avoid ultrasonic cleaners for pieces with fragile or porous stones.',
              },
              {
                q: 'Sterling silver',
                a: 'Polish with a silver polishing cloth to remove tarnish. For deeper cleaning, use warm soapy water and a soft brush, then dry immediately and thoroughly. Tarnish is natural — it can always be polished away.',
              },
              {
                q: 'Gemstones',
                a: 'Most gemstones can be gently cleaned with warm water and mild soap. Avoid steam cleaners and ultrasonic cleaners for softer stones (opal, pearl, turquoise, emerald). When in doubt, a soft damp cloth is always safe.',
              },
              {
                q: 'Diamonds',
                a: 'Diamonds attract oils and grease, which can cloud their brilliance. Clean regularly with warm soapy water and a soft toothbrush. A brief soak helps loosen buildup around the setting.',
              },
            ],
          },
          {
            title: 'Storage',
            items: [
              {
                q: 'Store pieces separately',
                a: 'Jewelry should be stored individually to prevent scratching. Use the pouch or box your Splatter Impacts piece arrived in, or a fabric-lined jewelry box with separate compartments.',
              },
              {
                q: 'Keep away from sunlight and heat',
                a: 'Direct sunlight and heat can fade certain gemstones and affect the finish of metals. Store in a cool, dry place away from windows.',
              },
              {
                q: 'Anti-tarnish strips',
                a: 'For sterling silver, placing an anti-tarnish strip in your storage drawer or box will slow oxidation significantly.',
              },
            ],
          },
          {
            title: 'What to Avoid',
            items: [
              {
                q: 'Harsh chemicals',
                a: 'Keep jewelry away from bleach, chlorine, acetone (nail polish remover), and household cleaning products. These can permanently damage metals and dissolve certain gemstone treatments.',
              },
              {
                q: 'Abrasives',
                a: 'Never use toothpaste, baking soda paste, or abrasive cloths to clean jewelry. These scratch metal surfaces and can damage softer stones.',
              },
              {
                q: 'Sleeping in jewelry',
                a: 'Sleeping in fine jewelry — especially chains and earrings — puts unnecessary stress on clasps, settings, and links. We recommend removing pieces before bed.',
              },
            ],
          },
          {
            title: 'Professional Care',
            items: [
              {
                q: 'Annual check-ups',
                a: 'We recommend having your fine jewelry professionally inspected once a year. A jeweler can check for loose prongs, worn clasps, and subtle damage before a stone is lost.',
              },
              {
                q: 'Replating',
                a: 'White gold pieces are rhodium-plated to enhance their bright, white appearance. With regular wear, this plating gradually wears away — a normal process. Replating every 1–2 years restores the original look.',
              },
              {
                q: 'Repairs',
                a: 'If a clasp breaks, a stone comes loose, or a prong bends, stop wearing the piece immediately and bring it to a qualified jeweler. Most repairs are straightforward when caught early.',
              },
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-8">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map(({ q, a }) => (
                <div key={q} className="border-l-2 border-[#C8A96E] pl-5">
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#0F0F0F] mb-1">{q}</h3>
                  <p className="text-[13px] text-[#5C5A56] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-[#E8E5E0] pt-10">
          <p className="text-[13px] text-[#9B9892]">
            Questions about a specific piece?{' '}
            <Link href="/contact" className="text-[#C8A96E] hover:underline">
              Get in touch
            </Link>{' '}
            and we'll advise you directly.
          </p>
        </div>
      </div>
    </div>
  )
}
