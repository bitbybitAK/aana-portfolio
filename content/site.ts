import type { SiteContent } from '@/types/content';

export const site: SiteContent = {
  meta: {
    title: 'Aana Khanduri',
    description:
      'Field Notebook Vol. I. Product analytics, data projects, personal builds.',
  },
  sidebar: {
    name: 'Aana Khanduri',
    taglinePlaceholder: "[ a tagline you'll add, your own ]",
    exploreLabel: 'explore',
    navLinks: [
      { number: '01', label: 'About me', sectionId: 'about' },
      { number: '02', label: 'Builds', sectionId: 'builds' },
      { number: '03', label: 'Analytics projects', sectionId: 'analytics' },
      { number: '04', label: 'Case studies', sectionId: 'case-studies' },
    ],
    findMeAtLabel: 'find me at',
    currentlyWorkingOnLabel: 'currently working on',
    status: {
      rotationMs: 6000,
      messages: [
        '[ status one ]',
        '[ status two ]',
        '[ status three ]',
        '[ status four ]',
      ],
    },
  },
  topbar: {
    left: 'field notebook · vol. i',
    right: 'homepage',
  },
  footer: {
    left: 'field notebook · vol. i',
    right: 'aana khanduri',
  },
  sections: {
    about: {
      number: '01',
      label: 'about me',
    },
    builds: {
      number: '02',
      label: 'builds',
      title: 'Things I made because I wanted them to exist.',
      summary:
        'Two cards. Both in active use. Real screen recordings drop in when I record them.',
    },
    analyticsProjects: {
      number: '03',
      label: 'analytics projects',
      title: 'Smaller experiments. Code on github.',
      summary:
        'Where I actually work with data. SQL, Python, a few rabbit holes.',
    },
    caseStudies: {
      number: '04',
      label: 'case studies',
      title: 'How I think about consumer products.',
      summary:
        'Each one starts with the strategy and ends with a recommendation. Hover any card to see what it analyzes.',
    },
    comingSoon: {
      number: '05',
      label: 'coming soon',
      body: 'A new section is being written. Check back.',
    },
  },
  socials: [
    { label: 'email', url: '#' },
    { label: 'linkedin', url: '#' },
    { label: 'github', url: '#' },
  ],
};
