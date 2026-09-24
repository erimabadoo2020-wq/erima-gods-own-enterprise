'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

export default function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-[#c9a24b]/20">
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
        <a href="#" className="hover:text-[#c9a24b] transition-colors">About</a>
        <a href="#" className="hover:text-[#c9a24b] transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
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
        <a href="/shop" className="border border-[#c9a24b] text-[#c9a24b] px-5 py-2 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors">
          Shop Now
        </a>
      </div>
    </header>
  )
}
