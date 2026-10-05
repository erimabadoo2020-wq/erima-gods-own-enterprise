import { createClient } from '@/lib/supabase/server'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const TESTIMONIALS = [
  {
    photo: "/testimonial-blessing-johnson.jpg",
    name: "Blessing Johnson",
    location: "Lagos, Lagos State",
    quote: "I'm so in love with my new sofa from Erimagodsownenterprise! The quality is top notch and it looks even better in my living room. The delivery was on time and the team were very professional. I'll definitely be ordering again soon. Highly recommended!",
  },
  {
    photo: "/testimonial-james-isaac.jpg",
    name: "James Isaac",
    location: "Lagos, Lagos State",
    quote: "The dining set I ordered is just perfect! The quality is excellent and it adds so much class to my home. The delivery was very fast and the customer service was top tier. I'm really impressed. Keep up the good work!",
  },
  {
    photo: "/testimonial-abdul-don.jpg",
    name: "Abdul Don",
    location: "Lagos, Lagos State",
    quote: "I bought a sofa set from Erimagodsownenterprise and I'm super happy with my purchase. The fabric, colour and finish are exactly what I wanted. The team was very responsive and the delivery was smooth. I will definitely be coming back for more furniture.",
  },
  {
    photo: "/testimonial-godwin-julius.jpg",
    name: "Godwin Julius",
    location: "Abuja, FCT",
    quote: "I got my bed from Erimagodsownenterprise and I must say I'm beyond satisfied. The quality is amazing, it's sturdy and so comfortable. The delivery was on time and the guys were really polite. I'll recommend you to anyone looking for quality furniture.",
  },
  {
    photo: "/testimonial-fresh-david.jpg",
    name: "Fresh David",
    location: "Lagos, Lagos State",
    quote: "The chair set I ordered is exactly what I wanted. The quality is top notch, very comfortable and stylish. The delivery was fast and the customer service was excellent. I'm really impressed and will definitely shop again.",
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
        <h2 className="font-display text-3xl text-center mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border border-[#c9a24b]/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#c9a24b]/30"
                />
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
