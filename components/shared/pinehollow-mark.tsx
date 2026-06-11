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

/** Brand colours for the duotone rendering. */
export const MARK_ICE = "#7FE4FF";
export const MARK_MIST = "#D6F5FF";

interface PinehollowMarkProps {
  size?: number;
  /** Mono colour; the rear beam renders at reduced opacity. */
  colour?: string;
  /** Render in brand duotone (ice + mist) instead of mono. */
  duo?: boolean;
  style?: CSSProperties;
  className?: string;
  ariaHidden?: boolean;
}

export function PinehollowMark({
  size = 64,
  colour = "currentColor",
  duo = false,
  style,
  className,
  ariaHidden,
}: PinehollowMarkProps) {
  const f = MARK_BEAMS.front;
  const b = MARK_BEAMS.back;
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
      {/* translucent beam paints last so the overlap reads as depth */}
      <rect
        x={f.x} y={f.y} width={f.width} height={f.height} rx={f.rx}
        transform={f.rotate}
        fill={duo ? MARK_ICE : colour}
      />
      <rect
        x={b.x} y={b.y} width={b.width} height={b.height} rx={b.rx}
        transform={b.rotate}
        fill={duo ? MARK_MIST : colour}
        opacity={duo ? 0.85 : 0.55}
      />
    </svg>
  );
}

/** SVG markup string for contexts that can't render React (OG images, data URIs). */
export function markSvgString({ duo = true, mono = "#F1F5F2" }: { duo?: boolean; mono?: string } = {}) {
  const f = MARK_BEAMS.front;
  const b = MARK_BEAMS.back;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="${f.x}" y="${f.y}" width="${f.width}" height="${f.height}" rx="${f.rx}" transform="${f.rotate}" fill="${duo ? MARK_ICE : mono}"/><rect x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" rx="${b.rx}" transform="${b.rotate}" fill="${duo ? MARK_MIST : mono}" opacity="${duo ? 0.85 : 0.55}"/></svg>`;
}
