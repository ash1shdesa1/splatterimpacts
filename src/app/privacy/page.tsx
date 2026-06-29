import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Splatter Impacts.',
  robots: { index: false },
}

const EFFECTIVE_DATE = 'June 21, 2026'

export default function PrivacyPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#D4D9DE]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">
          Privacy Policy
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[13px] text-[#8A9099]">Effective {EFFECTIVE_DATE}</p>
      </div>

      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 space-y-12">
        {[
          {
            title: '1. Information We Collect',
            body: 'When you place an order, we collect your name, email address, shipping address, phone number, and payment information. Payment details are processed directly by Shopify and are never stored on our servers. We may also collect browsing data (pages visited, time on site) through analytics tools to improve the shopping experience.',
          },
          {
            title: '2. How We Use Your Information',
            body: 'We use your information to process and fulfill your orders, send order confirmations and shipping notifications, respond to customer service inquiries, and improve our website and product offerings. We do not sell or rent your personal information to third parties.',
          },
          {
            title: '3. Sharing Your Information',
            body: 'We share your information only with service providers necessary to fulfill your order — including our payment processor (Shopify), shipping carriers, and email service providers. These parties are contractually obligated to protect your information and use it only for the purpose of providing their services to us.',
          },
          {
            title: '4. Cookies & Tracking',
            body: 'We use essential cookies to enable core site functionality (such as your shopping cart). We may use analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings. Disabling cookies may affect some site features.',
          },
          {
            title: '5. Data Security',
            body: 'We implement industry-standard security measures to protect your personal information. Our site is served over HTTPS. Payment processing is handled by Shopify, which is PCI DSS compliant. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
          },
          {
            title: '6. Data Retention',
            body: 'We retain order and customer information for as long as necessary to fulfill our legal and business obligations, including tax records and dispute resolution. You may request deletion of your data at any time by contacting us.',
          },
          {
            title: '7. Your Rights',
            body: 'Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you. You may also have the right to opt out of marketing communications at any time using the unsubscribe link in any email we send. To exercise any of these rights, contact us at contact@splatterimpact.com.',
          },
          {
            title: '8. Children\'s Privacy',
            body: 'Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.',
          },
          {
            title: '9. Third-Party Links',
            body: 'Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
          },
          {
            title: '10. Changes to This Policy',
            body: 'We may update this Privacy Policy from time to time. Changes will be posted to this page with a revised effective date. Continued use of the Site after changes constitutes acceptance of the updated policy.',
          },
          {
            title: '11. Contact Us',
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
                For questions or requests related to your personal data, contact us at{' '}
                <a href="mailto:contact@splatterimpact.com" className="text-[#FF6A00] hover:underline">
                  contact@splatterimpact.com
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
