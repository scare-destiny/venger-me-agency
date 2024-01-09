import {
  getPermalink,
  // getBlogPermalink
} from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Work', href: '/work' },
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
    {
      text: 'Tools',
      links: [
        {
          text: 'Email Marketing Checklist',
          href: getPermalink('/email-marketing-checklist'),
        },
      ],
    },
    { text: 'Contact', href: '/contact' },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ type: 'button', text: 'Free Consultation', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Main', href: '/' },
        { text: 'Work', href: '/work' },
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },

    {
      title: 'Case Studies',
      links: [
        { text: 'AmazeOwl Case Study', href: '/work/amazeowl' },
        { text: 'J. v. G. technology GmbH Case Study', href: '/work/jvg-technology' },
        { text: 'J. v. G. Saddle Innovations UG Case Study', href: '/work/saddle-innovations' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Tools',
      links: [{ text: 'Email Marketing Checklist 🚀', href: '/email-marketing-checklist' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/eugenevenger/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/eugene.venger/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/eugene.venger' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/scare-destiny/' },
    { ariaLabel: 'Email', icon: 'tabler:brand-gmail', href: 'mailto:eugene@venger.me' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/scare_destiny' },
  ],
  footNote: `
  <p class="pt-2">
  <a href="mailto:eugene@venger.me" class="  no-underline hover:underline">
    eugene@venger.me
  </a>
</p>
<p class="pt-2">
<a href="tel:+16317422233" class="  no-underline hover:underline">
+1 631 742 2233
</a>
</p>
<p class='pt-4'>
    Made with ❤️ by Eugene Venger. All rights reserved.
</p>
<p class='pt-2'>
    Operating in 🇩🇪 Berlin, Germany
</p>
  
  `,
};
