import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Clock, User } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? "group hover:shadow-lg transition-shadow duration-200 border-2 border-gray-100 hover:border-gray-200"
    : "group hover:shadow-md transition-shadow duration-200"

  return (
    <Link href={post.permalink} className="block">
      <Card className={cardClasses}>
        <CardHeader className="p-0">
          <div className={`relative overflow-hidden rounded-t-lg ${featured ? 'h-64' : 'h-48'}`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes={featured ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-gray-800 hover:bg-white">
                {post.category}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <h3 className={`font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {post.description}
          </p>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center justify-between w-full text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            <time dateTime={post.publishedAt.toISOString()}>
              {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
            </time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
