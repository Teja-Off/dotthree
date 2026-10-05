import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export interface ImageAsset {
  src: StaticImageData;
  alt: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ServiceGroupId = "repair" | "upgrade" | "software" | "business";

export interface ServiceGroup {
  id: ServiceGroupId;
  label: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  group: ServiceGroupId;
  icon: LucideIcon;
  image: ImageAsset;
  /** One-line summary used on cards */
  summary: string;
  /** Longer description used on the Services page */
  description: string;
  benefits: string[];
  problems: string[];
}

export type ProjectCategory =
  "Computer Repair" | "Business IT" | "Networking" | "Hardware Upgrade" | "Data Recovery" | "System Setup";

export type ProjectFilterId = "all" | "repair" | "it" | "networking" | "hardware";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  filter: Exclude<ProjectFilterId, "all">;
  client: string;
  description: string;
  outcome: string;
  image: ImageAsset;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  context: string;
}

export interface Reason {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Expertise {
  title: string;
  description: string;
  tags: string[];
}

export interface SolutionItem {
  title: string;
  description: string;
}

export interface Audience {
  id: string;
  label: string;
  title: string;
  description: string;
  image: ImageAsset;
  items: SolutionItem[];
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  initials: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}
