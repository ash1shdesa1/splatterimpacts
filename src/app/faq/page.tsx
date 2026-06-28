import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about Splatter Impacts Fine Jewelry — ordering, shipping, returns, and more.',
}

const SECTIONS = [
  {
    title: 'Ordering',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Browse our collection, add items to your cart, and proceed to checkout. We accept all major credit cards securely via Stripe. You will receive an order confirmation email immediately after purchase.',
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Orders can be modified or cancelled within 1 hour of placement. Please email contact@splatterimpacts.com as soon as possible with your order number. Once an order has been prepared for shipping, we are unable to make changes.',
      },
      {
        q: 'Do you offer gift wrapping?',
        a: 'Every Splatter Impacts order arrives in our signature packaging — a keepsake box with a ribbon, tissue paper, and a care card. This is included at no extra charge and requires no selection at checkout.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Gift cards are coming soon. In the meantime, please reach out to us directly at contact@splatterimpacts.com and we will arrange something special.',
      },
    ],
  },
  {
    title: 'Shipping',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 5–7 business days. Express shipping (2–3 business days) is available at checkout. Orders are processed within 1–2 business days.',
      },
      {
        q: 'Is shipping free?',
        a: 'Complimentary shipping is included on all orders over $200 within the United States. A flat $15 shipping fee applies to orders under $200.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'We currently ship to the United States, Canada, United Kingdom, Australia, France, Germany, Italy, and Spain. International orders typically arrive within 7–14 business days. Duties and taxes are the responsibility of the recipient.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order ships, you will receive a tracking number via email. You can use this to follow your package through USPS or the relevant carrier.',
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery. Items must be unworn, undamaged, and in original packaging. Custom and personalized orders are final sale.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email contact@splatterimpacts.com with your order number and reason for return. We will send a prepaid return label within one business day.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5–7 business days of receiving your return. The credit will appear on your original payment method.',
      },
      {
        q: 'Can I exchange for a different size?',
        a: 'Yes. We offer one complimentary size exchange for rings within 30 days of delivery. Email us with your order number and the size you need.',
      },
    ],
  },
  {
    title: 'Products & Materials',
    items: [
      {
        q: 'Are your gemstones natural?',
        a: 'Yes. All gemstones featured in our collection are natural — not synthetic or lab-created — unless explicitly stated otherwise in the product description.',
      },
      {
        q: 'What metals do you use?',
        a: 'We work with 14K yellow gold, 14K white gold, 14K rose gold, and sterling silver. Each product listing specifies the metal used.',
      },
      {
        q: 'Do your pieces come with a certificate of authenticity?',
        a: 'Select fine jewelry pieces include a certificate of authenticity. This is noted in the product details where applicable.',
      },
      {
        q: 'Are your pieces hypoallergenic?',
        a: 'Our 14K gold pieces are generally well-tolerated by sensitive skin. Sterling silver pieces are made with .925 silver. If you have a known metal allergy, please contact us before ordering.',
      },
    ],
  },
  {
    title: 'Custom Orders',
    items: [
      {
        q: 'Can I commission a custom piece?',
        a: 'Absolutely. Our custom order service lets you work directly with our designer to create something made only for you. A consultation deposit begins the process — visit our Custom Orders page to get started.',
      },
      {
        q: 'How long does a custom order take?',
        a: 'Custom pieces typically require 4–8 weeks from design approval to delivery, depending on complexity and material sourcing.',
      },
      {
        q: 'Are custom orders refundable?',
        a: 'Custom and personalized orders are final sale. The deposit is non-refundable once design work has begun.',
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
