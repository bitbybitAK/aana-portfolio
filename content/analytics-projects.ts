import type { AnalyticsProject } from "@/types/content";

export const analyticsProjects: AnalyticsProject[] = [
  {
    id: "book-of-the-month-recommender",
    slug: "book-of-the-month-recommender",
    title: "Book-of-the-month recommender",
    dek: "A small system that reads my Goodreads and surfaces a monthly pick. Same pattern as content recs at scale.",
    stack: ["SQL", "Python"],
    githubUrl: "#",
    chartType: "bar",
  },
  {
    id: "modeling-epidemics",
    slug: "modeling-epidemics",
    title: "Modeling Epidemics, replicated",
    dek: "Re-implemented the SIR model. Then asked: what does this look like applied to product virality?",
    stack: ["Python", "Tableau"],
    githubUrl: "#",
    chartType: "line",
  },
];
