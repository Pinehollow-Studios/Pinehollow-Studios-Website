import { Hero } from "@/components/sections/hero";
import { Letter } from "@/components/sections/letter";
import { Principles } from "@/components/sections/principles";
import { StudioPeek } from "@/components/sections/studio-peek";
import { VestigeFeature } from "@/components/sections/vestige-feature";
import { Marquee } from "@/components/shared/marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <VestigeMarquee />
      <VestigeFeature sectionNo="01" />
      <Principles />
      <StudioPeek />
      <Letter />
    </>
  );
}

/* Full-bleed display-type ticker between the hero and the work. */
function VestigeMarquee() {
  // two sequences per half keeps the loop seamless while keeping the
  // animated track narrow enough for GPU rasterisation
  const burst = Array.from({ length: 2 });
  return (
    <div className="ph-vmq-wrap">
      <Marquee duration={34}>
        {burst.map((_, i) => (
          <span key={i} className="ph-vmq-seq">
            <span className="ph-display ph-vmq-word">Vestige</span>
            <span className="ph-vmq-dot" aria-hidden="true" />
            <span className="ph-serif ph-vmq-italic">a golf app</span>
            <span className="ph-vmq-dot" aria-hidden="true" />
            <span className="ph-display ph-vmq-word ph-vmq-outline">In development</span>
            <span className="ph-vmq-dot" aria-hidden="true" />
          </span>
        ))}
      </Marquee>

      <style>{`
        .ph-vmq-wrap .ph-marquee { padding: clamp(18px, 2.4vw, 34px) 0; }
        .ph-vmq-seq {
          display: inline-flex;
          align-items: baseline;
          gap: clamp(28px, 3vw, 52px);
          padding-right: clamp(28px, 3vw, 52px);
        }
        .ph-vmq-word {
          font-size: clamp(40px, 5.6vw, 92px);
          line-height: 1;
          color: var(--lp-fg);
        }
        .ph-vmq-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(241, 245, 242, 0.45);
        }
        .ph-vmq-italic {
          font-size: clamp(30px, 4.2vw, 68px);
          color: var(--lp-pine-mist);
        }
        .ph-vmq-dot {
          width: 9px; height: 9px;
          border-radius: 99px;
          background: var(--lp-pine-glow);
          align-self: center;
          box-shadow: 0 0 14px rgba(127, 228, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
