import type { Metadata } from "next";
import Link from "next/link";
import { OrbMark } from "@/components/shared/orb-mark";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Apps — Pinehollow Studios",
  description:
    "What we're building. One iOS app in development — Fairways, a golf app. Plus how we charge for the apps we ship.",
};

export default function AppsPage() {
  return (
    <>
      <AppsHero />
      <FeaturedFairways />
      <PricingStripe />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function AppsHero() {
  return (
    <section className="ph-pg-hero">
      <div className="ph-hero-aura" aria-hidden="true" />
      <div className="lp-container" style={{ position: "relative" }}>
        <Reveal variant="up" immediate delay={80}>
          <div className="ph-eyebrow" style={{ marginBottom: 28 }}>
            <span
              aria-hidden="true"
              style={{ width: 24, height: 1, background: "var(--lp-fg-mute)" }}
            />
            <span>§01 · The apps</span>
          </div>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1 className="ph-display ph-pg-hero-h1">
            What we&rsquo;re
            <br />
            <em>building.</em>
          </h1>
        </Reveal>

        <Reveal variant="up" immediate delay={420}>
          <p className="ph-pg-hero-lede">
            Nothing shipped yet. One iOS app in development — Fairways, a golf
            app. Self-funded. UK-based. No release date yet.
          </p>
        </Reveal>
      </div>

      <style>{`
        .ph-pg-hero { position: relative; padding: 80px 0 100px; }
        .ph-pg-hero-h1 {
          margin: 0;
          font-size: clamp(56px, 8vw, 132px);
          max-width: 14ch;
        }
        .ph-pg-hero-lede {
          color: var(--lp-fg-mute);
          font-size: clamp(17px, 1.2vw, 19px);
          line-height: 1.55;
          max-width: 620px;
          margin-top: 36px;
        }
      `}</style>
    </section>
  );
}

/* ─── Featured Fairways band ────────────────────────────────────── */

function FeaturedFairways() {
  return (
    <section className="ph-feat">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1100}>
          <div className="ph-feat-grid">
            <div className="ph-feat-visual">
              <ObscuredCard />
            </div>

            <div className="ph-feat-body">
              <div className="ph-feat-head">
                <span className="ph-eyebrow">Now showing · No. PH-001</span>
                <span className="ph-feat-head-rule" aria-hidden="true" />
              </div>

              <h2 className="ph-display ph-feat-h2">
                Fairways.
                <br />
                <span className="ph-serif ph-feat-h2-em">a golf app.</span>
              </h2>

              <div className="ph-feat-status">● In development · launching 2026</div>

              <div className="ph-feat-prose">
                <p>
                  We&rsquo;re not saying much about Fairways yet. The screens,
                  the features, the full pitch — those come closer to launch.
                </p>
                <p style={{ color: "var(--lp-fg-mute)" }}>
                  Drop us a line if you&rsquo;d like a note when it&rsquo;s
                  ready.
                </p>
              </div>

              <div className="ph-feat-meta">
                {[
                  ["Stage", "In development"],
                  ["Platform", "iOS only"],
                  ["Pricing", "Free"],
                  ["Release", "2026"],
                ].map(([k, v]) => (
                  <div key={k} className="ph-feat-meta-cell">
                    <div className="ph-feat-meta-k">{k}</div>
                    <div className="ph-feat-meta-v">{v}</div>
                  </div>
                ))}
              </div>

              <div className="ph-feat-links">
                <Link href="/contact" className="ph-link">
                  Get in touch →
                </Link>
                <span className="ph-feat-links-sep" aria-hidden="true" />
                <Link href="/manifesto" className="ph-link">
                  Our approach
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{FEAT_CSS}</style>
    </section>
  );
}

function ObscuredCard() {
  return (
    <div className="ph-obscure">
      <div aria-hidden="true" className="ph-obscure-glow" />
      <div aria-hidden="true" className="ph-obscure-veil" />
      <div className="ph-obscure-seal">
        <OrbMark mark="f" size={68} glow="var(--lp-pine-glow)" />
        <div className="ph-obscure-status">In development</div>
        <div className="ph-obscure-meta">
          PH-001 · Fairways
          <br />
          Pinehollow Studios Limited
        </div>
      </div>

      <style>{`
        .ph-obscure {
          width: 320px;
          height: 440px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid var(--lp-glass-rim-hi);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.20),
            0 40px 80px -20px rgba(0,0,0,0.7),
            0 0 80px -30px rgba(127, 228, 255, 0.25);
          position: relative;
          overflow: hidden;
        }
        .ph-obscure-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(80% 60% at 50% 35%, rgba(127,228,255,0.35), transparent 70%),
            radial-gradient(60% 60% at 50% 100%, rgba(42,74,94,0.6), transparent 70%);
        }
        .ph-obscure-veil {
          position: absolute;
          inset: 0;
          background: rgba(7,12,18,0.32);
          backdrop-filter: blur(28px) saturate(120%);
          -webkit-backdrop-filter: blur(28px) saturate(120%);
        }
        .ph-obscure-seal {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          text-align: center;
        }
        .ph-obscure-status {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--lp-pine-glow);
        }
        .ph-obscure-meta {
          font-family: var(--lp-font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-fg-mute);
          max-width: 220px;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}

const FEAT_CSS = `
  .ph-feat {
    padding: 100px 0 140px;
    background: var(--lp-base-deep);
    border-top: 1px solid var(--ph-rule);
    border-bottom: 1px solid var(--ph-rule);
  }
  .ph-feat-grid {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 80px;
    align-items: center;
  }
  .ph-feat-visual {
    display: flex;
    justify-content: center;
  }
  .ph-feat-head {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 32px;
  }
  .ph-feat-head-rule {
    flex: 1;
    height: 1px;
    background: var(--ph-rule);
  }
  .ph-feat-h2 {
    margin: 0;
    font-size: clamp(48px, 7vw, 110px);
  }
  .ph-feat-h2-em {
    color: var(--lp-pine-mist);
    font-size: 0.78em;
  }
  .ph-feat-status {
    margin-top: 24px;
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-pine-glow);
  }
  .ph-feat-prose {
    margin-top: 36px;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .ph-feat-prose p {
    margin: 0;
    font-size: 17px;
    line-height: 1.65;
    color: var(--lp-fg);
  }

  .ph-feat-meta {
    display: flex;
    margin-top: 44px;
    border-top: 1px solid var(--ph-rule);
    border-bottom: 1px solid var(--ph-rule);
    width: fit-content;
    flex-wrap: wrap;
  }
  .ph-feat-meta-cell {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 0;
    padding-right: 0;
  }
  .ph-feat-meta > .ph-feat-meta-cell:not(:last-child) {
    border-right: 1px solid var(--ph-rule);
    padding-right: 28px;
    margin-right: 28px;
  }
  .ph-feat-meta-k {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-feat-meta-v {
    font-size: 15px;
    margin-top: 6px;
    letter-spacing: -0.01em;
  }

  .ph-feat-links {
    margin-top: 36px;
    display: flex;
    gap: 24px;
    align-items: center;
    font-size: 15px;
    flex-wrap: wrap;
  }
  .ph-feat-links-sep {
    width: 1px;
    height: 14px;
    background: var(--ph-rule-hi);
  }

  @media (max-width: 980px) {
    .ph-feat-grid { grid-template-columns: 1fr; gap: 56px; }
  }
  @media (max-width: 560px) {
    .ph-feat-meta { width: 100%; }
    .ph-feat-meta-cell {
      flex: 1 1 calc(50% - 28px);
      min-width: 130px;
    }
  }
`;

/* ─── Pricing stripe ────────────────────────────────────────────── */

function PricingStripe() {
  const values = [
    { k: "Free", d: "Each app, free to download" },
    { k: "Pro", d: "Optional paid extras" },
    { k: "iOS", d: "Phones first" },
    { k: "Direct", d: "Sold by us, no middleman" },
  ];
  return (
    <section className="ph-pricing">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1000}>
          <div className="ph-pricing-head">
            <div>
              <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
                §02 · Pricing
              </div>
              <h2 className="ph-display ph-pricing-h2">
                Free, with an <em>optional</em>
                <br />
                paid tier.
              </h2>
            </div>
            <p className="ph-pricing-lede">
              Each app is free to download and useful on its own. A paid Pro
              tier adds extras for people who want them — it never gates the
              basics.
            </p>
          </div>
        </Reveal>

        <div className="ph-pricing-grid">
          {values.map((v, i) => (
            <Reveal key={i} variant="up" delay={i * 90} duration={700}>
              <div className="ph-pricing-cell">
                <div className="ph-pricing-k">{v.k}</div>
                <div className="ph-pricing-d">{v.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-pricing {
          padding: clamp(80px, 10vw, 140px) 0;
        }
        .ph-pricing-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 64px;
        }
        .ph-pricing-h2 {
          margin: 0;
          font-size: clamp(40px, 5.2vw, 84px);
        }
        .ph-pricing-lede {
          font-size: 17px;
          line-height: 1.6;
          color: var(--lp-fg-mute);
          max-width: 460px;
          margin: 0;
        }
        .ph-pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-pricing-cell {
          padding-top: 40px;
          padding-bottom: 40px;
          padding-right: 32px;
          padding-left: 0;
          height: 100%;
        }
        .ph-pricing-grid > *:not(:first-child) .ph-pricing-cell { padding-left: 32px; }
        .ph-pricing-grid > *:not(:last-child) .ph-pricing-cell { border-right: 1px solid var(--ph-rule); }
        .ph-pricing-k {
          font-family: var(--lp-font-display);
          font-weight: 600;
          letter-spacing: -0.04em;
          font-size: clamp(36px, 4vw, 64px);
          line-height: 1;
          color: var(--lp-pine-glow);
        }
        .ph-pricing-d {
          color: var(--lp-fg-mute);
          font-size: 14px;
          margin-top: 12px;
        }
        @media (max-width: 980px) {
          .ph-pricing-head { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 720px) {
          .ph-pricing-grid { grid-template-columns: repeat(2, 1fr); }
          .ph-pricing-cell:nth-child(2) { border-right: none !important; }
          .ph-pricing-cell:nth-child(-n+2) { border-bottom: 1px solid var(--ph-rule); }
        }
      `}</style>
    </section>
  );
}
