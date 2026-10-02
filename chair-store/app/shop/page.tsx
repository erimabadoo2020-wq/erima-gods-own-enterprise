import { createClient } from '@/lib/supabase/server'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ShopGrid from '@/app/components/ShopGrid'

export const metadata = {
  title: "Shop Our Collection",
  description:
    "Browse our full collection of handmade furniture — sofas, chairs, and more, finished by hand. Nationwide delivery across Nigeria.",
}

export default async function Shop() {
  const supabase = await createClient()
  const { data: products } = await supabase.from('products').select('*').eq('status', 'published').order('created_at', { ascending: false })
  const { data: categories } = await supabase.from('categories').select('id, name').order('name')

  return (
    <div className="min-h-screen">
      <Header />

      <section className="px-8 py-16">
        <h1 className="font-display text-4xl text-center mb-8">Our Collection</h1>
        <ShopGrid products={products || []} categories={categories || []} />
      </section>
      <Footer />
    </div>
  );
}
