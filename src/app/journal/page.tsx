import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Range tips, gear guides, and drills from the Splatter Impacts team.',
}

const JOURNAL_POSTS = [
  {
    slug: 'splatter-vs-paper-targets',
    title: 'Splatter vs. Plain Paper: Which Should You Shoot?',
    excerpt: 'Reactive splatter targets save you the walk downrange — but plain paper still has its place. Here is when to reach for each.',
    date: 'June 2026',
    category: 'Guide',
    image: '/images/products/splatter-bullseye.svg',
  },
  {
    slug: 'choosing-ar500-steel',
    title: 'How to Choose AR500 Steel Targets',
    excerpt: 'Thickness, size, distance, and caliber ratings explained — everything you need to pick steel that lasts for thousands of rounds.',
    date: 'May 2026',
    category: 'Guide',
    image: '/images/products/steel-gong.svg',
  },
  {
    slug: 'steel-target-safety',
    title: 'Steel Target Safety: Distances, Angles & Ammo',
    excerpt: 'A practical primer on shooting steel safely — minimum distances, hanging angles, and the ammunition to avoid.',
    date: 'April 2026',
    category: 'Safety',
    image: '/images/products/steel-popper.svg',
  },
  {
    slug: 'sight-in-routine',
    title: 'A Simple Sight-In Routine for Any Rifle',
    excerpt: 'Use a grid target and a few rounds to get on paper fast and dial a confident zero. Here is the step-by-step.',
    date: 'March 2026',
    category: 'Drills',
    image: '/images/products/sight-in-grid.svg',
  },
  {
    slug: 'rimfire-plinking-setup',
    title: 'The Perfect Rimfire Plinking Setup',
    excerpt: 'Spinners, dots, and a .22 make for the best low-cost range day there is. Here is how to build a setup the whole family will love.',
    date: 'February 2026',
    category: 'Gear',
    image: '/images/products/reactive-spinner.svg',
  },
  {
    slug: 'running-a-dueling-tree',
    title: 'Run a Dueling Tree: Drills & Etiquette',
    excerpt: 'The dueling tree is the most fun you can have on steel. Here are the games to play and the range etiquette to keep it safe.',
    date: 'January 2026',
    category: 'Drills',
    image: '/images/products/rimfire-dots.svg',
  },
]

export default function JournalPage() {
  const [featured, ...rest] = JOURNAL_POSTS

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="py-20 text-center px-6 border-b border-[#D4D9DE]">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#FF6A00] mb-3">Stories & Inspiration</p>
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
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#FF6A00]">{featured.category}</span>
              <span className="w-4 h-px bg-[#D4D9DE]" />
              <span className="text-[11px] text-[#8A9099]">{featured.date}</span>
            </div>
            <h2 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-light leading-tight tracking-wide mb-4">
              {featured.title}
            </h2>
            <p className="text-[14px] text-[#474C53] leading-relaxed">{featured.excerpt}</p>
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
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#FF6A00]">{post.category}</span>
                <span className="w-4 h-px bg-[#D4D9DE]" />
                <span className="text-[11px] text-[#8A9099]">{post.date}</span>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-xl font-light leading-snug tracking-wide mb-2">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#8A9099] leading-relaxed line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
