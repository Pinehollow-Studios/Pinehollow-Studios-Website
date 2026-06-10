import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds per half-loop. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** Run right-to-left (default) or left-to-right. */
  reverse?: boolean;
}

/**
 * Infinite typographic marquee. Children should already repeat enough times
 * to exceed one viewport width; the track holds two copies and translates
 * -50% on loop, pausing on hover.
 */
export function Marquee({ children, duration = 36, className, style, reverse }: MarqueeProps) {
  return (
    <div className={`ph-marquee ${className ?? ""}`} style={style}>
      <div
        className="ph-marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : undefined,
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "baseline" }}>{children}</div>
        <div style={{ display: "inline-flex", alignItems: "baseline" }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
