import { Phone } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { TriDot } from "@/components/ui/TriDot";
import { siteConfig } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
}

/** Full-bleed orange call to action, reused at the end of every page. */
export function CTASection({
  title = "Need a technology solution?",
  text = "Let's solve the problem and get your systems working the way they should.",
  buttonLabel = "Get in Touch",
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="on-orange relative overflow-hidden bg-orange text-ink">
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_left,black,transparent_70%)]"
      />
      <Container className="relative grid gap-12 py-[clamp(4.5rem,3rem+6vw,9rem)] lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <TriDot className="mb-10 h-3 w-[45px] [&_circle:last-child]:fill-paper" />
          <h2 id="cta-heading" className="max-w-[14ch] text-h1 font-bold">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lead text-ink/80">{text}</p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch"
        >
          <ButtonLink href="/contact" size="lg" variant="dark" withArrow>
            {buttonLabel}
          </ButtonLink>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-ink/30 px-7 font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink/5"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
