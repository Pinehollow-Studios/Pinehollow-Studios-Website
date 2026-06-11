"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/shared/reveal";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    no: "01",
    label: "One thing at a time",
    body: "We make one app, well, then move on. If we have a new idea, we start something new rather than piling features onto something that's already finished.",
  },
  {
    no: "02",
    label: "Self-funded",
    body: "No investors, no ads. The studio runs on what the apps earn. That keeps the choices ours.",
  },
  {
    no: "03",
    label: "iOS first",
    body: "We focus on iPhone. Mac, web, or Android come later if and when they make sense for a given app.",
  },
];

/**
 * Principles — a pinned section that scrolls horizontally through the three
 * things the studio has decided, each with a huge outlined ghost numeral.
 * On smaller screens it degrades to a vertical hairline list.
 */
export function Principles() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const amount = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -amount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${amount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.fromTo(
        "[data-principles-progress]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${amount()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="ph-prin" ref={sectionRef}>
      <div className="ph-prin-head">
        <div className="lp-container ph-prin-head-row">
          <span className="ph-eyebrow">
            <span className="ph-prin-head-no">02</span> What we&rsquo;ve decided
          </span>
          <span className="ph-eyebrow ph-eyebrow-dim">Hold course →</span>
        </div>
      </div>

      <div className="ph-prin-track" ref={trackRef}>
        {/* intro panel */}
        <div className="ph-prin-panel ph-prin-intro">
          <Reveal variant="up-lg">
            <h2 className="ph-display ph-prin-h2">
              A few things
              <br />
              we&rsquo;ve <em>decided</em>.
            </h2>
          </Reveal>
        </div>

        {items.map((it, i) => (
          <div key={it.no} className="ph-prin-panel">
            <Reveal variant="up" delay={i * 90}>
              <div className="ph-prin-ghost" aria-hidden="true">{it.no}</div>
              <div className="ph-h3 ph-prin-label">{it.label}</div>
              <p className="ph-prin-body">{it.body}</p>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="ph-prin-progress-rail">
        <div className="lp-container">
          <div className="ph-prin-progress">
            <span data-principles-progress />
          </div>
        </div>
      </div>

      <style>{PRIN_CSS}</style>
    </section>
  );
}

const PRIN_CSS = `
  .ph-prin {
    position: relative;
    overflow: hidden;
    background: var(--ph-base);
  }

  .ph-prin-head {
    position: absolute;
    top: 0; left: 0; right: 0;
    padding-top: 40px;
    z-index: 2;
  }
  .ph-prin-head-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--ph-rule-faint);
  }
  .ph-prin-head-no { color: var(--lp-pine-glow); }

  .ph-prin-track {
    display: flex;
    align-items: stretch;
    height: 100vh;
    will-change: transform;
  }
  .ph-prin-panel {
    flex: 0 0 auto;
    width: min(620px, 64vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px clamp(40px, 5vw, 88px) 100px;
    border-right: 1px solid var(--ph-rule-faint);
    position: relative;
  }
  .ph-prin-intro {
    width: min(860px, 78vw);
    padding-left: var(--lp-gutter);
  }
  .ph-prin-h2 {
    margin: 0;
    font-size: clamp(44px, 6.2vw, 104px);
  }
  .ph-prin-h2 em { color: var(--lp-pine-mist); }

  .ph-prin-ghost {
    font-family: var(--ph-headline);
    font-weight: 800;
    font-size: clamp(110px, 13vw, 220px);
    line-height: 0.85;
    color: transparent;
    -webkit-text-stroke: 1px rgba(127, 228, 255, 0.32);
    user-select: none;
  }
  .ph-prin-label {
    font-size: clamp(24px, 2.4vw, 38px);
    margin-top: 28px;
    color: var(--lp-fg);
  }
  .ph-prin-body {
    color: var(--lp-fg-mute);
    font-size: 16px;
    line-height: 1.65;
    margin: 16px 0 0;
    max-width: 42ch;
  }

  .ph-prin-progress-rail {
    position: absolute;
    bottom: 36px; left: 0; right: 0;
    z-index: 2;
  }
  .ph-prin-progress {
    height: 2px;
    background: rgba(241, 245, 242, 0.10);
    overflow: hidden;
  }
  .ph-prin-progress span {
    display: block;
    height: 100%;
    background: var(--lp-pine-glow);
    transform: scaleX(0);
    transform-origin: left;
  }

  @media (max-width: 900px) {
    .ph-prin-track {
      flex-direction: column;
      height: auto;
      padding: 96px 0 64px;
    }
    .ph-prin-panel {
      width: 100%;
      padding: 40px var(--lp-gutter);
      border-right: 0;
      border-bottom: 1px solid var(--ph-rule-faint);
    }
    .ph-prin-intro { padding-bottom: 24px; }
    .ph-prin-panel:last-child { border-bottom: 0; }
    .ph-prin-ghost { font-size: 96px; }
    .ph-prin-progress-rail { display: none; }
    .ph-prin-head { padding-top: 28px; }
    /* the "hold course" cue refers to the desktop horizontal pan */
    .ph-prin-head-row .ph-eyebrow-dim { display: none; }
  }
`;
