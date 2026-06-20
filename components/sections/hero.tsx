"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskReveal } from "@/components/shared/mask-reveal";
import { Reveal } from "@/components/shared/reveal";
import { TopoField } from "@/components/shared/topo-field";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero — contour-map field survey. The hollow's topo lines draw themselves
 * behind a masked three-line headline; a mono "Currently" ledger sits on the
 * right like an instrument readout. Headline and field drift apart on scroll.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-head]", {
        yPercent: -14,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-topo]", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ph-hero" ref={rootRef}>
      <div className="ph-hero-aura" aria-hidden="true" />
      <div className="ph-hero-topo" data-hero-topo aria-hidden="true">
        <TopoField className="ph-hero-topo-svg" />
      </div>

      <div className="lp-container ph-hero-stack">
        <Reveal variant="fade" immediate delay={60}>
          <div className="ph-hero-eyebrow-row">
            <span className="ph-eyebrow">
              <span className="ph-hero-eyebrow-tick" aria-hidden="true" />
              Independent software studio
            </span>
            <span className="ph-eyebrow ph-eyebrow-dim ph-hero-eyebrow-right">
              Design · Engineering · Product
            </span>
          </div>
        </Reveal>

        <div className="ph-hero-grid" data-hero-head>
          <MaskReveal
            as="h1"
            className="ph-display ph-hero-h1"
            immediate
            delay={150}
            lines={[
              <span key="1">We design</span>,
              <span key="2">&amp; build</span>,
              <em key="3">software.</em>,
            ]}
          />

          <CurrentlyLedger />
        </div>

        <div className="ph-hero-low">
          <Reveal variant="up" immediate delay={950}>
            <p className="ph-hero-lede">
              Pinehollow is an independent studio founded by two friends, Tom
              and Jack. We design and build our own software, starting with
              Vestige, a golf app. Self-funded, based in the UK.
            </p>
            <div className="ph-hero-links">
              <Link href="/apps" className="ph-arrow-link" data-cursor-label="Apps">
                See Vestige <span className="ph-arrow-link-tip">→</span>
              </Link>
              <Link href="/manifesto" className="ph-arrow-link" data-cursor-label="Read">
                The manifesto <span className="ph-arrow-link-tip">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="fade" immediate delay={1250} className="ph-hero-scroll-wrap">
            <div className="ph-hero-scroll">
              <span>Scroll</span>
              <span className="ph-hero-scroll-line" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{HERO_CSS}</style>
    </section>
  );
}

function CurrentlyLedger() {
  const rows: Array<[label: string, value: string, href: string | null]> = [
    ["In progress", "Vestige · golf", "/apps"],
    ["Stage", "Design & build", null],
    ["Next", "Private beta", null],
    ["Studio", "United Kingdom", null],
    ["Founded", "2026", null],
    ["Funding", "Self-funded", null],
  ];

  return (
    <aside className="ph-currently">
      <Reveal variant="up" immediate delay={700}>
        <div className="ph-currently-head">
          <span className="ph-eyebrow">
            <span className="ph-live-dot" />
            Currently
          </span>
          <span className="ph-eyebrow ph-eyebrow-dim">14·05·26</span>
        </div>
      </Reveal>
      {rows.map(([label, value, href], i) => (
        <Reveal key={label} variant="up" immediate delay={800 + i * 80}>
          <div className="ph-currently-row">
            <span className="ph-currently-key">{label}</span>
            {href ? (
              <Link href={href} className="ph-link ph-currently-val">{value}</Link>
            ) : (
              <span className="ph-currently-val">{value}</span>
            )}
          </div>
        </Reveal>
      ))}
    </aside>
  );
}

const HERO_CSS = `
  .ph-hero {
    position: relative;
    padding-top: clamp(48px, 6vw, 90px);
    padding-bottom: clamp(56px, 7vw, 110px);
    min-height: min(calc(100vh - 120px), 1100px); /* fallback for pre-svh iOS */
    min-height: min(calc(100svh - 120px), 1100px);
    display: flex;
    align-items: stretch;
    overflow: clip;
  }

  .ph-hero-topo {
    position: absolute;
    inset: -10% -22% -20% auto;
    width: min(76vw, 1150px);
    z-index: 0;
    pointer-events: none;
    -webkit-mask-image: radial-gradient(75% 75% at 55% 50%, black 55%, transparent 100%);
    mask-image: radial-gradient(75% 75% at 55% 50%, black 55%, transparent 100%);
  }
  .ph-hero-topo-svg { width: 100%; height: 100%; }

  .ph-hero-stack {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(40px, 5vw, 72px);
  }

  .ph-hero-eyebrow-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--ph-rule-faint);
  }
  .ph-hero-eyebrow-tick {
    width: 24px;
    height: 1px;
    background: var(--lp-pine-glow);
    display: inline-block;
  }

  .ph-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 8.2fr) minmax(280px, 3.8fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: end;
    margin-top: clamp(24px, 3vw, 48px);
  }

  .ph-hero-h1 {
    margin: 0;
    font-size: clamp(54px, 8.6vw, 158px);
    color: var(--lp-fg);
  }
  .ph-hero-h1 em { color: var(--lp-pine-mist); }

  /* — currently ledger — */
  .ph-currently {
    border-top: 1px solid var(--ph-rule-hi);
    padding-top: 18px;
  }
  .ph-currently-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 14px;
  }
  .ph-currently-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 12px;
    padding: 11px 0;
    border-top: 1px solid var(--ph-rule-faint);
  }
  .ph-currently-key {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-currently-val {
    font-size: 14px;
    color: var(--lp-fg);
    letter-spacing: -0.01em;
  }

  /* — lower band: lede + links + scroll cue — */
  .ph-hero-low {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
  }
  .ph-hero-lede {
    color: var(--lp-fg-mute);
    font-size: clamp(16px, 1.2vw, 19px);
    line-height: 1.6;
    max-width: 520px;
    margin: 0;
  }
  .ph-hero-links {
    display: flex;
    gap: 36px;
    margin-top: 28px;
    align-items: center;
    flex-wrap: wrap;
  }

  .ph-hero-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-hero-scroll-line {
    width: 1px;
    height: 56px;
    background: var(--ph-rule-hi);
    position: relative;
    overflow: hidden;
  }
  .ph-hero-scroll-line::after {
    content: "";
    position: absolute;
    left: 0; top: -40%;
    width: 100%; height: 40%;
    background: var(--lp-pine-glow);
    animation: ph-scroll-drip 2.2s var(--ph-ease-out) infinite;
  }
  @keyframes ph-scroll-drip {
    0%   { top: -40%; }
    100% { top: 110%; }
  }

  @media (max-width: 980px) {
    .ph-hero { min-height: 0; }
    .ph-hero-grid { grid-template-columns: 1fr; align-items: start; }
    .ph-hero-h1 { font-size: clamp(46px, 11.5vw, 96px); }
    .ph-hero-topo { width: 120vw; inset: -6% -40% auto auto; opacity: 0.7; }
    /* the Reveal wrapper carries an inline display, so hide the inner cue */
    .ph-hero-scroll { display: none; }
    .ph-hero-eyebrow-right { display: none; }
  }
`;
