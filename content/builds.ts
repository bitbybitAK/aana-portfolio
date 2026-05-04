import type { Build } from '@/types/content';

export const builds: Build[] = [
  {
    id: 'baddie-in-progress',
    slug: 'baddie-in-progress',
    accent: 'pink',
    number: '01',
    title: 'Baddie in Progress',
    dek: 'A personal fitness and habit tracker built because changing your lifestyle is never just about the gym.',
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
    dek: 'Reads my journal, calendar, Slack, and a few apps every Sunday morning. Writes me a one-paragraph recap.',
    status: 'shipped',
    stack: [],
    links: [],
  },
];
