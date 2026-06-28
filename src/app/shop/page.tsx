import { Suspense } from 'react'
import ShopContent from './ShopContent'

export const metadata = {
  title: 'Shop',
  description: 'Shop Splatter Impacts — reactive splatter targets, AR500 steel, reactive steel, stands, and range accessories.',
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopContent />
    </Suspense>
  )
}

function ShopSkeleton() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#D4D9DE]">
        <div className="h-10 w-24 bg-[#D4D9DE] mx-auto rounded animate-pulse" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-[3/4] bg-[#D4D9DE] rounded animate-pulse" />
              <div className="h-4 bg-[#D4D9DE] rounded animate-pulse" />
              <div className="h-3 w-16 bg-[#D4D9DE] rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
