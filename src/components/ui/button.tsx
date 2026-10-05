import type { ComponentProps } from "react";

import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & ButtonVariantProps;

/** Native button with the shared DOTTHREE button styles. */
function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
