import { BlogConfig } from './types';

export const blogConfig: BlogConfig = {
  metadata: {
    title: 'Blog | Oxbridge Admissions Consulting',
    description: 'Expert guides on Oxford, Cambridge, and UK university admissions. Get insider tips from our admissions consultants on how to maximize your chances of success.',
    openGraph: {
      title: 'Blog | Oxbridge Admissions Consulting',
      description: 'Expert guides on Oxford, Cambridge, and UK university admissions.',
      type: 'website',
      url: '/blog',
    },
  },
  hero: {
    title: 'Oxbridge Admissions Blog',
    description: 'Expert insights, tips, and guidance to help you navigate the competitive world of Oxford and Cambridge admissions. From personal statement advice to interview preparation, we\'ve got you covered.',
  },
  sections: {
    featured: {
      title: 'Featured Articles',
    },
    allArticles: {
      title: 'All Articles',
      emptyMessage: 'More articles coming soon. Stay tuned for expert insights on Oxbridge admissions.',
    },
  },
};