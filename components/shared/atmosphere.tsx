type Variant = "default" | "deep" | "sky" | "ember" | "quiet";

interface GlowLayer {
  /** CSS background (radial-gradient) for this layer */
  background: string;
  /** Initial pos: `top` or `bottom` + `left` or `right` keyword anchor, with offset */
  anchor: { top?: string; bottom?: string; left?: string; right?: string };
  /** Size in px (square) */
  size: number;
  /** Animation: which keyframe + duration in seconds */
  anim: "drift-a" | "drift-b" | "drift-c";
  /** Optional negative delay so layers start out of phase */
  delay: number;
}

const layerSets: Record<Variant, GlowLayer[]> = {
  default: [
    {
      background:
        "radial-gradient(circle at center, rgba(127,228,255,0.22), transparent 65%)",
      anchor: { top: "-10%", left: "0%" },
      size: 900,
      anim: "drift-a",
      delay: 0,
    },
    {
      background:
        "radial-gradient(circle at center, rgba(42,74,94,0.55), transparent 65%)",
      anchor: { top: "-15%", right: "-10%" },
      size: 1000,
      anim: "drift-b",
      delay: -8,
    },
    {
      background:
        "radial-gradient(circle at center, rgba(255,149,96,0.10), transparent 65%)",
      anchor: { bottom: "-10%", right: "5%" },
      size: 800,
      anim: "drift-c",
      delay: -16,
    },
  ],
  deep: [
    {
      background:
        "radial-gradient(circle at center, rgba(42,74,94,0.55), transparent 65%)",
      anchor: { top: "10%", left: "20%" },
      size: 1100,
      anim: "drift-b",
      delay: 0,
    },
    {
      background:
        "radial-gradient(circle at center, rgba(127,228,255,0.14), transparent 65%)",
      anchor: { top: "-8%", left: "-8%" },
      size: 700,
      anim: "drift-a",
      delay: -10,
    },
  ],
  sky: [
    {
      background:
        "radial-gradient(circle at center, rgba(242,215,168,0.16), transparent 65%)",
      anchor: { top: "-8%", right: "-5%" },
      size: 900,
      anim: "drift-a",
      delay: 0,
    },
    {
      background:
        "radial-gradient(circle at center, rgba(127,228,255,0.20), transparent 65%)",
      anchor: { bottom: "-15%", left: "-5%" },
      size: 1000,
      anim: "drift-b",
      delay: -12,
    },
  ],
  ember: [
    {
      background:
        "radial-gradient(circle at center, rgba(255,149,96,0.20), transparent 65%)",
      anchor: { top: "-5%", right: "0%" },
      size: 800,
      anim: "drift-a",
      delay: 0,
    },
    {
      background:
        "radial-gradient(circle at center, rgba(127,228,255,0.16), transparent 65%)",
      anchor: { bottom: "-10%", left: "-5%" },
      size: 1000,
      anim: "drift-c",
      delay: -14,
    },
  ],
  quiet: [
    {
      background:
        "radial-gradient(circle at center, rgba(127,228,255,0.10), transparent 65%)",
      anchor: { top: "-30%", left: "10%" },
      size: 1400,
      anim: "drift-a",
      delay: 0,
    },
  ],
};

export function AtmosphereBg({ variant = "default" }: { variant?: Variant }) {
  const layers = layerSets[variant];
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {layers.map((l, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: l.size,
            height: l.size,
            borderRadius: "50%",
            background: l.background,
            filter: "blur(40px)",
            top: l.anchor.top,
            bottom: l.anchor.bottom,
            left: l.anchor.left,
            right: l.anchor.right,
            animation: `lp-${l.anim} 22s ease-in-out ${l.delay}s infinite alternate`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
