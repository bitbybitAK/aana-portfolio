import { site } from '@/content/site';
import { builds } from '@/content/builds';
import StickyNote from '@/components/cards/StickyNote';
import BuildCard from '@/components/cards/BuildCard';
import PhoneFrame from '@/components/ui/PhoneFrame';
import Motif from '@/components/ui/Motif';
import type { Tilt } from '@/components/cards/StickyNote';
import type { ReactNode } from 'react';

const BUILD_TILTS: Tilt[] = ['t1', 't2'];

const STAGES: Record<string, ReactNode> = {
  'baddie-in-progress': <BaddieStage />,
  'weekly-digest': <DigestStage />,
};

function BaddieStage() {
  return (
    <>
      <Motif className="top-[32px] left-[32px]">
        <svg width="22" height="22" viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="6" className="fill-pink-darker opacity-30" />
        </svg>
      </Motif>
      <Motif className="bottom-[36px] right-[30px]" delay="1.5s">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path
            d="M3 10 L17 10 M10 3 L10 17"
            className="stroke-pink-darker opacity-40"
            strokeWidth="2"
          />
        </svg>
      </Motif>
      <Motif className="top-[30%] right-[22%]" delay="3s">
        <svg width="18" height="18" viewBox="0 0 18 18">
          <rect
            x="3"
            y="3"
            width="12"
            height="12"
            rx="2"
            fill="none"
            className="stroke-pink-darker opacity-40"
            strokeWidth="1.5"
          />
        </svg>
      </Motif>

      <PhoneFrame size="md">
        <div className="font-mono text-[9px] text-ink-3 text-center">9:41</div>
        <div className="font-lora text-[13px] text-ink leading-none mt-0.5">This week</div>
        <div className="text-[9px] text-ink-3 mb-1">strength · 3 sessions</div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-pink shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Glute focus · Mon</div>
            <div className="text-[8px] text-ink-3">5 sets · 45 min</div>
          </div>
        </div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-pink shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Pull · Wed</div>
            <div className="text-[8px] text-ink-3">4 sets · 38 min</div>
          </div>
        </div>
        <div className="mt-auto bg-pink-darker text-cream text-center py-2 rounded-[7px] text-[9px] font-medium">
          log session
        </div>
      </PhoneFrame>
    </>
  );
}

function DigestStage() {
  return (
    <>
      <Motif className="top-[32px] right-[38px]">
        <svg width="22" height="22" viewBox="0 0 22 22">
          <rect x="3" y="3" width="16" height="16" rx="3" className="fill-lilac-deep opacity-[0.32]" />
          <path
            d="M7 11 L11 11 M7 8 L15 8"
            className="stroke-lilac-deep opacity-[0.65]"
            strokeWidth="1.2"
          />
        </svg>
      </Motif>
      <Motif className="bottom-[30px] left-[36px]" delay="1.5s">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <circle
            cx="10"
            cy="10"
            r="6"
            fill="none"
            className="stroke-powder-darker opacity-50"
            strokeWidth="1.5"
          />
        </svg>
      </Motif>
      <Motif className="top-[65%] right-[30%]" delay="3s">
        <svg width="20" height="14" viewBox="0 0 20 14">
          <path
            d="M2 7 L8 7 M12 7 L18 7 M8 4 L12 4 M8 10 L12 10"
            className="stroke-lilac-deep opacity-50"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Motif>

      <PhoneFrame size="md">
        <div className="font-mono text-[9px] text-ink-3 text-center">9:41</div>
        <div className="font-lora text-[13px] text-ink leading-none mt-0.5">Sunday recap</div>
        <div className="text-[9px] text-ink-3 mb-1">week 18 · 6 entries</div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-powder shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">3 wins</div>
            <div className="text-[8px] text-ink-3">from journal + slack</div>
          </div>
        </div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-lilac shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">2 reads</div>
            <div className="text-[8px] text-ink-3">articles + book progress</div>
          </div>
        </div>
        <div className="mt-auto bg-lilac-deep text-cream text-center py-2 rounded-[7px] text-[9px] font-medium">
          view recap
        </div>
      </PhoneFrame>
    </>
  );
}

export default function Builds() {
  const meta = site.sections.builds;

  return (
    <section id="builds" className="mb-[140px] scroll-mt-12">
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

      <div className="grid grid-cols-2 gap-8 sticky-row">
        {builds.map((build, i) => (
          <StickyNote
            key={build.id}
            tilt={BUILD_TILTS[i] ?? 't1'}
            cursorText="view project"
          >
            <BuildCard build={build} stage={STAGES[build.id] ?? null} />
          </StickyNote>
        ))}
      </div>
    </section>
  );
}
