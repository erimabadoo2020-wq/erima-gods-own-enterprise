'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useCart } from '@/lib/cart-context'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

type Product = {
  id: string
  name: string
  slug: string
  price: number
  short_description: string | null
  stock_quantity: number
  image_url: string | null
  category_id: string | null
}

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    const loadProduct = async () => {
      const supabase = createClient()
      const { data } = await supabase.from('products').select('*').eq('slug', params.slug).eq('status', 'published').single()
      setProduct(data)
      setLoading(false)

      if (data?.category_id) {
        const { data: related } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', data.category_id)
          .eq('status', 'published')
          .neq('id', data.id)
          .limit(3)
        setRelatedProducts(related || [])
      }
    }
    loadProduct()
  }, [params.slug])

  const handleAddToCart = () => {
    if (!product) return
    addItem({ id: product.id, name: product.name, price: Number(product.price), image_url: product.image_url })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) {
    return <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] p-10">Loading...</div>
  }

  if (!product) {
    return <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] p-10">Product not found.</div>
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="px-8 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="h-96 w-full object-cover border border-[#c9a24b]/20" />
        ) : (
          <div className="h-96 bg-[#141414] border border-[#c9a24b]/20" />
        )}

        <div>
          <h1 className="font-display text-4xl mb-4">{product.name}</h1>
          <p className="text-[#c9a24b] text-2xl font-medium mb-6">₦{Number(product.price).toLocaleString()}</p>
          <p className="text-[#9a9a9a] mb-8">{product.short_description}</p>
          <p className="text-sm text-[#9a9a9a] mb-8">{product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}</p>
          <button onClick={handleAddToCart} disabled={product.stock_quantity === 0} className="inline-block bg-[#c9a24b] text-black px-8 py-3 text-sm tracking-wide font-medium hover:bg-[#dab868] transition-colors disabled:opacity-50">
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="px-8 py-16 border-t border-[#c9a24b]/20 max-w-5xl mx-auto">
          <h2 className="font-display text-2xl text-center mb-10">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link href={`/shop/${item.slug}`} key={item.id} className="bg-[#141414] border border-[#c9a24b]/20 hover:border-[#c9a24b]/60 transition-colors block">
                {item.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image_url} alt={item.name} className="h-56 w-full object-cover" />
                ) : (
                  <div className="h-56 bg-[#1a1a1a]" />
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{item.name}</h3>
                  <p className="text-[#c9a24b] font-medium">₦{Number(item.price).toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
