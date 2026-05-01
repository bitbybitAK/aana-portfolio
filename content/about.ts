import type { AboutContent } from '@/types/content';

export const about: AboutContent = {
  taglineLead:
    "Master's in CS, working as a product analyst, currently in San Francisco.",
  taglineBody:
    "I read the strategy first, then the data. Most days are some mix of writing case studies, building tools I want to exist, and asking whether the question we're trying to answer is actually the right one.",
  communitiesSubhead: "communities I'm part of",
  readingSubhead: 'on my reading list',
  heroPhotos: [
    {
      id: 'hero-photo-1',
      slot: 1,
      accent: 'sage',
      decor: '[ photo of you ]',
      caption: 'somewhere · 2026',
      cursorText: 'hello',
    },
    {
      id: 'hero-photo-2',
      slot: 2,
      accent: 'powder',
      decor: '[ NYC ]',
      caption: 'east village winter',
      cursorText: 'east village',
    },
    {
      id: 'hero-photo-3',
      slot: 3,
      accent: 'peach',
      decor: '[ SF ]',
      caption: 'mission · golden hour',
      cursorText: 'mission',
    },
    {
      id: 'hero-photo-4',
      slot: 4,
      accent: 'honey',
      decor: '[ gym ]',
      caption: 'progressive overload',
      cursorText: 'lift',
    },
  ],
};
