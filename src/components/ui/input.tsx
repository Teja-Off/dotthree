import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Shared field styling for inputs, selects and textareas. */
export const fieldClassName = cn(
  "w-full min-w-0 rounded-none border-0 border-b border-line-strong bg-transparent px-0 py-3",
  "text-base text-ink transition-colors outline-none placeholder:text-ink-4",
  "hover:border-ink-3 focus-visible:border-ink focus-visible:outline-none",
  "focus-visible:shadow-[0_1px_0_0_var(--ink)]",
  "aria-invalid:border-orange-ink aria-invalid:shadow-[0_1px_0_0_var(--orange-ink)]",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn(fieldClassName, "h-12", className)} {...props} />;
}

export { Input };
