import type { Build } from "@/types/content";

export const builds: Build[] = [
  {
    id: "baddie-in-progress",
    slug: "baddie-in-progress",
    title: "Baddie in Progress",
    dek: "A fitness app that respects how I actually train.",
    status: "in-progress",
    stack: [],
    links: [],
    color: "rose",
  },
  {
    id: "real-echo",
    slug: "real-echo",
    title: "Real Echo",
    dek: "[ tell me what real echo is and i'll fold it in ]",
    status: "in-progress",
    stack: [],
    links: [],
    color: "forest",
  },
  {
    id: "weekly-digest-automation",
    slug: "weekly-digest-automation",
    title: "Weekly digest automation",
    dek: "Reads my journal, calendar, and apps. Sunday recap.",
    status: "shipped",
    stack: [],
    links: [],
    color: "ink",
  },
];
