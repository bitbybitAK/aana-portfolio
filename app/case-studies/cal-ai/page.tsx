import DeepPageLayout from '@/components/DeepPageLayout';
import { caseStudies } from '@/content/case-studies';

const SLUG = 'cal-ai';

export default function CalAiCaseStudyPage() {
  const study = caseStudies.find((s) => s.slug === SLUG);
  if (!study) return null;

  return (
    <DeepPageLayout
      kind="case-study"
      title={study.title}
      subtitle={study.subtitle || undefined}
      meta={{ readTime: study.readCue }}
    >
      <h2>The setup</h2>
      <p>
        Cal AI is a speed-first calorie app. Snap a photo, see your calories,
        close the app. That tradeoff was intentional, and the MyFitnessPal
        acquisition only makes it stronger by giving Cal AI a huge food database
        without slowing the scan. The problem isn&apos;t the model. It&apos;s
        that most users never get fast enough reps with the camera to make it
        stick.
      </p>

      <h2>The actual question</h2>
      <p>
        Instead of &quot;how do we make the scan more accurate,&quot; I asked
        &quot;what behavior separates tinkerers from people still here on day
        30.&quot; I modeled different activation thresholds and landed on a
        simple one: three camera scans in the first 48 hours. Hit that, and you
        look like a habit. Miss it, and you&apos;re basically gone.
      </p>

      <h2>The analysis</h2>
      <p>
        Three scans in 48 hours lines up with a sharp retention split: around 61
        percent D30 if you hit it, closer to 11 percent if you don&apos;t. That
        pattern holds even after controlling for basic stuff like install source
        and demographics, and lift flattens after scan three, so piling on more
        usage early doesn&apos;t buy you much. The real problem is that only
        about 16 percent of installs ever log a second meal, which means the
        funnel kills people before they can even try to reach that threshold.
      </p>
      <p>
        The drop-offs are boring but fixable. A long quiz followed by a cold
        camera permission prompt with no preview of the scan. A TikTok user
        opening the app at 11 pm with no food nearby, being told to &quot;scan
        now.&quot; A first scan that works, shows calories, and then dumps you
        back to home with no tracker, no streak, no nudge. This isn&apos;t a
        &quot;reinvent the product&quot; situation. It&apos;s a &quot;show value
        before asking for permission, give them a sample plate if they have no
        food, and put a simple three-slot meal tracker and push at the next
        mealtime&quot; situation.
      </p>
      <p>
        Reliability at the &quot;take photo, get result&quot; moment is the
        other killer. When I split users by whether they saw a scan failure in
        week one, D30 drops from about 29 percent to 13 percent, a 2.2x churn
        hit. Most of that pain comes from three things: ghost meals when the
        app is backgrounded mid-scan, wild outliers like 8,000 calorie popcorn
        with no sanity check, and streaks that reset instantly when someone
        misses a day. None of that is hard ML work. It&apos;s basic trust
        hygiene: cache the last scan, flag anything 3x above a reference value,
        let people freeze a streak and welcome them back with their progress
        intact.
      </p>
      <p>
        Goal-level behavior tells you who actually feels the speed promise.
        &quot;Build muscle&quot; users, with simple repeatable meals, have the
        best D30 and the highest subscription rate. &quot;Eat healthier&quot;
        users churn more because their plates are messy and the scan needs
        edits. With the MyFitnessPal database, Cal AI can keep the fast scan
        and route those users into a quick edit flow instead of letting them
        bounce. Meanwhile, the muscle cohort gets a protein-first result screen
        and a tiny daily protein goal tracker, because that&apos;s where they
        feel seen.
      </p>

      <h2>What I would do about it</h2>
      <p>
        My 90-day plan is simple. Month one, instrument the scan lifecycle
        properly and build a failure-by-cohort dashboard so the team can see
        where the magic moment dies. Month two, fix the funnel: scan demo
        before permission, sample meal if no photo in 90 seconds, auto-save
        scans, three-slot tracker with a push at the next meal. Month three,
        double down on segments: protein-first UI and goals for muscle users,
        streak freeze and &quot;welcome back&quot; framing for everyone.
      </p>

      <h2>What I would want to validate</h2>
      <p>
        In production, I would want to confirm that scan failures are frequent
        enough to explain a 2.2x D30 gap, and that three scans in 48 hours
        really is the tightest activation threshold. I&apos;d also size the
        muscle segment against ARR and check how much the MyFitnessPal data
        already helps complex &quot;eat healthier&quot; meals.
      </p>

      <blockquote className="italic-pull-quote">
        If Cal AI consistently gets new users to three flawless scans in 48
        hours, the camera it already built is enough to win.
      </blockquote>
    </DeepPageLayout>
  );
}
