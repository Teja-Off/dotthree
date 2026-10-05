import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> &
  ButtonVariantProps & {
    /** Shows the animated arrow that nudges on hover. */
    withArrow?: boolean;
  };

/** A link styled as a button, with an optional micro-interaction arrow. */
export function ButtonLink({
  className,
  variant,
  size,
  withArrow = false,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <span>{children}</span>
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
        />
      ) : null}
    </Link>
  );
}
