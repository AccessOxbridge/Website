// Config types for content management
export interface StatItem {
  value: string;
  title: string;
  subtitle: string;
}

export interface ExpertiseItem {
  icon: string; // String identifier that maps to Lucide icon
  title: string;
  text: string;
}

export interface Testimonial {
  name: string;
  description: string;
  video: string;
}

export interface HeroSlide {
  id: number;
  subheading: string;
  headline: string;
  buttons: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
  type: 'video' | 'image';
  src: string;
}

export interface Story {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  isTall: boolean;
}

export interface BlogConfig {
  metadata: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
      url: string;
    };
  };
  hero: {
    title: string;
    description: string;
  };
  sections: {
    featured: {
      title: string;
    };
    allArticles: {
      title: string;
      emptyMessage: string;
    };
  };
}

export interface HomeConfig {
  hero: {
    slides: HeroSlide[];
  };
  stats: StatItem[];
  expertise: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    description: string;
    items: ExpertiseItem[];
  };
  testimonials: Testimonial[];
  logos: string[];
  schoolLogos: {
    title: string;
    buttonText: string;
  };
  testimonialsSection: {
    buttonText: string;
    title: string;
  };
}

export interface StoriesConfig {
  title: string;
  buttonText: string;
  stories: Story[];
}

export interface NewsItem {
  id: number;
  date: string;
  headline: string;
  link: string;
}

export interface NewsConfig {
  title: string;
  buttonText: string;
  newsItems: NewsItem[];
}

export interface ModelItem {
  id: number;
  label: string;
  name: string;
}

export interface ModelCarouselConfig {
  models: ModelItem[];
  buttons: {
    explore: string;
    configure: string;
  };
}