import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from('blog_posts').select('title, excerpt').eq('slug', slug).single()

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from('blog_posts').select('*').eq('slug', slug).single()

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
        <Header />
        <div className="px-8 py-24 text-center">
          <p>Post not found.</p>
          <Link href="/blog" className="text-[#c9a24b] hover:underline">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const paragraphs = (post.content || '').split('\n').filter((p: string) => p.trim() !== '')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <article className="px-8 py-16 max-w-2xl mx-auto">
        <Link href="/blog" className="text-sm text-[#c9a24b] hover:underline mb-8 inline-block">← Back to Blog</Link>

        {post.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image_url} alt={post.title} className="w-full h-64 object-cover mb-8 border border-[#c9a24b]/20" />
        )}

        <p className="text-xs text-[#9a9a9a] mb-3">
          {new Date(post.created_at).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <h1 className="font-display text-3xl md:text-4xl mb-8">{post.title}</h1>

        <div className="space-y-4 text-[#d4d4d4] leading-relaxed">
          {paragraphs.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}
