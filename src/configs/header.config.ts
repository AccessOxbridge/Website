import { HeaderConfig } from './types';

export const headerConfig: HeaderConfig = {
  navigation: [
    {
      title: 'Our Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'UK University applications',
          href: '/services',
        },
        {
          title: 'Oxbridge applications',
          href: '/services',
        },
        {
          title: 'GCSE/A-level',
          href: '/services',
        },
      ],
    },
    {
      title: 'Our Network',
      href: '/network',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Our Story',
          href: '/network',
        },
        {
          title: 'Articles',
          href: '/blog',
        },
        {
          title: 'Join Our Admissions Team',
          href: '/network',
        },
      ],
    },
    {
      title: 'Admissions Resources',
      href: '/blog',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Oxbridge Academic Guides',
          href: '/blog',
        },
        {
          title: 'UK University Guides',
          href: '/blog',
        },
        {
          title: 'International Student Guides',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Contact Us',
      href: '/contact',
      hasDropdown: false,
    },
  ],
  cta: {
    text: 'Get Started',
    href: '/consultation',
  },
};

