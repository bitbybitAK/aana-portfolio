import DeepPageLayout from '@/components/DeepPageLayout';
import { caseStudies } from '@/content/case-studies';

const SLUG = 'hinge';

export default function HingeCaseStudyPage() {
  const study = caseStudies.find((s) => s.slug === SLUG);
  if (!study) return null;

  return (
    <DeepPageLayout
      kind="case-study"
      title={study.title}
      subtitle={study.subtitle || undefined}
      meta={{ readTime: study.readCue }}
    >
      <h2>The problem</h2>
      <p>
        Hinge&apos;s free male users send around 240 likes a month, get roughly
        7 matches, and go on about 1 date every 4 months. The math doesn&apos;t
        break at the top of the funnel. It breaks quietly at match-to-date,
        the one step Hinge doesn&apos;t instrument because it happens
        off-platform.
      </p>
      <p>
        And here&apos;s the part that actually got me: every surface serious
        male users find frustrating, the 8-like cap, Rose paywalls, locked
        Standouts, is also a direct revenue lever. The friction isn&apos;t a
        bug. It&apos;s the business model.
      </p>

      <h2>My hypothesis</h2>
      <p>
        Hinge runs two product loops at the same time. The engagement loop
        (likes, Standouts, Roses, the out-of-likes modal) drives DAU and
        revenue. The outcome loop (matches, conversations, dates, deletion)
        delivers the brand promise.
      </p>
      <p>
        For serious male users in the bottom 50 percent of demand, these loops
        actively conflict. The engagement loop keeps them opening the app. The
        outcome loop is failing them. As long as both roll up into a single
        engagement KPI, that conflict stays completely invisible to the team.
      </p>

      <h2>My solution</h2>
      <p>Three things, in the order I&apos;d actually run them.</p>
      <p>
        First, instrument match-to-date. Ship a one-tap prompt 24 to 72 hours
        after a conversation hits a date-setting threshold: &quot;Did you meet
        up?&quot; Self-reported, imperfect, gameable. But it&apos;s the first
        direct signal on the step that determines whether the brand promise is
        real or just good copy.
      </p>
      <p>
        Second, make &quot;serious male user&quot; a SQL row, not a persona.
        Define a behavioral cohort: profile completion above 90 percent,
        long-term relationship intent, active for 60+ days, bottom-half
        inbound demand. Then recut every existing dashboard by it. DAU, match
        rate, match-to-date, churn, LTV, NPS. My bet is that cohort engages
        heavily, monetizes moderately, and outcomes-poorly. That&apos;s the
        chart that makes the two-loop conflict impossible to ignore in a
        leadership review.
      </p>
      <p>
        Third, ship a Progress view. Show users their own funnel: likes sent,
        matches, conversations started, dates confirmed, week over week. A/B
        test a peer benchmark carefully. The real success metric isn&apos;t
        whether it lifts revenue. It&apos;s whether it improves outcomes per
        dollar spent, which is the only metric that actually maps to
        &quot;designed to be deleted.&quot;
      </p>

      <h2>Why it matters</h2>
      <p>
        Serious male users (stable, relationship-oriented, financially active)
        are Hinge&apos;s highest-intent segment and its biggest retention
        risk. Right now they churn from frustration, not from success.
        That&apos;s bad churn, and it&apos;s the kind that quietly erodes
        word-of-mouth over time.
      </p>
      <p>
        Closing the match-to-date gap doesn&apos;t require tearing out revenue
        surfaces. It just requires designing friction that converts to
        outcomes instead of sessions. That&apos;s the difference between a
        product that monetizes scarcity and one that actually earns trust.
      </p>
    </DeepPageLayout>
  );
}
