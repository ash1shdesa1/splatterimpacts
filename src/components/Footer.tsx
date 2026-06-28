import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-[var(--font-cormorant)] text-2xl tracking-[0.35em] uppercase font-light">
            Splatter Impacts
          </Link>
          <p className="mt-4 text-[12px] text-white/40 leading-relaxed max-w-[200px]">
            Every jewel, a chapter. Every chapter, your story.
          </p>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/kingofstudsandsolitaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] uppercase text-white/40 hover:text-[#C8A96E] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">Shop</h4>
          <ul className="space-y-3">
            {[
              ['Rings', '/shop?category=rings'],
              ['Necklaces', '/shop?category=necklaces'],
              ['Earrings', '/shop?category=earrings'],
              ['Bracelets', '/shop?category=bracelets'],
              ['Fine Jewelry', '/shop?category=fine-jewelry'],
              ['Custom Orders', '/shop?category=custom-orders'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[12px] text-white/50 hover:text-[#C8A96E] transition-colors tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">Company</h4>
          <ul className="space-y-3">
            {[
              ['Our Story', '/about'],
              ['Journal', '/journal'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[12px] text-white/50 hover:text-[#C8A96E] transition-colors tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">Help</h4>
          <ul className="space-y-3">
            {[
              ['Shipping & Returns', '/shipping-returns'],
              ['Ring Sizing Guide', '/sizing'],
              ['Care Instructions', '/care'],
              ['FAQ', '/faq'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[12px] text-white/50 hover:text-[#C8A96E] transition-colors tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="mailto:contact@splatterimpacts.com"
              className="text-[12px] text-white/50 hover:text-[#C8A96E] transition-colors"
            >
              {/* PLACEHOLDER: Update this email address */}
              contact@splatterimpacts.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-10 py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25 tracking-wide">
            © {new Date().getFullYear()} Splatter Impacts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms of Service', '/terms'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
