import type { CSSProperties, ReactNode } from "react";

type RevealElement = "div" | "li" | "article" | "section";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for staggering siblings. */
  delay?: number;
  as?: RevealElement;
}

/**
 * Marks content to fade and lift into view the first time it scrolls in.
 * Server component: the animation is pure CSS (see globals.css), triggered by
 * the single RevealObserver mounted in the root layout.
 */
export function Reveal({ children, className, delay = 0, as: Component = "div" }: RevealProps) {
  const style = delay > 0 ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;
  return (
    <Component data-reveal="" className={className} style={style}>
      {children}
    </Component>
  );
}
