import DeepPageLayout from '@/components/DeepPageLayout';
import { builds } from '@/content/builds';

const SLUG = 'weekly-digest';

export default function WeeklyDigestBuildPage() {
  const build = builds.find((b) => b.slug === SLUG);
  if (!build) return null;

  return (
    <DeepPageLayout kind="build" title={build.title} subtitle={build.dek}>
      <p>[ Build write-up coming soon. ]</p>
    </DeepPageLayout>
  );
}
