import DeepPageLayout from '@/components/DeepPageLayout';
import { analyticsProjects } from '@/content/analytics-projects';

const SLUG = 'modeling-epidemics';

export default function ModelingEpidemicsProjectPage() {
  const project = analyticsProjects.find((p) => p.slug === SLUG);
  if (!project) return null;

  return (
    <DeepPageLayout kind="project" title={project.title} subtitle={project.why}>
      <p>[ Project write-up coming soon. ]</p>
    </DeepPageLayout>
  );
}
