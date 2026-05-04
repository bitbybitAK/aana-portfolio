import DeepPageLayout from '@/components/DeepPageLayout';
import { caseStudies } from '@/content/case-studies';

const SLUG = 'hopper';

export default function HopperCaseStudyPage() {
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
        This Hopper case was about pricing a trip protection add-on, not in
        theory but in unit economics. I compared 80 percent and 90 percent
        refund coverage across premiums, attach rates, and loss ratios to see
        which variant actually makes money per offer. The goal was to pick a
        static premium, then sketch smarter experiments on top of it.
      </p>

      <h2>The actual question</h2>
      <p>
        On the surface, 90 percent coverage is the &quot;nicer&quot; product
        and usually drives higher attach rate. The real question is whether
        that extra demand ever compensates for how often Hopper has to pay out.
        Which variant wins on profit per offer once you factor in both price
        and risk, and where does 90 percent become worth the volatility?
      </p>

      <h2>The analysis</h2>
      <p>
        At current prices, 80 percent coverage is the clear winner. It earns
        about $0.80 profit per offer versus $0.67 for 90 percent, with a
        healthier 72.6 percent loss ratio versus 81 percent. Attach rate is
        slightly lower for 80 percent, but the extra demand for 90 percent
        doesn&apos;t offset how expensive those payouts are at low premiums.
      </p>
      <p>
        Across the premium range, 80 percent looks like a stable workhorse. It
        mostly sits in a 65 to 75 percent loss ratio band, while 90 percent
        swings hard and stays loss-making around the 10 to 11 percent premium
        mark. 90 percent only starts to beat 80 percent on profit per offer
        once you push premium to roughly 17 percent of fare.
      </p>
      <p>
        The attach-rate charts explain the risk story. Travelers love 90
        percent coverage when it&apos;s cheap, so attach rate spikes right
        where the economics are worst. That combination of high attach and
        thin pricing makes 90 percent a high-beta SKU: great upside when
        priced high enough, very ugly downside when it isn&apos;t.
      </p>
      <p>
        Because of that, my static picks are: for 80 percent coverage, a 15
        percent premium where profit per offer is around $1.07 with a loss
        ratio of roughly 66 percent and a 5.9 percent attach rate. For 90
        percent coverage, a 17 percent premium where profit per offer jumps to
        about $1.39 with a 62.3 percent loss ratio and a 6.1 percent attach
        rate. At current prices overall, the data says 80 percent beats 90
        percent about 86 percent of the time on profit per offer.
      </p>

      <h2>What I would do about it</h2>
      <p>
        First, I&apos;d treat 80 percent at 15 percent premium as the default
        safe SKU, and use 90 percent at 17 percent premium as the &quot;go
        big&quot; option in markets where Hopper is comfortable with more
        variance. From there, I&apos;d run two experiments. One is adding a
        fixed deductible, like &quot;up to 90 percent refund minus $25,&quot;
        to cut loss ratios without killing perceived value. The other is
        moving toward dynamic pricing by capping high-risk users at 80 percent
        and reserving 90 or 100 percent coverage for lower-risk segments based
        on historic cancellation behavior.
      </p>

      <h2>What I would want to validate</h2>
      <p>
        I&apos;d want to validate that adding a $25 deductible keeps attach
        rates roughly flat while meaningfully lifting profit per offer, and
        that the dynamic-pricing rules actually shrink loss ratios for repeat
        cancellers instead of just shifting risk around. I&apos;d also re-run
        the profit-per-offer simulations as new cohorts come in to confirm
        that 80 percent stays the reliable baseline while 90 percent pays off
        only at higher premiums.
      </p>

      <blockquote className="italic-pull-quote">
        Hopper should treat 80 percent coverage as the dependable cash engine
        and only unleash 90 percent when pricing and risk controls are tight
        enough to handle its mood swings.
      </blockquote>
    </DeepPageLayout>
  );
}
