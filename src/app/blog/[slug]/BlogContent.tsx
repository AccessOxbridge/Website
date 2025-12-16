'use client'

import ReactMarkdown, { type Components } from 'react-markdown'
import { mdxComponents } from '@/lib/mdx-components'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <ReactMarkdown components={mdxComponents as Components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
