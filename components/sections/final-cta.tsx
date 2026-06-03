import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

/**
 * Final CTA — Volume IV editorial direction.
 *
 *   A short note from the studio set on cream paper (.ph-paper), with
 *   a Fraunces italic "Hello." opening, two paragraphs of factual prose,
 *   inline ph-link sign-off. The cream surface is the strongest visual
 *   contrast on the site — used here once, deliberately, at the bottom.
 */
export function FinalCta() {
  return (
    <section className="ph-final">
      <div className="lp-container">
        <Reveal variant="up" immediate={false}>
          <div className="ph-eyebrow" style={{ marginBottom: 24 }}>
            §04 · A note from the studio
          </div>
        </Reveal>

        <Reveal variant="scale" duration={1100}>
          <article className="ph-paper ph-final-paper">
            <div className="ph-final-cornermark">
              Pinehollow Studios · MMXXVI
            </div>

            <h2 className="ph-final-greeting">Hello.</h2>

            <div className="ph-final-body">
              <p>
                We&rsquo;re Tom and Jack — a small studio for two, based in
                the United Kingdom. We started Pinehollow in 2026 to make
                iOS apps we wanted to use ourselves, on our own time and
                money.
              </p>
              <p>
                Vestige, a golf app, is on the bench now. Self-funded, no
                investors, no rush. If you&rsquo;d like a note when it ships
                — or just want to say hello — write to us.
              </p>
            </div>

            <div className="ph-final-sign">
              <div className="ph-final-sign-people">
                <div className="ph-final-sig">
                  <div className="ph-final-sig-name">Tom</div>
                  <div className="ph-final-sig-role">
                    Engineering &amp; design
                  </div>
                </div>
                <div className="ph-final-sig">
                  <div className="ph-final-sig-name">Jack</div>
                  <div className="ph-final-sig-role">Product</div>
                </div>
              </div>

              <div className="ph-final-meta">
                United Kingdom · 2026
                <br />
                Set in Geist &amp; Fraunces
              </div>
            </div>
          </article>
        </Reveal>

        <div className="ph-final-actions">
          <Link href="/contact" className="ph-link">
            Get in touch ↗
          </Link>
          <span className="ph-final-actions-sep" aria-hidden="true" />
          <Link href="/manifesto" className="ph-link">
            Our approach
          </Link>
        </div>
      </div>

      <style>{FINAL_CSS}</style>
    </section>
  );
}

const FINAL_CSS = `
  .ph-final {
    padding: clamp(96px, 12vw, 160px) 0 clamp(64px, 8vw, 120px);
  }

  .ph-final-paper {
    padding: clamp(40px, 6vw, 88px);
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
  }
  .ph-final-cornermark {
    position: absolute;
    top: 24px;
    right: 32px;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(26, 24, 19, 0.45);
  }

  .ph-final-greeting {
    margin: 0 0 48px;
    font-family: var(--ph-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(56px, 7.2vw, 120px);
    letter-spacing: -0.015em;
    line-height: 1.02;
    color: var(--ph-paper-ink);
    font-variation-settings: 'opsz' 144, 'SOFT' 50;
  }

  .ph-final-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    font-family: var(--lp-font-display);
    font-size: 16px;
    line-height: 1.75;
    color: var(--ph-paper-ink);
  }
  .ph-final-body p { margin: 0; }
  .ph-final-body p + p { margin-top: 18px; }

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
    font-family: var(--ph-serif);
    font-style: italic;
    font-weight: 400;
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--ph-paper-ink);
    font-variation-settings: 'opsz' 36, 'SOFT' 50;
  }
  .ph-final-sig-role {
    margin-top: 6px;
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
    gap: 24px;
    align-items: center;
    margin-top: 48px;
    font-size: 15px;
    flex-wrap: wrap;
  }
  .ph-final-actions-sep {
    width: 1px;
    height: 14px;
    background: var(--ph-rule-hi);
  }

  @media (max-width: 880px) {
    .ph-final-body { grid-template-columns: 1fr; gap: 0; }
    .ph-final-body p + p { margin-top: 14px; }
    .ph-final-sign-people { gap: 32px; }
    .ph-final-meta { text-align: left; }
    .ph-final-sig-name { font-size: 28px; }
  }
  @media (max-width: 480px) {
    .ph-final-cornermark { position: static; margin-bottom: 24px; }
  }
`;
