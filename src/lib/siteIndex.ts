// Small, hand-maintained site index used by the client-side search component.
// Keep this in sync with actual routes/content. Lightweight and fast.
export const siteIndex = [
  { title: 'Home', href: '/' , type: 'page'},
  { title: 'About', href: '/about', type: 'page'},
  { title: 'Contact', href: '/contact', type: 'page'},
  { title: 'Services', href: '/services', type: 'page'},

  // Services
  { title: 'Private Limited Company', href: '/services/private-limited', type: 'service' },
  { title: 'LLP Registration', href: '/services/llp', type: 'service' },
  { title: 'IEC Code', href: '/services/iec', type: 'service' },
  { title: 'ISO Certification', href: '/services/iso', type: 'service' },
  { title: 'MSME Registration', href: '/services/msme', type: 'service' },
  { title: 'FSSAI License', href: '/services/fssai', type: 'service' },
  { title: 'Trademark Registration', href: '/services/trademark', type: 'service' },
  // { title: 'Drug License', href: '/services/drug-license', type: 'service' },
  // { title: 'Startup India', href: '/services/startup-india', type: 'service' },
  // { title: 'EPR Registration', href: '/services/epr', type: 'service' },
  // { title: 'LMPC Registration', href: '/services/lmpc', type: 'service' },
  // { title: 'WPC Approval', href: '/services/wpc', type: 'service' },
  // { title: 'Director Nomination', href: '/services/director-nomination', type: 'service' },
  // { title: 'GeM Registration', href: '/services/gem', type: 'service' },

  // Blog / resources (keep a few important ones)
  { title: 'Designing a compliance engine that scales beyond Series A', href: '/blog/compliance-engine-series-a', type: 'blog' },
  { title: 'The ultimate incorporation checklist for founders in 2024', href: '/blog/incorporation-checklist-2024', type: 'blog' },
  { title: 'Building investor-grade data rooms in under 10 days', href: '/blog/investor-grade-data-room', type: 'blog' },

  // Policy pages
  { title: 'Privacy Policy', href: '/privacy', type: 'page' },
  { title: 'Terms of Service', href: '/terms', type: 'page' },
];

export default siteIndex;

