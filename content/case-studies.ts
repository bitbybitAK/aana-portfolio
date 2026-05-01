import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    id: "cal-ai",
    slug: "cal-ai",
    title: "The bottleneck isn't accuracy. It's the third scan.",
    dek: "3-scan activation threshold. Below it, retention drops 64%.",
    variant: "flagship",
    metadata: { number: "01", label: "cal ai" },
    sections: [],
    status: "published",
    color: "forest",
  },
  {
    id: "hopper",
    slug: "hopper",
    title: "The funnel leaks before users see a price.",
    dek: "42% of intent-stage users abandon. Reframing the funnel changes the model.",
    variant: "flagship",
    metadata: { number: "02", label: "hopper" },
    sections: [],
    status: "published",
    color: "ink",
  },
  {
    id: "hinge",
    slug: "hinge",
    title: "\"Engagement\" is two metrics in a trench coat.",
    dek: "Time-in-app and match success move in opposite directions.",
    variant: "compact",
    metadata: { number: "03", label: "hinge" },
    sections: [],
    status: "published",
    color: "rose",
  },
];
