import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: "Blog",
  description:
    "Furniture styling tips, care guides, and updates from ErimaGodsOwnEnterprise.",
}

export default async function BlogPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <section className="px-8 py-16">
        <h1 className="font-display text-4xl text-center mb-4">Styling Tips & Stories</h1>
        <p className="text-[#9a9a9a] text-center mb-16">
          Ideas for your home, straight from our workshop.
        </p>

        {!posts || posts.length === 0 ? (
          <p className="text-center text-[#9a9a9a]">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="bg-[#141414] border border-[#c9a24b]/20 hover:border-[#c9a24b]/60 transition-colors block">
                {post.cover_image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.cover_image_url} alt={post.title} className="h-48 w-full object-cover" />
                ) : (
                  <div className="h-48 bg-[#1a1a1a]" />
                )}
                <div className="p-6">
                  <p className="text-xs text-[#9a9a9a] mb-2">
                    {new Date(post.created_at).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 className="font-display text-xl mb-2">{post.title}</h2>
                  <p className="text-[#9a9a9a] text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
