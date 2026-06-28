import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about Splatter Impacts targets — ordering, shipping, returns, AR500 steel, splatter targets, setup, and safety.',
}

const SECTIONS = [
  {
    title: 'Ordering',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Browse the shop, add targets to your cart, and check out. We accept all major credit cards securely via Stripe, and you will get an order confirmation email right away.',
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Orders can be modified or cancelled within 1 hour of placement. Email contact@splatterimpacts.com with your order number as soon as possible. Once an order is prepared for shipping, we cannot make changes.',
      },
      {
        q: 'Do you offer bulk or club pricing?',
        a: 'Yes. We offer volume pricing on splatter packs, steel, and stands for ranges, clubs, and matches. Email contact@splatterimpacts.com with what you run and we will put together a kit.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Gift cards are coming soon. In the meantime, reach out at contact@splatterimpacts.com and we will arrange something.',
      },
    ],
  },
  {
    title: 'Shipping',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 3–5 business days. Express options are available at checkout. Orders are processed within 1–2 business days.',
      },
      {
        q: 'Is shipping free?',
        a: 'Free shipping is included on all orders over $99 within the United States. A flat $8 shipping fee applies to orders under $99. Heavy steel orders may carry an oversize surcharge shown at checkout.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'We currently ship within the United States. International shipping is in the works — sign up for updates or email us about a specific destination.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order ships, you will receive a tracking number via email so you can follow your package through USPS, UPS, or the relevant carrier.',
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery. Items must be unused and in original packaging. For safety reasons, steel that has been shot cannot be returned unless it arrived defective.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email contact@splatterimpacts.com with your order number and reason for return. We will send a prepaid return label within one business day.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5–7 business days of receiving your return. The credit appears on your original payment method.',
      },
      {
        q: 'What if my target arrives damaged?',
        a: 'Steel ships heavy and occasionally takes a knock in transit. If anything arrives damaged, send us a photo within 7 days and we will make it right.',
      },
    ],
  },
  {
    title: 'Targets & Materials',
    items: [
      {
        q: 'Is your steel real AR500?',
        a: 'Yes. Our steel targets are genuine through-hardened AR500 plate (roughly 500 Brinell), laser-cut and edge-deburred. Each listing notes the thickness and size.',
      },
      {
        q: 'What calibers can I shoot at your steel?',
        a: 'Standard-velocity pistol and rifle at the recommended minimum distances. Do not use armor-piercing, steel-core, or green-tip ammunition — it damages the face and shortens target life.',
      },
      {
        q: 'How do the splatter targets work?',
        a: 'A bright reactive coating bursts into a high-visibility ring around each hit, so you can call your shots from the bench without a spotting scope or a walk downrange.',
      },
      {
        q: 'How many rounds will steel last?',
        a: 'With proper ammo and distance, AR500 plate lasts for thousands of rounds. Shallow dimpling is normal; retire any plate that develops sharp craters.',
      },
    ],
  },
  {
    title: 'Setup & Safety',
    items: [
      {
        q: 'Do I need a special stand?',
        a: 'Paper and splatter targets staple to a backer on any of our stands. Steel hangs from a stand or T-post so it can swing — check the product page for what hardware is included.',
      },
      {
        q: 'What is the minimum safe distance for steel?',
        a: 'As a general guide, 10+ yards for pistol and 100+ yards for rifle, but always follow the rating on the product and your range rules. Eye and ear protection are a must.',
      },
      {
        q: 'Can I use these at an indoor range?',
        a: 'Paper and splatter targets work anywhere paper is allowed. Always confirm your range permits steel and reactive targets before bringing them.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">Help</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Frequently Asked Questions
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[440px] mx-auto leading-relaxed">
          Can't find your answer here? We're always happy to help directly.
        </p>
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-14">
        {SECTIONS.map((section) => (
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
            Still have questions?{' '}
            <Link href="/contact" className="text-[#C8A96E] hover:underline">
              Contact us
            </Link>{' '}
            or email{' '}
            <a href="mailto:contact@splatterimpacts.com" className="text-[#C8A96E] hover:underline">
              contact@splatterimpacts.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
