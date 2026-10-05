import { Phone } from "lucide-react";
import { Suspense } from "react";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormWithParams } from "@/components/contact/ContactFormWithParams";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { WhatsappIcon } from "@/components/icons/SocialIcons";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { serviceOptions } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact DotThree for computer repair, IT support, networking or data recovery. Call, email, WhatsApp or send an enquiry and we'll reply within one working day.",
  path: "/contact",
});

function QuickActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-orange px-6 font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
      >
        <WhatsappIcon width={18} height={18} />
        WhatsApp us
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <a
        href={siteConfig.contact.phoneHref}
        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-ink/80 px-6 font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call now
      </a>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your technology working."
        lead="Tell us what's going on. We'll reply within one working day with next steps, and for urgent issues we're a call or message away."
        aside={<QuickActions />}
      />

      <section aria-label="Contact details and enquiry form" className="pb-section">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow index="01">Reach us directly</Eyebrow>
            <h2 className="mt-6 text-h3 font-bold text-ink">Prefer to talk? Reach a technician directly.</h2>
            <div className="mt-10">
              <ContactInfo />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Eyebrow index="02">Send an enquiry</Eyebrow>
            <h2 className="mt-6 text-h3 font-bold text-ink">
              A few details help us come back with a useful answer.
            </h2>
            <div className="mt-10 border-t-2 border-ink pt-10">
              <Suspense fallback={<ContactForm serviceOptions={serviceOptions} />}>
                <ContactFormWithParams serviceOptions={serviceOptions} />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>

      <MapPlaceholder />
    </>
  );
}
