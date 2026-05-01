import { site } from '@/content/site';
import { analyticsProjects } from '@/content/analytics-projects';
import StickyNote from '@/components/cards/StickyNote';
import ProjectCard from '@/components/cards/ProjectCard';
import type { Tilt } from '@/components/cards/StickyNote';

const PROJECT_TILTS: Tilt[] = ['t1', 't2', 't3'];

export default function AnalyticsProjects() {
  const meta = site.sections.analyticsProjects;

  return (
    <section id="analytics" className="mb-[140px] scroll-mt-12">
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

      <div className="grid grid-cols-3 gap-7 sticky-row">
        {analyticsProjects.map((project, i) => (
          <StickyNote
            key={project.id}
            tilt={PROJECT_TILTS[i] ?? 't1'}
            cursorText="view code"
          >
            <ProjectCard project={project} />
          </StickyNote>
        ))}
      </div>
    </section>
  );
}
