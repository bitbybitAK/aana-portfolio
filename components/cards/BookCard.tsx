import type { CSSProperties } from 'react';
import type { Book } from '@/types/content';

const SLOT: Record<Book['slot'], { rotate: string; delay: string }> = {
  b1: { rotate: '-1.5deg', delay: '0s'   },
  b2: { rotate: '1deg',    delay: '1.5s' },
  b3: { rotate: '-0.5deg', delay: '3s'   },
  b4: { rotate: '2deg',    delay: '4.5s' },
};

export default function BookCard({ book }: { book: Book }) {
  const cfg = SLOT[book.slot];
  const style: CSSProperties = {
    transform: `rotate(${cfg.rotate})`,
    animationDelay: cfg.delay,
    ['--r' as string]: `rotate(${cfg.rotate})`,
  };
  return (
    <div
      className="book-flip h-80 group"
      data-cursor=""
      data-cursor-text="flip"
      style={style}
    >
      <div className="book-flip-inner">
        <div className="book-face book-front text-ink">
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
            <img
              src={book.coverImage}
              alt={`${book.title} by ${book.author}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-cream-2 opacity-[0.08] group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 4px 0 0 rgba(0, 0, 0, 0.12)' }}
            />
          </div>
        </div>
        <div className="book-face book-back">
          <p className="font-lora text-[15px] leading-[1.5] italic text-ink">
            {book.opinion}
          </p>
          <div className="font-mono text-[9px] tracking-[0.06em] uppercase text-ink-3">
            flip back ↻
          </div>
        </div>
      </div>
    </div>
  );
}
