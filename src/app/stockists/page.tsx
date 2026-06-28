import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stockists',
  description: 'Find Splatter Impacts targets at select gun shops, ranges, and shooting-sports retailers.',
}

export default function StockistsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-20 text-center px-6 border-b border-[#E8E5E0]">
        <h1 className="font-[var(--font-cormorant)] text-5xl font-light tracking-widests uppercase">
          Stockists
        </h1>
        <span className="gold-line mt-5 mx-auto block" />
        <p className="mt-5 text-[14px] text-[#5C5A56] max-w-[420px] mx-auto leading-relaxed">
          Find Splatter Impacts at select gun shops, ranges, and shooting-sports retailers.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20">
        {/*
          PLACEHOLDER: Add your stockist locations below.
          Replace this sample data with your actual retail partners.
        */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              city: 'New York',
              region: 'New York, USA',
              stores: [
                { name: 'PLACEHOLDER — Add Retailer Name', address: 'Address Line 1, New York, NY 00000', phone: '+1 (000) 000-0000', website: '#' },
              ],
            },
            {
              city: 'Los Angeles',
              region: 'California, USA',
              stores: [
                { name: 'PLACEHOLDER — Add Retailer Name', address: 'Address Line 1, Los Angeles, CA 00000', phone: '+1 (000) 000-0000', website: '#' },
              ],
            },
            {
              city: 'London',
              region: 'United Kingdom',
              stores: [
                { name: 'PLACEHOLDER — Add Retailer Name', address: 'Address Line 1, London, W1A 0AA', phone: '+44 (0) 000 0000 0000', website: '#' },
              ],
            },
          ].map((location) => (
            <div key={location.city}>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-light tracking-widests uppercase mb-6 pb-3 border-b border-[#E8E5E0]">
                {location.city}
                <span className="text-[11px] tracking-[0.15em] text-[#9B9892] font-normal ml-2">
                  {location.region}
                </span>
              </h2>
              <div className="space-y-6">
                {location.stores.map((store) => (
                  <div key={store.name} className="border-l-2 border-[#C8A96E] pl-5">
                    <p className="font-[var(--font-cormorant)] text-lg font-light">{store.name}</p>
                    <p className="text-[12px] text-[#9B9892] mt-1">{store.address}</p>
                    <p className="text-[12px] text-[#9B9892]">{store.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#F5F3F0] text-center">
          <h3 className="font-[var(--font-cormorant)] text-2xl font-light mb-3">
            Interested in Carrying Splatter Impacts?
          </h3>
          <p className="text-[13px] text-[#5C5A56] mb-5">
            We partner with gun shops, ranges, and shooting-sports retailers who want durable targets their customers will love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0F0F0F] border-b border-[#C8A96E] pb-0.5 hover:text-[#C8A96E] transition-colors"
          >
            Wholesale Inquiries
          </Link>
        </div>
      </div>
    </div>
  )
}
