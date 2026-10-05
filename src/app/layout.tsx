import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocalBusinessJsonLd } from "@/components/shared/LocalBusinessJsonLd";
import { RevealObserver } from "@/components/shared/RevealObserver";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Computer Repair, IT Support & Technology Solutions`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "computer repair",
    "laptop repair",
    "IT support",
    "data recovery",
    "networking",
    "hardware upgrade",
    "business IT solutions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Technology that works`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · Technology that works`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-60 -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1" data-menu-inert tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
