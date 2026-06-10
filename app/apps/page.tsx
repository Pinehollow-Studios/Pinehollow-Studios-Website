import type { Metadata } from "next";
import { VestigeFeature } from "@/components/sections/vestige-feature";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Apps — Pinehollow Studios",
  description:
    "What we're building. One iOS app in development — Vestige, a golf app. Plus how we charge for the apps we ship.",
};

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="§01 · The apps"
        lines={[
          <span key="1">What we&rsquo;re</span>,
          <em key="2">building.</em>,
        ]}
        lede="Nothing shipped yet. One iOS app in development — Vestige, a golf app. Self-funded. UK-based. No release date yet."
      />
      <AppIndex />
      <VestigeFeature sectionNo="02" />
      <PricingStripe />
    </>
  );
}

/* ─── App index — the studio's ledger of work, mostly unwritten ──── */

function AppIndex() {
  return (
    <section className="ph-aidx">
      <div className="lp-container">
        <Reveal variant="fade">
          <div className="ph-aidx-head">
            <span className="ph-eyebrow ph-aidx-head-cell">Ref.</span>
            <span className="ph-eyebrow ph-aidx-head-cell">Title</span>
            <span className="ph-eyebrow ph-aidx-head-cell ph-irow-hide">Field</span>
            <span className="ph-eyebrow ph-aidx-head-cell ph-irow-hide">Status</span>
            <span className="ph-eyebrow ph-aidx-head-cell" style={{ textAlign: "right" }}>Yr.</span>
          </div>
        </Reveal>

        <Reveal variant="up">
          <a href="#vestige" className="ph-irow" data-cursor-label="View">
            <span className="ph-aidx-ref">PH-001</span>
            <span className="ph-h3 ph-aidx-title">Vestige</span>
            <span className="ph-aidx-field ph-irow-hide">
              <em className="ph-serif">golf</em>
            </span>
            <span className="ph-aidx-status ph-irow-hide">
              <span className="ph-live-dot" /> In development
            </span>
            <span className="ph-aidx-year">2026</span>
          </a>
        </Reveal>

        {["PH-002", "PH-003"].map((ref, i) => (
          <Reveal key={ref} variant="up" delay={(i + 1) * 90}>
            <div className="ph-irow ph-aidx-ghost" aria-hidden="true">
              <span className="ph-aidx-ref">{ref}</span>
              <span className="ph-h3 ph-aidx-title ph-aidx-title-ghost">Unwritten</span>
              <span className="ph-aidx-field ph-irow-hide">———</span>
              <span className="ph-aidx-status ph-irow-hide">Someday</span>
              <span className="ph-aidx-year">——</span>
            </div>
          </Reveal>
        ))}
        <hr className="ph-rule" />

        <Reveal variant="fade" delay={300}>
          <p className="ph-aidx-note">
            One app at a time, finished properly, then the next line gets written.
          </p>
        </Reveal>
      </div>

      <style>{`
        .ph-aidx { padding: 0 0 var(--lp-section-y); }
        .ph-aidx-head {
          display: grid;
          grid-template-columns: 90px 1.6fr 1fr 0.8fr 60px;
          gap: 24px;
          padding-bottom: 14px;
        }
        .ph-aidx-head-cell { font-size: 10px; }
        .ph-aidx-ref {
          font-family: var(--lp-font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          color: var(--lp-pine-glow);
        }
        .ph-aidx-title {
          font-size: clamp(28px, 3.6vw, 56px);
          color: var(--lp-fg);
        }
        .ph-aidx-title-ghost {
          color: transparent;
          -webkit-text-stroke: 1px rgba(241, 245, 242, 0.22);
        }
        .ph-aidx-field { font-size: 20px; color: var(--lp-pine-mist); }
        .ph-aidx-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--lp-font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--lp-fg-mute);
        }
        .ph-aidx-year {
          font-family: var(--lp-font-mono);
          font-size: 12px;
          color: var(--lp-fg-dim);
          text-align: right;
        }
        .ph-aidx-ghost { opacity: 0.5; }
        .ph-aidx-ghost .ph-live-dot { display: none; }
        .ph-aidx-note {
          margin: 24px 0 0;
          font-size: 14px;
          color: var(--lp-fg-dim);
        }
        @media (max-width: 980px) {
          .ph-aidx-head { grid-template-columns: 56px 1fr 60px; }
        }
      `}</style>
    </section>
  );
}

/* ─── Pricing stripe ───────────────────────────────────────────── */

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
                <span style={{ color: "var(--lp-pine-glow)" }}>§03</span> Pricing
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
            <Reveal key={v.k} variant="up" delay={i * 90} duration={700}>
              <div className="ph-pricing-cell">
                <div className="ph-h3 ph-pricing-k">{v.k}</div>
                <div className="ph-pricing-d">{v.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-pricing { padding: var(--lp-section-y) 0; }
        .ph-pricing-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 64px;
        }
        .ph-pricing-h2 {
          margin: 0;
          font-size: clamp(38px, 5.2vw, 84px);
        }
        .ph-pricing-h2 em { color: var(--lp-pine-mist); }
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
          padding: 40px 32px 40px 0;
          height: 100%;
        }
        .ph-pricing-grid > *:not(:first-child) .ph-pricing-cell { padding-left: 32px; }
        .ph-pricing-grid > *:not(:last-child) .ph-pricing-cell { border-right: 1px solid var(--ph-rule); }
        .ph-pricing-k {
          font-size: clamp(34px, 3.8vw, 60px);
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
          .ph-pricing-grid > *:nth-child(2) .ph-pricing-cell { border-right: none; }
          .ph-pricing-grid > *:nth-child(-n+2) .ph-pricing-cell { border-bottom: 1px solid var(--ph-rule); }
        }
      `}</style>
    </section>
  );
}
