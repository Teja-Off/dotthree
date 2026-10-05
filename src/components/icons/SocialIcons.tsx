import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Outline social icons drawn to match the lucide stroke style
 * (lucide no longer ships brand marks).
 */
function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      width={20}
      height={20}
      {...props}
    >
      {children}
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5" />
      <circle cx="8" cy="8" r="0.6" fill="currentColor" />
      <path d="M12 16v-5" />
      <path d="M12 13.2c0-1.4 1-2.2 2.2-2.2S16.5 11.8 16.5 13.2V16" />
    </IconBase>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </IconBase>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9.5H7v3.5h2V21h3.5v-8H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
    </IconBase>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </IconBase>
  );
}
