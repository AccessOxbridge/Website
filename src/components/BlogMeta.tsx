import { format } from 'date-fns'
import { Clock, User, Calendar, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { BlogPost } from '@/types/blog'

interface BlogMetaProps {
  post: BlogPost
}

export function BlogMeta({ post }: BlogMetaProps) {
  return (
    <header className="mb-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
        {/* Author */}
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="font-medium">{post.author}</span>
          <span className="text-gray-400">•</span>
          <span>Oxbridge Admissions Expert</span>
        </div>

        {/* Publication Date */}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.publishedAt.toISOString()}>
            {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
          </time>
        </div>

        {/* Reading Time */}
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        <Tag className="h-4 w-4 text-gray-400" />
        <Badge variant="outline" className="text-sm">
          {post.category}
        </Badge>
      </div>

      {/* Updated Date (if available) */}
      {post.updatedAt && (
        <>
          <Separator className="my-4" />
          <p className="text-sm text-gray-500">
            Last updated: {format(new Date(post.updatedAt), 'MMMM dd, yyyy')}
          </p>
        </>
      )}
    </header>
  )
}
