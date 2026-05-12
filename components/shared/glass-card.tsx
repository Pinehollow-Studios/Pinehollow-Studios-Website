"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  strong?: boolean;
  glow?: string;
  hover?: boolean;
  style?: CSSProperties;
  className?: string;
}

export function GlassCard({ children, strong, glow, hover, style, className }: GlassCardProps) {
  const [isHover, setHover] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: strong ? "var(--lp-glass-strong)" : "var(--lp-glass)",
        backdropFilter: "var(--lp-blur-lg)",
        WebkitBackdropFilter: "var(--lp-blur-lg)",
        border: `1px solid ${hover && isHover ? "var(--lp-glass-rim-hi)" : "var(--lp-glass-rim)"}`,
        borderRadius: strong ? "var(--lp-r-xl)" : "var(--lp-r-lg)",
        boxShadow: strong
          ? "var(--lp-glass-inset-hi), var(--lp-shadow-lg)"
          : "var(--lp-glass-inset), var(--lp-shadow)",
        transition: "transform var(--lp-dur) var(--lp-ease), border-color var(--lp-dur) var(--lp-ease)",
        transform: hover && isHover ? "translateY(-2px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {glow ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20% -20% 60% -20%",
            pointerEvents: "none",
            background: glow,
            filter: "blur(20px)",
          }}
        />
      ) : null}
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div>
    </div>
  );
}
