import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { TriDot } from "@/components/ui/TriDot";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="dot-grid relative flex min-h-[80dvh] items-center pt-(--header-height)">
      <Container className="py-24">
        <TriDot className="h-3 w-[45px]" />
        <p className="mt-10 text-eyebrow font-semibold text-orange-ink uppercase">Error 404</p>
        <h1 className="mt-4 max-w-[14ch] text-h1 font-bold text-ink">
          This page didn&apos;t make it through diagnostics.
        </h1>
        <p className="mt-6 max-w-lg text-lead text-ink-3">
          The link may be broken or the page may have moved. Let&apos;s get you back to something that works.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            Contact support
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
