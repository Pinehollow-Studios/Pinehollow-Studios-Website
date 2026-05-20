import { Reveal } from "@/components/shared/reveal";

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
 * Philosophy strip — Volume IV editorial direction.
 * Section eyebrow, ph-display headline with Fraunces italic moment,
 * three-up hairline-divided body.
 */
export function PhilosophyStrip() {
  return (
    <section className="ph-philosophy">
      <div className="lp-container">
        <Reveal variant="up-lg">
          <div style={{ marginBottom: 56 }}>
            <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
              §02 · What we believe
            </div>
            <h2 className="ph-display ph-philosophy-h2">
              A few things
              <br />
              we&rsquo;ve <em>decided</em>.
            </h2>
          </div>
        </Reveal>

        <div className="ph-philosophy-grid">
          {items.map((it, i) => (
            <Reveal key={it.no} variant="up" delay={i * 110}>
              <div className="ph-philosophy-cell">
                <div className="ph-philosophy-no">{it.no}</div>
                <div className="ph-philosophy-label">{it.label}</div>
                <p className="ph-philosophy-body">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{PHILOSOPHY_CSS}</style>
    </section>
  );
}

const PHILOSOPHY_CSS = `
  .ph-philosophy {
    padding: clamp(80px, 10vw, 140px) 0;
    border-top: 1px solid var(--ph-rule);
  }
  .ph-philosophy-h2 {
    margin: 0;
    font-size: clamp(40px, 5.6vw, 88px);
    max-width: 800px;
  }
  .ph-philosophy-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--ph-rule);
  }
  .ph-philosophy-grid > * + * .ph-philosophy-cell,
  .ph-philosophy-grid > .ph-rev + * .ph-philosophy-cell { /* nothing */ }
  .ph-philosophy-cell {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right: 32px;
    padding-left: 0;
    height: 100%;
  }
  /* Reveal wraps each cell in a div, so target the wrapper for siblings. */
  .ph-philosophy-grid > *:not(:first-child) .ph-philosophy-cell { padding-left: 32px; }
  .ph-philosophy-grid > *:not(:last-child) .ph-philosophy-cell { border-right: 1px solid var(--ph-rule); }
  .ph-philosophy-no {
    font-family: var(--lp-font-display);
    font-weight: 600;
    font-size: clamp(36px, 4vw, 56px);
    color: var(--lp-pine-glow);
    letter-spacing: -0.04em;
    line-height: 1;
  }
  .ph-philosophy-label {
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 500;
    letter-spacing: -0.025em;
    margin-top: 14px;
  }
  .ph-philosophy-body {
    color: var(--lp-fg-mute);
    font-size: 15px;
    line-height: 1.6;
    margin-top: 12px;
  }

  @media (max-width: 880px) {
    .ph-philosophy-grid { grid-template-columns: 1fr; }
    .ph-philosophy-cell {
      padding: 32px 0 !important;
      padding-left: 0 !important;
      border-right: none !important;
      border-bottom: 1px solid var(--ph-rule);
    }
    .ph-philosophy-cell:last-child { border-bottom: none; }
  }
`;
