import { StoriesConfig } from './types';

export const storiesConfig: StoriesConfig = {
  title: "Stories",
  buttonText: "Read all stories",
  stories: [
    {
      id: 1,
      category: "Experience",
      title: "Unleashing the Edge. Sharpened. At Goodwood Festival of Speed 2025.",
      date: "17 July 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/goodwood-hero-desktop-3-30.jpg",
      alt: "Aston Martin racing car at Goodwood Festival of Speed",
      isTall: false
    },
    {
      id: 2,
      category: "Product",
      title: "Aston Martin and Apple CarPlay Ultra®",
      date: "15 May 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/bero-new-hero-29.jpg",
      alt: "Aston Martin interior showing Apple CarPlay",
      isTall: false
    },
    {
      id: 3,
      category: "Business",
      title: "Aston Martin x BERO",
      date: "12 November 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/bero-new-hero-26.jpg",
      alt: "Aston Martin partnership with BERO feature",
      isTall: true
    }
  ]
};