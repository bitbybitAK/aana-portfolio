import type { Book } from '@/types/content';

export const readingList: Book[] = [
  {
    id: 'trustworthy-online-controlled-experiments',
    slot: 'b1',
    accent: 'sage',
    genre: 'non-fiction',
    title: 'Trustworthy Online Controlled Experiments',
    author: 'Kohavi, Tang, Xu',
    opinion:
      "\"The book that taught me most A/B test results aren't telling you what you think they are.\"",
  },
  {
    id: 'lean-analytics',
    slot: 'b2',
    accent: 'pink',
    genre: 'non-fiction',
    title: 'Lean Analytics',
    author: 'Croll & Yoskovitz',
    opinion:
      '"One metric that matters. The most useful framework an early-stage analyst can have."',
  },
  {
    id: 'placeholder-third-book',
    slot: 'b3',
    accent: 'powder',
    genre: '[ genre ]',
    title: '[ swap with your real third book ]',
    author: '[ author ]',
    opinion: '[ your one-sentence opinion ]',
  },
  {
    id: 'placeholder-fourth-book',
    slot: 'b4',
    accent: 'honey',
    genre: '[ genre ]',
    title: '[ swap with your fourth book ]',
    author: '[ author ]',
    opinion: '[ your one-sentence opinion ]',
  },
];
