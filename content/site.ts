import type { SiteContent } from "@/types/content";

export const site: SiteContent = {
  meta: {
    title: "Aana Khanduri",
    description:
      "Field Notebook Vol. I. Product analytics, data projects, personal builds.",
  },
  sidebar: {
    monogram: "ak.",
    name: "Aana Khanduri",
    tagline: "product analyst · ms cs",
    bio: "I work at the seam between data and decisions. Strategy first, then the data, then I ship something a team can act on.",
    exploreLabel: "explore",
    findMeAtLabel: "find me at",
    location: { city: "san francisco" },
  },
  hero: {
    greetingPrefix: "Hi, I'm ",
    nameAccent: "Aana",
    greetingSuffix: ".",
    thesis:
      "I read the strategy first, then the data, then I ship something a team can act on.",
    bio: [
      {
        type: "text",
        value:
          "Master's in CS, working as a product analyst. Most recently at ",
      },
      { type: "link", label: "@yourcompany", href: "#" },
      { type: "text", value: ". Previously " },
      { type: "link", label: "@another", href: "#" },
      { type: "text", value: " and " },
      { type: "link", label: "@third", href: "#" },
      { type: "text", value: ". Lived in " },
      { type: "link", label: "New York", href: "#" },
      { type: "text", value: ", now in " },
      { type: "link", label: "San Francisco", href: "#" },
      { type: "text", value: "." },
    ],
    ctas: [
      { label: "→ see the work", href: "#case-studies" },
      { label: "→ about", href: "#about" },
    ],
    polaroids: [
      {
        id: "polaroid-hero-1",
        gradient: { from: "#2D4A3E", to: "#4A6B5E", angle: 135 },
        caption: "somewhere in '26",
        captionColor: "forest",
      },
      {
        id: "polaroid-hero-2",
        gradient: { from: "#1D2A44", to: "#3D4A6E", angle: 135 },
        caption: "east village",
        captionColor: "ink",
      },
      {
        id: "polaroid-hero-3",
        gradient: { from: "#B8821F", to: "#6B4810", angle: 135 },
        caption: "mission, golden hour",
        captionColor: "mustard-deep",
      },
    ],
  },
  topbar: {
    entry: "entry 01 · home",
    volume: "field notebook vol. i",
  },
  footer: {
    built: "built nov 2026 · field notebook vol. i",
    signature: "aana khanduri",
  },
  status: {
    rotationMs: 6000,
    states: [
      {
        label: "/ working on",
        text: "finishing the cal ai case study",
        color: "rose",
      },
      {
        label: "/ reading",
        text: "trustworthy online controlled experiments",
        color: "forest",
      },
      {
        label: "/ listening",
        text: "lenny's podcast, slow churn ep.",
        color: "ink",
      },
      {
        label: "/ thinking",
        text: "why activation thresholds beat funnels",
        color: "mustard-deep",
      },
    ],
  },
  visitor: {
    states: ["leave a trace ↗", "thanks for visiting ✿", "say hi via email →"],
  },
  sections: {
    caseStudies: {
      number: "01",
      label: "case studies",
      intro:
        "How I think about consumer products. Each one starts with the strategy and ends with a recommendation.",
      seeAll: { label: "all 6 →", href: "#" },
    },
    analytics: {
      number: "02",
      label: "analytics",
      intro: "How I work with data. SQL, Python, and the occasional rabbit hole.",
      seeAll: { label: "see all →", href: "#" },
    },
    builds: {
      number: "03",
      label: "builds",
      intro: "Things I made because I wanted them to exist.",
      seeAll: { label: "see all →", href: "#" },
    },
    reading: {
      number: "04",
      label: "reading list",
      intro:
        "Hover to flip. Books that actually changed how I think about the work.",
    },
    fieldNotes: {
      number: "05",
      label: "field notes",
      intro:
        "Hot takes from my notebook. Most of these are wrong. A few might be useful.",
    },
    fieldNotesFooter: {
      label: "read all 23 notes",
      href: "#",
      cadence: "updated weekly",
    },
    about: {
      number: "06",
      label: "about me",
      seeAll: { label: "read the long version →", href: "#" },
    },
  },
  socials: [
    { label: "email", url: "#" },
    { label: "linkedin", url: "#" },
    { label: "github", url: "#" },
  ],
};
