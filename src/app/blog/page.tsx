import type { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'
import { blogConfig } from '@/configs/blog.config'

export const metadata: Metadata = blogConfig.metadata

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const featuredPosts = (await getFeaturedPosts()).slice(0, 3)
  const regularPosts = allPosts.filter(post => !post.featured)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {blogConfig.hero.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {blogConfig.hero.description}
        </p>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {blogConfig.sections.featured.title}
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
          {blogConfig.sections.allArticles.title}
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
              {blogConfig.sections.allArticles.emptyMessage}
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
