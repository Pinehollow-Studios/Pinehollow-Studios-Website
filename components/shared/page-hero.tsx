"use client";

import type { ReactNode } from "react";
import { MaskReveal } from "@/components/shared/mask-reveal";
import { Reveal } from "@/components/shared/reveal";
import { TopoField } from "@/components/shared/topo-field";

interface PageHeroProps {
  /** Mono eyebrow, e.g. "01 · The work". */
  eyebrow: string;
  /** Headline lines — one node per masked line. */
  lines: ReactNode[];
  lede?: ReactNode;
  /** Extra content under the lede (byline, updated date…). */
  children?: ReactNode;
  /** Show the faint contour field behind the headline. */
  topo?: boolean;
}

/**
 * Shared interior-page opener: eyebrow tick, masked display headline,
 * muted lede. Keeps every page's first impression consistent with the home
 * hero without repeating it.
 */
export function PageHero({ eyebrow, lines, lede, children, topo = true }: PageHeroProps) {
  return (
    <section className="ph-pg-hero">
      <div className="ph-hero-aura" aria-hidden="true" />
      {topo ? (
        <div className="ph-pg-hero-topo" aria-hidden="true">
          <TopoField style={{ width: "100%", height: "100%" }} />
        </div>
      ) : null}

      <div className="lp-container" style={{ position: "relative" }}>
        <Reveal variant="fade" immediate delay={60}>
          <div className="ph-eyebrow" style={{ marginBottom: 28 }}>
            <span aria-hidden="true" style={{ width: 24, height: 1, background: "var(--lp-pine-glow)" }} />
            <span>{eyebrow}</span>
          </div>
        </Reveal>

        <MaskReveal
          as="h1"
          className="ph-display ph-pg-hero-h1"
          immediate
          delay={150}
          lines={lines}
        />

        {lede ? (
          <Reveal variant="up" immediate delay={650}>
            <p className="ph-pg-hero-lede">{lede}</p>
          </Reveal>
        ) : null}

        {children ? (
          <Reveal variant="up" immediate delay={800}>
            {children}
          </Reveal>
        ) : null}
      </div>

      <style>{`
        .ph-pg-hero {
          position: relative;
          padding: clamp(56px, 7vw, 100px) 0 clamp(64px, 8vw, 110px);
          overflow: clip;
        }
        .ph-pg-hero-topo {
          position: absolute;
          inset: -20% -25% -30% auto;
          width: min(70vw, 1000px);
          pointer-events: none;
          opacity: 0.65;
          -webkit-mask-image: radial-gradient(70% 70% at 55% 50%, black 50%, transparent 100%);
          mask-image: radial-gradient(70% 70% at 55% 50%, black 50%, transparent 100%);
        }
        .ph-pg-hero-h1 {
          margin: 0;
          font-size: clamp(52px, 8.2vw, 148px);
        }
        .ph-pg-hero-h1 em { color: var(--lp-pine-mist); }
        .ph-pg-hero-lede {
          color: var(--lp-fg-mute);
          font-size: clamp(16px, 1.2vw, 19px);
          line-height: 1.6;
          max-width: 620px;
          margin: 36px 0 0;
        }
      `}</style>
    </section>
  );
}
