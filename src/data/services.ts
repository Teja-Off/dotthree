import {
  Building2,
  Cpu,
  DatabaseBackup,
  Disc,
  Download,
  HardDrive,
  Headset,
  Laptop,
  MemoryStick,
  Monitor,
  Network,
  Printer,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { images } from "@/data/images";
import type { Service, ServiceGroup } from "@/types";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "repair",
    label: "Repair",
    description: "Diagnosis and repair for laptops, desktops and everything in between.",
  },
  {
    id: "upgrade",
    label: "Upgrades",
    description: "Targeted hardware upgrades that add years to a machine you already own.",
  },
  {
    id: "software",
    label: "Software & Data",
    description: "Clean installs, protection and recovery for the part you can't see.",
  },
  {
    id: "business",
    label: "Business & Network",
    description: "Support and infrastructure for offices, studios and growing teams.",
  },
];

export const services: Service[] = [
  {
    slug: "computer-repair",
    title: "Computer Repair",
    group: "repair",
    icon: Wrench,
    image: images.technicianBench,
    summary: "Component-level diagnosis and repair for systems that won't cooperate.",
    description:
      "When a computer stops working properly, we find the actual cause rather than guessing. Every repair starts with a structured diagnostic, a clear quote, and your approval before any work begins.",
    benefits: [
      "Written diagnosis and quote before work starts",
      "Genuine or high-grade replacement parts",
      "Warranty on parts and workmanship",
      "Data left untouched unless you ask otherwise",
    ],
    problems: [
      "Won't power on or keeps restarting",
      "Blue screens and random crashes",
      "Overheating and loud fans",
      "Failed ports, keyboards or displays",
    ],
  },
  {
    slug: "laptop-repair",
    title: "Laptop Repair",
    group: "repair",
    icon: Laptop,
    image: images.laptopDesk,
    summary: "Screens, hinges, batteries, keyboards and boards, repaired properly.",
    description:
      "Laptops pack a lot into a small space, which makes careful handling essential. We repair major brands with the right tools, anti-static procedures and tested parts, so your machine comes back sealed and solid.",
    benefits: [
      "Screen, battery and keyboard replacement",
      "Hinge and chassis repairs done cleanly",
      "Board-level diagnostics for power faults",
      "Thermal service to restore performance",
    ],
    problems: [
      "Cracked or flickering screen",
      "Battery drains fast or won't charge",
      "Broken hinge or loose casing",
      "Liquid spills and sticky keys",
    ],
  },
  {
    slug: "desktop-repair",
    title: "Desktop Repair",
    group: "repair",
    icon: Monitor,
    image: images.desktopSetup,
    summary: "Workstations and home PCs brought back to stable, quiet operation.",
    description:
      "From office desktops to custom-built workstations, we test each component in isolation to locate faults quickly. Power supplies, boards, cooling and storage are all checked before we hand it back.",
    benefits: [
      "Component-by-component fault isolation",
      "Power supply and cooling replacements",
      "Cable management and dust cleaning",
      "Stress testing before return",
    ],
    problems: [
      "No display or no boot",
      "Unexpected shutdowns under load",
      "Failing power supply",
      "Noisy or clogged cooling",
    ],
  },
  {
    slug: "hardware-upgrade",
    title: "Hardware Upgrade",
    group: "upgrade",
    icon: Cpu,
    image: images.processor,
    summary: "The right upgrade for the way you actually use your computer.",
    description:
      "An upgrade should solve a real bottleneck, not just add a bigger number. We look at how you work, recommend the parts that make a noticeable difference, and install them with full compatibility checks.",
    benefits: [
      "Honest advice on what's worth upgrading",
      "Compatibility checked before purchase",
      "Professional installation and testing",
      "Old parts returned or recycled responsibly",
    ],
    problems: [
      "Slow performance with modern software",
      "Graphics can't keep up with design or 3D work",
      "Not enough ports or connectivity",
      "Machine feels outdated but works fine",
    ],
  },
  {
    slug: "ram-upgrade",
    title: "RAM Upgrade",
    group: "upgrade",
    icon: MemoryStick,
    image: images.ramModule,
    summary: "More memory for smoother multitasking and fewer slowdowns.",
    description:
      "Running out of memory is one of the most common reasons a computer feels sluggish. We confirm the supported memory type and capacity, match modules correctly, and verify stability after installation.",
    benefits: [
      "Correct speed and type for your board",
      "Matched modules for dual-channel performance",
      "Memory stability testing included",
      "Usually completed the same day",
    ],
    problems: [
      "Browser tabs and apps freeze",
      "Slow switching between programs",
      "Virtual machines or large files struggle",
      "System relies heavily on disk swap",
    ],
  },
  {
    slug: "ssd-upgrade",
    title: "SSD Upgrade",
    group: "upgrade",
    icon: HardDrive,
    image: images.hardDriveOpen,
    summary: "Replace a slow hard drive and feel the difference immediately.",
    description:
      "Moving from a mechanical drive to a solid-state drive is the single biggest speed improvement most computers can get. We clone your existing system or set up fresh, so you keep your files and settings.",
    benefits: [
      "Faster start-up and app loading",
      "Full system cloning with no data loss",
      "SATA and NVMe options explained clearly",
      "Old drive securely wiped or returned",
    ],
    problems: [
      "Minutes-long boot times",
      "Programs take ages to open",
      "Clicking or failing hard drive",
      "Running out of storage space",
    ],
  },
  {
    slug: "os-installation",
    title: "Operating System Installation",
    group: "software",
    icon: Disc,
    image: images.terminal,
    summary: "Clean, licensed OS installs configured the way you need them.",
    description:
      "A fresh operating system can make an older machine feel new again. We install and activate licensed Windows, macOS or Linux, apply updates, install drivers and restore your data afterwards.",
    benefits: [
      "Licensed installation with all updates",
      "Correct drivers for every component",
      "Backup and restore of your files",
      "Bloatware removed, privacy settings reviewed",
    ],
    problems: [
      "System is slow and cluttered",
      "Failed or stuck updates",
      "Upgrading to a newer OS version",
      "Unsupported or corrupted installation",
    ],
  },
  {
    slug: "software-installation",
    title: "Software Installation",
    group: "software",
    icon: Download,
    image: images.laptopCode,
    summary: "Productivity, design and business software set up and working.",
    description:
      "We install, license and configure the software you rely on, from office suites and accounting tools to design and development environments, and make sure it runs reliably on your hardware.",
    benefits: [
      "Genuine licences and correct activation",
      "Configuration tailored to your workflow",
      "Email, cloud storage and sync set up",
      "Short walkthrough when we hand over",
    ],
    problems: [
      "Software won't install or activate",
      "Email or calendar not syncing",
      "Apps crash or conflict with each other",
      "Moving software to a new computer",
    ],
  },
  {
    slug: "virus-malware-removal",
    title: "Virus & Malware Removal",
    group: "software",
    icon: ShieldCheck,
    image: images.securityLock,
    summary: "Thorough clean-up and protection so problems don't come back.",
    description:
      "Malware isn't always obvious. We scan with multiple tools, remove infections and unwanted programs, close the gaps that let them in, and set up protection that doesn't slow your system down.",
    benefits: [
      "Multi-tool scanning and manual review",
      "Browser and startup items cleaned",
      "Security updates and protection configured",
      "Advice on staying safe afterwards",
    ],
    problems: [
      "Pop-ups and browser redirects",
      "Unknown programs running at startup",
      "Suspicious account or email activity",
      "Sudden, unexplained slowdowns",
    ],
  },
  {
    slug: "data-recovery",
    title: "Data Recovery",
    group: "software",
    icon: DatabaseBackup,
    image: images.hardDrivePlatter,
    summary: "Careful recovery of files from failed, damaged or formatted drives.",
    description:
      "Lost data is stressful. We assess the drive first, explain what's realistically recoverable, and work on a copy wherever possible to avoid making things worse. You only pay for recovery once we confirm what we can retrieve.",
    benefits: [
      "Free initial assessment of the drive",
      "Work performed on a disk image when possible",
      "Confidential handling of your files",
      "Recovered data returned on new media",
    ],
    problems: [
      "Accidentally deleted files or folders",
      "Drive not detected or clicking",
      "Formatted or corrupted partitions",
      "Memory cards and USB drives failing",
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    group: "business",
    icon: Network,
    image: images.networkSwitch,
    summary: "Fast, stable wired and Wi-Fi networks for homes and offices.",
    description:
      "A slow or unreliable network affects everything. We plan coverage, install and configure routers, switches and access points, and document the setup so it's easy to manage later.",
    benefits: [
      "Wi-Fi coverage planning and installation",
      "Structured cabling and switch setup",
      "Secure guest and staff networks",
      "Clear documentation of your network",
    ],
    problems: [
      "Dead zones and weak Wi-Fi",
      "Connections dropping during calls",
      "Too many devices slowing everything down",
      "No separation between guest and office traffic",
    ],
  },
  {
    slug: "printer-support",
    title: "Printer Support",
    group: "business",
    icon: Printer,
    image: images.officePrinter,
    summary: "Printers and scanners that connect and work for everyone.",
    description:
      "Printers cause more everyday frustration than almost any other device. We install drivers, configure network printing and scanning, and fix the connection issues that stop people getting work done.",
    benefits: [
      "Network printing for every device",
      "Scan-to-email and scan-to-folder setup",
      "Driver and firmware updates",
      "Troubleshooting for recurring errors",
    ],
    problems: [
      "Printer shows offline",
      "Jobs stuck in the print queue",
      "Scanner not sending to email",
      "New computers can't find the printer",
    ],
  },
  {
    slug: "it-support",
    title: "IT Support",
    group: "business",
    icon: Headset,
    image: images.workstation,
    summary: "On-site and remote help from people who know your setup.",
    description:
      "Get a dependable technical partner without hiring an in-house team. We handle day-to-day issues, user setups and maintenance, on-site or remotely, and keep a record of your systems so fixes are faster each time.",
    benefits: [
      "Remote support for quick fixes",
      "On-site visits when hands-on help is needed",
      "New staff and device onboarding",
      "Regular maintenance and health checks",
    ],
    problems: [
      "No one to call when IT breaks",
      "Staff losing time to recurring issues",
      "Onboarding new employees takes too long",
      "Updates and backups not being checked",
    ],
  },
  {
    slug: "business-it-solutions",
    title: "Business IT Solutions",
    group: "business",
    icon: Building2,
    image: images.openOffice,
    summary: "Planned, secure infrastructure that grows with your business.",
    description:
      "We help businesses plan, deploy and maintain their technology as a whole: devices, networks, backup, security and accounts. The result is a setup that supports the work instead of getting in the way.",
    benefits: [
      "Technology planning aligned with your goals",
      "Device procurement and deployment",
      "Backup and security policies set up",
      "Predictable support arrangements",
    ],
    problems: [
      "Systems added piecemeal with no plan",
      "No reliable backup in place",
      "Security concerns about staff devices",
      "Office moves or expansions",
    ],
  },
];

/** Slugs featured on the home page, in display order. */
export const featuredServiceSlugs = [
  "computer-repair",
  "laptop-repair",
  "data-recovery",
  "hardware-upgrade",
  "software-installation",
  "it-support",
  "networking",
  "business-it-solutions",
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(groupId: ServiceGroup["id"]): Service[] {
  return services.filter((service) => service.group === groupId);
}

export function getFeaturedServices(): Service[] {
  return featuredServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined);
}

/** Plain option list for the contact form select (serialisable for client components). */
export const serviceOptions = services.map(({ slug, title }) => ({ value: slug, label: title }));
