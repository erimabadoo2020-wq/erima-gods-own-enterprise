'use client'

import Link from 'next/link'
import { useWishlist } from '@/lib/wishlist-context'
import { useCart } from '@/lib/cart-context'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()
  const { addItem } = useCart()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <section className="px-8 py-16 max-w-3xl mx-auto">
        <h1 className="font-display text-3xl mb-10">Your Wishlist</h1>

        {items.length === 0 ? (
          <div>
            <p className="text-[#9a9a9a] mb-6">You haven&apos;t saved anything yet.</p>
            <Link href="/shop" className="inline-block bg-[#c9a24b] text-black px-6 py-3 text-sm font-medium hover:bg-[#dab868] transition-colors">
              Browse the Collection
            </Link>
          </div>
        ) : (
          <div className="border border-[#c9a24b]/20">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b border-[#c9a24b]/10 last:border-b-0">
                <Link href={`/shop/${item.slug}`} className="shrink-0">
                  {item.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover" />
                  ) : (
                    <div className="w-20 h-20 bg-[#141414]" />
                  )}
                </Link>
                <div className="flex-1">
                  <Link href={`/shop/${item.slug}`} className="font-medium hover:text-[#c9a24b] transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-[#c9a24b]">₦{Number(item.price).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => {
                    addItem({ id: item.id, name: item.name, price: item.price, image_url: item.image_url })
                  }}
                  className="border border-[#c9a24b] text-[#c9a24b] px-4 py-2 text-sm hover:bg-[#c9a24b] hover:text-black transition-colors"
                >
                  Add to Cart
                </button>
                <button onClick={() => removeItem(item.id)} className="text-red-400 text-sm hover:underline ml-2">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
