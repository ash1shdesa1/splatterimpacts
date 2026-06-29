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
    default: 'Splatter Impacts — Reactive Shooting Targets',
    template: '%s — Splatter Impacts',
  },
  description:
    'Reactive splatter targets, AR500 steel, and range gear that show every hit. See your shots, skip the spotting scope, and make every trip to the range count.',
  keywords: ['shooting targets', 'splatter targets', 'AR500 steel targets', 'reactive targets', 'paper targets', 'sight-in targets', 'range gear'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.splatterimpact.com',
    siteName: 'Splatter Impacts',
    title: 'Splatter Impacts — Reactive Shooting Targets',
    description: 'Reactive splatter targets and AR500 steel that show every hit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Splatter Impacts — Reactive Shooting Targets',
    description: 'Reactive splatter targets and AR500 steel that show every hit.',
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
