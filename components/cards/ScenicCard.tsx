import type { ReactNode } from 'react';
import type { CaseStudy, CaseStudyTag } from '@/types/content';

interface ScenicCardProps {
  study: CaseStudy;
  stage: ReactNode;
}

const STAGE_CLASS: Record<CaseStudy['accent'], string> = {
  sage:   'scene-stage-cal-ai',
  powder: 'scene-stage-hopper',
  pink:   'scene-stage-hinge',
  honey:  'scene-stage-duolingo',
  lilac:  'scene-stage-cal-ai',
  peach:  'scene-stage-cal-ai',
};

const TAG_CLASS: Record<CaseStudyTag, string> = {
  flagship: 'bg-sage-deep/20 text-sage-darker',
  compact:  'bg-pink-deep/20 text-pink-darker',
  video:    'bg-lilac-deep/30 text-lilac-deep',
};

export default function ScenicCard({ study, stage }: ScenicCardProps) {
  return (
    <div className="bg-paper rounded-[14px] overflow-hidden relative">
      <div
        className={`relative h-[320px] flex items-center justify-center overflow-hidden ${STAGE_CLASS[study.accent]}`}
      >
        <div className="absolute top-[18px] left-[22px] bg-white/[0.78] backdrop-blur-md rounded-lg px-3 py-1.5 font-mono text-[10px] tracking-[0.06em] uppercase text-ink-2 z-[4] border border-black/5">
          {study.logo}
        </div>
        {stage}
      </div>
      <div className="px-7 py-7 flex flex-col gap-3">
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3">
            no. {study.number} · {study.logo}
          </span>
          <div className="flex gap-1.5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-[9px] uppercase tracking-[0.06em] px-2 py-0.5 rounded-[4px] ${TAG_CLASS[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="font-lora font-medium text-[24px] leading-[1.18] -tracking-[0.005em] text-ink">
          {study.title}
        </div>
        <div className="scene-expand">
          {study.expandParagraphs.map((p, i) => (
            <p key={i} className="text-[14px] leading-[1.65] text-ink-2 mb-1.5">
              {p}
            </p>
          ))}
          <span className="block font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3 mt-2">
            {study.readCue}
          </span>
        </div>
      </div>
    </div>
  );
}
