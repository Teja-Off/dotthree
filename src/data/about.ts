import type { Reason, TeamMember } from "@/types";

export const storyChapters = [
  {
    label: "The problem",
    text: "Most people only think about their technology when it stops working. And when it does, getting help usually means vague answers, unclear pricing and a long wait.",
  },
  {
    label: "The idea",
    text: "DotThree started with a simple idea: treat every computer, network and question with the same care an engineer gives a critical system, and explain it in plain language.",
  },
  {
    label: "Today",
    text: "We support individuals, studios and growing businesses with repairs, upgrades and ongoing IT, and keep the same standard whether it's one laptop or an entire office.",
  },
];

export const mission = {
  title: "Mission",
  text: "To keep people and businesses productive by making their technology dependable, and by making expert help easy to reach.",
};

export const vision = {
  title: "Vision",
  text: "A future where technology support feels as reliable as the systems it looks after: clear, careful and always on your side.",
};

export const values: Reason[] = [
  {
    title: "Precision",
    description: "We diagnose before we fix, and we measure before we recommend.",
  },
  {
    title: "Honesty",
    description: "If something isn't worth repairing, we'll tell you, and explain why.",
  },
  {
    title: "Ownership",
    description: "Once we take on a job, we see it through and stand behind the result.",
  },
  {
    title: "Clarity",
    description: "No jargon walls. You'll always understand what we did and what it cost.",
  },
];

/**
 * Figures below are PLACEHOLDERS — update with real numbers before launch.
 */
export const experienceStats = [
  { value: "10+", label: "Years of combined technical experience" },
  { value: "14", label: "Specialist services under one roof" },
  { value: "3", label: "Ways to get help: in-store, on-site, remote" },
];

export const capabilities = [
  "Component-level laptop and desktop repair",
  "Operating system and software deployment",
  "Wired and wireless network design",
  "Data backup, migration and recovery",
  "Endpoint security and malware response",
  "Managed IT support for small teams",
];

/** PLACEHOLDER team — replace names, roles and add photos when available. */
export const team: TeamMember[] = [
  {
    name: "Arjun Nair",
    role: "Founder & Lead Technician",
    focus: "Hardware diagnostics and board-level repair",
    initials: "AN",
  },
  {
    name: "Meera Iyer",
    role: "IT Support Lead",
    focus: "Business support, onboarding and maintenance",
    initials: "MI",
  },
  {
    name: "Karthik Das",
    role: "Network Engineer",
    focus: "Network design, cabling and Wi-Fi",
    initials: "KD",
  },
  {
    name: "Sana Qureshi",
    role: "Client Coordinator",
    focus: "Quotes, scheduling and customer updates",
    initials: "SQ",
  },
];
