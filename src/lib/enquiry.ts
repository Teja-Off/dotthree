// zod/mini: same validation engine, tree-shakable API, a fraction of the bundle.
import * as z from "zod/mini";

import { siteConfig } from "@/lib/site";

const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;
export const GENERAL_ENQUIRY = "general";

export const enquirySchema = z.object({
  name: z
    .string()
    .check(
      z.trim(),
      z.minLength(2, "Please enter your name."),
      z.maxLength(80, "Please keep your name under 80 characters."),
    ),
  email: z.pipe(z.string().check(z.trim()), z.email("Please enter a valid email address.")),
  phone: z.string().check(
    z.trim(),
    z.refine((value) => value === "" || PHONE_PATTERN.test(value), "Please enter a valid phone number."),
  ),
  service: z.string().check(z.minLength(1, "Please choose the service you need.")),
  message: z
    .string()
    .check(
      z.trim(),
      z.minLength(20, "Please add a little more detail (at least 20 characters)."),
      z.maxLength(2000, "Please keep your message under 2000 characters."),
    ),
  /**
   * Honeypot. Hidden from people; bots that fill it are dropped silently in
   * submitEnquiry. Deliberately not named like a real field (e.g. "company"),
   * so browser autofill never fills it for a genuine visitor.
   */
  botField: z.optional(z.string()),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryResult =
  | { status: "sent" }
  | { status: "not-configured"; mailtoHref: string }
  | { status: "error"; message: string };

/**
 * Form provider hook-up.
 * Set NEXT_PUBLIC_FORM_ENDPOINT to a JSON-accepting endpoint such as
 *   Formspree:  https://formspree.io/f/<form-id>
 *   Web3Forms:  https://api.web3forms.com/submit  (+ NEXT_PUBLIC_FORM_ACCESS_KEY)
 * Without an endpoint, the form falls back to opening the visitor's email app.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;
/** Give up on a slow form provider rather than leaving the button spinning. */
const SUBMIT_TIMEOUT_MS = 15_000;

export function buildMailtoHref(data: EnquiryInput, serviceLabel: string): string {
  const subject = `Enquiry: ${serviceLabel}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Service: ${serviceLabel}`,
    "",
    data.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitEnquiry(data: EnquiryInput, serviceLabel: string): Promise<EnquiryResult> {
  // Honeypot filled: report success so the bot moves on, but send nothing.
  if (data.botField) {
    return { status: "sent" };
  }

  if (!FORM_ENDPOINT) {
    return { status: "not-configured", mailtoHref: buildMailtoHref(data, serviceLabel) };
  }

  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    service: serviceLabel,
    subject: `New enquiry from ${data.name}`,
    ...(FORM_ACCESS_KEY ? { access_key: FORM_ACCESS_KEY } : {}),
  };

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(SUBMIT_TIMEOUT_MS),
    });
    if (!response.ok) {
      return {
        status: "error",
        message: "We couldn't send your enquiry just now. Please try again or call us.",
      };
    }
    return { status: "sent" };
  } catch (error: unknown) {
    const isTimeout = error instanceof DOMException && error.name === "TimeoutError";
    return {
      status: "error",
      message: isTimeout
        ? "Sending is taking too long. Please try again, or call or WhatsApp us instead."
        : "Network error. Please check your connection and try again.",
    };
  }
}
