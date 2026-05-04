import DeepPageLayout from '@/components/DeepPageLayout';
import { analyticsProjects } from '@/content/analytics-projects';

const SLUG = 'clinical-trials-insights';

export default function ClinicalTrialsInsightsProjectPage() {
  const project = analyticsProjects.find((p) => p.slug === SLUG);
  if (!project) return null;

  return (
    <DeepPageLayout kind="project" title={project.title} subtitle={project.why}>
      <h2>What it does</h2>
      <p>
        A full ETL pipeline that pulls clinical trial metadata from
        ClinicalTrials.gov, processes and stores it in PostgreSQL, and serves
        it through Grafana dashboards. Researchers can track drug efficacy,
        enrollment trends, sponsor performance, and trial outcomes across
        conditions in one place, instead of digging through the API
        themselves.
      </p>

      <h2>Why I built it</h2>
      <p>
        Clinical trial data is completely public but almost impossible to
        actually use. The raw API returns dense, inconsistent JSON across
        thousands of trials and no one has time to make sense of it manually.
        I wanted to build something that made the patterns visible: which
        drugs are completing trials, which conditions are attracting the most
        research, where trials are actually happening, and which sponsors
        have the strongest track records.
      </p>

      <h2>The interesting bit</h2>
      <p>
        The pipeline itself was a good problem: the ClinicalTrials.gov API is
        inconsistent across trials, so a lot of the work was in the
        transformer layer, figuring out how to normalize data that
        doesn&apos;t always follow the same shape. The more interesting
        analytical layer was building the efficacy and sponsor reputation
        scores. There&apos;s no single &quot;success&quot; metric in clinical
        research, so I had to make deliberate choices about what completion
        rate, enrollment rate, and phase progression actually mean when
        combined. Those design decisions changed the output significantly,
        which was a good reminder that analytics is never just plumbing.
      </p>

      <h2>Stack</h2>
      <p>
        Python, PostgreSQL, Grafana, Docker, Pandas, NumPy, SQLAlchemy,
        Scikit-learn, SciPy, ClinicalTrials.gov REST API.
      </p>

      <h2>GitHub</h2>
      <p>
        <a href={project.githubUrl}>{project.githubUrl}</a>
      </p>
    </DeepPageLayout>
  );
}
