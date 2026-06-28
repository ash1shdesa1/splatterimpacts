'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/store/cart'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { openCart, count, items } = useCart()
  const cartCount = items.reduce((s, i) => s + i.quantity, 0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#F2F4F6]/95 backdrop-blur-md border-b border-[#D4D9DE]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Desktop nav left */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] tracking-[0.18em] uppercase font-[var(--font-inter)] transition-colors duration-200 si-link ${
                    pathname.startsWith(link.href)
                      ? 'text-[#FF6A00]'
                      : scrolled || !isHome
                      ? 'text-[#0F0F0F]'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 font-[var(--font-cormorant)] text-2xl md:text-3xl tracking-[0.35em] uppercase font-light transition-colors duration-200 ${
              scrolled || !isHome ? 'text-[#0F0F0F]' : 'text-white'
            }`}
          >
            Splatter Impacts
          </Link>

          {/* Desktop nav right */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] tracking-[0.18em] uppercase font-[var(--font-inter)] transition-colors duration-200 si-link ${
                    pathname.startsWith(link.href)
                      ? 'text-[#FF6A00]'
                      : scrolled || !isHome
                      ? 'text-[#0F0F0F]'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Cart */}
            <li>
              <button
                onClick={openCart}
                className={`flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  scrolled || !isHome ? 'text-[#0F0F0F]' : 'text-white'
                }`}
                aria-label={`Cart — ${cartCount} items`}
              >
                <CartIcon />
                {cartCount > 0 && (
                  <span className="bg-[#FF6A00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile: cart + hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={openCart}
              className={`transition-colors ${scrolled || !isHome ? 'text-[#0F0F0F]' : 'text-white'}`}
              aria-label="Open cart"
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-4 right-14 bg-[#FF6A00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col gap-[5px] w-6 transition-colors ${
                scrolled || !isHome ? 'text-[#0F0F0F]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F2F4F6] flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-[72px]" />
        <nav className="flex-1 flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-8 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#8A9099]">Follow us</p>
          <a
            href="https://www.instagram.com/kingofstudsandsolitaire/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-[#FF6A00] mt-1 block"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
