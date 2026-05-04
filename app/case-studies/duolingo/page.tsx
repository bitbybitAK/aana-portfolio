import DeepPageLayout from '@/components/DeepPageLayout';
import FireflyMark from '@/components/ui/FireflyMark';
import { caseStudies } from '@/content/case-studies';

const SLUG = 'duolingo';

export default function DuolingoCaseStudyPage() {
  const study = caseStudies.find((s) => s.slug === SLUG);
  if (!study) return null;

  return (
    <DeepPageLayout
      kind="case-study"
      title={study.title}
      subtitle={study.subtitle || undefined}
      meta={{ readTime: study.readCue }}
    >
      <div className="flex flex-col items-center justify-center py-32 gap-8">
        <div className="firefly-static animate-firefly-glow">
          <FireflyMark width="100%" height="100%" />
        </div>
        <div className="font-mono text-[11px] uppercase tracking-mono-wider text-ink-3 text-center">
          currently working on this one. coming soon.
        </div>
      </div>
    </DeepPageLayout>
  );
}
