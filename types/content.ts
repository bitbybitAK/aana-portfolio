// v7 content types. Single source of truth for every content/*.ts file.

export type Accent =
  | 'sage'
  | 'pink'
  | 'powder'
  | 'honey'
  | 'lilac'
  | 'peach';

// Builds only ever sit on pink or lilac stages; narrow the type to keep
// content authoring honest.
export type BuildAccent = 'pink' | 'lilac';

export type CaseStudyTag = 'flagship' | 'compact' | 'video';

export type ChartType = 'bar' | 'line';

export type BuildStatus = 'shipped' | 'in-progress' | 'shelved';

export type CaseStudyStatus = 'published' | 'draft';

export interface BuildLink {
  label: string;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface NavLink {
  number: string;
  label: string;
  sectionId: string;
}

export interface HeroPhoto {
  id: string;
  slot: 1 | 2 | 3 | 4;
  accent: Accent;
  decor: string;
  caption: string;
  cursorText: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  accent: Accent;
  tags: CaseStudyTag[];
  number: string;
  logo: string;
  title: string;
  expandParagraphs: string[];
  readCue: string;
  status: CaseStudyStatus;
}

export interface Build {
  id: string;
  slug: string;
  accent: BuildAccent;
  number: string;
  title: string;
  dek: string;
  status: BuildStatus;
  stack: string[];
  links: BuildLink[];
}

export interface AnalyticsProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  why: string;
  stack: string[];
  githubUrl: string;
  chartType: ChartType;
}

export interface Book {
  id: string;
  slot: 'b1' | 'b2' | 'b3' | 'b4';
  accent: Accent;
  genre: string;
  title: string;
  author: string;
  opinion: string;
}

export interface FieldNote {
  id: string;
  topic: string;
  topicColor: string;
  quote: string;
}

export interface Community {
  id: string;
  icon: string;
  accent: Accent;
  name: string;
  body: string;
}

export interface MetaContent {
  title: string;
  description: string;
}

export interface SidebarStatus {
  rotationMs: number;
  messages: string[];
}

export interface SidebarContent {
  name: string;
  taglinePlaceholder: string;
  exploreLabel: string;
  navLinks: NavLink[];
  findMeAtLabel: string;
  currentlyWorkingOnLabel: string;
  status: SidebarStatus;
}

export interface AboutContent {
  taglineLead: string;
  taglineBody: string;
  communitiesSubhead: string;
  readingSubhead: string;
  heroPhotos: HeroPhoto[];
}

export interface TopbarContent {
  left: string;
  right: string;
}

export interface FooterContent {
  left: string;
  right: string;
}

export interface SectionHeader {
  number: string;
  label: string;
  title?: string;
  summary?: string;
}

export interface ComingSoonContent {
  number: string;
  label: string;
  body: string;
}

export interface SectionsContent {
  about: SectionHeader;
  builds: SectionHeader;
  analyticsProjects: SectionHeader;
  caseStudies: SectionHeader;
  comingSoon: ComingSoonContent;
}

export interface SiteContent {
  meta: MetaContent;
  sidebar: SidebarContent;
  topbar: TopbarContent;
  footer: FooterContent;
  sections: SectionsContent;
  socials: SocialLink[];
}
