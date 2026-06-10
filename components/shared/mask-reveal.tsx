"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { loaderGate } from "./loader-gate";

interface MaskRevealProps {
  /** One ReactNode per visual line. Each gets its own overflow mask. */
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** Play on mount (after the preloader gate) instead of on intersection. */
  immediate?: boolean;
  /** Extra delay in ms before the stagger starts. */
  delay?: number;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Line-masked headline reveal — each line slides up out of an overflow-hidden
 * window with a slight settle rotation, staggered ~110ms per line. The actual
 * motion lives in globals.css (.ph-mline / .ph-mline-in); this component just
 * decides when to add the `in` class.
 */
export function MaskReveal({
  lines,
  as: Tag = "div",
  className,
  immediate = false,
  delay = 0,
  threshold = 0.2,
  style,
}: MaskRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let timer: number | undefined;
    let obs: IntersectionObserver | undefined;

    const show = () => {
      timer = window.setTimeout(() => {
        if (!cancelled) el.classList.add("in");
      }, delay);
    };

    if (immediate) {
      // Never let a stuck gate hide the page — 3s safety timeout.
      Promise.race([
        loaderGate,
        new Promise<void>((r) => setTimeout(r, 3000)),
      ]).then(() => {
        if (!cancelled) show();
      });
    } else {
      obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              show();
              obs?.disconnect();
              return;
            }
          }
        },
        { threshold, rootMargin: "0px 0px -8% 0px" },
      );
      obs.observe(el);
    }

    return () => {
      cancelled = true;
      obs?.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [immediate, delay, threshold]);

  return (
    <Tag ref={ref} className={`ph-masked ${className ?? ""}`} style={style}>
      {lines.map((line, i) => (
        <span key={i} className="ph-mline">
          <span className="ph-mline-in" style={{ "--mi": i } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
