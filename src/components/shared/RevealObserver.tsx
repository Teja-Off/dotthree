"use client";

import { useEffect } from "react";

const PENDING_SELECTOR = "[data-reveal]:not([data-revealed])";
/** Set on <html> once the observer runs; only then is pending content hidden (see globals.css). */
const READY_ATTRIBUTE = "data-reveal-ready";
/** Trigger slightly before the element's top reaches the bottom of the viewport. */
const ROOT_MARGIN = "0px 0px -8% 0px";

/**
 * One observer for the whole site. Flags every [data-reveal] element with
 * [data-revealed] as it enters the viewport; the CSS animation does the rest.
 *
 * Content is only hidden after this runs, so nothing disappears if JavaScript
 * fails, and anything already on screen at load is left exactly as painted.
 * A MutationObserver picks up elements added by client-side navigation.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;

    document.querySelectorAll<HTMLElement>(PENDING_SELECTOR).forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.setAttribute("data-revealed", "static");
      }
    });
    root.setAttribute(READY_ATTRIBUTE, "");

    const intersection = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            entry.target.setAttribute("data-revealed", "");
            intersection.unobserve(entry.target);
          });
      },
      { rootMargin: ROOT_MARGIN },
    );

    const observePending = () => {
      document.querySelectorAll(PENDING_SELECTOR).forEach((element) => intersection.observe(element));
    };

    observePending();
    const mutation = new MutationObserver(observePending);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutation.disconnect();
      root.removeAttribute(READY_ATTRIBUTE);
    };
  }, []);

  return null;
}
