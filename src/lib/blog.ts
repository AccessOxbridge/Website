import { blog } from '../../.velite'
import type { BlogPost } from '@/types/blog'

/**
 * Get all blog posts sorted by publishedAt (newest first)
 */
export function getAllPosts(): BlogPost[] {
  return blog.map(post => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
    updatedAt: post.updatedAt ? new Date(post.updatedAt) : undefined,
  })).sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const post = blog.find((post: { slug: string }) => post.slug === slug)
    if (!post) return null

    return {
      ...post,
      publishedAt: new Date(post.publishedAt),
      updatedAt: post.updatedAt ? new Date(post.updatedAt) : undefined,
    }
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error)
    return null
  }
}

/**
 * Get related posts in the same category, excluding the current post
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  try {
    const currentPost = getPostBySlug(slug)
    if (!currentPost) return []

      return blog
        .filter((post: { category: string; slug: string }) =>
          post.category === currentPost.category &&
          post.slug !== slug
        )
        .map(post => ({
          ...post,
          publishedAt: new Date(post.publishedAt),
          updatedAt: post.updatedAt ? new Date(post.updatedAt) : undefined,
        }))
        .sort((a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      .slice(0, limit)
  } catch (error) {
    console.error(`Error fetching related posts for slug "${slug}":`, error)
    return []
  }
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return blog
    .filter((post: { featured: any }) => post.featured)
    .map(post => ({
      ...post,
      publishedAt: new Date(post.publishedAt),
      updatedAt: post.updatedAt ? new Date(post.updatedAt) : undefined,
    }))
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return blog
    .filter((post: { category: string }) => post.category === category)
    .map(post => ({
      ...post,
      publishedAt: new Date(post.publishedAt),
      updatedAt: post.updatedAt ? new Date(post.updatedAt) : undefined,
    }))
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}
