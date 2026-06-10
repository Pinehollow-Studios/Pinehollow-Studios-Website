import type { CSSProperties } from "react";

/**
 * TopoField — the studio's signature backdrop: contour lines of "the hollow",
 * drawn as nested irregular rings that share one angular noise profile (so
 * they nest like real terrain), draw themselves in on load, then breathe.
 *
 * Deterministic seeded PRNG so server and client render identical paths.
 */

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const N = 18;
const RINGS = 9;

function buildRings(): string[] {
  const rand = mulberry32(11);
  // one shared angular-noise profile so rings nest like real contours
  const noiseA = Array.from({ length: N }, () => (rand() - 0.5) * 2);
  const noiseB = Array.from({ length: N }, () => (rand() - 0.5) * 2);

  const paths: string[] = [];
  for (let ring = 0; ring < RINGS; ring++) {
    const r = 58 + ring * 54;
    const cx = 760 + ring * 17;
    const cy = 440 + ring * 9;

    const pts: Array<[number, number]> = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const wobble = 1 + noiseA[i] * 0.13 + noiseB[i] * 0.05 * Math.sin(ring * 0.9);
      const rr = r * wobble;
      pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.74]);
    }

    // closed Catmull-Rom → cubic Bézier
    let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < N; i++) {
      const p0 = pts[(i - 1 + N) % N];
      const p1 = pts[i];
      const p2 = pts[(i + 1) % N];
      const p3 = pts[(i + 2) % N];
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    paths.push(d + " Z");
  }
  return paths;
}

const RING_PATHS = buildRings();

const CROSSES: Array<[number, number]> = [
  [150, 130],
  [420, 760],
  [1150, 110],
  [1390, 620],
  [90, 520],
];

const ELEVATIONS: Array<[number, number, string]> = [
  [532, 312, "1420"],
  [1042, 590, "1380"],
  [820, 122, "1340"],
];

interface TopoFieldProps {
  className?: string;
  style?: CSSProperties;
}

export function TopoField({ className, style }: TopoFieldProps) {
  return (
    <svg
      viewBox="0 0 1520 900"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {RING_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          className="ph-topo-ring"
          style={{
            animationDelay: `${120 + i * 100}ms, ${i * 1.4}s`,
            opacity: i === 0 ? 0.13 : 0.05 + (RINGS - i) * 0.008,
          }}
        />
      ))}

      {CROSSES.map(([x, y], i) => (
        <g key={i} className="ph-topo-cross" style={{ animationDelay: `${600 + i * 180}ms` }}>
          <line x1={x - 7} y1={y} x2={x + 7} y2={y} />
          <line x1={x} y1={y - 7} x2={x} y2={y + 7} />
        </g>
      ))}

      {ELEVATIONS.map(([x, y, v], i) => (
        <text key={i} x={x} y={y} className="ph-topo-elev" style={{ animationDelay: `${900 + i * 200}ms` }}>
          {v}
        </text>
      ))}

      <style>{`
        .ph-topo-ring {
          fill: none;
          stroke: var(--lp-pine-glow);
          stroke-width: 1;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transform-origin: 53% 51%;
          animation:
            ph-topo-draw 2.8s var(--ph-ease-out) forwards,
            ph-topo-breathe 16s ease-in-out infinite;
        }
        @keyframes ph-topo-draw { to { stroke-dashoffset: 0; } }
        @keyframes ph-topo-breathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.03); }
        }
        .ph-topo-cross {
          stroke: var(--lp-pine-glow);
          stroke-width: 1;
          opacity: 0;
          animation: ph-topo-fade 1.2s var(--lp-ease) forwards;
        }
        .ph-topo-elev {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          fill: var(--lp-pine-glow);
          opacity: 0;
          animation: ph-topo-fade-dim 1.2s var(--lp-ease) forwards;
        }
        @keyframes ph-topo-fade { to { opacity: 0.16; } }
        @keyframes ph-topo-fade-dim { to { opacity: 0.28; } }
      `}</style>
    </svg>
  );
}
