import type { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts, getPostsByCategory } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'
import { blogConfig } from '@/configs/blog.config'

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const category = typeof searchParams.category === 'string' ? searchParams.category : null

  if (category) {
    const categoryTitles = {
      'oxbridge': 'Oxbridge Guides and Resources',
      'uk-universities': 'UK University Guides and Resources',
      'international': 'International Student Guides and Resources'
    }

    const title = categoryTitles[category as keyof typeof categoryTitles] || 'Blog'
    return {
      ...blogConfig.metadata,
      title: `${title} | Oxbridge Admissions Consulting`,
      description: `Expert ${title.toLowerCase()} to help you navigate UK university admissions.`
    }
  }

  return blogConfig.metadata
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const category = typeof searchParams.category === 'string' ? searchParams.category : null

  let allPosts = await getAllPosts()
  let featuredPosts = (await getFeaturedPosts()).slice(0, 3)

  // Filter posts by category if specified
  if (category) {
    const categoryMapping = {
      'oxbridge': 'Oxbridge Admissions' as const,
      'uk-universities': 'UK Universities' as const,
      'international': 'International Students' as const
    }

    const blogCategory = categoryMapping[category as keyof typeof categoryMapping]
    if (blogCategory) {
      allPosts = await getPostsByCategory(blogCategory)
      featuredPosts = featuredPosts.filter(post => post.category === blogCategory).slice(0, 3)
    }
  }

  const regularPosts = allPosts.filter(post => !post.featured)

  const getCategoryInfo = (cat: string | null) => {
    if (!cat) return null

    const categoryInfo = {
      'oxbridge': {
        title: 'Oxbridge Guides and Resources',
        description: 'Expert insights and comprehensive guides specifically for Oxford and Cambridge applications. From personal statements to interview preparation, we\'ve got you covered.'
      },
      'uk-universities': {
        title: 'UK University Guides and Resources',
        description: 'Complete guides for all UK universities beyond Oxbridge. Course selection, application strategies, and insider tips for success across all institutions.'
      },
      'international': {
        title: 'International Student Guides and Resources',
        description: 'Specialized resources for international applicants. Visa guidance, cultural adaptation, scholarships, and strategies for studying in the UK.'
      }
    }

    return categoryInfo[cat as keyof typeof categoryInfo] || null
  }

  const categoryInfo = getCategoryInfo(category)

  return (
    <div className="space-y-12 pt-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {categoryInfo ? categoryInfo.title : blogConfig.hero.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {categoryInfo ? categoryInfo.description : blogConfig.hero.description}
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
