'use client'

import { useState } from 'react'
import { useCart } from '@/store/cart'
import { Product } from '@/lib/types'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAdd}
      className={`w-full text-[11px] tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
        added
          ? 'bg-[#C8A96E] text-white'
          : 'bg-[#0F0F0F] text-white hover:bg-[#C8A96E]'
      }`}
    >
      {added ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
  )
}
