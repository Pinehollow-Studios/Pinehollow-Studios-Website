import type { CSSProperties, ReactNode } from "react";

interface OrbMarkProps {
  /** What the orb shows — usually a single italic letter. */
  mark: ReactNode;
  /** Outer diameter in pixels. */
  size?: number;
  /** Accent colour (used for the glow tint and the highlight gradient stop). */
  glow?: string;
  /** Optional extra style passthrough. */
  style?: CSSProperties;
}

/**
 * Polished glass-orb monogram. Replaces the flat-gradient circles that were
 * being used across the site for founder marks and product marks. Built up
 * from layered radial highlights + inner shadow to read like an etched glass
 * marble rather than a flat puck.
 */
export function OrbMark({
  mark,
  size = 96,
  glow = "var(--lp-pine-glow)",
  style,
}: OrbMarkProps) {
  const fontSize = Math.round(size * 0.46);

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        background: `
          radial-gradient(circle at 32% 26%, rgba(255,255,255,0.55), rgba(255,255,255,0.10) 30%, transparent 55%),
          radial-gradient(circle at 50% 70%, ${glow} 0%, rgba(42,74,94,0.85) 60%, rgba(7,12,18,0.95) 100%)
        `,
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.55),
          inset 0 -10px 22px rgba(0,0,0,0.45),
          0 12px 28px -10px rgba(0,0,0,0.65),
          0 0 28px -6px ${glow}
        `,
        border: "1px solid rgba(255,255,255,0.18)",
        ...style,
      }}
    >
      {/* Letter — slightly offset for italic optical centring */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--lp-font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize,
          lineHeight: 1,
          color: "rgba(255,255,255,0.94)",
          letterSpacing: "-0.02em",
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          paddingBottom: Math.round(size * 0.04),
          paddingRight: Math.round(size * 0.02),
        }}
      >
        {mark}
      </span>
      {/* Hairline highlight rim */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35), transparent 35%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
