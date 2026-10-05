import { LegalPage } from "@/components/legal/LegalPage";
import { legalLastUpdated, termsSections } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that apply to DotThree repair, upgrade, IT support and related technology services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Clear terms for quotes, repairs, warranties and data, so you know exactly what to expect when you work with us."
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
