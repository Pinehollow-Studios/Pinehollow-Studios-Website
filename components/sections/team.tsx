import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

/**
 * Studio peek — Volume IV editorial direction.
 *
 *   Full-bleed darker band (var(--lp-base-deep)) with an asymmetric 5/7
 *   split: hand-cropped photo on the left, ph-display headline + factual
 *   paragraph + ph-link on the right. No glass card, no glow blobs.
 */
export function StudioPeek() {
  return (
    <section className="ph-peek">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1100}>
          <div className="ph-peek-head">
            <span className="ph-eyebrow">§03 · The studio</span>
            <span className="ph-peek-head-rule" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="ph-peek-grid">
          <Reveal variant="up-lg" duration={1100}>
            <div className="ph-peek-photo">
              <Image
                src="/tom-and-jack.jpg"
                alt="Tom and Jack on a windy course in the UK"
                fill
                sizes="(max-width: 880px) 100vw, 600px"
                priority
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
              <div className="ph-peek-photo-veil" aria-hidden="true" />
              <div className="ph-peek-photo-caption">
                <div className="ph-peek-photo-eyebrow">● Tom &amp; Jack</div>
                <div className="ph-peek-photo-italic">
                  out on a links course
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up-lg" duration={1100} delay={180}>
            <div className="ph-peek-body">
              <h2 className="ph-display ph-peek-h2">
                Two people,
                <br />
                <em>one workshop</em>.
              </h2>
              <p className="ph-peek-lede">
                Pinehollow is the two of us. Tom builds the apps; Jack runs
                product. We started the studio in 2026 to make iOS apps we
                wanted to use ourselves, on our own time and money.
              </p>
              <p className="ph-peek-lede" style={{ color: "var(--lp-fg-dim)" }}>
                No outsourcing. No investors. No urgency that isn&rsquo;t ours.
              </p>
              <div className="ph-peek-links">
                <Link href="/studio" className="ph-link">
                  Meet the studio →
                </Link>
                <span className="ph-peek-links-sep" aria-hidden="true" />
                <Link href="/manifesto" className="ph-link">
                  Read the manifesto
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{PEEK_CSS}</style>
    </section>
  );
}

const PEEK_CSS = `
  .ph-peek {
    padding: clamp(80px, 10vw, 140px) 0;
    background: var(--lp-base-deep);
    border-top: 1px solid var(--ph-rule);
    border-bottom: 1px solid var(--ph-rule);
  }
  .ph-peek-head {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 48px;
  }
  .ph-peek-head-rule {
    flex: 1;
    height: 1px;
    background: var(--ph-rule);
  }
  .ph-peek-grid {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 80px;
    align-items: center;
  }
  .ph-peek-photo {
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--ph-rule-hi);
    box-shadow: 0 50px 100px -40px rgba(0, 0, 0, 0.65);
  }
  .ph-peek-photo-veil {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(7,12,18,0) 55%, rgba(4,8,13,0.80) 100%);
  }
  .ph-peek-photo-caption {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 18px;
  }
  .ph-peek-photo-eyebrow {
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }
  .ph-peek-photo-italic {
    font-family: var(--ph-serif);
    font-style: italic;
    font-weight: 400;
    font-size: 22px;
    color: var(--lp-pine-mist);
    margin-top: 6px;
    letter-spacing: -0.015em;
    font-variation-settings: 'opsz' 24, 'SOFT' 50;
  }

  .ph-peek-h2 {
    margin: 0;
    font-size: clamp(48px, 6.4vw, 112px);
  }
  .ph-peek-lede {
    color: var(--lp-fg-mute);
    font-size: 17px;
    line-height: 1.65;
    margin-top: 28px;
    max-width: 520px;
  }
  .ph-peek-links {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 32px;
    font-size: 15px;
    flex-wrap: wrap;
  }
  .ph-peek-links-sep {
    width: 1px;
    height: 14px;
    background: var(--ph-rule-hi);
  }

  @media (max-width: 880px) {
    .ph-peek-grid { grid-template-columns: 1fr; gap: 48px; }
    .ph-peek-photo { aspect-ratio: 3 / 4; max-width: 520px; }
  }
`;
