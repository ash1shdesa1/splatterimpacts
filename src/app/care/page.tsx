import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Range & Care Guide',
  description: 'How to set up, shoot, and care for your Splatter Impacts targets safely — steel, paper, splatter, and stands.',
}

export default function CarePage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">Range Guide</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Range &amp; Care Guide
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[440px] mx-auto leading-relaxed">
          Set up safely, shoot smart, and your steel will last for years. Always follow your range
          rules and the four firearm safety rules first.
        </p>
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-14">
        {[
          {
            title: 'Safety First',
            items: [
              {
                q: 'Mind your minimum distances',
                a: 'Shoot steel at the manufacturer-recommended minimum distances: generally 10+ yards for pistol and 100+ yards for rifle. Closer distances and certain high-velocity loads increase splatter-back and ricochet risk.',
              },
              {
                q: 'Wear eye and ear protection',
                a: 'Always wear impact-rated eye protection and hearing protection. Fragments and jacket material can come back toward the firing line, especially with steel.',
              },
              {
                q: 'Hang steel correctly',
                a: 'Steel should hang freely at a slight downward angle so impacts deflect toward the ground. Never shoot steel that is bolted flat, pitted, cratered, or has a damaged face.',
              },
            ],
          },
          {
            title: 'Steel Target Care',
            items: [
              {
                q: 'Use the right caliber',
                a: 'Our AR500 plate is rated for standard velocity pistol and rifle. Avoid armor-piercing, steel-core, and green-tip ammunition — these damage the face and shorten target life dramatically.',
              },
              {
                q: 'Retire pitted plates',
                a: 'Hardened steel will eventually show shallow dimples — that is normal. Stop using any plate that develops sharp craters or edges, as a cratered face can deflect fragments unpredictably.',
              },
              {
                q: 'Store it dry',
                a: 'Wipe steel down and store it out of standing water. Surface rust is cosmetic and does not affect performance — knock it off with a wire brush if you like.',
              },
            ],
          },
          {
            title: 'Paper & Splatter Targets',
            items: [
              {
                q: 'Back them properly',
                a: 'Staple paper and splatter targets flat to a backer (cardboard or corrugated) on a stand. A flat, fully supported target tears less and shows cleaner hits.',
              },
              {
                q: 'Re-use with pasters',
                a: 'Cover hits with target pasters to keep a single target in service through a long session — handy for drills and load development.',
              },
              {
                q: 'Keep them dry',
                a: 'Store paper and splatter packs flat in a dry place. Damp paper warps and the reactive coating performs best when the sheet lies flat.',
              },
            ],
          },
          {
            title: 'Stands & Hardware',
            items: [
              {
                q: 'Check your hardware',
                a: 'Inspect chains, hooks, and bolts before each session. Replace anything that is badly worn — a dropped plate is a hassle and a hazard.',
              },
              {
                q: 'Furring strips are consumable',
                a: 'The 1x2 strips that hold paper backers will get shot up over time. Keep spares on hand and swap them when they weaken.',
              },
              {
                q: 'Stake reactive targets',
                a: 'Spinners and auto-reset targets work best staked firmly into the ground or set on level, solid footing so they reset cleanly.',
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
            Questions about a specific target or setup?{' '}
            <Link href="/contact" className="text-[#C8A96E] hover:underline">
              Get in touch
            </Link>{' '}
            and we&apos;ll point you the right way.
          </p>
        </div>
      </div>
    </div>
  )
}
