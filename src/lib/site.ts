/**
 * Central company details. Everything here is PLACEHOLDER content —
 * replace phone, email, address and social links with the real values.
 */
export const siteConfig = {
  name: "DotThree",
  wordmark: "DOTTHREE",
  legalName: "DotThree Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dotthree.com",
  tagline: "Technology that works.",
  description:
    "DotThree delivers reliable computer repair, IT support and technology solutions that keep homes and businesses connected, productive and secure.",
  contact: {
    phoneDisplay: "+91 98450 12345",
    phoneHref: "tel:+919845012345",
    email: "hello@dotthree.com",
    whatsappNumber: "919845012345",
    address: {
      street: "2nd Floor, 14 Residency Road",
      locality: "Bengaluru",
      region: "Karnataka",
      postalCode: "560025",
      country: "IN",
    },
    mapsUrl: "https://maps.google.com/?q=Residency+Road+Bengaluru",
  },
  hours: [
    { days: "Monday – Friday", time: "9:30 – 19:00" },
    { days: "Saturday", time: "10:00 – 17:00" },
    { days: "Sunday", time: "Closed · remote support by appointment" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/dotthree",
    instagram: "https://www.instagram.com/dotthree",
    facebook: "https://www.facebook.com/dotthree",
  },
} as const;

export const formattedAddress = [
  siteConfig.contact.address.street,
  `${siteConfig.contact.address.locality} ${siteConfig.contact.address.postalCode}`,
  siteConfig.contact.address.region,
].join(", ");

export function whatsappLink(message = "Hi DotThree, I need help with my computer."): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
