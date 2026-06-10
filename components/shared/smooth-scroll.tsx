"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Weighted, momentum-based smooth scroll for the whole page, with GSAP's
 * ScrollTrigger driven off the same clock so pinned/scrubbed sections stay
 * perfectly in sync with Lenis.
 *
 * Runs on every device — prefers-reduced-motion is intentionally ignored
 * so the feel is identical across Mac, iOS, and Windows machines that have
 * "Animation effects" disabled in OS Accessibility settings.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Lets distant components (footer "back to top") drive the smooth scroll
    // without holding a Lenis reference.
    const onScrollTo = (e: Event) => {
      const target = (e as CustomEvent<number | string>).detail ?? 0;
      lenis.scrollTo(target, { duration: 1.4 });
    };
    window.addEventListener("ph:scrollto", onScrollTo);

    return () => {
      window.removeEventListener("ph:scrollto", onScrollTo);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
