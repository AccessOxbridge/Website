# Next.js MDX Blog Setup for Oxbridge Admissions Website

You are an expert Next.js + TypeScript developer. Set up a production-ready MDX blog system for an Oxbridge admissions consulting website. Use Bun as the package manager.

## Requirements

### 1. Install Dependencies
```bash
bun add velite next-mdx-remote rss gray-matter
bun add -d @types/node date-fns
```

### 2. Create Project Structure
Generate these directories and files:
```
content/
├── blog/
│   └── example-post.mdx (sample template)

src/
├── app/
│   ├── blog/
│   │   ├── layout.tsx
│   │   ├── page.tsx (blog list page)
│   │   └── [slug]/
│   │       └── page.tsx (individual post page)
│   └── sitemap.ts (SEO)
├── lib/
│   ├── blog.ts (fetch & process posts)
│   └── mdx-components.tsx (custom MDX styling)
├── components/
│   ├── BlogCard.tsx (post preview card)
│   ├── BlogMeta.tsx (post header: title, author, date)
│   └── BlogRelated.tsx (related posts section)
└── types/
    └── blog.ts (TypeScript interfaces)

velite.config.ts (root level)
```

### 3. Velite Configuration
Create `velite.config.ts` at the project root with:
- Collection: `blog` pattern matching `blog/**/*.mdx`
- Schema validation for:
  - title (required, max 99 chars)
  - slug (auto-generated)
  - description (required, max 999 chars)
  - author (required)
  - publishedAt (ISO date, required)
  - updatedAt (ISO date, optional)
  - category (enum: "Oxbridge Admissions", "Interview Tips", "Personal Statement", "UK Universities", "Student Stories")
  - tags (array of strings)
  - image (URL, required)
  - featured (boolean, default false)
  - body (markdown)
- Transform: Auto-calculate readingTime (words / 200), generate permalink `/blog/{slug}`
- MDX processing enabled

### 4. Blog Type Definitions
Create `src/types/blog.ts` with interface:
```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  featured: boolean;
  body: string;
  permalink: string;
}
```

### 5. Blog Utility Functions
Create `src/lib/blog.ts` with functions:
- `getAllPosts()`: Returns all posts sorted by publishedAt (newest first)
- `getPostBySlug(slug)`: Returns single post or null
- `getRelatedPosts(slug, limit)`: Returns related posts in same category
- Use gray-matter to parse MDX frontmatter
- Implement error handling for missing posts

### 6. MDX Components
Create `src/lib/mdx-components.tsx` with styled components for:
- h1, h2, h3 (heading levels with proper spacing)
- p (paragraphs with line-height and margins)
- a (links with hover states, external links open in new tab)
- code (inline code: gray background, monospace font)
- pre (code blocks: dark background, scrollable)
- ul, ol (lists with proper spacing)
- blockquote (styled with left border, italic text)

Use Tailwind CSS utility classes for all styling.

### 7. Blog Card Component
Create `src/components/BlogCard.tsx`:
- Display post image, title, description, author, date, reading time
- Show category badge
- Link to `/blog/{slug}`
- Accept optional `featured` prop for different styling
- Use Tailwind for responsive grid layout

### 8. Blog Meta Component
Create `src/components/BlogMeta.tsx`:
- Display post title (h1)
- Author name with credentials text
- Publication date (formatted nicely)
- Reading time estimate
- Category badge
- Update date (if available)

### 9. Blog Related Component
Create `src/components/BlogRelated.tsx`:
- Section titled "Related Articles"
- Display 3 related posts using BlogCard
- Use grid layout

### 10. Blog Layout
Create `src/app/blog/layout.tsx`:
- Standard layout wrapper for blog section
- Applies consistent styling

### 11. Blog List Page
Create `src/app/blog/page.tsx`:
- Fetch all posts using `getAllPosts()`
- Separate featured posts (top 3) from regular posts
- Hero section with title "Oxbridge Admissions Blog" and description
- Featured section showing featured posts in 3-column grid
- All posts section showing remaining posts in 2-column grid
- Add SEO metadata:
  - title: "Blog | Oxbridge Admissions Consulting"
  - description: "Expert guides on Oxford, Cambridge, and UK university admissions."
  - OpenGraph tags with proper URLs

### 12. Individual Blog Post Page
Create `src/app/blog/[slug]/page.tsx`:
- Dynamic route for `/blog/{slug}`
- Fetch post using `getPostBySlug(slug)`
- Return 404 (notFound()) if post doesn't exist
- Generate dynamic metadata using `generateMetadata()`:
  - Use post title, description, image
  - Add OpenGraph tags with article type
  - Include author and publication date
- Render post using `MDXRemote` with custom components
- Display post image, meta info (BlogMeta component)
- Display post body with prose styling
- Show related posts at bottom (BlogRelated component)

### 13. Sitemap for SEO
Create `src/app/sitemap.ts`:
- Homepage: priority 1.0, weekly frequency
- `/blog`: priority 0.9, daily frequency
- Each blog post: priority 0.8, monthly frequency
- Use post's `publishedAt` or `updatedAt` as lastModified

### 14. Update Next Config
Update `next.config.ts`:
- Add MDX to pageExtensions
- Configure remote image patterns to allow all HTTPS sources

### 15. Sample Blog Post
Create `content/blog/example-post.mdx` with:
- YAML frontmatter with all required fields
- Sample content using various markdown elements
- Make it about "How to Get Into Oxford (2025 Full Guide)"
- Include h2 headings, paragraphs, lists, code blocks, blockquotes

## Technical Specifications

- Use **App Router** (Next.js 15+) with Server Components
- **No browser storage** (localStorage, sessionStorage, cookies, IndexedDB)
- **Tailwind CSS** for all styling
- **TypeScript** with strict mode enabled
- **File system storage** for blog posts (no database initially)
- **Static generation** for all blog routes (ISR optional)
- Reading time auto-calculated at 200 words/minute
- Category enumeration for filtering
- Featured posts system for homepage highlighting

## SEO Best Practices

- Add metadata to all pages
- Generate sitemap
- Use semantic HTML (article, section, header tags)
- Implement Open Graph tags for social sharing
- Auto-format dates to ISO format in metadata
- Include author information in metadata

## Code Style

- Use TypeScript interfaces for all data structures
- Use async/await for async operations
- Export default for page components
- Use named exports for utilities
- Implement error handling (try/catch, null checks)
- Add JSDoc comments for complex functions

## Output Format

After setup is complete:
1. Show me the full file structure created
2. Provide the key config files (velite.config.ts, next.config.ts)
3. List all new files created
4. Provide one command to run the dev server with Bun
5. Show how to create a new blog post

Do not skip any steps. Build the complete, production-ready blog system.