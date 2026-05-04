import DeepPageLayout from '@/components/DeepPageLayout';
import { builds } from '@/content/builds';

const SLUG = 'weekly-digest';

export default function WeeklyDigestBuildPage() {
  const build = builds.find((b) => b.slug === SLUG);
  if (!build) return null;

  return (
    <DeepPageLayout kind="build" title={build.title} subtitle={build.dek}>
      <h2>The pitch</h2>
      <p>
        An automation that reads my journal, calendar, Slack, and a few apps
        every Sunday morning, then writes me a one-paragraph recap of my week.
        I built it because I kept forgetting what I&apos;d done by Wednesday.
      </p>

      <h2>Why this exists</h2>
      <p>
        I journal in Roam, schedule in Google Calendar, work in Slack, and
        read in Readwise. By Sunday I&apos;d have no coherent picture of the
        week. I also track my workouts and the weather to see where I can
        feasibly take my next class. I&apos;d forget which conversations were
        significant, which articles I&apos;d read, which workouts had been
        good. The cost was small but consistent: a low-grade sense of having
        lived a week without owning it.
      </p>

      <h2>What&apos;s in it</h2>
      <p>
        A scheduled GitHub Action runs every Sunday at 7am. It pulls from each
        integration via API, dedupes, runs the consolidated text through
        Claude with a prompt I&apos;ve iterated on 30+ times, and emails me
        the resulting recap. The recap has 4 sections: 3 wins, 2 reads, 1
        thing I want to change. About 200 words.
      </p>

      <h2>What I learned building it</h2>
      <p>
        The hard part wasn&apos;t the integrations or the LLM call. It was
        figuring out what &quot;a good recap&quot; looks like. My first
        version wrote 800 words and tried to be exhaustive. The version I
        actually use is 200 words and ruthlessly opinionated. Less is more. I
        learned this the hard way.
      </p>

      <h2>Status</h2>
      <p>
        Running for 6 months. I&apos;ve read all recaps. Will probably
        open-source the prompt template in June.
      </p>
    </DeepPageLayout>
  );
}
