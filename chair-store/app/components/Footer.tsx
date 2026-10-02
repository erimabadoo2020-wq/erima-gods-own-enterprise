import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[var(--muted)]">
        <div>
          <Image
            src="/logo.png"
            alt="Erima God's Own Enterprise"
            width={160}
            height={124}
            className="h-14 w-auto mb-3"
          />
          <p>Premium furniture, crafted for those who notice the details.</p>
        </div>
        <div>
          <p className="text-[var(--ivory)] mb-3">Shop</p>
          <ul className="space-y-2">
            <li><a href="/shop" className="hover:text-[var(--gold)]">All furniture</a></li>
            <li><a href="/shop" className="hover:text-[var(--gold)]">Categories</a></li>
            <li><a href="/track-order" className="hover:text-[var(--gold)]">Track Order</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[var(--ivory)] mb-3">Get in touch</p>
          <ul className="space-y-2">
            <li><a href="mailto:Erimabadoo2020@gmail.com" className="hover:text-[var(--gold)]">Contact us</a></li>
            <li><a href="https://wa.me/2348080112161" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 flex justify-center gap-6">
        <a
          href="https://facebook.com/ErimaGodsownenterprise"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/erimagodsownenterprise"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.1 4.1 0 0 1-.98 1.51 4.1 4.1 0 0 1-1.51.98c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.51-.98 4.1 4.1 0 0 1-.98-1.51c-.16-.46-.35-1.26-.4-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.16 1.26-.35 2.43-.4C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.14 0-3.5.01-4.74.07-.96.04-1.48.2-1.82.34-.46.18-.79.39-1.13.73-.34.34-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.96.2 1.48.34 1.82.18.46.39.79.73 1.13.34.34.67.55 1.13.73.34.14.86.3 1.82.34 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.96-.04 1.48-.2 1.82-.34.46-.18.79-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.96-.2-1.48-.34-1.82a3.04 3.04 0 0 0-.73-1.13 3.04 3.04 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34-1.24-.06-1.6-.07-4.74-.07Zm0 4.14a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-1.99a1.15 1.15 0 1 1-2.29 0 1.15 1.15 0 0 1 2.29 0Z" />
          </svg>
        </a>
        <a
          href="https://tiktok.com/@erimaGodsownenterprise"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M16.6 2h-3.2v13.4a2.8 2.8 0 1 1-2-2.68V9.4a6 6 0 1 0 5.2 5.94V8.2a7.6 7.6 0 0 0 4.4 1.4V6.4a4.4 4.4 0 0 1-4.4-4.4Z" />
          </svg>
        </a>
        <a
          href="https://x.com/ErimaGodsown"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.24 2H21l-6.6 7.54L22.2 22h-6.02l-4.72-6.17L5.98 22H3.2l7.06-8.07L1.8 2h6.16l4.26 5.64L18.24 2Zm-1.06 18.2h1.67L7.9 3.7H6.1l11.08 16.5Z" />
          </svg>
        </a>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-[var(--muted)] space-y-1">
        <p>© {new Date().getFullYear()} ErimaGodsOwnEnterprise. All rights reserved.</p>
        <p>Designed by PrideCultureTechnologies(BadMan)</p>
      </div>
    </footer>
  );
}
