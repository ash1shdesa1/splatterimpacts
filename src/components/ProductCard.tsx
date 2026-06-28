'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/store/cart'
import { Product } from '@/lib/types'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <article className="group relative">
      <Link href={`/shop/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-[3/4] bg-[#F5F3F0] overflow-hidden img-zoom-wrapper">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-[#0F0F0F] text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
              {product.badge}
            </div>
          )}
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-[#FAF8F5]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={handleAdd}
              className="w-full py-3.5 text-[10px] tracking-[0.2em] uppercase text-[#0F0F0F] hover:text-[#C8A96E] transition-colors"
            >
              {added ? '✓ Added to Cart' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-[var(--font-cormorant)] text-[15px] font-light leading-snug tracking-wide group-hover:text-[#C8A96E] transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-[12px] text-[#5C5A56] tracking-wide">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </article>
  )
}
