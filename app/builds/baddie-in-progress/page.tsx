import DeepPageLayout from '@/components/DeepPageLayout';
import { builds } from '@/content/builds';

const SLUG = 'baddie-in-progress';

export default function BaddieInProgressBuildPage() {
  const build = builds.find((b) => b.slug === SLUG);
  if (!build) return null;

  return (
    <DeepPageLayout kind="build" title={build.title} subtitle={build.dek}>
      <h2>The pitch</h2>
      <p>
        Baddie in Progress is a personal fitness and habit tracker I built
        because changing your lifestyle is never just about the gym. It&apos;s
        about the morning antioxidants, the daily stretches, the pilates four
        times a week, the 10k steps, the protein goals, and actually knowing
        which habits are sticking and which ones you just think are sticking.
        Nothing existing tracked all of that without trying to sell me a
        subscription first.
      </p>

      <h2>Why this exists</h2>
      <p>
        I tried every app. None of them made me come back. They were either
        too focused on weight loss, too gym-specific, or just too much friction
        to open between sets or mid-morning. The subscription prompts killed
        the habit before the habit even started. I wanted something that held
        my whole lifestyle in one place: workouts, daily habits, macros,
        progress photos, and even a small space for how I was feeling about
        myself that week. That combination didn&apos;t exist, so I built it.
      </p>

      <h2>What&apos;s in it</h2>
      <p>
        The app has a habit tracker for daily lifestyle goals, a gym split
        tracker where I check off exercises per session so I can see what
        I&apos;m actually doing consistently, a macro and protein calculator
        that uses Claude to convert a photo or text description of food into
        numbers, a local progress photo log, and a dashboard that visualizes
        habit streaks and behavioral patterns. That last part turned out to be
        the most interesting: I noticed that on pilates days I hit 10k steps
        almost every time, but on arm and core days I rarely do, even though I
        always complete my stretches. The app also has a weekly affirmation
        input and a daily &quot;one thing I am proud of&quot; field, because a
        lifestyle change is mental too. My mom and my best friend are both
        running their own customized versions of it locally now.
      </p>

      <h2>What I learned building it</h2>
      <p>
        The hardest problem wasn&apos;t technical, it was behavioral. I needed
        to build something I would actually open three times a day, which is a
        completely different design challenge than building something
        feature-complete. The macro photo input ended up being the
        highest-frequency feature because it removed the biggest point of
        friction in my day. I also learned that the most useful thing an app
        can do is show you your own patterns without moralizing about them.
        Seeing that pilates days are my best overall movement days did more
        for my consistency than any streak notification ever could.
      </p>

      <h2>Status</h2>
      <p>
        Running locally for me, my mom, and my best friend, each with their
        own customized habits and goals. Not planning to productize it anytime
        soon, but I keep adding to it because I actually use it every day.
      </p>
    </DeepPageLayout>
  );
}
