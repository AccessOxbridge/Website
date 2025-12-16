import type { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog | Oxbridge Admissions Consulting',
  description: 'Expert guides on Oxford, Cambridge, and UK university admissions. Get insider tips from our admissions consultants on how to maximize your chances of success.',
  openGraph: {
    title: 'Blog | Oxbridge Admissions Consulting',
    description: 'Expert guides on Oxford, Cambridge, and UK university admissions.',
    type: 'website',
    url: '/blog',
  },
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts().slice(0, 3)
  const regularPosts = allPosts.filter(post => !post.featured)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Oxbridge Admissions Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights, tips, and guidance to help you navigate the competitive world of Oxford and Cambridge admissions.
          From personal statement advice to interview preparation, we've got you covered.
        </p>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Articles
        </h2>
        {regularPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              More articles coming soon. Stay tuned for expert insights on Oxbridge admissions.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
