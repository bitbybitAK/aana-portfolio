import { site } from '@/content/site';
import { caseStudies } from '@/content/case-studies';
import StickyNote from '@/components/cards/StickyNote';
import ScenicCard from '@/components/cards/ScenicCard';
import CalAiScene from '@/components/cards/scenes/CalAiScene';
import HopperScene from '@/components/cards/scenes/HopperScene';
import HingeScene from '@/components/cards/scenes/HingeScene';
import DuolingoScene from '@/components/cards/scenes/DuolingoScene';
import type { Tilt } from '@/components/cards/StickyNote';
import type { CaseStudy } from '@/types/content';
import type { ReactNode } from 'react';

const TILTS: Tilt[] = ['t1', 't2', 't3', 't4'];

const SCENES: Record<string, ReactNode> = {
  'cal-ai': <CalAiScene />,
  hopper: <HopperScene />,
  hinge: <HingeScene />,
  duolingo: <DuolingoScene />,
};

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

export default function CaseStudies() {
  const meta = site.sections.caseStudies;
  const rows = chunk<CaseStudy>(caseStudies, 2);

  return (
    <section id="case-studies" className="mb-[140px] scroll-mt-12">
      <div className="mb-9">
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 inline-block mb-3.5">
          {meta.number} · {meta.label}
        </span>
        {meta.title && (
          <h2 className="font-lora font-normal text-[44px] leading-[1.1] tracking-display mb-4 max-w-[760px]">
            {meta.title}
          </h2>
        )}
        {meta.summary && (
          <p className="font-lora italic text-[18px] leading-[1.55] text-ink-2 max-w-[660px]">
            {meta.summary}
          </p>
        )}
      </div>

      {rows.map((row, rowIdx) => (
        <div
          key={`row-${rowIdx}`}
          className="grid grid-cols-2 gap-8 mb-8 sticky-row"
        >
          {row.map((study, idx) => {
            const tilt = TILTS[rowIdx * 2 + idx] ?? 't1';
            return (
              <StickyNote
                key={study.id}
                tilt={tilt}
                cursorText="view case study"
              >
                <ScenicCard study={study} stage={SCENES[study.id] ?? null} />
              </StickyNote>
            );
          })}
        </div>
      ))}
    </section>
  );
}
