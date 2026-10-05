import { ExperienceSection } from "@/components/about/ExperienceSection";
import { MissionVision } from "@/components/about/MissionVision";
import { StorySection } from "@/components/about/StorySection";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CTASection } from "@/components/home/CTASection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageHero } from "@/components/shared/PageHero";
import { images } from "@/data/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet DotThree: a technology services team focused on careful repairs, dependable IT support and clear communication for people and businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DotThree"
        title={
          <>
            Technology built
            <br className="hidden sm:block" /> around people.
          </>
        }
        lead="We believe technology should quietly support the people who use it. Our job is to make that true, one system at a time."
        image={images.teamDesk}
      />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <WhyChooseUs index="04" image={images.motherboard} />
      <ExperienceSection />
      <TeamSection />
      <CTASection
        title="Let's work on it together."
        text="Tell us what's going on with your technology, and we'll tell you honestly how we can help."
      />
    </>
  );
}
