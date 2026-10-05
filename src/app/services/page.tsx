import { CTASection } from "@/components/home/CTASection";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { PageHero } from "@/components/shared/PageHero";
import { serviceGroups, services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Computer, laptop and desktop repair, hardware and SSD upgrades, OS and software installation, malware removal, data recovery, networking and business IT support.",
  path: "/services",
});

function ServiceSummary() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line">
      <div className="bg-paper p-5">
        <dt className="text-sm text-ink-3">Services</dt>
        <dd className="mt-1 text-3xl font-bold tracking-[-0.03em] text-ink">{services.length}</dd>
      </div>
      <div className="bg-paper p-5">
        <dt className="text-sm text-ink-3">Specialist areas</dt>
        <dd className="mt-1 text-3xl font-bold tracking-[-0.03em] text-ink">{serviceGroups.length}</dd>
      </div>
    </dl>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built around real problems."
        lead="Every service starts with a proper diagnosis and a clear quote. Browse by area, or jump straight to the problem you need solved."
        aside={<ServiceSummary />}
      />
      <ServiceGrid />
      <CTASection
        title="Not sure which service you need?"
        text="Describe the problem in a sentence or two. We'll point you to the right fix, with no obligation."
      />
    </>
  );
}
