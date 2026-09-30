import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ErimaGodsOwnEnterprise via WhatsApp, email, or phone. We deliver furniture nationwide across Nigeria.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <section className="flex flex-col items-center text-center px-8 py-24 border-b border-[#c9a24b]/20">
        <p className="text-[#c9a24b] text-sm tracking-[0.3em] mb-4">GET IN TOUCH</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl mb-6">
          We'd love to hear from you
        </h1>
        <p className="text-[#9a9a9a] max-w-xl">
          Questions about a piece, custom sizing, or delivery? Reach us directly — we reply fast.
        </p>
      </section>

      <section className="px-8 py-20 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="border border-[#c9a24b]/20 p-6 text-center">
          <p className="text-[#c9a24b] text-sm tracking-wide mb-2">WHATSAPP</p>
          <p className="text-[#9a9a9a] mb-4">Fastest way to reach us.</p>
          <a
            href="https://wa.me/2348080112161"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c9a24b] text-[#c9a24b] px-6 py-2 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors"
          >
            Message us
          </a>
        </div>

        <div className="border border-[#c9a24b]/20 p-6 text-center">
          <p className="text-[#c9a24b] text-sm tracking-wide mb-2">EMAIL</p>
          <p className="text-[#9a9a9a] mb-4">For orders, questions, or support.</p>
          <a
            href="mailto:Erimabadoo2020@gmail.com"
            className="inline-block border border-[#c9a24b] text-[#c9a24b] px-6 py-2 text-sm tracking-wide hover:bg-[#c9a24b] hover:text-black transition-colors"
          >
            Send an email
          </a>
        </div>

        <div className="border border-[#c9a24b]/20 p-6 text-center sm:col-span-2">
          <p className="text-[#c9a24b] text-sm tracking-wide mb-2">PHONE</p>
          <p className="text-[#9a9a9a] mb-4">08080112161</p>
          <p className="text-[#9a9a9a] text-sm">We deliver nationwide, interstate.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
