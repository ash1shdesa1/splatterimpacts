import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description: 'Splatter Impacts shipping and return policies. Free shipping on orders over $200.',
}

export default function ShippingReturnsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Shipping & Returns
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-14">
        {[
          {
            title: 'Shipping',
            content: [
              { q: 'Free Complimentary Shipping', a: 'All orders over $200 ship free within the United States via USPS Priority Mail (3–5 business days).' },
              { q: 'Standard Shipping', a: 'Orders under $200 ship for a flat rate of $15. Delivery in 5–7 business days.' },
              { q: 'Express Shipping', a: 'Available at checkout for $25. Delivered in 2–3 business days.' },
              { q: 'International Shipping', a: 'PLACEHOLDER: We currently ship to [list your countries]. International orders take 7–14 business days. Duties and taxes are the responsibility of the recipient.' },
              { q: 'Order Processing', a: 'Orders are processed within 1–2 business days. You will receive a tracking number by email once your order ships.' },
            ],
          },
          {
            title: 'Returns',
            content: [
              { q: '30-Day Returns', a: 'We accept returns within 30 days of delivery. Items must be unworn, in original condition, and in original packaging.' },
              { q: 'Free Return Shipping', a: 'Returns are complimentary. A prepaid return label will be emailed to you upon initiating your return.' },
              { q: 'How to Initiate a Return', a: 'Email contact@splatterimpacts.com with your order number and reason for return. We will respond within 1 business day.' },
              { q: 'Refunds', a: 'Refunds are processed within 5–7 business days of receiving your return. Credit will be applied to your original payment method.' },
              { q: 'Final Sale Items', a: 'Custom orders and personalized pieces are final sale and are not eligible for return.' },
            ],
          },
          {
            title: 'Exchanges',
            content: [
              { q: 'Ring Sizing', a: 'If your ring does not fit, we offer one complimentary size exchange within 30 days of delivery.' },
              { q: 'Damaged or Defective Items', a: 'In the rare event that a piece arrives damaged, please email us within 48 hours with photos. We will replace or repair it at no cost.' },
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase mb-8">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.content.map(({ q, a }) => (
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
            Questions? We are here to help.{' '}
            <Link href="/contact" className="text-[#C8A96E] hover:underline">Contact us</Link> or email{' '}
            <a href="mailto:contact@splatterimpacts.com" className="text-[#C8A96E] hover:underline">
              {/* PLACEHOLDER: Update this email address */}
              contact@splatterimpacts.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
