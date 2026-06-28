'use client'

import { useState, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS, CATEGORIES } from '@/data/products'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'alpha', label: 'Name: A–Z' },
]

export default function ShopContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialCategory = searchParams.get('category') || 'all'

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [sort, setSort] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.categories.includes(activeCategory as any))

    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'alpha':      list.sort((a, b) => a.title.localeCompare(b.title)); break
    }
    return list
  }, [activeCategory, sort])

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'all') params.delete('category')
    else params.set('category', cat)
    router.replace(`/shop?${params.toString()}`, { scroll: false })
    setFilterOpen(false)
  }

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="py-16 md:py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">The Lineup</p>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-widest uppercase">
          Shop
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          {/* Desktop tabs */}
          <div className="hidden md:flex items-center gap-1 flex-wrap">
            <button
              onClick={() => handleCategory('all')}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-colors ${activeCategory === 'all' ? 'text-white bg-[#0F0F0F]' : 'text-[#5C5A56] hover:text-[#0F0F0F]'}`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-colors ${activeCategory === cat.id ? 'text-white bg-[#0F0F0F]' : 'text-[#5C5A56] hover:text-[#0F0F0F]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter */}
          <button
            className="md:hidden flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase border border-[#E8E5E0] px-5 py-2.5"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1 1h12M3 6h8M5 11h4" />
            </svg>
            Filter {activeCategory !== 'all' && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />}
          </button>

          <div className="flex items-center gap-4">
            <p className="text-[11px] text-[#9B9892] tracking-wide whitespace-nowrap">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-[11px] tracking-[0.12em] uppercase border border-[#E8E5E0] px-3 py-2 bg-transparent text-[#5C5A56] focus:outline-none focus:border-[#C8A96E] cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden border border-[#E8E5E0] mb-8 p-5">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleCategory('all')} className={`text-[10px] tracking-[0.18em] uppercase py-2.5 transition-colors ${activeCategory === 'all' ? 'bg-[#0F0F0F] text-white' : 'border border-[#E8E5E0] text-[#5C5A56]'}`}>All</button>
              {CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => handleCategory(cat.id)} className={`text-[10px] tracking-[0.18em] uppercase py-2.5 transition-colors ${activeCategory === cat.id ? 'bg-[#0F0F0F] text-white' : 'border border-[#E8E5E0] text-[#5C5A56]'}`}>{cat.label}</button>
              ))}
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-[var(--font-cormorant)] text-2xl font-light text-[#9B9892]">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
