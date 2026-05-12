"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "up-lg" | "up-xl" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  /** Animation variant. "up" is the default small/medium reveal. "up-lg" / "up-xl" are heavier for hero-scale content. */
  variant?: Variant;
  /** Delay before the animation starts, in ms. Use to stagger siblings. */
  delay?: number;
  /** Duration override in ms. Defaults match the variant. */
  duration?: number;
  /** Intersection threshold (0–1). */
  threshold?: number;
  /** If true, also runs on mount immediately (for above-the-fold hero content). */
  immediate?: boolean;
  /** Extra style passthrough. */
  style?: CSSProperties;
  /** Display type for the wrapper. */
  as?: "block" | "inline-block" | "contents";
  className?: string;
}

const variants: Record<Variant, { from: CSSProperties; duration: number }> = {
  fade: {
    from: { opacity: 0 },
    duration: 700,
  },
  up: {
    from: { opacity: 0, transform: "translate3d(0, 24px, 0)" },
    duration: 800,
  },
  "up-lg": {
    from: { opacity: 0, transform: "translate3d(0, 44px, 0)" },
    duration: 1000,
  },
  "up-xl": {
    from: { opacity: 0, transform: "translate3d(0, 64px, 0)" },
    duration: 1200,
  },
  scale: {
    from: { opacity: 0, transform: "scale(0.96)" },
    duration: 900,
  },
};

const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

/**
 * Animates children into view on mount (immediate) or on intersection.
 * Drives transitions by mutating styles directly via ref — no React state,
 * which keeps it cheap and avoids cascading renders.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration,
  threshold = 0.12,
  immediate = false,
  style,
  as = "block",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const v = variants[variant];
  const dur = duration ?? v.duration;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: number | undefined;
    let obs: IntersectionObserver | undefined;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translate3d(0, 0, 0) scale(1)";
      window.setTimeout(() => {
        el.style.willChange = "auto";
      }, dur + 80);
    };

    const trigger = () => {
      if (delay > 0) timer = window.setTimeout(reveal, delay);
      else reveal();
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.transition = "none";
      reveal();
      return;
    }

    if (immediate) {
      // Defer to next frame so the initial paint shows the "from" state.
      const raf = requestAnimationFrame(trigger);
      return () => {
        cancelAnimationFrame(raf);
        if (timer !== undefined) window.clearTimeout(timer);
      };
    }

    obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            trigger();
            obs?.disconnect();
            return;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);

    return () => {
      obs?.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [immediate, delay, threshold, dur]);

  const initialStyle: CSSProperties = {
    display: as === "contents" ? "contents" : as === "inline-block" ? "inline-block" : "block",
    willChange: "transform, opacity",
    transition: `transform ${dur}ms ${EASE}, opacity ${dur}ms ${EASE}`,
    ...v.from,
    ...style,
  };

  return (
    <div ref={ref} className={className} style={initialStyle}>
      {children}
    </div>
  );
}
