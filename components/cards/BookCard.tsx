import type { CSSProperties } from 'react';
import type { Accent, Book } from '@/types/content';

const COVER_CLASS: Record<Accent, string> = {
  sage:   'bg-sage',
  pink:   'bg-pink',
  powder: 'bg-powder',
  honey:  'bg-honey',
  lilac:  'bg-lilac',
  peach:  'bg-peach',
};

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
      className="book-flip h-80"
      data-cursor=""
      data-cursor-text="flip"
      style={style}
    >
      <div className="book-flip-inner">
        <div className={`book-face book-front ${COVER_CLASS[book.accent]} text-ink`}>
          <div className="font-mono text-[9px] uppercase tracking-[0.1em] opacity-70">
            {book.genre}
          </div>
          <div>
            <div className="font-lora text-[22px] leading-[1.15] font-normal -tracking-[0.002em]">
              {book.title}
            </div>
            <div className="font-inter text-[11px] italic mt-1.5 opacity-75">
              {book.author}
            </div>
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
