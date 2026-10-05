import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentProps<T>;

/** Consistent max-width and fluid side gutters for every section. */
export function Container<T extends ElementType = "div">({ as, className, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={cn("mx-auto w-full max-w-[1400px] px-gutter", className)} {...props} />;
}
