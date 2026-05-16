"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Drives a weighted, momentum-based smooth scroll for the whole page.
 * Modelled on the Apple / Linear feel — just enough lag that the scroll
 * carries inertia, not enough to feel like it's lagging behind input.
 *
 * Runs on every device — prefers-reduced-motion is intentionally ignored
 * so the feel is identical across Mac, iOS, and Windows machines that have
 * "Animation effects" disabled in OS Accessibility settings.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      // Default lerp is fine — duration drives the weighted feel
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
