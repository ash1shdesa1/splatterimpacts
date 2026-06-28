import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with VERO. We would love to hear from you — whether you have a question about a piece, need help finding the perfect gift, or want to share your story.',
}

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">Get in Touch</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">Contact</h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[480px] mx-auto leading-relaxed">
          We would love to hear from you — whether you have a question about a piece, need help
          finding the perfect gift, or simply want to share your story.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Contact info */}
        <div>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-wide mb-10">
            How to Reach Us
          </h2>

          <div className="space-y-10">
            {[
              {
                title: 'Customer Service',
                detail: 'contact@the-vero.com',
                /* PLACEHOLDER: Update this email address */
                href: 'mailto:contact@the-vero.com',
                desc: 'Questions about orders, products, or anything else.',
              },
              {
                title: 'Wholesale Inquiries',
                detail: 'contact@the-vero.com',
                /* PLACEHOLDER: Add a dedicated wholesale email */
                href: 'mailto:contact@the-vero.com',
                desc: 'Interested in carrying VERO in your store? We would love to connect.',
              },
              {
                title: 'Press & Media',
                detail: 'contact@the-vero.com',
                /* PLACEHOLDER: Add a dedicated press email */
                href: 'mailto:contact@the-vero.com',
                desc: 'Editorial requests, features, and collaboration opportunities.',
              },
              {
                title: 'Custom Orders',
                detail: 'Begin your commission',
                href: '/shop/custom-jewelry-order',
                desc: 'Commission a one-of-a-kind piece made exclusively for you.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#E8E5E0] pl-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9B9892] mb-1">{item.title}</p>
                <a
                  href={item.href}
                  className="font-[var(--font-cormorant)] text-xl font-light text-[#0F0F0F] hover:text-[#C8A96E] transition-colors"
                >
                  {item.detail}
                </a>
                <p className="text-[12px] text-[#9B9892] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9B9892] mb-4">Follow Us</p>
            <a
              href="https://www.instagram.com/kingofstudsandsolitaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#5C5A56] hover:text-[#C8A96E] transition-colors tracking-wide"
            >
              Instagram — @kingofstudsandsolitaire
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-wide mb-10">
            Send a Message
          </h2>
          <form action="/api/contact" method="POST" className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9B9892] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-[#E8E5E0] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#C8A96E] transition-colors placeholder-[#C8C6C2]"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9B9892] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full border border-[#E8E5E0] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#C8A96E] transition-colors placeholder-[#C8C6C2]"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9B9892] mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-[#E8E5E0] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#C8A96E] transition-colors placeholder-[#C8C6C2]"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9B9892] mb-2">Subject</label>
              <select
                name="subject"
                className="w-full border border-[#E8E5E0] px-4 py-3 text-[13px] text-[#0F0F0F] bg-[#FAF8F5] focus:outline-none focus:border-[#C8A96E] transition-colors cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="order">Order Question</option>
                <option value="custom">Custom Order</option>
                <option value="wholesale">Wholesale</option>
                <option value="press">Press & Media</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9B9892] mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border border-[#E8E5E0] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#C8A96E] transition-colors placeholder-[#C8C6C2] resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0F0F0F] text-white text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#C8A96E] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
