"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskReveal } from "@/components/shared/mask-reveal";
import { Reveal } from "@/components/shared/reveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * Studio peek — the photo of Tom & Jack unmasks with a clip wipe and drifts
 * with a slow inner parallax; the copy column keeps the factual voice.
 */
export function StudioPeek() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const frame = frameRef.current;
    if (!root || !frame) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            frame.classList.add("in");
            obs.disconnect();
            return;
          }
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(frame);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-peek-img]",
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    }, root);

    return () => {
      obs.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section className="ph-peek" ref={rootRef}>
      <div className="lp-container">
        <Reveal variant="fade">
          <div className="ph-peek-head">
            <span className="ph-eyebrow">
              <span style={{ color: "var(--lp-pine-glow)" }}>03</span> The studio
            </span>
            <span className="ph-peek-head-rule" aria-hidden="true" />
            <span className="ph-eyebrow ph-eyebrow-dim">Fig. 1 — the founders</span>
          </div>
        </Reveal>

        <div className="ph-peek-grid">
          <div className="ph-peek-photo-col">
            <div className="ph-peek-photo" ref={frameRef} data-cursor data-cursor-label="Us">
              <div className="ph-peek-photo-inner" data-peek-img>
                <Image
                  src="/tom-and-jack.jpg"
                  alt="Tom and Jack on a windy links course in the UK"
                  fill
                  sizes="(max-width: 880px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              </div>
              <div className="ph-peek-photo-veil" aria-hidden="true" />
              <div className="ph-peek-photo-caption">
                <div className="ph-peek-photo-eyebrow">● Tom &amp; Jack</div>
                <div className="ph-serif ph-peek-photo-italic">out on a links course</div>
              </div>
            </div>
          </div>

          <div className="ph-peek-body">
            <MaskReveal
              as="h2"
              className="ph-display ph-peek-h2"
              lines={[
                <span key="1">Two people,</span>,
                <span key="2">one <em>workshop</em>.</span>,
              ]}
            />
            <Reveal variant="up" delay={220}>
              <p className="ph-peek-lede">
                Pinehollow is the two of us. Tom builds the apps; Jack runs
                product. We started the studio in 2026 to make iOS apps we
                wanted to use ourselves, on our own time and money.
              </p>
              <p className="ph-peek-lede" style={{ color: "var(--lp-fg-dim)" }}>
                No outsourcing. No investors. No urgency that isn&rsquo;t ours.
              </p>
              <div className="ph-peek-links">
                <Link href="/studio" className="ph-arrow-link" data-cursor-label="Meet us">
                  Meet the studio <span className="ph-arrow-link-tip">→</span>
                </Link>
                <Link href="/manifesto" className="ph-arrow-link" data-cursor-label="Read">
                  The manifesto <span className="ph-arrow-link-tip">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{PEEK_CSS}</style>
    </section>
  );
}

const PEEK_CSS = `
  .ph-peek {
    padding: var(--lp-section-y) 0;
  }
  .ph-peek-head {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: clamp(48px, 6vw, 88px);
  }
  .ph-peek-head-rule { flex: 1; height: 1px; background: var(--ph-rule); }

  .ph-peek-grid {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: clamp(48px, 6vw, 96px);
    align-items: center;
  }

  .ph-peek-photo {
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--ph-rule-hi);
    box-shadow: 0 50px 100px -40px rgba(0, 0, 0, 0.65);
    clip-path: inset(100% 0 0 0);
    transition: clip-path 1300ms var(--ph-ease-expo);
  }
  .ph-peek-photo.in { clip-path: inset(0 0 0 0); }
  .ph-peek-photo-inner {
    position: absolute;
    inset: -10% 0;
  }
  .ph-peek-photo-veil {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(7,12,18,0) 55%, rgba(4,8,13,0.82) 100%);
  }
  .ph-peek-photo-caption {
    position: absolute;
    left: 20px; right: 20px; bottom: 18px;
  }
  .ph-peek-photo-eyebrow {
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }
  .ph-peek-photo-italic {
    font-size: 22px;
    color: var(--lp-pine-mist);
    margin-top: 6px;
  }

  .ph-peek-h2 {
    margin: 0;
    font-size: clamp(48px, 6.6vw, 116px);
  }
  .ph-peek-h2 em { color: var(--lp-pine-mist); }
  .ph-peek-lede {
    color: var(--lp-fg-mute);
    font-size: 17px;
    line-height: 1.65;
    margin: 28px 0 0;
    max-width: 520px;
  }
  .ph-peek-links {
    display: flex;
    gap: 36px;
    align-items: center;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  @media (max-width: 880px) {
    .ph-peek-grid { grid-template-columns: 1fr; gap: 48px; }
    .ph-peek-photo { aspect-ratio: 3 / 4; max-width: 520px; }
  }
`;
