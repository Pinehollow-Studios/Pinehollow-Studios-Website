"use client";

import { useEffect, useRef, useState } from "react";
import { openGate } from "./loader-gate";
import { MARK_BEAMS, MARK_ICE, MARK_MIST } from "./pinehollow-mark";

/**
 * One-time loading wipe — mark draws itself while a counter runs 000→100,
 * then the curtain lifts. Shown once per browser session; on repeat visits
 * the gate opens immediately and nothing renders.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"loading" | "wipe" | "done">("loading");
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("ph-seen")) {
      openGate();
      // async so the state change isn't synchronous inside the effect body
      const skip = window.setTimeout(() => setPhase("done"), 0);
      return () => window.clearTimeout(skip);
    }
    sessionStorage.setItem("ph-seen", "1");

    const start = performance.now();
    const DUR = 1350;
    let raf = 0;
    let doneTimer: number | undefined;

    const step = (t: number) => {
      const p = Math.min(1, (t - start) / DUR);
      const eased = 1 - Math.pow(1 - p, 3);
      if (numRef.current) {
        numRef.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${eased})`;
      }
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setPhase("wipe");
        openGate();
        doneTimer = window.setTimeout(() => setPhase("done"), 950);
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      if (doneTimer !== undefined) window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="ph-loader" data-wipe={phase === "wipe" || undefined} aria-hidden="true">
      <div className="ph-loader-inner">
        <svg width="56" height="56" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect
            {...{ x: MARK_BEAMS.front.x, y: MARK_BEAMS.front.y, width: MARK_BEAMS.front.width, height: MARK_BEAMS.front.height, rx: MARK_BEAMS.front.rx }}
            transform={MARK_BEAMS.front.rotate}
            fill={MARK_ICE}
            className="ph-loader-beam ph-loader-beam-a"
          />
          <rect
            {...{ x: MARK_BEAMS.back.x, y: MARK_BEAMS.back.y, width: MARK_BEAMS.back.width, height: MARK_BEAMS.back.height, rx: MARK_BEAMS.back.rx }}
            transform={MARK_BEAMS.back.rotate}
            fill={MARK_MIST}
            className="ph-loader-beam ph-loader-beam-b"
          />
        </svg>
        <div className="ph-loader-meta">
          <span>Pinehollow Studios</span>
          <span ref={numRef} className="ph-loader-num">000</span>
        </div>
        <span className="ph-loader-bar">
          <span ref={barRef} className="ph-loader-bar-fill" />
        </span>
      </div>

      <style>{`
        .ph-loader {
          position: fixed;
          inset: 0;
          z-index: 4000;
          background: var(--ph-base);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 900ms var(--ph-ease-expo);
        }
        .ph-loader[data-wipe] { transform: translateY(-101%); }
        .ph-loader-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          transition: opacity 400ms var(--lp-ease), transform 600ms var(--ph-ease-out);
        }
        .ph-loader[data-wipe] .ph-loader-inner {
          opacity: 0;
          transform: translateY(-40px);
        }
        .ph-loader-beam {
          opacity: 0;
          transform-box: view-box;
          animation: ph-loader-rise 700ms var(--ph-ease-expo) forwards;
        }
        .ph-loader-beam-a { animation-delay: 0.1s; }
        .ph-loader-beam-b { animation-delay: 0.34s; }
        @keyframes ph-loader-rise {
          from { opacity: 0; translate: 0 14px; }
          to   { opacity: 1; translate: 0 0; }
        }
        .ph-loader-meta {
          display: flex;
          align-items: baseline;
          gap: 24px;
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--lp-fg-dim);
        }
        .ph-loader-num {
          color: var(--lp-pine-glow);
          font-variant-numeric: tabular-nums;
        }
        .ph-loader-bar {
          width: 180px;
          height: 1px;
          background: rgba(241,245,242,0.12);
          position: relative;
          overflow: hidden;
        }
        .ph-loader-bar-fill {
          position: absolute;
          inset: 0;
          background: var(--lp-pine-glow);
          transform: scaleX(0);
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}
