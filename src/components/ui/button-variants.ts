import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button styles, kept separate from the Base UI button so links styled as
 * buttons don't pull the button primitive into every page's bundle.
 */
export const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap",
    "rounded-full font-semibold tracking-[-0.01em] select-none",
    "transition-[background-color,color,border-color,scale,box-shadow] duration-300 ease-[var(--ease-out-expo)]",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary: "bg-orange text-ink shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)] hover:bg-ink hover:text-paper",
        dark: "bg-ink text-paper hover:bg-orange hover:text-ink",
        outline: "border border-ink/80 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        light: "bg-paper text-ink hover:bg-orange",
        "outline-light": "border border-paper/35 text-paper hover:border-paper hover:bg-paper hover:text-ink",
        link: "rounded-none px-0 text-ink underline-offset-8 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    compoundVariants: [{ variant: "link", className: "h-auto px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
