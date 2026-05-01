export type RoomColor =
  | "forest"
  | "forest-light"
  | "rose"
  | "rose-deep"
  | "ink"
  | "mustard"
  | "mustard-deep";

export type BookGenre = "non-fiction" | "fiction" | "essays";

export type ChartType = "bar" | "line";

export type BuildStatus = "shipped" | "in-progress" | "shelved";

export type CaseStudyVariant = "flagship" | "compact";

export type CaseStudyStatus = "published" | "draft";

export type BioSegment =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export interface BuildLink {
  label: string;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SeeAllLink {
  label: string;
  href: string;
}

export interface StatusState {
  label: string;
  text: string;
  color: RoomColor;
}

export interface SectionMeta {
  number: string;
  label: string;
  intro?: string;
  seeAll?: SeeAllLink;
}

export interface CaseStudySection {
  id: string;
  heading: string;
  body: string;
}

export interface CaseStudyMetadata {
  number: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  dek: string;
  variant: CaseStudyVariant;
  metadata: CaseStudyMetadata;
  sections: CaseStudySection[];
  status: CaseStudyStatus;
  color: RoomColor;
}

export interface Build {
  id: string;
  slug: string;
  title: string;
  dek: string;
  status: BuildStatus;
  stack: string[];
  links: BuildLink[];
  color: RoomColor;
}

export interface AnalyticsProject {
  id: string;
  slug: string;
  title: string;
  dek: string;
  stack: string[];
  githubUrl: string;
  chartType: ChartType;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: BookGenre;
  opinion: string;
  coverColor: RoomColor;
}

export interface FieldNote {
  id: string;
  topic: string;
  topicColor: RoomColor;
  quote: string;
}

export interface PolaroidGradient {
  from: string;
  to: string;
  angle: number;
}

export interface Polaroid {
  id: string;
  gradient: PolaroidGradient;
  caption: string;
  captionColor: RoomColor;
}

export interface AboutContent {
  short: string;
  longTeaser: string;
}

export interface FieldNotesFooter {
  label: string;
  href: string;
  cadence: string;
}

export interface SidebarContent {
  monogram: string;
  name: string;
  tagline: string;
  bio: string;
  exploreLabel: string;
  findMeAtLabel: string;
  location: { city: string };
}

export interface HeroContent {
  greetingPrefix: string;
  nameAccent: string;
  greetingSuffix: string;
  thesis: string;
  bio: BioSegment[];
  ctas: CtaLink[];
  polaroids: Polaroid[];
}

export interface TopbarContent {
  entry: string;
  volume: string;
}

export interface FooterContent {
  built: string;
  signature: string;
}

export interface StatusContent {
  rotationMs: number;
  states: StatusState[];
}

export interface VisitorContent {
  states: string[];
}

export interface MetaContent {
  title: string;
  description: string;
}

export interface SectionsContent {
  caseStudies: SectionMeta;
  analytics: SectionMeta;
  builds: SectionMeta;
  reading: SectionMeta;
  fieldNotes: SectionMeta;
  fieldNotesFooter: FieldNotesFooter;
  about: SectionMeta;
}

export interface SiteContent {
  meta: MetaContent;
  sidebar: SidebarContent;
  hero: HeroContent;
  topbar: TopbarContent;
  footer: FooterContent;
  status: StatusContent;
  visitor: VisitorContent;
  sections: SectionsContent;
  socials: SocialLink[];
}
