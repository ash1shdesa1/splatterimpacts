'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/store/cart'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCart()
  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0)
  const count = items.reduce((s, i) => s + i.quantity, 0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, closeCart])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full z-50 w-full max-w-[420px] bg-[#FAF8F5] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E8E5E0]">
          <div>
            <h2 className="font-[var(--font-cormorant)] text-2xl font-light tracking-widest uppercase">
              Your Cart
            </h2>
            <p className="text-[11px] text-[#9B9892] tracking-[0.12em] mt-0.5 uppercase">
              {count === 0 ? 'Empty' : `${count} item${count !== 1 ? 's' : ''}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="text-[#9B9892] hover:text-[#0F0F0F] transition-colors p-1"
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 cart-items">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E8E5E0] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B9892" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <div>
                <p className="font-[var(--font-cormorant)] text-xl font-light">Your cart is empty</p>
                <p className="text-[12px] text-[#9B9892] mt-1">Discover pieces made for your story</p>
              </div>
              <Link
                href="/shop"
                onClick={closeCart}
                className="mt-2 text-[11px] tracking-[0.18em] uppercase border-b border-[#C8A96E] text-[#C8A96E] pb-0.5"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-[#F5F3F0] rounded flex-shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-[var(--font-cormorant)] text-base font-light leading-tight line-clamp-2">
                      {product.title}
                    </p>
                    <p className="text-[12px] text-[#9B9892] mt-0.5">
                      ${product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#E8E5E0]">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#9B9892] hover:text-[#0F0F0F] transition-colors text-sm"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-[12px]">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#9B9892] hover:text-[#0F0F0F] transition-colors text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-[11px] text-[#9B9892] hover:text-[#0F0F0F] transition-colors tracking-wide"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-[#E8E5E0] space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#9B9892]">Subtotal</span>
              <span className="font-[var(--font-cormorant)] text-xl font-light">
                ${total.toLocaleString()}
              </span>
            </div>
            <p className="text-[11px] text-[#9B9892]">Shipping and taxes calculated at checkout.</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-[#0F0F0F] text-white text-[11px] tracking-[0.2em] uppercase py-4 text-center hover:bg-[#C8A96E] transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full text-[11px] tracking-[0.18em] uppercase text-[#9B9892] hover:text-[#0F0F0F] transition-colors py-1 text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
