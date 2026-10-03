import { createClient } from '@/lib/supabase/server'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const SAMPLE_TESTIMONIALS = [
  {
    name: "Customer Name",
    location: "City, State",
    quote: "Replace this with a real quote from a happy customer about their experience with your furniture.",
  },
  {
    name: "Customer Name",
    location: "City, State",
    quote: "Replace this with a real quote — mention delivery, quality, or how the piece looks in their home.",
  },
  {
    name: "Customer Name",
    location: "City, State",
    quote: "Replace this with a real quote from someone who ordered a custom size or design.",
  },
]

export default async function Home() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from('categories').select('*').order('created_at')

  return (
    <div>
      <Header />

      <section className="flex flex-col items-center text-center px-8 py-32 border-b border-[#c9a24b]/20">
        <p className="text-[#c9a24b] text-sm tracking-[0.3em] mb-4">
          CRAFTED FOR COMFORT
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight max-w-2xl mb-6">
          Furniture built to hold your best moments
        </h1>
        <p className="text-[#9a9a9a] max-w-md mb-10">
          Executive, dining, and lounge furniture finished by hand — designed for homes and offices that don't settle for ordinary.
        </p>
        <a href="/shop" className="bg-[#c9a24b] text-black px-8 py-3 text-sm tracking-wide font-medium hover:bg-[#dab868] transition-colors">
          Shop the Collection
        </a>
      </section>

      <section className="px-8 py-24">
        <h2 className="font-display text-3xl text-center mb-4">
          Shop by Category
        </h2>
        <p className="text-[#9a9a9a] text-center mb-16">
          Find the right furniture for every room
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories?.map((cat) => (
            <div key={cat.id} className="relative bg-[#141414] border border-[#c9a24b]/20 h-64 flex items-end p-6 hover:border-[#c9a24b]/60 transition-colors overflow-hidden">
              {cat.image_url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cat.image_url} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <span className="relative font-display text-xl">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-24 border-t border-[#c9a24b]/20">
        <h2 className="font-display text-3xl text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-center text-xs text-[#9a9a9a]/60 tracking-wide mb-16">
          [SAMPLE CONTENT — replace with real customer feedback before launch]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SAMPLE_TESTIMONIALS.map((t, i) => (
            <div key={i} className="border border-[#c9a24b]/20 p-6 relative">
              <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider text-[#c9a24b]/50 border border-[#c9a24b]/30 px-2 py-0.5 rounded">
                Sample
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a24b]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#c9a24b]">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653Zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438ZM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-[#9a9a9a]">{t.location}</p>
                </div>
              </div>
              <p className="text-[#9a9a9a] text-sm italic">&quot;{t.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-20 border-t border-[#c9a24b]/20 text-center">
        <h2 className="font-display text-2xl mb-4">
          Have a question about a piece of furniture?
        </h2>
        <p className="text-[#9a9a9a] mb-8">
          Chat with us directly on WhatsApp — we reply fast.
        </p>
        <a href="https://wa.me/2348080112161" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#c9a24b] text-[#c9a24b] px-8 py-3 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors">
          Message us on WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
