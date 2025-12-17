# Content Configuration System

This directory contains all the configurable content for the Oxbridge Admissions website. Each page/feature has its own config file that can be easily edited to update content without touching component code.

## Structure

- `types.ts` - TypeScript type definitions for all config objects
- `icon-map.tsx` - Mapping of icon string identifiers to Lucide React components
- `home.config.ts` - Configuration for the home page hero section
- `stories.config.ts` - Configuration for the stories section
- `blog.config.ts` - Configuration for the blog page
- `news.config.ts` - Configuration for the news section
- `approach-cards.config.ts` - Configuration for the approach cards section

## How to Use

### Adding New Content

1. **Define types** in `types.ts` for your new content structure
2. **Create a config file** with your content data
3. **Import and use** the config in your component instead of hardcoded data

### Updating Existing Content

Simply edit the values in the respective config files. The changes will automatically reflect in your components.

### Example

```typescript
// configs/example.config.ts
export const exampleConfig = {
  title: "My Page Title",
  description: "Description that can be changed easily"
};

// components/MyComponent.tsx
import { exampleConfig } from '@/configs/example.config';

export default function MyComponent() {
  return (
    <div>
      <h1>{exampleConfig.title}</h1>
      <p>{exampleConfig.description}</p>
    </div>
  );
}
```

## Benefits

- **Easy Content Updates**: Change text, images, and other content without code changes
- **Type Safety**: Full TypeScript support with proper type checking
- **Centralized Content**: All content in one place for easy management
- **Version Control**: Content changes are tracked in git
- **Team Collaboration**: Non-technical team members can update content

## Content Areas Covered

- **Home Page**: Hero slides, statistics, expertise items, testimonials, school logos
- **Stories Section**: Story cards with titles, dates, images, and categories
- **Blog Page**: Page titles, descriptions, and section headers
- **News Section**: News headlines, dates, and links
- **Approach Cards**: Card labels, titles, descriptions, images, and header content

## Adding New Pages

1. Create a new config file (e.g., `about.config.ts`)
2. Define the content structure in `types.ts`
3. Import and use in your page component
4. Update this README with the new page

## Icon Usage

For components that use icons, use string identifiers that map to Lucide React icons:

```typescript
{
  icon: "GraduationCap", // Maps to GraduationCap icon
  title: "Example"
}
```

Available icons are defined in `icon-map.tsx`.