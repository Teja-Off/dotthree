import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { legalNav, mainNav } from "@/data/navigation";
import { formattedAddress, siteConfig, whatsappLink } from "@/lib/site";

interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FacebookIcon },
  { label: "WhatsApp", href: whatsappLink(), icon: WhatsappIcon },
];

/**
 * Oversized decorative wordmark. Drawn in SVG so it always fits the container
 * exactly (textLength) and bleeds off the bottom edge of the footer.
 */
function FooterWordmark() {
  return (
    <svg viewBox="0 0 1060 112" aria-hidden="true" focusable="false" className="block h-auto w-full">
      <text
        x="0"
        y="134"
        textLength="990"
        lengthAdjust="spacingAndGlyphs"
        className="fill-mist-2 font-extrabold"
        style={{ fontSize: 170, letterSpacing: "-0.06em" }}
      >
        DOTTHREE
      </text>
      <circle cx="1030" cy="112" r="22" className="fill-orange" />
    </svg>
  );
}

function FooterHeading({ children }: { children: string }) {
  return <h2 className="mb-5 text-eyebrow font-semibold text-ink-3 uppercase">{children}</h2>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist" data-menu-inert>
      <Container className="grid grid-cols-2 gap-x-6 gap-y-14 pt-20 pb-12 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2 flex flex-col gap-6 lg:col-span-4">
          <Logo />
          <p className="max-w-sm text-ink-3">
            Computer repair, IT support and technology solutions for homes, studios and growing businesses.
            Careful work, clear answers.
          </p>
          <ul className="flex gap-2" aria-label="Social media">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
          <FooterHeading>Navigate</FooterHeading>
          <ul className="grid gap-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline font-medium text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 max-lg:order-last lg:col-span-3">
          <FooterHeading>Contact</FooterHeading>
          <address className="grid gap-3 not-italic">
            <a href={siteConfig.contact.phoneHref} className="link-underline w-fit font-medium text-ink">
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="link-underline w-fit font-medium text-ink"
            >
              {siteConfig.contact.email}
            </a>
            <p className="max-w-[26ch] text-ink-3">{formattedAddress}</p>
          </address>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Legal</FooterHeading>
          <ul className="grid gap-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-3 border-t border-line-strong py-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Repair · Upgrade · Support · Secure</p>
        </div>
      </Container>

      <Container className="pointer-events-none select-none">
        <FooterWordmark />
      </Container>
    </footer>
  );
}
