import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <section className="flex flex-col items-center text-center px-8 py-24 border-b border-[#c9a24b]/20">
        <p className="text-[#c9a24b] text-sm tracking-[0.3em] mb-4">OUR STORY</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl mb-6">
          Furniture, built with hands that care
        </h1>
        <p className="text-[#9a9a9a] max-w-xl">
          For over five years, ErimaGodsOwnEnterprise has been turning raw materials
          into furniture people actually live with — pieces built to be used, not just looked at.
        </p>
      </section>

      <section className="px-8 py-20 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl mb-6">How it started</h2>
        <p className="text-[#9a9a9a] leading-relaxed mb-4">
          ErimaGodsOwnEnterprise was founded by <span className="text-[#f5f1e8]">Erima Valentine Nwokeji</span>,
          who set out to build furniture that didn't force a choice between quality and
          affordability. What began as a small workshop has grown, over more than five years,
          into a trusted name for handmade sofas and furniture — without losing the attention
          to detail that started it all.
        </p>
        <p className="text-[#9a9a9a] leading-relaxed">
          Every piece that leaves our workshop is finished by hand, built to hold up to real
          life, and made for homes and offices that don't settle for ordinary.
        </p>
      </section>

      <section className="px-8 py-20 border-t border-[#c9a24b]/20">
        <h2 className="font-display text-2xl text-center mb-12">Why people choose us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-[#c9a24b]/20 p-6">
            <p className="text-[#c9a24b] text-sm tracking-wide mb-2">HANDMADE</p>
            <p className="text-[#9a9a9a]">
              Every piece is hand-finished by skilled craftsmen, not mass-produced on a line.
            </p>
          </div>
          <div className="border border-[#c9a24b]/20 p-6">
            <p className="text-[#c9a24b] text-sm tracking-wide mb-2">MADE TO ORDER</p>
            <p className="text-[#9a9a9a]">
              Need a custom size or design? We build furniture around what your space actually needs.
            </p>
          </div>
          <div className="border border-[#c9a24b]/20 p-6">
            <p className="text-[#c9a24b] text-sm tracking-wide mb-2">FAIR PRICING</p>
            <p className="text-[#9a9a9a]">
              Quality craftsmanship shouldn't come with an inflated price tag — we keep ours honest.
            </p>
          </div>
          <div className="border border-[#c9a24b]/20 p-6">
            <p className="text-[#c9a24b] text-sm tracking-wide mb-2">NATIONWIDE DELIVERY</p>
            <p className="text-[#9a9a9a]">
              We deliver interstate, nationwide — wherever you are, we can get it to you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 border-t border-[#c9a24b]/20 text-center">
        <h2 className="font-display text-2xl mb-4">Ready to furnish your space?</h2>
        <a href="/shop" className="inline-block bg-[#c9a24b] text-black px-8 py-3 text-sm tracking-wide font-medium hover:bg-[#dab868] transition-colors">
          Shop the Collection
        </a>
      </section>

      <Footer />
    </div>
  );
}
