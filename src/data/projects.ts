import { images } from "@/data/images";
import type { Project, ProjectFilterId } from "@/types";

/**
 * PLACEHOLDER case studies. Client names are generic descriptions;
 * replace with real (and approved) project write-ups before launch.
 */
export const projects: Project[] = [
  {
    slug: "architecture-studio-network",
    title: "Office network rebuild for a design studio",
    category: "Networking",
    filter: "networking",
    client: "Architecture studio · 24 staff",
    description:
      "Replaced consumer routers with a managed switch, three ceiling access points and separate guest and staff networks.",
    outcome: "Stable video calls across the whole floor",
    image: images.serverRack,
  },
  {
    slug: "accounting-firm-drive-recovery",
    title: "Client archive recovered from a failed drive",
    category: "Data Recovery",
    filter: "repair",
    client: "Accounting practice",
    description:
      "A mechanically failing drive held seven years of client records. We imaged it sector by sector and rebuilt the folder structure.",
    outcome: "Archive restored and moved to backed-up storage",
    image: images.hardDriveOpen,
  },
  {
    slug: "edit-suite-workstation-upgrade",
    title: "Workstation upgrades for a video edit suite",
    category: "Hardware Upgrade",
    filter: "hardware",
    client: "Post-production team",
    description:
      "Upgraded graphics, memory and NVMe storage across four editing machines, with thermal tuning for long render sessions.",
    outcome: "Render queues cleared the same working day",
    image: images.graphicsCards,
  },
  {
    slug: "clinic-it-support",
    title: "Ongoing IT support for a multi-room clinic",
    category: "Business IT",
    filter: "it",
    client: "Healthcare clinic",
    description:
      "Standardised front-desk computers, set up scheduled backups and moved the team onto a documented support routine.",
    outcome: "Fewer disruptions during patient hours",
    image: images.workstation,
  },
  {
    slug: "startup-office-setup",
    title: "Day-one setup for a new startup office",
    category: "System Setup",
    filter: "it",
    client: "Software startup · 15 staff",
    description:
      "Procured and configured laptops, accounts, printers and Wi-Fi ahead of move-in, with an onboarding checklist for new hires.",
    outcome: "Team productive from the first morning",
    image: images.openOffice,
  },
  {
    slug: "student-laptop-board-repair",
    title: "Board-level repair after a liquid spill",
    category: "Computer Repair",
    filter: "repair",
    client: "Individual client",
    description:
      "Diagnosed corrosion on the power circuit, replaced the damaged components and cleaned the board and keyboard assembly.",
    outcome: "Laptop and thesis files fully restored",
    image: images.circuitBoard,
  },
  {
    slug: "retail-structured-cabling",
    title: "Structured cabling for a retail flagship",
    category: "Networking",
    filter: "networking",
    client: "Retail store",
    description:
      "Planned and installed labelled cabling for billing counters, cameras and Wi-Fi, terminated in a tidy wall-mounted rack.",
    outcome: "Every point labelled and documented",
    image: images.patchPanel,
  },
  {
    slug: "legal-office-ssd-rollout",
    title: "SSD and memory refresh for a legal office",
    category: "Hardware Upgrade",
    filter: "hardware",
    client: "Law firm · 12 desktops",
    description:
      "Cloned each desktop to solid-state storage and doubled memory, extending the life of hardware that was otherwise sound.",
    outcome: "Hardware life extended instead of replaced",
    image: images.ramModule,
  },
  {
    slug: "home-office-malware-cleanup",
    title: "Malware clean-up and home office hardening",
    category: "Computer Repair",
    filter: "repair",
    client: "Freelance consultant",
    description:
      "Removed a browser hijacker and hidden startup items, then set up updates, protection and a simple backup routine.",
    outcome: "Clean system with automatic backups",
    image: images.securityLock,
  },
];

export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "repair", label: "Repair" },
  { id: "it", label: "IT" },
  { id: "networking", label: "Networking" },
  { id: "hardware", label: "Hardware" },
];

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
