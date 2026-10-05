import { images } from "@/data/images";
import type { Audience } from "@/types";

export const audiences: Audience[] = [
  {
    id: "individuals",
    label: "For individuals",
    title: "Your computer, working the way it should.",
    description:
      "For students, professionals and families who need a device they can depend on, and a straight answer when it isn't behaving.",
    image: images.laptopDesk,
    cta: "Book a repair",
    items: [
      {
        title: "Laptop & computer repair",
        description: "Screens, batteries, keyboards, power faults and more, fixed with tested parts.",
      },
      {
        title: "Data recovery",
        description: "Careful recovery of photos, documents and projects from failing drives.",
      },
      {
        title: "Hardware upgrades",
        description: "SSD, memory and component upgrades that add years to your machine.",
      },
      {
        title: "Software support",
        description: "Clean installs, malware removal and the apps you need, configured properly.",
      },
    ],
  },
  {
    id: "businesses",
    label: "For businesses",
    title: "Technology that keeps the whole team moving.",
    description:
      "For established organisations that need dependable systems, fast response and a partner who understands how their operations run.",
    image: images.serverRoom,
    cta: "Talk to our IT team",
    items: [
      {
        title: "IT support",
        description: "Remote and on-site support with a record of your systems and history.",
      },
      {
        title: "Networking",
        description: "Managed switching, Wi-Fi coverage and secure network segmentation.",
      },
      {
        title: "Computer maintenance",
        description: "Scheduled health checks, updates and preventive hardware care.",
      },
      {
        title: "Infrastructure support",
        description: "Racks, servers, cabling and the planning that ties them together.",
      },
      {
        title: "Security",
        description: "Endpoint protection, access policies and backup you can verify.",
      },
    ],
  },
  {
    id: "small-businesses",
    label: "For small businesses",
    title: "Big-company IT, sized for a small team.",
    description:
      "For shops, studios, clinics and startups that need things to work from day one without hiring a full-time IT department.",
    image: images.teamDesk,
    cta: "Plan your setup",
    items: [
      {
        title: "Setup",
        description: "Devices, accounts, email, printers and Wi-Fi ready before your team arrives.",
      },
      {
        title: "Maintenance",
        description: "Regular check-ins so small issues never become expensive ones.",
      },
      {
        title: "Troubleshooting",
        description: "A single number to call when something stops working.",
      },
      {
        title: "Hardware",
        description: "Advice, sourcing and installation of the right equipment for your budget.",
      },
      {
        title: "Software",
        description: "Licensing, installation and configuration of the tools you run on.",
      },
    ],
  },
];
