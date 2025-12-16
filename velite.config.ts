import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  collections: {
    blog: {
      name: 'BlogPost',
      pattern: 'blog/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('blog'),
          description: s.string().max(999),
          author: s.string(),
          publishedAt: s.isodate(),
          updatedAt: s.isodate().optional(),
          category: s.enum([
            'Oxbridge Admissions',
            'Interview Tips',
            'Personal Statement',
            'UK Universities',
            'Student Stories',
          ]),
          tags: s.array(s.string()),
          image: s.string(),
          featured: s.boolean().default(false),
          body: s.raw(),
        })
        .transform((data) => {
          // Calculate reading time (words / 200)
          const content = data.body.toString()
          const words = content.split(/\s+/).length
          const readingTime = Math.ceil(words / 200)

          return {
            ...data,
            publishedAt: new Date(data.publishedAt),
            updatedAt: data.updatedAt ? new Date(data.updatedAt) : undefined,
            readingTime,
            permalink: `/blog/${data.slug}`,
          }
        }),
    },
  },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
