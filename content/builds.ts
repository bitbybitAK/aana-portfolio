import type { Build } from '@/types/content';

export const builds: Build[] = [
  {
    id: 'baddie-in-progress',
    slug: 'baddie-in-progress',
    accent: 'pink',
    number: '01',
    title: 'Baddie in Progress',
    dek: 'A fitness app that respects how I actually train. Tracks sessions, volume, and progressive overload without the bro-marketing fluff.',
    status: 'in-progress',
    stack: [],
    links: [],
  },
  {
    id: 'weekly-digest',
    slug: 'weekly-digest',
    accent: 'lilac',
    number: '02',
    title: 'Weekly digest automation',
    dek: 'Reads my journal, calendar, and apps. Turns a week of noise into one quiet recap. Sundays only.',
    status: 'shipped',
    stack: [],
    links: [],
  },
];
