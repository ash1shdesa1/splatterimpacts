import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Stories, inspiration, and behind-the-scenes from Splatter Impacts Fine Jewelry.',
}

const JOURNAL_POSTS = [
  {
    slug: 'the-art-of-wearing-fine-jewelry',
    title: 'The Art of Wearing Fine Jewelry Every Day',
    excerpt: 'Fine jewelry was never meant to live in a box. Here is how to wear your most precious pieces with confidence, morning to evening.',
    date: 'June 2025',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=90',
  },
  {
    slug: 'how-to-choose-the-perfect-engagement-ring',
    title: 'How to Choose the Perfect Ring — A Complete Guide',
    excerpt: 'From cut and carat to metal choice and setting style, our complete guide to finding the ring that will define a chapter.',
    date: 'May 2025',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=90',
  },
  {
    slug: 'gemstone-meanings',
    title: 'The Language of Gemstones: What Your Stone Says About You',
    excerpt: 'Every gemstone carries a story. Discover the meaning behind sapphires, rubies, emeralds, and diamonds — and what your choice reveals.',
    date: 'April 2025',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=800&q=90',
  },
  {
    slug: 'caring-for-your-jewelry',
    title: 'How to Care for Your Fine Jewelry',
    excerpt: 'The pieces that last lifetimes are the ones that are loved and cared for. Our essential guide to keeping your jewelry radiant.',
    date: 'March 2025',
    category: 'Care',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=90',
  },
  {
    slug: 'the-story-behind-the-signature-collection',
    title: 'Behind the Design: The Signature Collection',
    excerpt: 'A look inside the sketches, decisions, and dreams that shaped our most important collection to date.',
    date: 'February 2025',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?auto=format&fit=crop&w=800&q=90',
  },
  {
    slug: 'layering-necklaces',
    title: 'The Perfect Stack: A Guide to Layering Necklaces',
    excerpt: 'Layering necklaces is an art. Master it with our guide to lengths, weights, and the unexpected combinations that always work.',
    date: 'January 2025',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d9c6154?auto=format&fit=crop&w=800&q=90',
  },
]

export default function JournalPage() {
  const [featured, ...rest] = JOURNAL_POSTS

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96E] mb-3">Stories & Inspiration</p>
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widest uppercase">Journal</h1>
        <span className="gold-line mt-5 mx-auto block" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        {/* Featured post */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8A96E]">{featured.category}</span>
              <span className="w-4 h-px bg-[#E8E5E0]" />
              <span className="text-[11px] text-[#9B9892]">{featured.date}</span>
            </div>
            <h2 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-light leading-tight tracking-wide mb-4">
              {featured.title}
            </h2>
            <p className="text-[14px] text-[#5C5A56] leading-relaxed">{featured.excerpt}</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {rest.map((post) => (
            <div key={post.slug}>
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8A96E]">{post.category}</span>
                <span className="w-4 h-px bg-[#E8E5E0]" />
                <span className="text-[11px] text-[#9B9892]">{post.date}</span>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-xl font-light leading-snug tracking-wide mb-2">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#9B9892] leading-relaxed line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
