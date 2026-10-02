'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Product = {
  id: string
  name: string
  slug: string
  price: number
  short_description: string | null
  image_url: string | null
}

export default function ShopGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products
    const q = query.trim().toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.short_description && p.short_description.toLowerCase().includes(q))
    )
  }, [products, query])

  return (
    <>
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search furniture..."
          className="w-full bg-transparent border border-[#c9a24b] rounded px-4 py-3 text-sm text-[#f5f1e8] placeholder:text-[#9a9a9a]"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-[#9a9a9a]">
          No products match &quot;{query}&quot;. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredProducts.map((product) => (
            <Link href={`/shop/${product.slug}`} key={product.id} className="bg-[#141414] border border-[#c9a24b]/20 hover:border-[#c9a24b]/60 transition-colors block">
              {product.image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.image_url} alt={product.name} className="h-56 w-full object-cover" />
              ) : (
                <div className="h-56 bg-[#1a1a1a]" />
              )}
              <div className="p-6">
                <h2 className="font-display text-xl mb-2">{product.name}</h2>
                <p className="text-[#9a9a9a] text-sm mb-4">{product.short_description}</p>
                <p className="text-[#c9a24b] font-medium">₦{Number(product.price).toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
