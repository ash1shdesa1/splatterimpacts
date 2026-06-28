import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ring Sizing Guide',
  description: 'Find your perfect ring size with the VERO sizing guide.',
}

const SIZES = [
  { us: '4',    mm: '14.8', inch: '1.85' },
  { us: '4.5',  mm: '15.3', inch: '1.91' },
  { us: '5',    mm: '15.7', inch: '1.96' },
  { us: '5.5',  mm: '16.1', inch: '2.00' },
  { us: '6',    mm: '16.5', inch: '2.04' },
  { us: '6.5',  mm: '16.9', inch: '2.10' },
  { us: '7',    mm: '17.3', inch: '2.14' },
  { us: '7.5',  mm: '17.7', inch: '2.19' },
  { us: '8',    mm: '18.2', inch: '2.24' },
  { us: '8.5',  mm: '18.6', inch: '2.30' },
  { us: '9',    mm: '19.0', inch: '2.34' },
  { us: '9.5',  mm: '19.4', inch: '2.38' },
  { us: '10',   mm: '19.8', inch: '2.44' },
]

export default function SizingPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Ring Sizing Guide
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[420px] mx-auto leading-relaxed">
          Finding the perfect fit ensures your piece feels as beautiful as it looks.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 space-y-16">
        {/* Methods */}
        <div>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-8">
            How to Measure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'String Method',
                desc: 'Wrap a thin strip of paper or string around the base of your finger. Mark where the ends meet, then measure the length in millimeters against a ruler.',
              },
              {
                num: '02',
                title: 'Existing Ring',
                desc: 'Place a ring that fits well on a ruler and measure the inner diameter in millimeters. Match it to the chart below.',
              },
              {
                num: '03',
                title: 'Ring Sizer Tool',
                desc: 'Visit a local jeweler for the most accurate measurement using a professional ring sizer. Most jewelers offer this service free of charge.',
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
            Size Chart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#E8E5E0]">
                  {['US Size', 'Diameter (mm)', 'Circumference (inches)'].map((h) => (
                    <th key={h} className="text-left text-[10px] tracking-[0.2em] uppercase text-[#9B9892] pb-3 pr-8">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIZES.map((row, i) => (
                  <tr key={row.us} className={`border-b border-[#E8E5E0] ${i % 2 === 0 ? 'bg-[#FAFAF8]' : ''}`}>
                    <td className="py-3 pr-8 font-[var(--font-cormorant)] text-base">{row.us}</td>
                    <td className="py-3 pr-8 text-[#5C5A56]">{row.mm} mm</td>
                    <td className="py-3 text-[#5C5A56]">{row.inch}&rdquo;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-[#F5F3F0] p-8">
          <h3 className="font-[var(--font-cormorant)] text-2xl font-light mb-5">Tips for Accurate Sizing</h3>
          <ul className="space-y-3">
            {[
              'Measure your finger at the end of the day when fingers are at their largest.',
              'Avoid measuring when you are cold — fingers are smaller in cold temperatures.',
              'For wider bands, consider going up half a size.',
              'If you are between sizes, we recommend sizing up for comfort.',
              'Complimentary sizing is available for all VERO rings within 30 days.',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-[13px] text-[#5C5A56]">
                <span className="w-1 h-1 rounded-full bg-[#C8A96E] mt-2 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[13px] text-[#9B9892] text-center">
          Still unsure? Email us at{' '}
          <a href="mailto:contact@the-vero.com" className="text-[#C8A96E] hover:underline">
            contact@the-vero.com
          </a>{' '}
          and we will help you find the perfect fit.
        </p>
      </div>
    </div>
  )
}
