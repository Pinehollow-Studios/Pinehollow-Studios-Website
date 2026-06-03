import Link from "next/link";

/**
 * Hero — Volume IV, editorial direction.
 *
 *   8/4 grid: big editorial headline on the left, "Currently" ledger on
 *   the right. Hairlines instead of glass cards. One Instrument Serif
 *   italic moment in the headline. A soft single aura behind the section.
 */
export function Hero() {
  return (
    <section className="ph-hero">
      <div className="ph-hero-aura" aria-hidden="true" />

      <div className="lp-container" style={{ position: "relative" }}>
        <div className="ph-grid-hero ph-hero-grid">
          <HeroHeadline />
          <CurrentlyColumn />
        </div>

        <div className="ph-hero-foot">
          <hr className="ph-rule" />
          <div className="ph-hero-foot-row">
            <span>An independent iOS software studio · since 2026</span>
            <span>Scroll to read · §01 ↓</span>
          </div>
        </div>
      </div>

      <style>{HERO_CSS}</style>
    </section>
  );
}

function HeroHeadline() {
  return (
    <div>
      <div className="ph-eyebrow" style={{ marginBottom: 28 }}>
        <span
          aria-hidden="true"
          style={{ width: 24, height: 1, background: "var(--lp-fg-mute)" }}
        />
        <span>Cover story · No. 01</span>
      </div>

      <h1 className="ph-display ph-hero-h1">
        Two people,
        <br />
        <em>one workshop</em>,
        <br />
        iOS apps.
      </h1>

      <p className="ph-hero-lede">
        Pinehollow is a small studio by Tom and Jack. We make iOS apps —
        Vestige, a golf app, is in the workshop now. Self-funded, UK-based,
        in no particular rush.
      </p>

      <div className="ph-hero-links">
        <Link href="/apps" className="ph-link">See Vestige</Link>
        <span className="ph-hero-links-sep" aria-hidden="true" />
        <Link href="/manifesto" className="ph-link">Read the manifesto</Link>
        <span className="ph-hero-links-sep" aria-hidden="true" />
        <Link href="/studio" className="ph-link">Meet the studio</Link>
      </div>
    </div>
  );
}

function CurrentlyColumn() {
  const rows: Array<[label: string, value: string, href: string | null]> = [
    ["On the bench", "Vestige · iOS · golf", "/apps"],
    ["Stage", "Building", null],
    ["Next", "TestFlight", null],
    ["Studio", "United Kingdom", null],
    ["Founded", "2026", null],
    ["Funding", "Self-funded", null],
  ];

  return (
    <aside className="ph-currently">
      <div className="ph-currently-head">
        <span className="ph-eyebrow">Currently</span>
        <span className="ph-eyebrow ph-eyebrow-dim">14·05·26</span>
      </div>

      {rows.map(([label, value, href], i) => (
        <div
          key={label}
          className="ph-currently-row"
          style={{
            borderTop: i === 0 ? "none" : "1px solid var(--ph-rule-faint)",
          }}
        >
          <span className="ph-currently-key">{label}</span>
          {href ? (
            <Link href={href} className="ph-link ph-currently-val">
              {value}
            </Link>
          ) : (
            <span className="ph-currently-val">{value}</span>
          )}
        </div>
      ))}
    </aside>
  );
}

const HERO_CSS = `
  .ph-hero {
    position: relative;
    padding-top: 80px;
    padding-bottom: 120px;
  }

  .ph-hero-grid {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 64px;
    align-items: start;
  }

  .ph-hero-h1 {
    margin: 0;
    font-size: clamp(64px, 8.4vw, 152px);
    max-width: 14ch;
  }

  .ph-hero-lede {
    color: var(--lp-fg-mute);
    font-size: clamp(17px, 1.2vw, 19px);
    line-height: 1.55;
    max-width: 520px;
    margin-top: 40px;
  }

  .ph-hero-links {
    display: flex;
    gap: 28px;
    margin-top: 36px;
    align-items: center;
    font-size: 15px;
    flex-wrap: wrap;
  }
  .ph-hero-links-sep {
    width: 1px;
    height: 14px;
    background: var(--ph-rule-hi);
  }

  /* — currently ledger — */
  .ph-currently {
    border-top: 1px solid var(--ph-rule-hi);
    border-bottom: 1px solid var(--ph-rule-hi);
    padding-top: 18px;
    padding-bottom: 8px;
    margin-top: 6px;
  }
  .ph-currently-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 18px;
  }
  .ph-currently-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 12px;
    padding: 12px 0;
  }
  .ph-currently-key {
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-currently-val {
    font-size: 15px;
    color: var(--lp-fg);
    letter-spacing: -0.01em;
  }

  /* — bottom rule + meta row — */
  .ph-hero-foot { margin-top: 100px; }
  .ph-hero-foot-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
    gap: 16px;
    flex-wrap: wrap;
  }

  @media (max-width: 980px) {
    .ph-hero { padding-top: 56px; padding-bottom: 80px; }
    .ph-hero-grid { gap: 48px; }
    .ph-hero-h1 { font-size: clamp(52px, 12vw, 96px); }
    .ph-hero-foot { margin-top: 64px; }
  }
  @media (max-width: 520px) {
    .ph-hero-links { gap: 16px; }
    .ph-hero-links-sep { display: none; }
  }
`;
