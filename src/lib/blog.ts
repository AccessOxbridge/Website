import { supabase } from './supabase'
import type { BlogPost, BlogCategory } from '@/types/blog'

/**
 * Get all blog posts sorted by publishedAt (newest first)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching all posts:', error)
    return []
  }

  return data.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    publishedAt: new Date(post.published_at),
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
    categories: post.categories as BlogCategory[],
    tags: post.tags || [],
    image: post.image,
    readingTime: post.reading_time,
    featured: post.featured,
    body: post.body,
    permalink: post.permalink,
    createdAt: new Date(post.created_at),
  }))
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      console.error(`Error fetching post with slug "${slug}":`, error)
      return null
    }

    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      description: data.description,
      author: data.author,
      publishedAt: new Date(data.published_at),
      updatedAt: data.updated_at ? new Date(data.updated_at) : undefined,
      categories: data.categories as BlogCategory[],
      tags: data.tags || [],
      image: data.image,
      readingTime: data.reading_time,
      featured: data.featured,
      body: data.body,
      permalink: data.permalink,
      createdAt: new Date(data.created_at),
    }
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error)
    return null
  }
}

/**
 * Get related posts in the same category, excluding the current post
 */
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const currentPost = await getPostBySlug(slug)
    if (!currentPost) return []

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .contains('categories', [currentPost.categories[0]]) // Related to the first category for now
      .neq('slug', slug)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error(`Error fetching related posts for slug "${slug}":`, error)
      return []
    }

    return data.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      author: post.author,
      publishedAt: new Date(post.published_at),
      updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
      categories: post.categories as BlogCategory[],
      tags: post.tags || [],
      image: post.image,
      readingTime: post.reading_time,
      featured: post.featured,
      body: post.body,
      permalink: post.permalink,
      createdAt: new Date(post.created_at),
    }))
  } catch (error) {
    console.error(`Error fetching related posts for slug "${slug}":`, error)
    return []
  }
}

/**
 * Get featured posts
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('featured', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }

  return data.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    publishedAt: new Date(post.published_at),
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
    categories: post.categories as BlogCategory[],
    tags: post.tags || [],
    image: post.image,
    readingTime: post.reading_time,
    featured: post.featured,
    body: post.body,
    permalink: post.permalink,
    createdAt: new Date(post.created_at),
  }))
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .contains('categories', [category])
    .order('published_at', { ascending: false })

  if (error) {
    console.error(`Error fetching posts by category "${category}":`, error)
    return []
  }

  return data.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    publishedAt: new Date(post.published_at),
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
    categories: post.categories as BlogCategory[],
    tags: post.tags || [],
    image: post.image,
    readingTime: post.reading_time,
    featured: post.featured,
    body: post.body,
    permalink: post.permalink,
    createdAt: new Date(post.created_at),
  }))
}
