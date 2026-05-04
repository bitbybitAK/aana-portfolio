import DeepPageLayout from '@/components/DeepPageLayout';
import { analyticsProjects } from '@/content/analytics-projects';

const SLUG = 'hr-analytics';

export default function HrAnalyticsProjectPage() {
  const project = analyticsProjects.find((p) => p.slug === SLUG);
  if (!project) return null;

  return (
    <DeepPageLayout kind="project" title={project.title} subtitle={project.why}>
      <h2>What it does</h2>
      <p>
        An end-to-end HR analytics dashboard built in Tableau using
        multi-field employee data: attrition rates, job satisfaction,
        department-level breakdowns, and demographic cuts, all in one place
        so an HR manager can actually see what&apos;s happening and where.
      </p>

      <h2>Why I built it</h2>
      <p>
        HR data is surprisingly rich but almost always presented badly: one
        metric at a time, no context, no trend. I wanted to see if I could
        take a flat dataset and turn it into something a non-technical person
        could sit down with and immediately start asking better questions.
      </p>

      <h2>The interesting bit</h2>
      <p>
        The data itself was clean enough, but the real challenge was figuring
        out what actually matters to an HR decision-maker versus what just
        looks good on a dashboard. Attrition by department is obvious. But
        layering in job satisfaction scores against overtime data is where it
        got more interesting: the employees most likely to leave weren&apos;t
        always the least satisfied, they were the ones putting in the most
        hours with the least recognition. That kind of thing doesn&apos;t
        show up until you put the right views next to each other.
      </p>

      <h2>Stack</h2>
      <p>Tableau, Advanced Excel, Statistics.</p>

      <h2>GitHub</h2>
      <p>
        <a href={project.githubUrl}>{project.githubUrl}</a>
      </p>
    </DeepPageLayout>
  );
}
