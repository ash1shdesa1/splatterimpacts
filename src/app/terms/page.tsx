import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Splatter Impacts.',
  robots: { index: false },
}

const EFFECTIVE_DATE = 'June 21, 2026'

export default function TermsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#D4D9DE]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Terms of Service
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[13px] text-[#8A9099]">Effective {EFFECTIVE_DATE}</p>
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-12">
        {[
          {
            title: '1. Agreement to Terms',
            body: 'By accessing or purchasing from splatterimpacts.com ("Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.',
          },
          {
            title: '2. Products',
            body: 'We reserve the right to modify or discontinue any product at any time without notice. All product descriptions, images, and prices are subject to change. We make every effort to display product colors and materials accurately, but we cannot guarantee that your device screen will display them with complete accuracy.',
          },
          {
            title: '3. Pricing & Payment',
            body: 'All prices are listed in US Dollars and are subject to change. We reserve the right to correct pricing errors at any time, even after an order has been placed. Payment is processed securely through Stripe. We accept all major credit cards.',
          },
          {
            title: '4. Order Acceptance',
            body: 'Placing an order does not constitute a binding contract until we confirm acceptance by email. We reserve the right to refuse or cancel any order at our discretion, including due to pricing errors, suspected fraud, or product unavailability. If your order is cancelled, you will receive a full refund.',
          },
          {
            title: '5. Shipping',
            body: 'Shipping timelines are estimates and are not guaranteed. We are not responsible for delays caused by carriers, customs, or circumstances beyond our control. Risk of loss and title for items pass to you upon delivery to the carrier.',
          },
          {
            title: '6. Returns & Refunds',
            body: 'Returns are accepted within 30 days of delivery for unworn items in original condition. Custom and personalized orders are final sale. Please see our Shipping & Returns page for full details.',
          },
          {
            title: '7. Intellectual Property',
            body: 'All content on this Site — including images, text, logos, and designs — is the property of Splatter Impacts and protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
          },
          {
            title: '8. Disclaimer of Warranties',
            body: 'The Site and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
          },
          {
            title: '9. Limitation of Liability',
            body: 'To the fullest extent permitted by law, Splatter Impacts shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or purchase of products, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount you paid for the relevant order.',
          },
          {
            title: '10. Governing Law',
            body: 'These Terms are governed by the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in New York County, New York.',
          },
          {
            title: '11. Changes to Terms',
            body: 'We reserve the right to update these Terms at any time. Changes will be posted to this page with a revised effective date. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.',
          },
          {
            title: '12. Contact',
            body: null,
          },
        ].map(({ title, body }) => (
          <div key={title}>
            <h2 className="font-[var(--font-cormorant)] text-2xl font-light tracking-wide uppercase mb-4">
              {title}
            </h2>
            {body ? (
              <p className="text-[13px] text-[#474C53] leading-relaxed">{body}</p>
            ) : (
              <p className="text-[13px] text-[#474C53] leading-relaxed">
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:contact@splatterimpacts.com" className="text-[#FF6A00] hover:underline">
                  contact@splatterimpacts.com
                </a>{' '}
                or visit our{' '}
                <Link href="/contact" className="text-[#FF6A00] hover:underline">
                  Contact page
                </Link>
                .
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
