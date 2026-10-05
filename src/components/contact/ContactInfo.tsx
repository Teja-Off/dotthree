import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { WhatsappIcon } from "@/components/icons/SocialIcons";
import { formattedAddress, siteConfig, whatsappLink } from "@/lib/site";

function InfoRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-line py-6">
      <span className="flex size-11 items-center justify-center rounded-full bg-mist text-ink">
        <Icon className="size-[1.1rem]" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-eyebrow font-semibold text-ink-3 uppercase">{label}</h3>
        <div className="mt-2 text-ink">{children}</div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  const { contact, hours } = siteConfig;

  return (
    <div className="flex flex-col">
      <address className="not-italic">
        <InfoRow icon={Phone} label="Phone">
          <a href={contact.phoneHref} className="link-underline text-xl font-semibold tracking-[-0.02em]">
            {contact.phoneDisplay}
          </a>
        </InfoRow>
        <InfoRow icon={Mail} label="Email">
          <a
            href={`mailto:${contact.email}`}
            className="link-underline text-xl font-semibold tracking-[-0.02em]"
          >
            {contact.email}
          </a>
        </InfoRow>
        <InfoRow icon={MapPin} label="Address">
          <p className="max-w-[28ch] text-lg">{formattedAddress}</p>
        </InfoRow>
      </address>
      <InfoRow icon={Clock} label="Opening hours">
        <dl className="grid gap-2">
          {hours.map((slot) => (
            <div key={slot.days} className="flex flex-wrap justify-between gap-x-6 gap-y-0.5">
              <dt className="text-ink-3">{slot.days}</dt>
              <dd className="font-medium">{slot.time}</dd>
            </div>
          ))}
        </dl>
      </InfoRow>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group/wa mt-4 flex items-center justify-between gap-4 bg-ink p-6 text-paper transition-colors duration-300 hover:bg-ink-2"
      >
        <span className="flex items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-orange text-ink">
            <WhatsappIcon width={22} height={22} />
          </span>
          <span className="flex flex-col">
            <span className="font-semibold">Chat on WhatsApp</span>
            <span className="text-sm text-paper/65">Quick questions, photos of the issue, updates</span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="text-orange transition-transform duration-300 group-hover/wa:translate-x-1"
        >
          →
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}
