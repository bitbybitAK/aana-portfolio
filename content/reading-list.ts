import type { Book } from '@/types/content';

export const readingList: Book[] = [
  {
    id: 'yesteryear',
    slot: 'b1',
    accent: 'sage',
    genre: 'fiction',
    title: 'Yesteryear',
    author: 'Caro Claire Burke',
    opinion: 'My jaw was on the floor the entire time.',
    coverImage: '/books/book-yesteryear.jpg',
  },
  {
    id: 'the-great-alone',
    slot: 'b2',
    accent: 'pink',
    genre: 'fiction',
    title: 'The Great Alone',
    author: 'Kristin Hannah',
    opinion: 'Cried twice, no regrets.',
    coverImage: '/books/book-the-great-alone.jpg',
  },
  {
    id: 'artificial-unintelligence',
    slot: 'b3',
    accent: 'powder',
    genre: 'non-fiction',
    title: 'Artificial Unintelligence',
    author: 'Meredith Broussard',
    opinion: "A fun reality check on why tech doesn't fix everything.",
    coverImage: '/books/book-artificial-unintelligence.jpg',
  },
  {
    id: 'every-vow-you-break',
    slot: 'b4',
    accent: 'honey',
    genre: 'thriller',
    title: 'Every Vow You Break',
    author: 'Peter Swanson',
    opinion: 'Could not put it down, did not trust anyone in it.',
    coverImage: '/books/book-every-vow-you-break.jpg',
  },
];
