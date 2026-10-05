import type { Metadata } from "next";

import { CTASection } from "@/components/home/CTASection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <ExpertiseSection />
      <ProjectsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
