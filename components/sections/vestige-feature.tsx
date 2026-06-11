"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskReveal } from "@/components/shared/mask-reveal";
import { Reveal } from "@/components/shared/reveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * Vestige feature — the one thing on the bench, presented as a sealed
 * dossier: a blurred not-yet-public screen with a rotating wax-stamp seal,
 * a scanline sweep, and a mono spec ledger. Used on the home page and /apps.
 */
export function VestigeFeature({ sectionNo = "01" }: { sectionNo?: string }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-dossier]",
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ph-feat" id="vestige" ref={rootRef}>
      <div className="lp-container">
        <Reveal variant="fade">
          <div className="ph-feat-head">
            <span className="ph-eyebrow">
              <span className="ph-feat-head-no">{sectionNo}</span> On the bench
            </span>
            <span className="ph-feat-head-rule" aria-hidden="true" />
            <span className="ph-eyebrow ph-eyebrow-dim">Ref. PH-001</span>
          </div>
        </Reveal>

        <div className="ph-feat-grid">
          <div className="ph-feat-body">
            <MaskReveal
              as="h2"
              className="ph-display ph-feat-h2"
              lines={[
                <span key="1">Vestige.</span>,
                <em key="2">a golf app.</em>,
              ]}
            />

            <Reveal variant="up" delay={200}>
              <div className="ph-feat-status">
                <span className="ph-live-dot" />
                In development · launching 2026
              </div>

              <div className="ph-feat-prose">
                <p>
                  We&rsquo;re not saying much about Vestige yet. The screens,
                  the features, the full pitch — those come closer to launch.
                </p>
                <p style={{ color: "var(--lp-fg-mute)" }}>
                  Drop us a line if you&rsquo;d like a note when it&rsquo;s ready.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={320}>
              <div className="ph-feat-meta">
                {(
                  [
                    ["Stage", "In development"],
                    ["Platform", "iOS only"],
                    ["Pricing", "Free"],
                    ["Release", "2026"],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k} className="ph-feat-meta-cell">
                    <div className="ph-feat-meta-k">{k}</div>
                    <div className="ph-feat-meta-v">{v}</div>
                  </div>
                ))}
              </div>

              <div className="ph-feat-links">
                <Link href="/contact" className="ph-arrow-link" data-cursor-label="Write">
                  Get a note when it ships <span className="ph-arrow-link-tip">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="ph-feat-visual">
            <DossierCard />
          </div>
        </div>
      </div>

      <style>{FEAT_CSS}</style>
    </section>
  );
}

/* Blurred "screen we can't show you yet", sealed with a rotating stamp. */
function DossierCard() {
  // deterministic widths so SSR and client agree
  const bars = [82, 54, 68, 38, 74, 46, 60, 30];

  return (
    <div className="ph-dossier" data-dossier data-cursor data-cursor-label="Sealed">
      <div className="ph-dossier-top">
        <span>PH-001 / Vestige</span>
        <span>Sealed until launch</span>
      </div>

      <div className="ph-dossier-screen" aria-hidden="true">
        <div className="ph-dossier-blur">
          <div className="ph-dossier-orb" />
          {bars.map((w, i) => (
            <div key={i} className="ph-dossier-bar" style={{ width: `${w}%` }} />
          ))}
          <div className="ph-dossier-chip-row">
            <div className="ph-dossier-chip" />
            <div className="ph-dossier-chip" style={{ width: "34%" }} />
          </div>
        </div>
        <div className="ph-dossier-scan" />
        <Stamp />
      </div>

      <div className="ph-dossier-foot">
        <span>Pinehollow Studios Ltd.</span>
        <span>No screens yet · on purpose</span>
      </div>
    </div>
  );
}

function Stamp() {
  return (
    <div className="ph-stamp" aria-hidden="true">
      <svg viewBox="0 0 160 160" className="ph-stamp-ring">
        <defs>
          <path
            id="ph-stamp-circ"
            d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0"
            fill="none"
          />
        </defs>
        <circle cx="80" cy="80" r="76" fill="rgba(6,10,15,0.55)" stroke="rgba(127,228,255,0.5)" strokeWidth="1" />
        <circle cx="80" cy="80" r="48" fill="none" stroke="rgba(127,228,255,0.35)" strokeWidth="1" />
        <text className="ph-stamp-text">
          <textPath href="#ph-stamp-circ" startOffset="0">
            In development · Pinehollow Studios · PH-001 · do not open until 2026 ·
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 64 64" className="ph-stamp-mark" width="30" height="30">
        <rect x="14" y="5" width="15" height="52" rx="7.5" transform="rotate(22 21.5 31)" fill="var(--lp-pine-glow)" />
        <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="var(--lp-pine-mist)" opacity="0.85" />
      </svg>
    </div>
  );
}

const FEAT_CSS = `
  .ph-feat {
    padding: var(--lp-section-y) 0;
    background: var(--lp-base-deep);
    border-top: 1px solid var(--ph-rule);
    border-bottom: 1px solid var(--ph-rule);
    overflow: clip;
  }
  .ph-feat-head {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: clamp(48px, 6vw, 88px);
  }
  .ph-feat-head-no { color: var(--lp-pine-glow); }
  .ph-feat-head-rule { flex: 1; height: 1px; background: var(--ph-rule); }

  .ph-feat-grid {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: clamp(48px, 6vw, 96px);
    align-items: center;
  }

  .ph-feat-h2 {
    margin: 0;
    font-size: clamp(56px, 8vw, 136px);
  }
  .ph-feat-h2 em { color: var(--lp-pine-mist); font-size: 0.82em; }

  .ph-feat-status {
    margin-top: 28px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }
  .ph-feat-prose {
    margin-top: 28px;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .ph-feat-prose p { margin: 0; font-size: 17px; line-height: 1.65; color: var(--lp-fg); }

  .ph-feat-meta {
    display: flex;
    margin-top: 44px;
    border-top: 1px solid var(--ph-rule);
    border-bottom: 1px solid var(--ph-rule);
    width: fit-content;
    flex-wrap: wrap;
  }
  .ph-feat-meta-cell { padding: 14px 0; }
  .ph-feat-meta > .ph-feat-meta-cell:not(:last-child) {
    border-right: 1px solid var(--ph-rule);
    padding-right: 28px;
    margin-right: 28px;
  }
  .ph-feat-meta-k {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-feat-meta-v { font-size: 15px; margin-top: 6px; letter-spacing: -0.01em; }

  .ph-feat-links { margin-top: 40px; }

  /* ── dossier card ── */
  .ph-feat-visual { display: flex; justify-content: center; }
  .ph-dossier {
    width: min(400px, 100%);
    border: 1px solid var(--ph-rule-hi);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(42,74,94,0.22), rgba(4,8,13,0.6));
    box-shadow: 0 60px 100px -40px rgba(0,0,0,0.8), 0 0 90px -40px rgba(127,228,255,0.35);
    overflow: hidden;
  }
  .ph-dossier-top, .ph-dossier-foot {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 18px;
    font-family: var(--lp-font-mono);
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-dossier-top { border-bottom: 1px solid var(--ph-rule); color: var(--lp-fg-mute); }
  .ph-dossier-foot { border-top: 1px solid var(--ph-rule); }

  .ph-dossier-screen {
    position: relative;
    aspect-ratio: 3 / 4;
    overflow: hidden;
  }
  .ph-dossier-blur {
    position: absolute;
    inset: 0;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    filter: blur(9px) saturate(130%);
    transform: scale(1.04);
  }
  .ph-dossier-orb {
    width: 64px; height: 64px;
    border-radius: 18px;
    background: rgba(127, 228, 255, 0.5);
    margin-bottom: 8px;
  }
  .ph-dossier-bar {
    height: 13px;
    border-radius: 3px;
    background: rgba(214, 245, 255, 0.28);
  }
  .ph-dossier-bar:nth-child(odd) { background: rgba(127, 228, 255, 0.2); }
  .ph-dossier-chip-row { display: flex; gap: 10px; margin-top: auto; }
  .ph-dossier-chip {
    width: 46%; height: 38px;
    border-radius: 8px;
    background: rgba(127, 228, 255, 0.34);
  }

  .ph-dossier-scan {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(127,228,255,0.10) 48%, rgba(214,245,255,0.16) 50%, rgba(127,228,255,0.10) 52%, transparent 100%);
    background-size: 100% 300%;
    animation: ph-dossier-scan 4.6s var(--lp-ease) infinite;
    mix-blend-mode: screen;
    pointer-events: none;
  }
  @keyframes ph-dossier-scan {
    0%   { background-position: 0 -120%; }
    60%, 100% { background-position: 0 220%; }
  }

  .ph-stamp {
    position: absolute;
    top: 50%; left: 50%;
    width: 152px; height: 152px;
    transform: translate(-50%, -50%) rotate(-8deg);
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 12px 30px rgba(0,0,0,0.5));
  }
  .ph-stamp-ring {
    position: absolute;
    inset: 0;
    animation: ph-stamp-spin 26s linear infinite;
  }
  @keyframes ph-stamp-spin { to { transform: rotate(360deg); } }
  .ph-stamp-text {
    font-family: var(--lp-font-mono);
    font-size: 10.5px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    fill: var(--lp-pine-glow);
  }
  .ph-stamp-mark { position: relative; }

  @media (max-width: 980px) {
    .ph-feat-grid { grid-template-columns: 1fr; gap: 56px; }
    .ph-feat-visual { order: -1; }
  }
  @media (max-width: 560px) {
    .ph-feat-meta { width: 100%; }
    .ph-feat-meta-cell { flex: 1 1 calc(50% - 28px); min-width: 130px; }
  }
`;
