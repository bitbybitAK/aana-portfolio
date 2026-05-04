import DeepPageLayout from '@/components/DeepPageLayout';
import { analyticsProjects } from '@/content/analytics-projects';

const SLUG = 'botm-recommender';

export default function BotmRecommenderProjectPage() {
  const project = analyticsProjects.find((p) => p.slug === SLUG);
  if (!project) return null;

  return (
    <DeepPageLayout kind="project" title={project.title} subtitle={project.why}>
      <h2>What it does</h2>
      <p>
        A data analysis of 80+ Book of the Month picks from 2018 to 2025,
        joining hand-curated pick history with Open Library metadata in
        DuckDB, then surfacing patterns in editorial taste through SQL window
        functions and Python visualization. Covers genre mix shifts, debut
        author trends, pick velocity, and author demographics across eight
        years of curation.
      </p>

      <h2>Why I built it</h2>
      <p>
        Curation is a data problem. BOTM has built a whole brand on
        &quot;trusted picks&quot; but what does that actually mean in the
        data? I wanted to see if eight years of picks reveal a consistent
        editorial fingerprint or if the taste has quietly drifted, because
        that fingerprint is essentially their retention strategy. If
        subscribers keep trusting the pick, they keep paying. If the picks
        start feeling random, they churn. Same instinct that makes me want to
        look at downstream data at work: the pattern is usually already
        there, you just have to ask the right question of the right table.
      </p>

      <h2>The interesting bit</h2>
      <p>
        The genre mix turned out to be more stable than I expected, which
        actually makes business sense: consistency builds the trust that
        drives renewals. What shifted was pick velocity. The average time
        between a book&apos;s publication date and its BOTM selection dropped
        noticeably after 2021, meaning they started chasing cultural momentum
        harder, probably because a buzzy pick converts better on social. The
        other finding worth noting: BOTM picks debut authors at a higher rate
        than the broader literary fiction market, and that has held steady
        across years. That&apos;s not just an editorial choice, it&apos;s a
        differentiation play. You can&apos;t get that pick anywhere else.
      </p>

      <h2>Stack</h2>
      <p>
        Python, DuckDB, Pandas, Matplotlib, Seaborn, Open Library API,
        gender-guesser, SQL with CTEs and window functions. Pipeline runs
        end-to-end with <code>make run</code>.
      </p>

      <h2>GitHub</h2>
      <p>
        <a href={project.githubUrl}>{project.githubUrl}</a>
      </p>
    </DeepPageLayout>
  );
}
