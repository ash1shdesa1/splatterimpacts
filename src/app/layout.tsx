import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Splatter Impacts — Fine Jewelry',
    template: '%s — Splatter Impacts',
  },
  description:
    'Handcrafted fine jewelry born from belief. Rings, necklaces, earrings, and bracelets made to become part of your story.',
  keywords: ['fine jewelry', 'luxury jewelry', 'diamond rings', 'gemstone necklaces', 'handcrafted jewelry'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.splatterimpacts.com',
    siteName: 'Splatter Impacts',
    title: 'Splatter Impacts — Fine Jewelry',
    description: 'Handcrafted fine jewelry. Every jewel, a chapter.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Splatter Impacts — Fine Jewelry',
    description: 'Handcrafted fine jewelry. Every jewel, a chapter.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-si-cream text-si-black antialiased">
        <Navigation />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
