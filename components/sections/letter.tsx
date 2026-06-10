"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/shared/reveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * The letter — a note from the studio on cream paper, the one warm surface
 * on the site. It settles onto the page (slight rotation easing to flat,
 * scroll-scrubbed) and carries a circular postal mark.
 */
export function Letter() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-letter]",
        { rotate: 2.4, y: 110 },
        {
          rotate: 0,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 90%",
            end: "top 35%",
            scrub: 1,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ph-final" ref={rootRef}>
      <div className="lp-container">
        <Reveal variant="fade">
          <div className="ph-final-head">
            <span className="ph-eyebrow">
              <span style={{ color: "var(--lp-pine-glow)" }}>04</span> A note from the studio
            </span>
            <span className="ph-final-head-rule" aria-hidden="true" />
          </div>
        </Reveal>

        <article className="ph-paper ph-final-paper" data-letter>
          <PostalMark />

          <h2 className="ph-serif ph-final-greeting">Hello.</h2>

          <div className="ph-final-body">
            <p>
              We&rsquo;re Tom and Jack — a small studio for two, based in the
              United Kingdom. We started Pinehollow in 2026 to make iOS apps we
              wanted to use ourselves, on our own time and money.
            </p>
            <p>
              Vestige, a golf app, is on the bench now. Self-funded, no
              investors, no rush. If you&rsquo;d like a note when it ships — or
              just want to say hello — write to us.
            </p>
          </div>

          <div className="ph-final-sign">
            <div className="ph-final-sign-people">
              <div>
                <div className="ph-serif ph-final-sig-name">Tom</div>
                <div className="ph-final-sig-role">Engineering &amp; design</div>
              </div>
              <div>
                <div className="ph-serif ph-final-sig-name">Jack</div>
                <div className="ph-final-sig-role">Product</div>
              </div>
            </div>
            <div className="ph-final-meta">
              United Kingdom · 2026
              <br />
              Set in Bricolage &amp; Instrument Serif
            </div>
          </div>
        </article>

        <div className="ph-final-actions">
          <Link href="/contact" className="ph-arrow-link" data-cursor-label="Hello">
            Get in touch <span className="ph-arrow-link-tip">→</span>
          </Link>
          <Link href="/manifesto" className="ph-arrow-link" data-cursor-label="Read">
            Our approach <span className="ph-arrow-link-tip">→</span>
          </Link>
        </div>
      </div>

      <style>{FINAL_CSS}</style>
    </section>
  );
}

/* Circular rotating postal mark, stamped on the letter's corner. */
function PostalMark() {
  return (
    <div className="ph-postal" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="ph-postal-svg">
        <defs>
          <path
            id="ph-postal-circ"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(26,24,19,0.35)" strokeWidth="1" />
        <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(26,24,19,0.25)" strokeWidth="1" />
        <text className="ph-postal-text">
          <textPath href="#ph-postal-circ">
            Pinehollow Studios · MMXXVI ·
          </textPath>
        </text>
        <g transform="translate(42 42) scale(0.56)">
          <path
            d="M4 54 L14 8 L32 36 L50 8 L60 54 Z"
            fill="none"
            stroke="rgba(26,24,19,0.55)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

const FINAL_CSS = `
  .ph-final {
    padding: var(--lp-section-y) 0 clamp(64px, 8vw, 120px);
    border-top: 1px solid var(--ph-rule);
    overflow: clip;
  }
  .ph-final-head {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: clamp(48px, 6vw, 80px);
  }
  .ph-final-head-rule { flex: 1; height: 1px; background: var(--ph-rule); }

  .ph-final-paper {
    padding: clamp(40px, 6vw, 88px);
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    will-change: transform;
  }

  .ph-postal {
    position: absolute;
    top: clamp(20px, 3vw, 40px);
    right: clamp(20px, 3vw, 44px);
    width: clamp(84px, 9vw, 120px);
    height: clamp(84px, 9vw, 120px);
    opacity: 0.85;
  }
  .ph-postal-svg {
    width: 100%;
    height: 100%;
    animation: ph-postal-spin 40s linear infinite;
  }
  @keyframes ph-postal-spin { to { transform: rotate(360deg); } }
  .ph-postal-text {
    font-family: var(--lp-font-mono);
    font-size: 9.5px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    fill: rgba(26, 24, 19, 0.5);
  }

  .ph-final-greeting {
    margin: 0 0 48px;
    font-size: clamp(64px, 8vw, 132px);
    letter-spacing: -0.015em;
    line-height: 1.02;
    color: var(--ph-paper-ink);
    text-transform: none;
  }

  .ph-final-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    font-size: 16px;
    line-height: 1.75;
    color: var(--ph-paper-ink);
  }
  .ph-final-body p { margin: 0; }

  .ph-final-sign {
    margin-top: 56px;
    padding-top: 32px;
    border-top: 1px solid rgba(26, 24, 19, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 32px;
    flex-wrap: wrap;
  }
  .ph-final-sign-people {
    display: flex;
    gap: 56px;
    align-items: end;
    flex-wrap: wrap;
  }
  .ph-final-sig-name {
    font-size: 38px;
    line-height: 1;
    color: var(--ph-paper-ink);
    text-transform: none;
  }
  .ph-final-sig-role {
    margin-top: 8px;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(26, 24, 19, 0.55);
  }
  .ph-final-meta {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(26, 24, 19, 0.45);
    text-align: right;
    line-height: 1.8;
  }

  .ph-final-actions {
    display: flex;
    justify-content: center;
    gap: 44px;
    align-items: center;
    margin-top: 56px;
    flex-wrap: wrap;
  }

  @media (max-width: 880px) {
    .ph-final-body { grid-template-columns: 1fr; gap: 16px; }
    .ph-final-sign-people { gap: 32px; }
    .ph-final-meta { text-align: left; }
    .ph-final-sig-name { font-size: 30px; }
  }
`;
