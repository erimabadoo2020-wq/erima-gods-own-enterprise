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
  category_id: string | null
}

type Category = {
  id: string
  name: string
}

type SortOption = 'newest' | 'price-low' | 'price-high'

export default function ShopGrid({
  products,
  categories,
}: {
  products: Product[]
  categories: Category[]
}) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.short_description && p.short_description.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category_id === selectedCategory)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => Number(b.price) - Number(a.price))
    }

    return result
  }, [products, query, selectedCategory, sortBy])

  return (
    <>
      <div className="max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search furniture..."
          className="flex-1 bg-transparent border border-[#c9a24b] rounded px-4 py-3 text-sm text-[#f5f1e8] placeholder:text-[#9a9a9a]"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#0a0a0a] border border-[#c9a24b] rounded px-4 py-3 text-sm text-[#f5f1e8]"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="bg-[#0a0a0a] border border-[#c9a24b] rounded px-4 py-3 text-sm text-[#f5f1e8]"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-[#9a9a9a]">
          No products match your search/filter. Try adjusting it.
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
