'use client'

import { useState, useRef, useEffect } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import { mdxComponents } from '@/lib/mdx-components'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [content])

  // Calculate the visible height (55% of content)
  const visibleHeight = contentHeight * 0.55

  return (
    <div className="relative">
      {/* Content container with conditional max-height */}
      <div
        ref={contentRef}
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100"
        style={{
          maxHeight: isUnlocked ? 'none' : `${visibleHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-out'
        }}
      >
        <ReactMarkdown components={mdxComponents as Components}>
          {content}
        </ReactMarkdown>
      </div>

      {/* Blur overlay and signup CTA */}
      {!isUnlocked && contentHeight > 0 && (
        <div className="absolute bottom-0 left-0 right-0">
          {/* Gradient fade overlay */}
          <div
            className="h-64 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none"
          />

          {/* Signup CTA Card */}
          <div className="bg-white pt-4 pb-8">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 rounded-2xl" />

              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Lock icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Continue Reading
                  </h3>

                  <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                    Sign up for free to unlock the full article and gain access to exclusive Oxbridge insights, guides, and resources.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://aoportal.vercel.app/signup"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                    >
                      <span>Sign Up for Free</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>

                    <span className="text-gray-400 text-sm">
                      Already have an account?{' '}
                      <a
                        href="https://aoportal.vercel.app/login"
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                      >
                        Log in
                      </a>
                    </span>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-8 pt-6 border-t border-gray-700/50">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free to join</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No credit card required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Instant access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
