import { useId, type CSSProperties } from "react";

/**
 * Pinehollow brand mark — two pine peaks meeting at a central valley.
 * One continuous shape on a 64u grid. Works as a glyph at 16px.
 *
 *   bottom-left   (4, 54)
 *   left apex     (14, 8)
 *   centre valley (32, 36)
 *   right apex    (50, 8)
 *   bottom-right  (60, 54)
 */

const MARK_PATH = "M4 54 L14 8 L32 36 L50 8 L60 54 Z";

type MarkVariant = "solid" | "outline" | "duotone";

interface PinehollowMarkProps {
  size?: number;
  colour?: string;
  variant?: MarkVariant;
  strokeWidth?: number;
  style?: CSSProperties;
  className?: string;
  ariaHidden?: boolean;
}

export function PinehollowMark({
  size = 64,
  colour = "currentColor",
  variant = "solid",
  strokeWidth = 4,
  style,
  className,
  ariaHidden,
}: PinehollowMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0, ...style }}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Pinehollow"}
    >
      {variant === "solid" ? <path d={MARK_PATH} fill={colour} /> : null}
      {variant === "outline" ? (
        <path
          d={MARK_PATH}
          fill="none"
          stroke={colour}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : null}
      {variant === "duotone" ? (
        <>
          <path d="M32 36 L14 8 L4 54 Z" fill={colour} fillOpacity="0.20" />
          <path d="M32 36 L50 8 L60 54 Z" fill={colour} fillOpacity="0.20" />
          <path
            d={MARK_PATH}
            fill="none"
            stroke={colour}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      ) : null}
    </svg>
  );
}

export function PinehollowGlyph({
  size = 20,
  colour = "currentColor",
  style,
  className,
  ariaHidden,
}: Pick<PinehollowMarkProps, "size" | "colour" | "style" | "className" | "ariaHidden">) {
  return (
    <PinehollowMark
      size={size}
      colour={colour}
      variant="solid"
      style={style}
      className={className}
      ariaHidden={ariaHidden}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// App-icon tile — mark inset on a coloured squircle
// ─────────────────────────────────────────────────────────────

type TileTheme = "pinehollow" | "vestige" | "light";

interface PinehollowIconTileProps {
  size?: number;
  theme?: TileTheme;
  style?: CSSProperties;
  className?: string;
  ariaHidden?: boolean;
}

const tileThemes: Record<TileTheme, { bg: string; mark: string; accent: string }> = {
  pinehollow: { bg: "#0A1410", mark: "#3FE5A0", accent: "#3FE5A0" },
  vestige:   { bg: "#0A1410", mark: "#3FE5A0", accent: "#3FE5A0" },
  light:      { bg: "#E6DDCC", mark: "#0A1410", accent: "#2D4F3F" },
};

export function PinehollowIconTile({
  size = 128,
  theme = "pinehollow",
  style,
  className,
  ariaHidden,
}: PinehollowIconTileProps) {
  const t = tileThemes[theme];
  const id = useId().replace(/:/g, "_");
  const radius = size * 0.22;
  const isLight = theme === "light";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        flexShrink: 0,
        borderRadius: radius,
        boxShadow: isLight
          ? "0 10px 30px -10px rgba(0,0,0,0.25)"
          : `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 32px -8px ${t.accent}55`,
        ...style,
      }}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Pinehollow"}
    >
      <defs>
        <clipPath id={`pi-clip-${id}`}>
          <rect width="128" height="128" rx="28" ry="28" />
        </clipPath>
        <radialGradient id={`pi-bg-${id}`} cx="50%" cy="20%" r="80%">
          <stop offset="0%" stopColor={isLight ? "#F5EFE0" : "#1B2E25"} stopOpacity="1" />
          <stop offset="100%" stopColor={t.bg} />
        </radialGradient>
        <radialGradient id={`pi-halo-${id}`} cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor={t.accent} stopOpacity={isLight ? "0" : "0.30"} />
          <stop offset="100%" stopColor={t.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`pi-sheen-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={isLight ? "0.30" : "0.12"} />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#pi-clip-${id})`}>
        <rect width="128" height="128" fill={`url(#pi-bg-${id})`} />
        <rect width="128" height="128" fill={`url(#pi-halo-${id})`} />
        <g transform="translate(22 22) scale(1.3125)">
          <path d={MARK_PATH} fill={t.mark} />
        </g>
        <rect width="128" height="128" fill={`url(#pi-sheen-${id})`} />
        <rect
          width="128"
          height="128"
          rx="28"
          ry="28"
          fill="none"
          stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)"}
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
