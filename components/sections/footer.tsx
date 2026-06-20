"use client";

import Link from "next/link";
import { Magnetic } from "@/components/shared/magnetic";
import { MaskReveal } from "@/components/shared/mask-reveal";
import { PinehollowMark } from "@/components/shared/pinehollow-mark";
import { Reveal } from "@/components/shared/reveal";

interface FooterColProps {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}

function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <div className="ph-eyebrow" style={{ marginBottom: 18 }}>{title}</div>
      <ul className="ph-foot-list">
        {items.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                className="ph-foot-link"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="ph-foot-link">{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Colophon footer — giant masked wordmark with a handwritten-feeling serif
 * "studios." colliding with its baseline, an oversized write-to-us link,
 * the colophon grid, and a mono end strip with a magnetic back-to-top.
 */
export function Footer() {
  const backToTop = () => {
    window.dispatchEvent(new CustomEvent("ph:scrollto", { detail: 0 }));
  };

  return (
    <footer className="ph-foot">
      <div className="lp-container">
        {/* giant sign-off wordmark */}
        <div className="ph-foot-mark-wrap">
          <MaskReveal
            as="div"
            className="ph-display ph-foot-wordmark"
            lines={[<span key="w">Pinehollow</span>]}
          />
          <span className="ph-serif ph-foot-studios" aria-hidden="true">studios.</span>
        </div>

        {/* oversized email link */}
        <Reveal variant="up">
          <div className="ph-foot-write">
            <span className="ph-eyebrow">Write to us</span>
            <a
              href="mailto:support@pinehollow.studio"
              className="ph-foot-mail"
              data-cursor-label="Email"
            >
              support@pinehollow.studio
              <span className="ph-foot-mail-tip">↗</span>
            </a>
          </div>
        </Reveal>

        <hr className="ph-rule" />

        <div className="ph-foot-grid">
          <div>
            <div className="ph-eyebrow" style={{ marginBottom: 16 }}>Colophon</div>
            <p className="ph-foot-colophon">
              This page was set in <em className="ph-foot-italic">Bricolage Grotesque</em>,{" "}
              <em className="ph-foot-italic">Instrument Sans</em>, and{" "}
              <em className="ph-foot-italic">Fragment Mono</em>. Designed and built in
              the United Kingdom by Tom &amp; Jack. No cookies, no third-party
              trackers.
            </p>
            <div className="ph-foot-status">
              <span className="ph-live-dot" />
              <span className="ph-foot-status-label">Currently building Vestige</span>
            </div>
          </div>

          <FooterCol
            title="Work"
            items={[
              { label: "Vestige · golf", href: "/apps" },
              { label: "All work", href: "/apps" },
            ]}
          />
          <FooterCol
            title="Studio"
            items={[
              { label: "Manifesto", href: "/manifesto" },
              { label: "About us", href: "/studio" },
              { label: "Get in touch", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
            ]}
          />
          <FooterCol
            title="Elsewhere"
            items={[
              { label: "vestige.golf", href: "https://vestige.golf", external: true },
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
            <PinehollowMark size={13} colour="var(--lp-fg-dim)" ariaHidden />
            Built quietly · Two people, one studio
          </span>
          <span className="ph-foot-bottom-end">
            <Magnetic strength={0.35}>
              <button type="button" className="ph-foot-top" onClick={backToTop} data-cursor-label="Top">
                Back to top ↑
              </button>
            </Magnetic>
          </span>
        </div>
      </div>

      <style>{FOOTER_CSS}</style>
    </footer>
  );
}

const FOOTER_CSS = `
  .ph-foot {
    border-top: 1px solid var(--ph-rule-hi);
    padding: clamp(72px, 9vw, 130px) 0 36px;
    background: var(--lp-base-deep);
    position: relative;
    overflow: hidden;
  }

  .ph-foot-mark-wrap {
    position: relative;
    padding-bottom: clamp(40px, 5vw, 80px);
  }
  .ph-foot-wordmark {
    /* sized so PINEHOLLOW (≈5.6× font-size in Bricolage 800) fills the
       container at every width without clipping on phones */
    font-size: min(calc((100vw - 80px) / 5.7), 226px);
    line-height: 0.9;
    color: var(--lp-fg);
  }
  .ph-foot-studios {
    position: absolute;
    right: 2%;
    bottom: clamp(8px, 2vw, 30px);
    font-size: clamp(36px, 5.6vw, 104px);
    color: var(--lp-pine-mist);
    transform: rotate(-5deg);
    text-shadow: 0 10px 40px rgba(4, 8, 13, 0.9);
    pointer-events: none;
  }

  .ph-foot-write {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-bottom: clamp(40px, 5vw, 72px);
  }
  .ph-foot-mail {
    align-self: flex-start;
    font-family: var(--ph-headline);
    font-weight: 600;
    font-size: clamp(22px, 4.2vw, 64px);
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: var(--lp-fg);
    display: inline-flex;
    align-items: baseline;
    gap: 0.35em;
    background-image: linear-gradient(var(--lp-pine-glow), var(--lp-pine-glow));
    background-size: 0% 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 600ms var(--ph-ease-expo), color 300ms var(--lp-ease);
    padding-bottom: 0.08em;
  }
  .ph-foot-mail:hover {
    color: var(--lp-pine-glow);
    background-size: 100% 2px;
  }
  .ph-foot-mail-tip {
    font-size: 0.55em;
    color: var(--lp-pine-glow);
    transition: transform 400ms var(--ph-ease-out);
  }
  .ph-foot-mail:hover .ph-foot-mail-tip { transform: translate(4px, -4px); }

  .ph-foot-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.2fr;
    gap: 48px;
    padding: 44px 0;
    align-items: start;
  }
  .ph-foot-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ph-foot-colophon {
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--lp-fg-mute);
    max-width: 380px;
  }
  .ph-foot-italic {
    font-style: normal;
    font-weight: 600;
    color: var(--lp-fg);
  }
  .ph-foot-status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
    padding: 7px 14px;
    border-radius: 99px;
    border: 1px solid rgba(127, 228, 255, 0.30);
    background: rgba(127, 228, 255, 0.05);
  }
  .ph-foot-status-label {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }
  .ph-foot-link {
    font-size: 14px;
    color: var(--lp-fg-mute);
    background-image: linear-gradient(var(--lp-pine-glow), var(--lp-pine-glow));
    background-size: 0% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    padding-bottom: 2px;
    transition: color 240ms var(--lp-ease), background-size 360ms var(--lp-ease);
  }
  .ph-foot-link:hover { color: var(--lp-fg); background-size: 100% 1px; }

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
  .ph-foot-bottom-end {
    display: inline-flex;
    align-items: center;
    gap: 14px;
  }
  .ph-foot-top {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg);
    padding: 10px 4px;
    transition: color 240ms var(--lp-ease);
  }
  .ph-foot-top:hover { color: var(--lp-pine-glow); }

  @media (max-width: 980px) {
    .ph-foot-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
  }
  @media (max-width: 560px) {
    .ph-foot-grid { grid-template-columns: 1fr; gap: 32px; }
    .ph-foot-bottom { font-size: 9px; gap: 12px; }
  }
`;
