import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PRODUCTS, getProductBySlug } from '@/data/products'
import AddToCartButton from '@/components/AddToCartButton'
import ProductCard from '@/components/ProductCard'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.title,
    description: product.description.slice(0, 155),
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = PRODUCTS
    .filter((p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c)))
    .slice(0, 4)

  return (
    <div className="pt-[72px]">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 py-4 border-b border-[#E8E5E0]">
        <nav className="max-w-[1400px] mx-auto flex items-center gap-2 text-[11px] tracking-wide text-[#9B9892]">
          <Link href="/" className="hover:text-[#0F0F0F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#0F0F0F] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#0F0F0F]">{product.title}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[#F5F3F0] overflow-hidden img-zoom-wrapper">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#0F0F0F] text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                  {product.badge}
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative aspect-square bg-[#F5F3F0] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 12vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start">
            {/* Category */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
              {product.categories[0]?.replace('-', ' ')}
            </p>

            {/* Title */}
            <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-light tracking-wide leading-tight mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <p className="text-2xl font-[var(--font-cormorant)] font-light mb-6 text-[#0F0F0F]">
              ${product.price.toLocaleString()}
            </p>

            <span className="gold-line mb-6 block" />

            {/* Description */}
            <p className="text-[14px] text-[#5C5A56] leading-[1.9] mb-8">
              {product.description}
            </p>

            {/* Add to cart */}
            <div className="space-y-3 mb-8">
              <AddToCartButton product={product} />
              <Link
                href="/checkout"
                className="block w-full border border-[#0F0F0F] text-[#0F0F0F] text-[11px] tracking-[0.2em] uppercase py-4 text-center hover:bg-[#0F0F0F] hover:text-white transition-all duration-300"
              >
                Buy Now
              </Link>
            </div>

            {/* Product details */}
            <div className="border-t border-[#E8E5E0] pt-6">
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#9B9892] mb-4">Details</h3>
              <ul className="space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#5C5A56]">
                    <span className="w-1 h-1 rounded-full bg-[#C8A96E] mt-2 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping */}
            <div className="border-t border-[#E8E5E0] pt-6 mt-6 space-y-3">
              {[
                { icon: '📦', text: 'Complimentary shipping on all orders over $200' },
                { icon: '↩', text: 'Free returns within 30 days' },
                { icon: '🔒', text: 'Secure checkout via Stripe' },
                { icon: '💬', text: 'Questions? Email contact@the-vero.com' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[12px] text-[#9B9892]">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-20 px-6 md:px-10 bg-[#F5F3F0]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-cormorant)] text-3xl font-light tracking-widest uppercase">
                You May Also Love
              </h2>
              <span className="gold-line mt-4 mx-auto block" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
