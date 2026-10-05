import type { LegalSection } from "@/types";

/**
 * PLACEHOLDER legal copy written for a technology service company.
 * Have it reviewed by a qualified legal professional before publishing.
 */
/** ISO date (YYYY-MM-DD) the legal pages were last revised. */
export const legalLastUpdated = "2026-09-30";

export const privacySections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      'This Privacy Policy explains how DotThree ("we", "us", "our") collects, uses and protects personal information when you visit our website, contact us, or use our repair, IT support and technology services.',
      "By using our website or services, you agree to the practices described here. If you do not agree, please do not use the website or submit your information.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect only the information we need to respond to you and deliver our services, including:",
    ],
    list: [
      "Contact details you provide, such as your name, email address, phone number and address.",
      "Details about your enquiry, device or systems, including the service you require.",
      "Service records, such as quotes, invoices, diagnostic notes and warranty information.",
      "Basic technical information when you visit the website, such as browser type and pages viewed.",
    ],
  },
  {
    id: "device-data",
    title: "Data stored on your devices",
    paragraphs: [
      "When you hand us a device for repair or support, it may contain personal files. We access data only where it is necessary to diagnose, repair, back up or recover your system, or where you have asked us to.",
      "We do not copy, retain or share the contents of your device beyond what the service requires. Temporary backups made during a repair are securely deleted once the job is complete, unless you ask us to keep them.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    paragraphs: ["We use personal information to:"],
    list: [
      "Respond to enquiries and provide quotes.",
      "Deliver, schedule and follow up on services.",
      "Process payments and maintain accurate business records.",
      "Honour warranties and provide after-service support.",
      "Improve our website and services.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing your information",
    paragraphs: [
      "We do not sell your personal information. We share it only with trusted service providers who help us operate (for example, payment processing, parts suppliers or form and email providers), and only to the extent needed. We may also disclose information where required by law.",
    ],
  },
  {
    id: "security",
    title: "How we protect your information",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect personal information, including access controls, secure storage and careful handling of client devices. No method of transmission or storage is completely secure, but we work to protect your information appropriately.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    paragraphs: [
      "We keep personal information only for as long as necessary to provide our services, meet legal and accounting obligations, and resolve disputes.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      "Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and you may withdraw consent for optional communications at any time. Contact us using the details below to make a request.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For questions about this policy or your information, email hello@dotthree.com or write to us at our office address listed on the Contact page.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      "These Terms & Conditions govern your use of the DotThree website and the repair, upgrade, IT support and related services we provide. By booking a service or using this website, you agree to these terms.",
    ],
  },
  {
    id: "quotes",
    title: "Diagnostics and quotes",
    paragraphs: [
      "We provide a diagnosis and written quote before carrying out chargeable work. No repair or upgrade will be performed without your approval. Diagnostic fees, where applicable, will be communicated before we begin.",
      "Quotes are based on the information and fault present at the time of diagnosis. If additional faults are found during the work, we will contact you for approval before proceeding.",
    ],
  },
  {
    id: "data-responsibility",
    title: "Your data and backups",
    paragraphs: [
      "You are responsible for backing up your data before handing over a device. While we take great care, some repairs carry an inherent risk of data loss. Where possible, we will advise you of that risk before starting.",
      "Data recovery outcomes depend on the condition of the storage media and cannot be guaranteed.",
    ],
  },
  {
    id: "parts",
    title: "Parts and warranty",
    paragraphs: [
      "We use genuine or high-grade compatible parts. Repairs are covered by a limited warranty on parts and workmanship, the length of which is stated on your invoice.",
    ],
    list: [
      "The warranty covers the specific repair performed and the parts supplied by us.",
      "It does not cover physical damage, liquid damage, misuse or unauthorised modification after the repair.",
      "Software issues, data loss and third-party software are excluded unless stated otherwise.",
    ],
  },
  {
    id: "payment",
    title: "Payment",
    paragraphs: [
      "Payment is due on completion of the service unless otherwise agreed in writing. Business support arrangements are invoiced as described in the relevant agreement.",
    ],
  },
  {
    id: "collection",
    title: "Uncollected devices",
    paragraphs: [
      "We will notify you when your device is ready for collection. Devices left uncollected for more than 60 days after notification may be subject to storage charges or disposed of in accordance with applicable law, after reasonable attempts to contact you.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, DotThree is not liable for indirect or consequential losses, including loss of data, profits or business interruption. Our total liability for any service is limited to the amount paid for that service.",
    ],
  },
  {
    id: "website",
    title: "Use of this website",
    paragraphs: [
      "Content on this website is provided for general information. We aim to keep it accurate but do not guarantee that it is complete or current. Trademarks and product names mentioned belong to their respective owners.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The version published on this page at the time of your booking applies to that service.",
    ],
  },
];
