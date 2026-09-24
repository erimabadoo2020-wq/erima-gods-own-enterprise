import Image from 'next/image'

export default function Header() {
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
      <a href="/shop" className="border border-[#c9a24b] text-[#c9a24b] px-5 py-2 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors">
        Shop Now
      </a>
    </header>
  )
}
