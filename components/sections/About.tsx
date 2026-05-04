import { site } from '@/content/site';
import {
  about,
  ACTIVE_INTRO_VERSION,
  introA,
  introB,
} from '@/content/about';
import { communities } from '@/content/communities';
import { readingList } from '@/content/reading-list';
import StickyNote from '@/components/cards/StickyNote';
import CommunityCard from '@/components/cards/CommunityCard';
import BookCard from '@/components/cards/BookCard';
import HeroPhotos from '@/components/ui/HeroPhotos';
import type { Tilt } from '@/components/cards/StickyNote';

const COMMUNITY_TILTS: Tilt[] = ['t1', 't2', 't3'];

export default function About() {
  const meta = site.sections.about;
  const proseClass =
    'font-lora text-[26px] leading-[1.4] text-ink max-w-[720px]';

  return (
    <section id="about" className="mb-[140px] scroll-mt-12">
      <div className="mb-9">
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 inline-block">
          {meta.number} · {meta.label}
        </span>
      </div>

      {ACTIVE_INTRO_VERSION === 'A' ? (
        <p className={`${proseClass} mb-8`}>{introA}</p>
      ) : (
        <div className="mb-8">
          <p className={`${proseClass} mb-7`}>{introB.prose}</p>
          <div className="font-mono italic text-[12px] tracking-[0.08em] uppercase text-ink-3 mb-3">
            {introB.bulletsHeader}
          </div>
          <ul className="font-lora text-[18px] leading-[1.55] text-ink-2 max-w-[660px] list-disc pl-6 space-y-1.5">
            {introB.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}

      <HeroPhotos />

      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mt-20 mb-6 inline-block">
        {about.communitiesSubhead}
      </div>
      <div className="grid grid-cols-3 gap-[22px] mb-8 sticky-row">
        {communities.map((community, i) => (
          <StickyNote
            key={community.id}
            tilt={COMMUNITY_TILTS[i] ?? 't1'}
            cursorText="learn more"
          >
            <CommunityCard community={community} />
          </StickyNote>
        ))}
      </div>

      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mt-20 mb-6 inline-block">
        {about.readingSubhead}
      </div>
      <div className="grid grid-cols-4 gap-7 py-8 fade-row">
        {readingList.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
