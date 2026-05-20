import Link from "next/link";
import { PinehollowMark } from "@/components/shared/pinehollow-mark";

interface FooterColProps {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}

function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <div className="ph-eyebrow" style={{ marginBottom: 18 }}>
        {title}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a href={item.href} className="ph-foot-link">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="ph-foot-link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Editorial Colophon footer — Volume IV.
 *
 *   HUGE wordmark sign-off, hairline, 4-column colophon body
 *   (colophon paragraph · apps · studio · elsewhere), hairline,
 *   bottom mono strip (©, built quietly, end of issue).
 */
export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--ph-rule-hi)",
        padding: "96px 0 36px",
        background: "var(--lp-base-deep)",
      }}
    >
      <div className="lp-container">
        {/* HUGE wordmark across the top — confident sign-off */}
        <div className="ph-foot-wordmark-wrap">
          <div className="ph-foot-wordmark">
            Pinehollow
            <span className="ph-serif ph-foot-wordmark-em">Studios.</span>
          </div>
        </div>

        <hr className="ph-rule" />

        <div className="ph-foot-grid">
          <div>
            <div className="ph-eyebrow" style={{ marginBottom: 16 }}>
              Colophon
            </div>
            <p className="ph-foot-colophon">
              This page was set in{" "}
              <em className="ph-foot-italic">Geist</em>,{" "}
              <em className="ph-foot-italic">Geist Mono</em>, and{" "}
              <em className="ph-foot-italic">Fraunces</em>. Designed and built
              in the United Kingdom by Tom &amp; Jack. Volume I, Issue 1. No
              cookies of consequence, no third-party scripts.
            </p>
            <div className="ph-foot-status">
              <span className="ph-live-dot" />
              <span className="ph-foot-status-label">
                Currently building Fairways
              </span>
            </div>
          </div>

          <FooterCol
            title="Apps"
            items={[
              { label: "Fairways — golf", href: "/apps" },
              { label: "All apps ↗", href: "/apps" },
            ]}
          />
          <FooterCol
            title="Studio"
            items={[
              { label: "Manifesto", href: "/manifesto" },
              { label: "About us", href: "/studio" },
              { label: "Get in touch ↗", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
            ]}
          />
          <FooterCol
            title="Elsewhere"
            items={[
              {
                label: "support@pinehollow.studio",
                href: "mailto:support@pinehollow.studio",
                external: true,
              },
            ]}
          />
        </div>

        <hr className="ph-rule-faint" />

        <div className="ph-foot-bottom">
          <span>© Pinehollow Studios Limited · MMXXVI</span>
          <span className="ph-foot-bottom-mid">
            <PinehollowMark size={14} colour="var(--lp-fg-dim)" ariaHidden />
            Built quietly · No cookies · No tracking
          </span>
          <span>End of issue ·</span>
        </div>
      </div>

      <style>{FOOTER_CSS}</style>
    </footer>
  );
}

const FOOTER_CSS = `
  .ph-foot-wordmark-wrap {
    position: relative;
    padding-bottom: 64px;
  }
  .ph-foot-wordmark {
    font-family: var(--lp-font-display);
    font-weight: 600;
    font-size: clamp(64px, 14vw, 240px);
    letter-spacing: -0.05em;
    line-height: 0.88;
    color: var(--lp-fg);
    margin: 0;
    display: flex;
    align-items: baseline;
    gap: 24px;
    flex-wrap: wrap;
  }
  .ph-foot-wordmark-em {
    color: var(--lp-pine-mist);
    font-size: 0.7em;
    font-weight: 400;
  }

  .ph-foot-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    padding: 40px 0;
    align-items: start;
  }

  .ph-foot-colophon {
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--lp-fg-mute);
    max-width: 380px;
  }
  .ph-foot-italic {
    font-family: var(--ph-serif);
    font-style: italic;
    color: var(--lp-fg);
    font-variation-settings: 'opsz' 14, 'SOFT' 50;
  }

  .ph-foot-status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
    padding: 6px 14px;
    border-radius: 99px;
    border: 1px solid rgba(127, 228, 255, 0.30);
    background: rgba(127, 228, 255, 0.05);
  }
  .ph-foot-status-label {
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }

  .ph-foot-link {
    font-size: 14px;
    color: var(--lp-fg-mute);
    transition: color 240ms var(--lp-ease);
  }
  .ph-foot-link:hover { color: var(--lp-fg); }

  .ph-foot-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 0;
    gap: 24px;
    flex-wrap: wrap;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-foot-bottom-mid {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 980px) {
    .ph-foot-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
  }
  @media (max-width: 560px) {
    .ph-foot-grid { grid-template-columns: 1fr; gap: 32px; }
    .ph-foot-bottom { font-size: 9px; gap: 12px; }
  }
`;
