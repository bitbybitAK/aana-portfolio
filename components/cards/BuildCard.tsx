import type { ReactNode } from 'react';
import type { Build, BuildAccent, BuildStatus } from '@/types/content';

interface BuildCardProps {
  build: Build;
  stage: ReactNode;
}

const STAGE_CLASS: Record<BuildAccent, string> = {
  pink:  'build-stage-baddie',
  lilac: 'build-stage-digest',
};

const STATUS_TAG_CLASS: Record<BuildStatus, string> = {
  'in-progress': 'bg-pink-deep/30 text-pink-darker',
  shipped:       'bg-lilac-deep/30 text-lilac-deep',
  shelved:       'bg-cream-3 text-ink-2',
};

const STATUS_LABEL: Record<BuildStatus, string> = {
  'in-progress': 'in progress',
  shipped:       'shipped',
  shelved:       'shelved',
};

export default function BuildCard({ build, stage }: BuildCardProps) {
  return (
    <div className="bg-paper rounded-[14px] overflow-hidden relative">
      <div
        className={`relative h-[280px] flex items-center justify-center overflow-hidden ${STAGE_CLASS[build.accent]}`}
      >
        {stage}
      </div>
      <div className="px-7 py-6 flex flex-col gap-2.5">
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3">
            no. {build.number}
          </span>
          <span
            className={`font-mono text-[9px] font-medium uppercase tracking-[0.06em] px-2 py-0.5 rounded-[4px] ${STATUS_TAG_CLASS[build.status]}`}
          >
            {STATUS_LABEL[build.status]}
          </span>
        </div>
        <div className="font-lora font-medium text-[24px] leading-[1.18] -tracking-[0.005em]">
          {build.title}
        </div>
        <div className="text-[14px] leading-[1.65] text-ink-2">{build.dek}</div>
      </div>
    </div>
  );
}
