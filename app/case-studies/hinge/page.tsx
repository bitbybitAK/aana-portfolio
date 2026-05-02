import DeepPageLayout from '@/components/DeepPageLayout';
import { caseStudies } from '@/content/case-studies';

const SLUG = 'hinge';

export default function HingeCaseStudyPage() {
  const study = caseStudies.find((s) => s.slug === SLUG);
  if (!study) return null;

  return (
    <DeepPageLayout kind="case-study" title={study.title}>
      <p>[ Case study content coming soon. ]</p>
    </DeepPageLayout>
  );
}
