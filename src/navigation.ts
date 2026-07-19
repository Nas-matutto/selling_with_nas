import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#hp-expertise',
    },
    {
      text: 'Services',
      href: '/#hp-services',
    },
    {
      text: 'Building Area',
      links: [
        {
          text: '🌱 LeadLanding',
          href: getPermalink('/tools/leadlanding'),
        },
        {
          text: '🧮 E-Commerce Calculator',
          href: getPermalink('/tools/E-commerce_calculator'),
        },
        {
          text: '🚀 Launch Cost Estimator',
          href: getPermalink('/tools/launch-cost-estimator'),
        },
        {
          text: '🎯 Quizzings',
          href: getPermalink('/tools/quizzings'),
        },
        {
          text: '📊 Talk to Me Data',
          href: getPermalink('/tools/talk-to-me-data'),
        },
      ],
    },
    {
      text: 'AI Mentorship',
      href: '/ai-intensive-mentorship',
    },
    {
      text: 'Posts',
      href: '/blog',
    },
  ],
  actions: [{ text: "Let's Talk →", href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Content',
      links: [
        { text: 'Blog Posts', href: '/blog' },
        { text: 'Guides', href: '/guides' },
      ],
    },
    {
      title: 'Work with Me',
      links: [
        { text: 'Services', href: '/#hp-services' },
        { text: 'AI Mentorship', href: '/ai-intensive-mentorship' },
        { text: 'AI Masterclass', href: '/ai-masterclass-with-nas' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Talk to Me Data', href: '/tools/talk-to-me-data' },
        { text: 'LeadLanding', href: '/tools/leadlanding' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/nasser-mansurali-659145102/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@sellingwithnas' },
  ],
  footNote: `© 2026 Selling with Nas. All rights reserved.`,
};
