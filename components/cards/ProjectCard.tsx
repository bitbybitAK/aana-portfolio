import Link from 'next/link';
import type { AnalyticsProject } from '@/types/content';

const cardClasses =
  'bg-paper rounded-[12px] px-6 py-5 flex flex-col gap-3 min-h-[240px] block no-underline text-ink';

export default function ProjectCard({ project }: { project: AnalyticsProject }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cardClasses}>
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-3">
        no. {project.number}
      </div>
      <div className="font-lora font-medium text-[18px] leading-[1.25] -tracking-[0.003em]">
        {project.title}
      </div>
      <div className="text-[13px] leading-[1.6] text-ink-2 flex-1">
        {project.why}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[9px] tracking-[0.04em] px-2 py-0.5 rounded-[4px] bg-cream-2 text-ink-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
