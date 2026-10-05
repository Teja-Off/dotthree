import type { ImageAsset } from "@/types";

import circuitBoard from "@/assets/images/circuit-board.jpg";
import codeScreen from "@/assets/images/code-screen.jpg";
import datacenterAisle from "@/assets/images/datacenter-aisle.jpg";
import desktopSetup from "@/assets/images/desktop-setup.jpg";
import graphicsCards from "@/assets/images/graphics-cards.jpg";
import hardDriveOpen from "@/assets/images/hard-drive-open.jpg";
import hardDrivePlatter from "@/assets/images/hard-drive-platter.jpg";
import heroCpu from "@/assets/images/hero-cpu.jpg";
import laptopCode from "@/assets/images/laptop-code.jpg";
import laptopDesk from "@/assets/images/laptop-desk.jpg";
import motherboard from "@/assets/images/motherboard.jpg";
import networkSwitch from "@/assets/images/network-switch.jpg";
import officePrinter from "@/assets/images/office-printer.jpg";
import openOffice from "@/assets/images/open-office.jpg";
import patchPanel from "@/assets/images/patch-panel.jpg";
import processor from "@/assets/images/processor.jpg";
import ramModule from "@/assets/images/ram-module.jpg";
import securityLock from "@/assets/images/security-lock.jpg";
import serverRack from "@/assets/images/server-rack.jpg";
import serverRoom from "@/assets/images/server-room.jpg";
import teamDesk from "@/assets/images/team-desk.jpg";
import technicianBench from "@/assets/images/technician-bench.jpg";
import terminal from "@/assets/images/terminal.jpg";
import wifiRouter from "@/assets/images/wifi-router.jpg";
import workstation from "@/assets/images/workstation.jpg";

/**
 * Single registry of photography (sourced from Unsplash, free licence).
 * Swap any file in src/assets/images to replace a photo site-wide.
 */
export const images = {
  heroCpu: { src: heroCpu, alt: "Close-up of a processor seated in a motherboard socket" },
  ramModule: { src: ramModule, alt: "Macro shot of a DDR memory module" },
  motherboard: { src: motherboard, alt: "Detailed view of a computer motherboard" },
  circuitBoard: { src: circuitBoard, alt: "Printed circuit board with chips and components" },
  technicianBench: { src: technicianBench, alt: "Technician working at a bench with tools and schematics" },
  teamDesk: { src: teamDesk, alt: "Team working together on laptops around a shared desk" },
  datacenterAisle: { src: datacenterAisle, alt: "Engineers reviewing systems in a data centre aisle" },
  serverRack: { src: serverRack, alt: "Server rack with neatly patched network cables" },
  networkSwitch: { src: networkSwitch, alt: "Network switch ports with connected ethernet cables" },
  patchPanel: { src: patchPanel, alt: "Structured cabling connected to a patch panel" },
  serverRoom: { src: serverRoom, alt: "Row of server cabinets with organised cabling" },
  hardDriveOpen: { src: hardDriveOpen, alt: "Opened hard disk drive showing the platter and read arm" },
  hardDrivePlatter: { src: hardDrivePlatter, alt: "Hard drive platter and actuator in low light" },
  laptopDesk: { src: laptopDesk, alt: "Laptop on a clean wooden desk" },
  laptopCode: { src: laptopCode, alt: "Laptop displaying code on a bright desk" },
  desktopSetup: { src: desktopSetup, alt: "Desktop computer workstation with monitor and keyboard" },
  graphicsCards: { src: graphicsCards, alt: "Two graphics cards ready for installation" },
  processor: { src: processor, alt: "Desktop processor installed on a motherboard" },
  securityLock: { src: securityLock, alt: "Padlock resting on a laptop keyboard, representing security" },
  officePrinter: { src: officePrinter, alt: "Office multifunction laser printer" },
  wifiRouter: { src: wifiRouter, alt: "Wireless router with ethernet cable connected" },
  terminal: { src: terminal, alt: "Command-line terminal on a dark screen" },
  openOffice: { src: openOffice, alt: "Open-plan office with rows of computer workstations" },
  workstation: { src: workstation, alt: "Person working at a dual-monitor workstation" },
  codeScreen: { src: codeScreen, alt: "Source code displayed on a monitor" },
} satisfies Record<string, ImageAsset>;
