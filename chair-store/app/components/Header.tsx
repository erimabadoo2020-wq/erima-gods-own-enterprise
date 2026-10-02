'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'

export default function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const { items: wishlistItems } = useWishlist()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-[#c9a24b]/20">
      <div className="flex items-center justify-between px-8 py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Erima God's Own Enterprise"
            width={160}
            height={124}
            className="h-12 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide text-[#f5f1e8]/80">
          <a href="/" className="hover:text-[#c9a24b] transition-colors">Home</a>
          <a href="/shop" className="hover:text-[#c9a24b] transition-colors">Shop</a>
          <a href="/about" className="hover:text-[#c9a24b] transition-colors">About</a>
          <a href="/contact" className="hover:text-[#c9a24b] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/wishlist" className="relative flex items-center text-[#f5f1e8]/80 hover:text-[#c9a24b] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c9a24b] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative flex items-center text-[#f5f1e8]/80 hover:text-[#c9a24b] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.98-4.684 2.57-7.145.075-.312-.174-.605-.494-.605H5.106M7.5 14.25L5.106 5.272M7.5 14.25L5.85 18.75m11.4-4.5l1.65 4.5m-13.05 0h13.05m-13.05 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13.05 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c9a24b] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                {itemCount}
              </span>
            )}
          </Link>

          <a
            href="/shop"
            className="hidden sm:inline-block border border-[#c9a24b] text-[#c9a24b] px-5 py-2 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors"
          >
            Shop Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-[#f5f1e8]/80 hover:text-[#c9a24b] transition-colors"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col text-sm tracking-wide text-[#f5f1e8]/80 border-t border-[#c9a24b]/10 px-8">
          <a href="/" onClick={() => setMenuOpen(false)} className="py-3 border-b border-[#c9a24b]/10 hover:text-[#c9a24b] transition-colors">Home</a>
          <a href="/shop" onClick={() => setMenuOpen(false)} className="py-3 border-b border-[#c9a24b]/10 hover:text-[#c9a24b] transition-colors">Shop</a>
          <a href="/about" onClick={() => setMenuOpen(false)} className="py-3 border-b border-[#c9a24b]/10 hover:text-[#c9a24b] transition-colors">About</a>
          <a href="/contact" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#c9a24b] transition-colors">Contact</a>
        </nav>
      )}
    </header>
  )
}
