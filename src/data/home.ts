import type { Expertise, ProcessStep, Reason } from "@/types";

export const heroFacts = [
  { label: "Diagnostics", value: "Same-day for most devices" },
  { label: "Warranty", value: "On every repair we do" },
  { label: "Support", value: "On-site and remote" },
  { label: "Clients", value: "Homes, studios and offices" },
];

export const introPillars = [
  {
    title: "Who we are",
    description: "A team of technicians and IT specialists who care about getting the details right.",
  },
  {
    title: "What we do",
    description: "Repair, upgrade, secure and support the computers and networks people rely on every day.",
  },
  {
    title: "Why we exist",
    description: "Because technology should quietly work, and getting help with it should be simple.",
  },
];

export const reasons: Reason[] = [
  {
    title: "Experienced technical support",
    description:
      "Technicians who work on hardware, software and networks daily, and know how they fit together.",
  },
  {
    title: "Reliable, repeatable service",
    description:
      "A structured process for every job, so the quality doesn't depend on who picks up the ticket.",
  },
  {
    title: "Quality components",
    description: "Genuine or high-grade parts from trusted suppliers, matched properly to your system.",
  },
  {
    title: "Transparent communication",
    description: "Plain-language diagnosis, a written quote and your go-ahead before any work begins.",
  },
  {
    title: "Fast response",
    description: "Quick acknowledgement, realistic timelines, and updates without you having to chase.",
  },
  {
    title: "Solutions built around you",
    description: "Recommendations based on how you actually work, not on what's easiest to sell.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We listen first: what's happening, when it started and what you need the system to do.",
    detail: "Consultation",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "Structured testing pinpoints the real cause. You get a clear explanation and a written quote.",
    detail: "Report & quote",
  },
  {
    number: "03",
    title: "Solve",
    description: "Once approved, we repair, upgrade or configure with quality parts and careful workmanship.",
    detail: "Repair & setup",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Everything is tested before handover, with a warranty and advice to keep it running well.",
    detail: "Tested handover",
  },
];

export const expertiseAreas: Expertise[] = [
  {
    title: "Hardware",
    description: "Diagnosis, repair and upgrades down to component level.",
    tags: ["Boards", "Power", "Storage", "Memory"],
  },
  {
    title: "Software",
    description: "Operating systems, applications and the settings that hold them together.",
    tags: ["Windows", "macOS", "Linux", "Office"],
  },
  {
    title: "Networking",
    description: "Wired and wireless networks designed for coverage and stability.",
    tags: ["Wi-Fi", "Switching", "Cabling", "VPN"],
  },
  {
    title: "Security",
    description: "Practical protection for devices, accounts and data.",
    tags: ["Endpoint", "Updates", "Access", "Malware"],
  },
  {
    title: "Data",
    description: "Backup strategies, migration and careful recovery.",
    tags: ["Backup", "Recovery", "Migration", "Cloud"],
  },
  {
    title: "Infrastructure",
    description: "The foundations that let a business run on technology.",
    tags: ["Servers", "Racks", "Planning", "Support"],
  },
];
