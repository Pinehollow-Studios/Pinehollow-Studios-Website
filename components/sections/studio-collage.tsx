"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Field documentation — the two studio photographs as an offset collage,
 * drifting at different speeds, each unmasking with a clip wipe.
 */
export function StudioCollage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const frames = root.querySelectorAll<HTMLElement>("[data-collage-frame]");
    // Reveal off the section, not the individual frames. Each frame sits
    // under a GSAP parallax transform (.ph-collage-item) *and* inside this
    // section's `overflow: clip` — a combination that makes
    // IntersectionObserver report zero intersection for the frame on desktop,
    // so a frame-level observer never fired and the photos stayed clipped out
    // of sight. The section itself has no transformed or clipped ancestor, so
    // it intersects reliably; we reveal both frames when it scrolls in.
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            frames.forEach((f) => f.classList.add("in"));
            obs.disconnect();
            return;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" },
    );
    obs.observe(root);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-collage-a]",
        { y: 30 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
      gsap.fromTo(
        "[data-collage-b]",
        { y: 90 },
        {
          y: -110,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    }, root);

    return () => {
      obs.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section className="ph-collage" ref={rootRef}>
      <div className="lp-container ph-collage-grid">
        <figure className="ph-collage-item" data-collage-a>
          <div className="ph-collage-frame" data-collage-frame>
            <Image
              src="/tom-and-jack.jpg"
              alt="Tom and Jack on a windy links course in the UK"
              fill
              priority
              sizes="(max-width: 880px) 100vw, 620px"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <figcaption className="ph-collage-cap">
            <span className="ph-collage-cap-no">Tom &amp; Jack</span>
            <span className="ph-serif ph-collage-cap-it">the two of us, mid-round</span>
          </figcaption>
        </figure>

        <figure className="ph-collage-item ph-collage-item-b" data-collage-b>
          <div className="ph-collage-frame" data-collage-frame style={{ transitionDelay: "180ms" }}>
            <Image
              src="/jack-on-course.jpg"
              alt="Jack playing a parkland course in Surrey at sunset"
              fill
              sizes="(max-width: 880px) 80vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <figcaption className="ph-collage-cap">
            <span className="ph-collage-cap-no">Surrey</span>
            <span className="ph-serif ph-collage-cap-it">a parkland course, at last light</span>
          </figcaption>
        </figure>
      </div>

      <style>{`
        .ph-collage {
          padding: 0 0 clamp(64px, 8vw, 120px);
          overflow: clip;
        }
        .ph-collage-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: start;
        }
        .ph-collage-item { margin: 0; }
        .ph-collage-item-b { margin-top: clamp(64px, 9vw, 160px); }
        .ph-collage-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--ph-rule-hi);
          box-shadow: 0 50px 100px -40px rgba(0,0,0,0.65);
          clip-path: inset(100% 0 0 0);
          transition: clip-path 1300ms var(--ph-ease-expo);
          background: var(--lp-base-raised);
        }
        .ph-collage-item-b .ph-collage-frame { aspect-ratio: 3 / 4; }
        .ph-collage-frame.in { clip-path: inset(0 0 0 0); }
        .ph-collage-cap {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-top: 16px;
        }
        .ph-collage-cap-no {
          white-space: nowrap;
          font-family: var(--lp-font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-pine-glow);
        }
        .ph-collage-cap-it {
          font-size: 19px;
          color: var(--lp-pine-mist);
        }
        @media (max-width: 880px) {
          .ph-collage-grid { grid-template-columns: 1fr; }
          .ph-collage-item-b { margin-top: 0; max-width: 78%; margin-left: auto; }
        }
      `}</style>
    </section>
  );
}
