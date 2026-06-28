import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Target Sizing Guide',
  description: 'Pick the right target size for your distance, firearm, and skill level with the Splatter Impacts sizing guide.',
}

const SIZES = [
  { size: '3 in',   pistol: '5–10 yd',  rifle: '25 yd (rimfire)', use: 'Rimfire & precision' },
  { size: '6 in',   pistol: '10–15 yd', rifle: '100 yd',          use: 'Pistol practice, sight-in' },
  { size: '8 in',   pistol: '15–25 yd', rifle: '100–200 yd',      use: 'All-around favorite' },
  { size: '10 in',  pistol: '25 yd',    rifle: '200–300 yd',      use: 'Fast hits, long range' },
  { size: '12 in',  pistol: '25+ yd',   rifle: '300+ yd',         use: 'Long-range confidence' },
  { size: 'Silhouette', pistol: '7–25 yd', rifle: '100 yd',       use: 'Defensive & action drills' },
]

export default function SizingPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Target Sizing Guide
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[420px] mx-auto leading-relaxed">
          The right target size keeps practice challenging without being frustrating. Here is how to
          match size to your distance and firearm.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 space-y-16">
        {/* Methods */}
        <div>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-8">
            How to Choose
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Match to Distance',
                desc: 'A rough rule of thumb: about 1 inch of target for every 10 yards keeps things honest. Closer plinking? Go smaller. Long range? Go bigger so you can confirm hits.',
              },
              {
                num: '02',
                title: 'Match to Firearm',
                desc: 'Rimfire and air rifles love small reactive dots and spinners. Pistols suit 6–8 inch plates and silhouettes. Centerfire rifle is happiest on 8–12 inch steel at distance.',
              },
              {
                num: '03',
                title: 'Match to Skill',
                desc: 'New shooters build confidence on larger targets and silhouettes. As groups tighten, shrink the target or back up to keep every session a challenge.',
              },
            ].map((m) => (
              <div key={m.num} className="border-l-2 border-[#E8E5E0] pl-5">
                <p className="text-[10px] tracking-[0.3em] text-[#C8A96E] mb-2">{m.num}</p>
                <h3 className="font-[var(--font-cormorant)] text-xl font-light mb-2">{m.title}</h3>
                <p className="text-[13px] text-[#5C5A56] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Size chart */}
        <div>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-8">
            Size &amp; Distance Chart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#E8E5E0]">
                  {['Target Size', 'Pistol Distance', 'Rifle Distance', 'Best For'].map((h) => (
                    <th key={h} className="text-left text-[10px] tracking-[0.2em] uppercase text-[#9B9892] pb-3 pr-8">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIZES.map((row, i) => (
                  <tr key={row.size} className={`border-b border-[#E8E5E0] ${i % 2 === 0 ? 'bg-[#FAFAF8]' : ''}`}>
                    <td className="py-3 pr-8 font-[var(--font-cormorant)] text-base">{row.size}</td>
                    <td className="py-3 pr-8 text-[#5C5A56]">{row.pistol}</td>
                    <td className="py-3 pr-8 text-[#5C5A56]">{row.rifle}</td>
                    <td className="py-3 text-[#5C5A56]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12px] text-[#9B9892] leading-relaxed">
            Distances are general starting points — always follow your range&apos;s rules and the
            minimum safe distances for steel.
          </p>
        </div>

        {/* Tips */}
        <div className="bg-[#F5F3F0] p-8">
          <h3 className="font-[var(--font-cormorant)] text-2xl font-light mb-5">Sizing Tips</h3>
          <ul className="space-y-3">
            {[
              'When in doubt, size up — confirming hits keeps practice fun and productive.',
              'Use small reactive dots up close to sharpen precision and trigger control.',
              'For defensive drills, train on a full silhouette at realistic distances.',
              'Steel has minimum-distance requirements — never shoot it closer than rated.',
              'Mixing sizes on one stand makes for a great transition and speed drill.',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-[13px] text-[#5C5A56]">
                <span className="w-1 h-1 rounded-full bg-[#C8A96E] mt-2 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[13px] text-[#9B9892] text-center">
          Still unsure what to run? Email us at{' '}
          <a href="mailto:contact@splatterimpacts.com" className="text-[#C8A96E] hover:underline">
            contact@splatterimpacts.com
          </a>{' '}
          and we will help you dial it in.
        </p>
      </div>
    </div>
  )
}
