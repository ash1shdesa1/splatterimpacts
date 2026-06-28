'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/store/cart'

export default function CheckoutPage() {
  const { items, total } = useCart()
  const cartTotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    if (items.length === 0) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create checkout session')
      }

      const { url } = await res.json()
      window.location.href = url
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-[var(--font-cormorant)] text-3xl font-light mb-4">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] border-b border-[#C8A96E] pb-0.5"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center px-6 border-b border-[#E8E5E0]">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-light tracking-widest uppercase">
          Review Your Order
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-[1fr_400px] gap-12">
        {/* Order items */}
        <div>
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-[#9B9892] mb-6">Order Summary</h2>
          <ul className="divide-y divide-[#E8E5E0]">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="py-5 flex gap-5">
                <div className="relative w-20 h-20 bg-[#F5F3F0] flex-shrink-0 overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1">
                  <p className="font-[var(--font-cormorant)] text-base font-light">{product.title}</p>
                  <p className="text-[12px] text-[#9B9892] mt-0.5">Qty: {quantity}</p>
                </div>
                <p className="font-[var(--font-cormorant)] text-base font-light whitespace-nowrap">
                  ${(product.price * quantity).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary sidebar */}
        <div>
          <div className="bg-[#F5F3F0] p-8">
            <h2 className="text-[10px] tracking-[0.25em] uppercase text-[#9B9892] mb-6">Payment</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-[13px] text-[#5C5A56]">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[13px] text-[#5C5A56]">
                <span>Shipping</span>
                <span className="text-[#C8A96E]">
                  {cartTotal >= 200 ? 'Complimentary' : '$15.00'}
                </span>
              </div>
              <div className="flex justify-between text-[13px] text-[#9B9892]">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-[#E8E5E0] pt-4 mb-8">
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#9B9892]">Total</span>
                <span className="font-[var(--font-cormorant)] text-2xl font-light">
                  ${(cartTotal + (cartTotal >= 200 ? 0 : 15)).toLocaleString()}
                </span>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-[12px] text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full text-[11px] tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                loading
                  ? 'bg-[#9B9892] text-white cursor-not-allowed'
                  : 'bg-[#0F0F0F] text-white hover:bg-[#C8A96E]'
              }`}
            >
              {loading ? 'Preparing Checkout…' : 'Proceed to Secure Checkout'}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#9B9892]">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1" y="6" width="10" height="7" rx="1" />
                <path d="M3.5 6V4a2.5 2.5 0 015 0v2" />
              </svg>
              Secured by Stripe
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {['visa', 'mc', 'amex', 'discover'].map((card) => (
                <div key={card} className="w-10 h-6 bg-white border border-[#E8E5E0] rounded flex items-center justify-center">
                  <span className="text-[8px] text-[#9B9892] uppercase">{card}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[11px] text-[#9B9892] text-center leading-relaxed">
              Free returns within 30 days.
              <br />
              Complimentary shipping on orders over $200.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
