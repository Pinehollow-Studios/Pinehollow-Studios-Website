import { useId, type CSSProperties } from "react";

interface PineBloomProps {
  size?: number;
  ringColour?: string;
  baseColour?: string;
  bloomColour?: string;
  mistColour?: string;
  /** Pass-through style for borderRadius, shadows, etc. */
  style?: CSSProperties;
  /** Pass-through className. */
  className?: string;
  /** Hide from assistive tech (decorative). */
  ariaHidden?: boolean;
}

/**
 * Pinehollow's brand mark — a glowing pine well carved into deep forest.
 * Squircle background + bloom + glass sheen. Single SVG, scales from 16px
 * favicon to 1024px iOS master.
 */
export function PineBloom({
  size = 256,
  ringColour = "#3FE5A0",
  baseColour = "#0A1410",
  bloomColour = "#3FE5A0",
  mistColour = "#B8F5D6",
  style,
  className,
  ariaHidden,
}: PineBloomProps) {
  const id = useId().replace(/:/g, "_");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", ...style }}
      className={className}
      aria-hidden={ariaHidden}
    >
      <defs>
        <clipPath id={`pb-clip-${id}`}>
          <path d="M0 484 C 0 168, 168 0, 484 0 L 540 0 C 856 0, 1024 168, 1024 484 L 1024 540 C 1024 856, 856 1024, 540 1024 L 484 1024 C 168 1024, 0 856, 0 540 Z" />
        </clipPath>

        <radialGradient id={`pb-field-${id}`} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#1B2E25" />
          <stop offset="60%" stopColor={baseColour} />
          <stop offset="100%" stopColor="#040806" />
        </radialGradient>

        <radialGradient id={`pb-bloom-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mistColour} stopOpacity="0.95" />
          <stop offset="35%" stopColor={bloomColour} stopOpacity="0.95" />
          <stop offset="75%" stopColor={bloomColour} stopOpacity="0.30" />
          <stop offset="100%" stopColor={bloomColour} stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`pb-core-${id}`} cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="20%" stopColor={mistColour} stopOpacity="0.55" />
          <stop offset="60%" stopColor={mistColour} stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`pb-sheen-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={`pb-rim-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="88%" stopColor="rgba(0,0,0,0)" />
          <stop offset="96%" stopColor="rgba(0,0,0,0.45)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.8)" />
        </radialGradient>

        <filter id={`pb-glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>

      <g clipPath={`url(#pb-clip-${id})`}>
        <rect width="1024" height="1024" fill={`url(#pb-field-${id})`} />
        <line x1="0" y1="690" x2="1024" y2="690" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="512" cy="512" r="280" fill={bloomColour} opacity="0.30" filter={`url(#pb-glow-${id})`} />
        <circle cx="512" cy="512" r="240" fill={`url(#pb-bloom-${id})`} />
        <circle cx="512" cy="500" r="170" fill={`url(#pb-core-${id})`} />
        <circle cx="512" cy="512" r="240" fill="none" stroke={ringColour} strokeWidth="6" opacity="0.85" />
        <circle cx="512" cy="512" r="240" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <circle cx="512" cy="512" r="240" fill={`url(#pb-rim-${id})`} />
        <rect width="1024" height="1024" fill={`url(#pb-sheen-${id})`} />
        <path
          d="M0 484 C 0 168, 168 0, 484 0 L 540 0 C 856 0, 1024 168, 1024 484 L 1024 540 C 1024 856, 856 1024, 540 1024 L 484 1024 C 168 1024, 0 856, 0 540 Z"
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

interface PineGlyphProps {
  size?: number;
  colour?: string;
  filled?: boolean;
  style?: CSSProperties;
  className?: string;
  ariaHidden?: boolean;
}

/**
 * Portable glyph — bloom + ring only, transparent background.
 * Use inline at any colour for buttons, badges, status indicators.
 */
export function PineGlyph({
  size = 64,
  colour = "#3FE5A0",
  filled = true,
  style,
  className,
  ariaHidden,
}: PineGlyphProps) {
  const id = useId().replace(/:/g, "_");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", ...style }}
      className={className}
      aria-hidden={ariaHidden}
    >
      <defs>
        <radialGradient id={`pg-bloom-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colour} stopOpacity={filled ? "0.95" : "0"} />
          <stop offset="60%" stopColor={colour} stopOpacity={filled ? "0.40" : "0"} />
          <stop offset="100%" stopColor={colour} stopOpacity="0" />
        </radialGradient>
      </defs>
      {filled ? <circle cx="32" cy="32" r="22" fill={`url(#pg-bloom-${id})`} /> : null}
      <circle cx="32" cy="32" r="15" fill="none" stroke={colour} strokeWidth="2.2" opacity="0.95" />
      {filled ? <circle cx="32" cy="29" r="2.5" fill={colour} /> : null}
    </svg>
  );
}
