import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Splatter Impacts — questions about targets, orders, or bulk pricing for ranges, clubs, and matches.',
}

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="py-20 text-center px-6 border-b border-[#D4D9DE]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#FF6A00] mb-3">Get in Touch</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">Contact</h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#474C53] max-w-[480px] mx-auto leading-relaxed">
          Got a question about a target, an order, or bulk pricing for your range or club? We are
          happy to help — reach out any time.
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
                detail: 'contact@splatterimpacts.com',
                /* PLACEHOLDER: Update this email address */
                href: 'mailto:contact@splatterimpacts.com',
                desc: 'Questions about orders, products, or anything else.',
              },
              {
                title: 'Bulk & Club Orders',
                detail: 'contact@splatterimpacts.com',
                href: 'mailto:contact@splatterimpacts.com',
                desc: 'Volume pricing on splatter packs, steel, and stands for ranges, clubs, and matches.',
              },
              {
                title: 'Dealer Inquiries',
                detail: 'contact@splatterimpacts.com',
                href: 'mailto:contact@splatterimpacts.com',
                desc: 'Interested in carrying Splatter Impacts in your shop? We would love to connect.',
              },
              {
                title: 'Press & Media',
                detail: 'contact@splatterimpacts.com',
                href: 'mailto:contact@splatterimpacts.com',
                desc: 'Reviews, features, and collaboration opportunities.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#D4D9DE] pl-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A9099] mb-1">{item.title}</p>
                <a
                  href={item.href}
                  className="font-[var(--font-cormorant)] text-xl font-light text-[#0F0F0F] hover:text-[#FF6A00] transition-colors"
                >
                  {item.detail}
                </a>
                <p className="text-[12px] text-[#8A9099] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A9099] mb-4">Follow Us</p>
            <a
              href="https://www.instagram.com/splatterimpacts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#474C53] hover:text-[#FF6A00] transition-colors tracking-wide"
            >
              Instagram — @splatterimpacts
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
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8A9099] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-[#D4D9DE] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#FF6A00] transition-colors placeholder-[#B4BAC1]"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8A9099] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full border border-[#D4D9DE] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#FF6A00] transition-colors placeholder-[#B4BAC1]"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8A9099] mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-[#D4D9DE] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#FF6A00] transition-colors placeholder-[#B4BAC1]"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8A9099] mb-2">Subject</label>
              <select
                name="subject"
                className="w-full border border-[#D4D9DE] px-4 py-3 text-[13px] text-[#0F0F0F] bg-[#F2F4F6] focus:outline-none focus:border-[#FF6A00] transition-colors cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="order">Order Question</option>
                <option value="bulk">Bulk / Club Order</option>
                <option value="dealer">Dealer Inquiry</option>
                <option value="press">Press & Media</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8A9099] mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border border-[#D4D9DE] px-4 py-3 text-[13px] text-[#0F0F0F] bg-transparent focus:outline-none focus:border-[#FF6A00] transition-colors placeholder-[#B4BAC1] resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0F0F0F] text-white text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#FF6A00] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
