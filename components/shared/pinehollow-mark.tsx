import type { CSSProperties } from "react";

/**
 * Pinehollow brand mark — "the lean": two rounded beams leaning into each
 * other, the taller carrying the shorter. Two founders, one peak; the void
 * beneath them is the hollow. The rear beam is translucent so the overlap
 * reads as depth, not a letterform.
 *
 * Drawn on a 64u grid.
 */

export const MARK_BEAMS = {
  front: { x: 14, y: 5, width: 15, height: 52, rx: 7.5, rotate: "rotate(22 21.5 31)" },
  back: { x: 34, y: 15, width: 14.5, height: 42, rx: 7.25, rotate: "rotate(-24 41.25 36)" },
} as const;

/**
 * Brand mark beam fill — a vertical-ish gradient (hot ice → mist) matching
 * the app-icon glyph. Painted through a per-instance <linearGradient>.
 */
export const MARK_BEAM_FROM = "#B0F1FF"; // --lp-pine-glow-hot
export const MARK_BEAM_TO = "#D6F5FF"; // --lp-pine-mist
/** Ink fill, for the mark on light surfaces. */
export const MARK_INK = "#06181F"; // --lp-ice-ink

/** Gradient coords shared by every beam fill (the app-icon glyph's beam). */
const BEAM_GRADIENT = { x1: "0", y1: "0", x2: "0.4", y2: "1" } as const;

interface PinehollowMarkProps {
  size?: number;
  /** Mono colour; the rear beam renders at reduced opacity. */
  colour?: string;
  /** Render the brand gradient (hot ice → mist) instead of mono. */
  duo?: boolean;
  /** Unique gradient id, in case two gradient marks share a page. */
  gradientId?: string;
  style?: CSSProperties;
  className?: string;
  ariaHidden?: boolean;
}

export function PinehollowMark({
  size = 64,
  colour = "currentColor",
  duo = false,
  gradientId = "ph-mark-beam",
  style,
  className,
  ariaHidden,
}: PinehollowMarkProps) {
  const f = MARK_BEAMS.front;
  const b = MARK_BEAMS.back;
  const fill = duo ? `url(#${gradientId})` : colour;
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
      {duo && (
        <defs>
          <linearGradient id={gradientId} {...BEAM_GRADIENT}>
            <stop offset="0%" stopColor={MARK_BEAM_FROM} />
            <stop offset="100%" stopColor={MARK_BEAM_TO} />
          </linearGradient>
        </defs>
      )}
      {/* translucent rear beam paints last so the overlap reads as depth */}
      <rect
        x={f.x} y={f.y} width={f.width} height={f.height} rx={f.rx}
        transform={f.rotate}
        fill={fill}
      />
      <rect
        x={b.x} y={b.y} width={b.width} height={b.height} rx={b.rx}
        transform={b.rotate}
        fill={fill}
        opacity={duo ? 0.85 : 0.55}
      />
    </svg>
  );
}

/** SVG markup string for contexts that can't render React (OG images, data URIs). */
export function markSvgString({
  duo = true,
  mono = "#F1F5F2",
  gradientId = "ph-mark-beam",
}: { duo?: boolean; mono?: string; gradientId?: string } = {}) {
  const f = MARK_BEAMS.front;
  const b = MARK_BEAMS.back;
  const defs = duo
    ? `<defs><linearGradient id="${gradientId}" x1="${BEAM_GRADIENT.x1}" y1="${BEAM_GRADIENT.y1}" x2="${BEAM_GRADIENT.x2}" y2="${BEAM_GRADIENT.y2}"><stop offset="0%" stop-color="${MARK_BEAM_FROM}"/><stop offset="100%" stop-color="${MARK_BEAM_TO}"/></linearGradient></defs>`
    : "";
  const fill = duo ? `url(#${gradientId})` : mono;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${defs}<rect x="${f.x}" y="${f.y}" width="${f.width}" height="${f.height}" rx="${f.rx}" transform="${f.rotate}" fill="${fill}"/><rect x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" rx="${b.rx}" transform="${b.rotate}" fill="${fill}" opacity="${duo ? 0.85 : 0.55}"/></svg>`;
}
