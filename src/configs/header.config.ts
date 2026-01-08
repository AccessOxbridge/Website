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
          title: 'Our Results',
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
      href: '/admissions-resources',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Oxbridge Guides and Resources',
          href: '/blog?category=oxbridge',
        },
        {
          title: 'UK University Guides and Resources',
          href: '/blog?category=uk-universities',
        },
        {
          title: 'International Student Guides and Resources',
          href: '/blog?category=international',
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

