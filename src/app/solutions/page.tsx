import { ArrowDown } from "lucide-react";

import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { AudienceBlock } from "@/components/solutions/AudienceBlock";
import { audiences } from "@/data/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Technology solutions for individuals, businesses and small businesses: repairs, data recovery, IT support, networking, maintenance, setup and security.",
  path: "/solutions",
});

const blockThemes = ["light", "dark", "mist"] as const;

function AudienceJumpLinks() {
  return (
    <nav aria-label="Jump to audience">
      <ul className="grid border-t border-line">
        {audiences.map((audience) => (
          <li key={audience.id} className="border-b border-line">
            <a
              href={`#${audience.id}`}
              className="group/jump flex items-center justify-between py-3.5 font-medium text-ink"
            >
              {audience.label}
              <ArrowDown
                aria-hidden="true"
                className="size-4 text-ink-3 transition-transform duration-300 group-hover/jump:translate-y-0.5 group-hover/jump:text-ink"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="The right technology support for how you work."
        lead="Whether it's one laptop or an entire office, we shape our services around who you are and what you need to get done."
        aside={<AudienceJumpLinks />}
      />
      {audiences.map((audience, index) => (
        <AudienceBlock
          key={audience.id}
          audience={audience}
          index={index}
          theme={blockThemes[index % blockThemes.length]}
          isReversed={index % 2 === 1}
        />
      ))}
      <CTASection
        title="Tell us what you're working with."
        text="We'll recommend a solution that fits your setup, your team and your budget."
      />
    </>
  );
}
