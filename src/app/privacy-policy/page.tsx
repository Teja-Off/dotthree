import { LegalPage } from "@/components/legal/LegalPage";
import { legalLastUpdated, privacySections } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How DotThree collects, uses and protects personal information and the data on devices we service.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We handle your personal information, and the data on your devices, with the same care we give the hardware itself."
      lastUpdated={legalLastUpdated}
      sections={privacySections}
    />
  );
}
