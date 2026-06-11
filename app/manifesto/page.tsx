import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Manifesto — Pinehollow Studios",
  description: "How we build, and a few things we've decided.",
};

const principles = [
  {
    no: "01",
    title: "One thing at a time.",
    body: "Each app does one job. If we have a new idea, we start something new rather than piling features onto something that's already finished.",
  },
  {
    no: "02",
    title: "No engagement tricks.",
    body: "No streaks, no badges, no notifications dressed up as features. The apps don't try to keep you in them.",
  },
  {
    no: "03",
    title: "Free first.",
    body: "Each app is free to download. A paid Pro tier covers extras where there are any. The basics are never gated.",
  },
  {
    no: "04",
    title: "iOS first.",
    body: "We start on iPhone. Mac, web, or Android come later, if and when they make sense for a given app.",
  },
  {
    no: "05",
    title: "Built to last.",
    body: "We maintain the apps over time, not just at launch. Updates are small and considered, not constant.",
  },
  {
    no: "06",
    title: "Independent.",
    body: "Two people, no investors, no acquisition plan. We answer to ourselves and to the people who use our apps.",
  },
];

const paragraphs = [
  "Pinehollow Studios is a two-person iOS software studio. Tom builds the apps. Jack runs product. That's the company.",
  "We're self-funded. There are no investors, no debt, no exit plan. The apps pay for the apps. That means we get to choose what we make, who it's for, and how long it takes.",
  "Most modern software is designed around attention — streaks, badges, push notifications dressed up as features, daily prompts to keep you opening the app. We don't do any of that. Our apps are there when you want them, and out of the way when you don't.",
  "We'd rather make a small thing well than a big thing badly. Each app does one job. If we have a new idea, we start a new app — we don't bolt features onto something that's already done.",
  "Each app is free to download. Where there are extras, they live behind a paid Pro tier — never the basics. Some of our apps may share anonymised, aggregate usage with industry partners (Vestige with golf clubs, for example) to fund the free tier; we go into the detail on the privacy page.",
  "That's the approach. It might change in places, and if it does we'll say so here.",
];

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        eyebrow="§01 · Manifesto"
        lines={[
          <span key="1">How we</span>,
          <em key="2">work.</em>,
        ]}
        lede="A few things we've decided about how we build, who it's for, and what we leave out."
      >
        <div className="ph-manifesto-byline">Tom · Jack · 2026</div>
        <style>{`
          .ph-manifesto-byline {
            font-family: var(--lp-font-mono);
            font-size: 11px;
            letter-spacing: 0.28em;
            text-transform: uppercase;
            color: var(--lp-fg-dim);
            margin-top: 36px;
          }
        `}</style>
      </PageHero>

      <ManifestoBody />
      <ManifestoPrinciples />
      <ManifestoSign />
    </>
  );
}

/* ─── Body — the reading column ───────────────────────────── */

function ManifestoBody() {
  return (
    <section className="ph-mbody">
      <div className="lp-container">
        <div className="ph-mbody-rule" />
        <div className="ph-mbody-text">
          {paragraphs.map((p, i) => (
            <Reveal key={i} variant="up">
              <p className={i === 0 ? "ph-mbody-lead" : undefined}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-mbody {
          padding: clamp(48px, 6vw, 80px) 0 clamp(80px, 10vw, 120px);
        }
        .ph-mbody-rule {
          height: 1px;
          background: var(--ph-rule);
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .ph-mbody-text {
          max-width: 760px;
          margin: 0 auto;
          font-size: clamp(18px, 1.5vw, 22px);
          line-height: 1.75;
          color: var(--lp-fg);
        }
        .ph-mbody-text p { margin: 0 0 28px; }
        .ph-mbody-text > *:last-child p { margin-bottom: 0; }
        .ph-mbody-lead::first-letter {
          font-family: var(--ph-headline);
          font-weight: 700;
          font-size: 3.1em;
          line-height: 0.8;
          float: left;
          padding: 0.08em 0.12em 0 0;
          color: var(--lp-pine-glow);
        }
      `}</style>
    </section>
  );
}

/* ─── Principles — six hairline rows ──────────────────────── */

function ManifestoPrinciples() {
  return (
    <section className="ph-mprin">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1000}>
          <div className="ph-mprin-head">
            <div>
              <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
                <span style={{ color: "var(--lp-pine-glow)" }}>§02</span> Six principles
              </div>
              <h2 className="ph-display ph-mprin-h2">
                The short
                <br />
                <em>version.</em>
              </h2>
            </div>
            <p className="ph-mprin-lede">Pin it to the wall.</p>
          </div>
        </Reveal>

        <div className="ph-mprin-list">
          {principles.map((p, i) => (
            <Reveal key={p.no} variant="up" delay={(i % 2) * 80}>
              <div className="ph-mprin-row">
                <span className="ph-mprin-no">{p.no}</span>
                <span className="ph-h3 ph-mprin-title">{p.title}</span>
                <p className="ph-mprin-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <hr className="ph-rule" />
      </div>

      <style>{`
        .ph-mprin {
          padding: var(--lp-section-y) 0;
          background: var(--lp-base-deep);
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-mprin-head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: end;
          margin-bottom: 56px;
        }
        .ph-mprin-h2 { margin: 0; font-size: clamp(44px, 6vw, 96px); }
        .ph-mprin-h2 em { color: var(--lp-pine-mist); }
        .ph-mprin-lede {
          color: var(--lp-fg-dim);
          font-family: var(--lp-font-mono);
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin: 0 0 14px;
        }
        .ph-mprin-row {
          display: grid;
          grid-template-columns: 80px 1fr 1.2fr;
          gap: 32px;
          align-items: baseline;
          padding: 34px 0;
          border-top: 1px solid var(--ph-rule);
          transition: padding-left 420ms var(--ph-ease-out);
          position: relative;
        }
        .ph-mprin-row::before {
          content: "";
          position: absolute;
          top: -1px; left: 0;
          width: 100%; height: 1px;
          background: var(--lp-pine-glow);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 600ms var(--ph-ease-expo);
        }
        .ph-mprin-row:hover { padding-left: 18px; }
        .ph-mprin-row:hover::before { transform: scaleX(1); }
        .ph-mprin-row:hover .ph-mprin-no { color: var(--lp-pine-glow); }
        .ph-mprin-no {
          font-family: var(--lp-font-mono);
          font-size: 13px;
          letter-spacing: 0.14em;
          color: var(--lp-fg-dim);
          transition: color 300ms var(--lp-ease);
        }
        .ph-mprin-title { font-size: clamp(22px, 2.2vw, 32px); }
        .ph-mprin-body {
          margin: 0;
          color: var(--lp-fg-mute);
          font-size: 15px;
          line-height: 1.65;
        }
        @media (max-width: 880px) {
          .ph-mprin-head { grid-template-columns: 1fr; gap: 16px; }
          .ph-mprin-row { grid-template-columns: 48px 1fr; }
          .ph-mprin-body { grid-column: 2; }
        }
      `}</style>
    </section>
  );
}

/* ─── Signed ──────────────────────────────────────────────── */

function ManifestoSign() {
  return (
    <section className="ph-msign">
      <div className="lp-container" style={{ textAlign: "center" }}>
        <Reveal variant="up">
          <div className="ph-eyebrow" style={{ justifyContent: "center", marginBottom: 32 }}>
            Signed
          </div>
        </Reveal>

        <div className="ph-msign-row">
          <Reveal variant="up-lg" delay={120} duration={1000}>
            <div>
              <div className="ph-serif ph-msign-name">Tom</div>
              <div className="ph-msign-role">Engineering · Design</div>
            </div>
          </Reveal>
          <Reveal variant="up-lg" delay={260} duration={1000}>
            <div>
              <div className="ph-serif ph-msign-name">Jack</div>
              <div className="ph-msign-role">Product</div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={400}>
          <div className="ph-msign-year">MMXXVI</div>
        </Reveal>
      </div>

      <style>{`
        .ph-msign { padding: var(--lp-section-y) 0; text-align: center; }
        .ph-msign-row {
          display: flex;
          justify-content: center;
          gap: 96px;
          flex-wrap: wrap;
        }
        .ph-msign-name {
          text-transform: none; /* signatures keep their capitals */
          font-size: clamp(40px, 4.8vw, 64px);
          color: var(--lp-pine-mist);
          line-height: 1;
        }
        .ph-msign-role {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-fg-mute);
          margin-top: 14px;
        }
        .ph-msign-year {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--lp-fg-dim);
          text-transform: uppercase;
          margin-top: 56px;
        }
      `}</style>
    </section>
  );
}
