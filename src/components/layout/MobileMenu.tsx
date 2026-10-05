"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { isActivePath } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const MENU_ID = "mobile-menu";
const ITEM_DELAY_BASE_MS = 50;
const ITEM_DELAY_STEP_MS = 45;
const INERT_SELECTOR = "[data-menu-inert]";
/** Matches the `lg` breakpoint, where the desktop navigation takes over. */
const DESKTOP_QUERY = "(min-width: 64rem)";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={MENU_ID}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative flex size-11 items-center justify-center rounded-full border border-line-strong bg-paper transition-colors hover:border-ink lg:hidden"
    >
      <span aria-hidden="true" className="relative block h-3 w-5">
        <span
          className={cn(
            "absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ease-[var(--ease-out-expo)]",
            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
          )}
        />
        <span
          className={cn(
            "absolute left-0 h-[1.5px] bg-ink transition-all duration-300 ease-[var(--ease-out-expo)]",
            isOpen ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-0 w-3",
          )}
        />
      </span>
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

/**
 * While open: locks page scroll, makes the page behind inert, and closes on
 * Escape or when the viewport grows to desktop width (where the panel is hidden
 * and would otherwise leave the page locked).
 */
function useMenuSideEffects(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;
    const inertTargets = Array.from(document.querySelectorAll<HTMLElement>(INERT_SELECTOR));
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    inertTargets.forEach((element) => element.setAttribute("inert", ""));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [isOpen, onClose]);
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useMenuSideEffects(isOpen, onClose);

  // Opening: move focus into the panel (not onto a link) so screen readers
  // announce it without painting a focus ring for touch users.
  // Closing: if focus was inside the panel, hand it back to the toggle.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (isOpen) {
      panel.focus();
      return;
    }
    if (panel.contains(document.activeElement)) {
      document.querySelector<HTMLElement>(`[aria-controls="${MENU_ID}"]`)?.focus();
    }
  }, [isOpen]);

  return (
    // Always mounted so it can transition out; `inert` + `invisible` remove it from
    // focus order and the accessibility tree while closed. Explicit height (not
    // bottom-0): the header's backdrop-filter makes it the containing block.
    <div
      id={MENU_ID}
      ref={panelRef}
      tabIndex={-1}
      role="region"
      aria-label="Site menu"
      inert={!isOpen}
      className={cn(
        "fixed inset-x-0 top-(--header-height) h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain bg-paper outline-none lg:hidden",
        "duration-300 ease-[var(--ease-out-expo)]",
        // Visibility only transitions on close, so the panel is focusable the
        // moment it opens and still fades out before it hides.
        isOpen
          ? "visible opacity-100 transition-opacity"
          : "invisible opacity-0 transition-[opacity,visibility]",
      )}
    >
      <Container className="flex min-h-full flex-col justify-between gap-12 pt-6 pb-10">
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {mainNav.map((item, index) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li
                  key={item.href}
                  style={{
                    transitionDelay: isOpen ? `${ITEM_DELAY_BASE_MS + index * ITEM_DELAY_STEP_MS}ms` : "0ms",
                  }}
                  className={cn(
                    "border-b border-line transition-[opacity,translate] duration-500 ease-[var(--ease-out-expo)]",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className="flex items-center justify-between py-4 text-[2rem] leading-none font-semibold tracking-[-0.03em] text-ink"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-2.5 rounded-full transition-colors",
                        isActive ? "bg-orange" : "bg-line-strong",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            "flex flex-col gap-6 transition-opacity duration-500",
            isOpen ? "opacity-100 delay-300" : "opacity-0",
          )}
        >
          <ButtonLink href="/contact" onClick={onClose} size="lg" withArrow className="w-full">
            Get in Touch
          </ButtonLink>
          <div className="grid gap-1 text-sm text-ink-3">
            <a href={siteConfig.contact.phoneHref} className="text-base font-medium text-ink">
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
