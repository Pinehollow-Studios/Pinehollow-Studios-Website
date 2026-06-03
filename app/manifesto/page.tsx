import type { Metadata } from "next";
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

export default function ManifestoPage() {
  return (
    <>
      <ManifestoHero />
      <ManifestoBody />
      <ManifestoPrinciples />
      <ManifestoSign />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */

function ManifestoHero() {
  return (
    <section className="ph-pg-hero ph-manifesto-hero">
      <div className="ph-hero-aura" aria-hidden="true" />
      <div className="lp-container" style={{ position: "relative" }}>
        <Reveal variant="up" immediate delay={80}>
          <div className="ph-eyebrow" style={{ marginBottom: 28 }}>
            <span
              aria-hidden="true"
              style={{ width: 24, height: 1, background: "var(--lp-fg-mute)" }}
            />
            <span>§01 · Manifesto</span>
          </div>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1 className="ph-display ph-pg-hero-h1">
            How we
            <br />
            <em>work.</em>
          </h1>
        </Reveal>

        <Reveal variant="up" immediate delay={420}>
          <p className="ph-pg-hero-lede">
            A few things we&rsquo;ve decided about how we build, who it&rsquo;s
            for, and what we leave out.
          </p>
        </Reveal>

        <Reveal variant="up" immediate delay={560}>
          <div className="ph-manifesto-byline">Tom · Jack · 2026</div>
        </Reveal>
      </div>

      <style>{`
        .ph-pg-hero { position: relative; padding: 80px 0 100px; }
        .ph-pg-hero-h1 {
          margin: 0;
          font-size: clamp(64px, 8.4vw, 152px);
          max-width: 14ch;
        }
        .ph-pg-hero-lede {
          color: var(--lp-fg-mute);
          font-size: clamp(17px, 1.2vw, 19px);
          line-height: 1.55;
          max-width: 620px;
          margin-top: 36px;
        }
        .ph-manifesto-byline {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--lp-fg-dim);
          margin-top: 36px;
        }
      `}</style>
    </section>
  );
}

/* ─── Body ─────────────────────────────────────────────────── */

function ManifestoBody() {
  const paragraphs = [
    "Pinehollow Studios is a two-person iOS software studio. Tom builds the apps. Jack runs product. That's the company.",
    "We're self-funded. There are no investors, no debt, no exit plan. The apps pay for the apps. That means we get to choose what we make, who it's for, and how long it takes.",
    "Most modern software is designed around attention — streaks, badges, push notifications dressed up as features, daily prompts to keep you opening the app. We don't do any of that. Our apps are there when you want them, and out of the way when you don't.",
    "We'd rather make a small thing well than a big thing badly. Each app does one job. If we have a new idea, we start a new app — we don't bolt features onto something that's already done.",
    "Each app is free to download. Where there are extras, they live behind a paid Pro tier — never the basics. Some of our apps may share anonymised, aggregate usage with industry partners (Vestige with golf clubs, for example) to fund the free tier; we go into the detail on the privacy page.",
    "That's the approach. It might change in places, and if it does we'll say so here.",
  ];

  return (
    <section className="ph-manifesto-body">
      <div className="lp-container">
        <div className="ph-manifesto-body-rule" />
        <div className="ph-manifesto-body-text">
          {paragraphs.map((p, i) => (
            <Reveal key={i} variant="up">
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-manifesto-body {
          padding: clamp(48px, 6vw, 80px) 0 clamp(80px, 10vw, 120px);
        }
        .ph-manifesto-body-rule {
          height: 1px;
          background: var(--ph-rule);
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .ph-manifesto-body-text {
          max-width: 760px;
          margin: 0 auto;
          font-size: var(--lp-text-xl);
          line-height: 1.75;
          font-weight: 400;
          color: var(--lp-fg);
        }
        .ph-manifesto-body-text p { margin: 0 0 28px; }
        .ph-manifesto-body-text p:last-child { margin-bottom: 0; }
        @media (max-width: 720px) {
          .ph-manifesto-body-text { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}

/* ─── Principles (hairline grid) ─────────────────────────────── */

function ManifestoPrinciples() {
  return (
    <section className="ph-principles">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1000}>
          <div className="ph-principles-head">
            <div>
              <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
                §02 · Six principles
              </div>
              <h2 className="ph-display ph-principles-h2">
                How we work,
                <br />
                in <em>six lines</em>.
              </h2>
            </div>
            <p className="ph-principles-lede">
              The shorter version. Pin it to the wall.
            </p>
          </div>
        </Reveal>

        <div className="ph-principles-grid">
          {principles.map((p, i) => (
            <Reveal key={p.no} variant="up" delay={(i % 2) * 90}>
              <div className="ph-principle">
                <div className="ph-principle-no">{p.no}</div>
                <div className="ph-principle-title">{p.title}</div>
                <p className="ph-principle-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-principles {
          padding: clamp(80px, 10vw, 140px) 0;
          background: var(--lp-base-deep);
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-principles-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 56px;
        }
        .ph-principles-h2 {
          margin: 0;
          font-size: clamp(40px, 5.2vw, 84px);
        }
        .ph-principles-lede {
          color: var(--lp-fg-mute);
          font-size: 17px;
          line-height: 1.6;
          max-width: 360px;
          margin: 0;
        }
        .ph-principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--ph-rule);
        }
        .ph-principle {
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 0;
          padding-right: 0;
        }
        /* Two-column alternating layout via Reveal wrapper position */
        .ph-principles-grid > *:nth-child(odd) .ph-principle {
          border-right: 1px solid var(--ph-rule);
          padding-right: 32px;
        }
        .ph-principles-grid > *:nth-child(even) .ph-principle {
          padding-left: 32px;
        }
        .ph-principles-grid > *:not(:nth-last-child(-n+2)) .ph-principle {
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-principle-no {
          font-family: var(--lp-font-display);
          font-weight: 600;
          font-size: 40px;
          color: var(--lp-pine-glow);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .ph-principle-title {
          font-family: var(--lp-font-display);
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -0.025em;
          margin-top: 18px;
        }
        .ph-principle-body {
          color: var(--lp-fg-mute);
          font-size: 15px;
          line-height: 1.65;
          margin: 12px 0 0;
        }
        @media (max-width: 880px) {
          .ph-principles-head { grid-template-columns: 1fr; gap: 32px; }
          .ph-principles-grid { grid-template-columns: 1fr; }
          .ph-principle {
            padding: 32px 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--ph-rule) !important;
          }
          .ph-principle:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Signed-off ──────────────────────────────────────────── */

function ManifestoSign() {
  return (
    <section className="ph-sign">
      <div className="lp-container">
        <Reveal variant="up">
          <div className="ph-eyebrow" style={{ marginBottom: 32, textAlign: "center", justifyContent: "center" }}>
            Signed
          </div>
        </Reveal>

        <div className="ph-sign-row">
          <Reveal variant="up-lg" delay={120} duration={1000}>
            <Signature name="Tom" role="Engineering · Design" />
          </Reveal>
          <Reveal variant="up-lg" delay={260} duration={1000}>
            <Signature name="Jack" role="Product" />
          </Reveal>
        </div>

        <Reveal variant="up" delay={400}>
          <div className="ph-sign-year">2026</div>
        </Reveal>
      </div>

      <style>{`
        .ph-sign {
          padding: clamp(80px, 10vw, 120px) 0;
          text-align: center;
        }
        .ph-sign-row {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .ph-sign-year {
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

function Signature({ name, role }: { name: string; role: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="ph-sign-name">{name}</div>
      <div className="ph-sign-role">{role}</div>

      <style>{`
        .ph-sign-name {
          font-family: var(--ph-serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(36px, 4.4vw, 56px);
          color: var(--lp-pine-mist);
          letter-spacing: -0.02em;
          line-height: 1;
          font-variation-settings: 'opsz' 56, 'SOFT' 50;
        }
        .ph-sign-role {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-fg-mute);
          margin-top: 14px;
        }
      `}</style>
    </div>
  );
}
