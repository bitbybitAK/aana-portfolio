import { site } from '@/content/site';

export default function PlaceholderStub() {
  const meta = site.sections.comingSoon;

  return (
    <section className="mb-20 scroll-mt-12">
      <div
        className="bg-cream-2 border border-dashed border-border rounded-[14px] px-11 py-9 flex items-center gap-6 transition-all duration-[400ms] ease-out-soft hover:border-sage-deep hover:-translate-y-0.5"
        data-cursor=""
        data-cursor-text="coming"
      >
        <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-3 shrink-0">
          {meta.number} · {meta.label}
        </div>
        <div className="font-lora italic text-[16px] text-ink-2 flex-1">
          {meta.body}
        </div>
        <div className="w-2 h-2 rounded-full bg-sage-deep animate-status-pulse shrink-0" />
      </div>
    </section>
  );
}
