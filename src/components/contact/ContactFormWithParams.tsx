"use client";

import { useSearchParams } from "next/navigation";

import { ContactForm, type ServiceOption } from "@/components/contact/ContactForm";

/**
 * Reads ?service=<slug> (set by "Enquire about…" buttons) to preselect a service.
 * Rendered inside <Suspense> so the page itself stays statically generated.
 */
export function ContactFormWithParams({ serviceOptions }: { serviceOptions: ServiceOption[] }) {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") ?? "";
  return <ContactForm key={service} serviceOptions={serviceOptions} defaultService={service} />;
}
