import { BlogCard } from './BlogCard'
import type { BlogPost } from '@/types/blog'

interface BlogRelatedProps {
  posts: BlogPost[]
}

export function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
