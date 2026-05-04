import type { CaseStudy } from '@/types/content';

export const caseStudies: CaseStudy[] = [
  {
    id: 'cal-ai',
    slug: 'cal-ai',
    accent: 'sage',
    tags: ['flagship'],
    number: '01',
    logo: 'cal ai',
    title:
      "How do you turn Cal AI's viral camera into a real habit, not a one-time party trick?",
    subtitle: '',
    expandParagraphs: [
      "Cal AI's product is fast: point your camera at a meal, get a calorie estimate. The bet is speed over accuracy. Reviews disagree, focus on accuracy.",
      'I went looking for what actually drives retention. The answer: the third scan in seven days is the activation threshold.',
    ],
    readCue: '~6 min read · oct 2026',
    status: 'published',
  },
  {
    id: 'hopper',
    slug: 'hopper',
    accent: 'powder',
    tags: ['flagship'],
    number: '02',
    logo: 'hopper',
    title: 'The same product at two coverage tiers is two different businesses.',
    subtitle:
      'How do you pick between 80% and 90% coverage when one prints money and the other behaves like a high-beta stock?',
    expandParagraphs: [
      'Hopper sells "predict and save." But 42% of intent-stage users abandon before ever seeing a price quote.',
      'Reframing the funnel as intent → predict → save instead of just search → book changes the entire growth model.',
    ],
    readCue: '~7 min read · sep 2026',
    status: 'published',
  },
  {
    id: 'hinge',
    slug: 'hinge',
    accent: 'pink',
    tags: ['compact', 'video'],
    number: '03',
    logo: 'hinge',
    title: 'Hinge: when revenue and outcomes share the same friction.',
    subtitle:
      "A data product analyst's external teardown of the serious male user funnel and the structural tension between what Hinge earns and what it promises.",
    expandParagraphs: [
      'Hinge reports a single engagement KPI. It rolls up two metrics that move in opposite directions: time-in-app and successful matches.',
      'Optimizing for one quietly punishes the other. The trade-off has to live in the open.',
    ],
    readCue: '~4 min read · aug 2026',
    status: 'published',
  },
  {
    id: 'duolingo',
    slug: 'duolingo',
    accent: 'honey',
    tags: ['flagship'],
    number: '04',
    logo: 'duolingo',
    title: "Streak isn't a metric, it's a tax.",
    subtitle: '',
    comingSoon: true,
    expandParagraphs: [
      "Duolingo's streak is the most-cited engagement mechanic in product. But for the bottom 30% of users, it's the reason they churn.",
      'What if streak protection was the default, not a paid upgrade?',
    ],
    readCue: '~5 min read · jul 2026',
    status: 'published',
  },
];
