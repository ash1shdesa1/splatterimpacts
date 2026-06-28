import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  robots: { index: false },
}

export default function SuccessPage() {
  return (
    <div className="pt-[72px] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[500px] w-full text-center py-20">
        <div className="w-14 h-14 rounded-full bg-[#E7EAED] flex items-center justify-center mx-auto mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <p className="text-[10px] tracking-[0.35em] uppercase text-[#FF6A00] mb-3">Order Confirmed</p>
        <h1 className="font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase mb-5">
          Thank You
        </h1>
        <span className="gold-line mx-auto block mb-6" />

        <p className="text-[14px] text-[#474C53] leading-[1.9] mb-3">
          Your order has been received and is being prepared with care.
          A confirmation email with your order details is on its way.
        </p>
        <p className="text-[14px] text-[#474C53] leading-[1.9] mb-10">
          If you have any questions, reach us at{' '}
          <a href="mailto:contact@splatterimpacts.com" className="text-[#FF6A00] hover:underline">
            {/* PLACEHOLDER: Update this email address */}
            contact@splatterimpacts.com
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/shop"
            className="text-[11px] tracking-[0.2em] uppercase bg-[#0F0F0F] text-white px-8 py-4 hover:bg-[#FF6A00] transition-colors duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase border border-[#0F0F0F] text-[#0F0F0F] px-8 py-4 hover:bg-[#0F0F0F] hover:text-white transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
