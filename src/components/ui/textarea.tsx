import type { ComponentProps } from "react";

import { fieldClassName } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldClassName, "min-h-32 resize-y leading-relaxed", className)}
      {...props}
    />
  );
}

export { Textarea };
