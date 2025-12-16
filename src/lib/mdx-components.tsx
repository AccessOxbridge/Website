import type { MDXComponents } from 'mdx/types'

// Custom MDX components with Tailwind CSS styling
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-6">
      {children}
    </h3>
  ),

  // Paragraph
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  },

  // Inline code
  code: ({ children }) => (
    <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),

  // Code blocks
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
      {children}
    </ol>
  ),

  // List items
  li: ({ children }) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
      {children}
    </blockquote>
  ),

  // Strong and emphasis
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700">
      {children}
    </em>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="border-gray-200 my-8" />
  ),
}
