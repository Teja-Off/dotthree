"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { MobileMenu, MobileMenuToggle } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 12;

function useScrolled(threshold: number): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > threshold);
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return isScrolled;
}

export function Header() {
  const pathname = usePathname();
  const isScrolled = useScrolled(SCROLL_THRESHOLD);
  // The menu is open "for a path": any navigation (links, back/forward) closes it
  // without an effect, because the stored path no longer matches.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isMenuOpen = openPath === pathname;
  const closeMenu = useCallback(() => setOpenPath(null), []);
  const toggleMenu = useCallback(
    () => setOpenPath((current) => (current === pathname ? null : pathname)),
    [pathname],
  );
  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-out-expo)]",
        isSolid
          ? "bg-paper/90 shadow-[0_1px_0_0_var(--line)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-(--header-height) items-center justify-between gap-6">
        <Logo onNavigate={closeMenu} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group/nav relative flex h-10 items-center rounded-full px-4 text-[0.95rem] font-medium transition-colors duration-300",
                      isActive ? "text-ink" : "text-ink-3 hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-orange transition-all duration-300 ease-[var(--ease-out-expo)]",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover/nav:scale-100 group-hover/nav:opacity-60",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" size="sm" variant="dark" withArrow className="hidden sm:inline-flex">
            Get in Touch
          </ButtonLink>
          <MobileMenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} pathname={pathname} />
    </header>
  );
}
