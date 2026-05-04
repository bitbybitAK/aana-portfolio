import type { AboutContent, IntroVersionB } from '@/types/content';

const introVersionA =
  "I just moved to San Francisco from the East Coast and the energy here genuinely got me. I work across data and product, between business questions and the people who need to answer them. I've worked with real estate, product, and sales data, and I'm genuinely curious about how the same behavior shows up differently across industries.";

const introVersionB: IntroVersionB = {
  prose: introVersionA,
  bullets: [
    'Using AI to fix my own daily friction points before anything else',
    'In a random hobby class I signed up for on a whim',
    'Chasing a monthly challenge or deep in a good book',
    'Somewhere with a really good drink, probably already on my way',
  ],
  bulletsHeader: 'Lately:',
};

// Toggle this constant to switch between versions on localhost.
export const ACTIVE_INTRO_VERSION: 'A' | 'B' = 'A';
export const introA = introVersionA;
export const introB = introVersionB;

export const about: AboutContent = {
  communitiesSubhead: "communities I'm part of",
  readingSubhead: 'on my reading list',
  heroPhotos: [
    {
      id: 'hero-photo-1',
      slot: 1,
      accent: 'sage',
      decor: '[ photo of you ]',
      caption: 'Hi there!',
      cursorText: 'hi there!',
    },
    {
      id: 'hero-photo-2',
      slot: 2,
      accent: 'powder',
      decor: '[ NYC rooftop ]',
      caption: "Can't go wrong with a NYC rooftop",
      cursorText: 'nyc rooftop',
    },
    {
      id: 'hero-photo-3',
      slot: 3,
      accent: 'peach',
      decor: '[ sea + SF ]',
      caption: 'Marina SF',
      cursorText: 'marina sf',
    },
    {
      id: 'hero-photo-4',
      slot: 4,
      accent: 'honey',
      decor: '[ women in tech event ]',
      caption: 'Women in Tech event',
      cursorText: 'women in tech',
    },
  ],
};
