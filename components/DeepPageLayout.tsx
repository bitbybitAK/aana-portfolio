import Link from 'next/link';
import type { ReactNode } from 'react';
import Cursor from '@/components/Cursor';
import Firefly from '@/components/Firefly';

export type DeepPageKind = 'case-study' | 'build' | 'project';

interface DeepPageMeta {
  readTime?: string;
  date?: string;
  tags?: string[];
}

interface DeepPageLayoutProps {
  title: string;
  subtitle?: string;
  kind: DeepPageKind;
  meta?: DeepPageMeta;
  children: ReactNode;
}

const BACK_LABEL: Record<DeepPageKind, string> = {
  'case-study': 'back to all case studies',
  build: 'back to all builds',
  project: 'back to all projects',
};

const SECTION_HASH: Record<DeepPageKind, string> = {
  'case-study': '#case-studies',
  build: '#builds',
  project: '#analytics',
};

export default function DeepPageLayout({
  title,
  subtitle,
  kind,
  meta,
  children,
}: DeepPageLayoutProps) {
  return (
    <>
      <Cursor />
      <Firefly />
      <div className="min-h-screen bg-cream relative">
        <header className="max-w-[760px] mx-auto px-6 pt-14 lg:pt-16">
          <Link
            href="/home"
            data-cursor=""
            data-cursor-text="back"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 no-underline inline-block mb-12 hover:text-ink-2 transition-colors"
          >
            ← back to home
          </Link>

          <div className="mb-8">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 inline-block mb-3.5">
              {kind === 'case-study'
                ? 'case study'
                : kind === 'build'
                  ? 'build'
                  : 'analytics project'}
            </span>
            <h1 className="font-lora font-normal text-[44px] leading-[1.1] tracking-display text-ink mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="font-lora italic text-[18px] leading-[1.55] text-ink-2 max-w-[660px]">
                {subtitle}
              </p>
            )}
          </div>

          {meta && (meta.readTime || meta.date || (meta.tags && meta.tags.length > 0)) && (
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {meta.readTime && (
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3 px-2.5 py-1 rounded-[4px] bg-cream-2">
                  {meta.readTime}
                </span>
              )}
              {meta.date && (
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3 px-2.5 py-1 rounded-[4px] bg-cream-2">
                  {meta.date}
                </span>
              )}
              {meta.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.06em] uppercase text-ink-3 px-2 py-0.5 rounded-[4px] bg-cream-3"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="max-w-[720px] mx-auto px-6 pt-4 pb-20 font-lora text-[17px] leading-[1.75] text-ink-2 deep-prose">
          {children}
        </article>

        <footer className="max-w-[720px] mx-auto px-6 pb-20 border-t border-border-soft pt-10">
          <Link
            href={`/home${SECTION_HASH[kind]}`}
            data-cursor=""
            data-cursor-text="back"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 no-underline hover:text-ink-2 transition-colors"
          >
            ← {BACK_LABEL[kind]}
          </Link>
        </footer>
      </div>
    </>
  );
}
