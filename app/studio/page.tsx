import type { Metadata } from "next";
import { StudioCollage } from "@/components/sections/studio-collage";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Studio — Pinehollow Studios",
  description:
    "Pinehollow Studios is a two-person iOS software studio. About Tom and Jack.",
};

const founders = [
  {
    name: "Tom",
    role: "Engineering · Design",
    based: "United Kingdom",
    bio: "Tom builds the apps. He works in Swift and SwiftUI on iOS, with some TypeScript and React on the web.",
    stack: ["Swift", "SwiftUI", "TypeScript", "React", "Figma"],
  },
  {
    name: "Jack",
    role: "Product",
    based: "United Kingdom",
    bio: "Jack runs product. He decides what we build, who it's for, and what we leave out.",
    stack: ["Product", "Writing", "Research", "Support"],
  },
];

const facts: Array<[string, string]> = [
  ["Founders", "2"],
  ["Founded", "2026"],
  ["Focus", "iOS"],
  ["Office", "United Kingdom"],
  ["Members", "Tom & Jack"],
  ["Funding", "Self-funded"],
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="§01 · The studio"
        lines={[
          <em key="1">About</em>,
          <span key="2">us.</span>,
        ]}
        lede="Pinehollow is the two of us — Tom and Jack. We started the studio in 2026 to make iOS apps we wanted to use ourselves. We do all the work ourselves: no outsourcing, no investors."
      />
      <StudioCollage />
      <FoundersStrip />
      <StudioStory />
      <StudioFacts />
    </>
  );
}

/* ─── Founders ──────────────────────────────────────────────── */

function FoundersStrip() {
  return (
    <section className="ph-founders">
      <div className="lp-container">
        <Reveal variant="fade">
          <div className="ph-founders-head">
            <span className="ph-eyebrow">
              <span style={{ color: "var(--lp-pine-glow)" }}>§02</span> The two of us
            </span>
            <span className="ph-founders-head-rule" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="ph-founders-grid">
          {founders.map((f, idx) => (
            <Reveal key={f.name} variant="up-lg" delay={idx * 140} duration={1100}>
              <article className="ph-founder">
                <div className="ph-display ph-founder-name">{f.name}</div>
                <div className="ph-founder-role">{f.role}</div>
                <div className="ph-founder-based">● {f.based}</div>

                <p className="ph-founder-bio">{f.bio}</p>

                <div className="ph-founder-stack">
                  <div className="ph-eyebrow" style={{ marginBottom: 12 }}>Toolkit</div>
                  <div className="ph-founder-stack-row">
                    {f.stack.map((s, i) => (
                      <span key={s} className="ph-founder-tag">
                        {s}
                        {i < f.stack.length - 1 ? <span className="ph-founder-tag-sep">·</span> : null}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-founders { padding: clamp(64px, 8vw, 120px) 0; }
        .ph-founders-head {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 48px;
        }
        .ph-founders-head-rule { flex: 1; height: 1px; background: var(--ph-rule); }
        .ph-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-founder { padding: 48px 0; }
        .ph-founders-grid > *:first-child .ph-founder {
          border-right: 1px solid var(--ph-rule);
          padding-right: 48px;
        }
        .ph-founders-grid > *:last-child .ph-founder { padding-left: 48px; }
        .ph-founder-name { font-size: clamp(44px, 5vw, 76px); }
        .ph-founder-role {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-fg-mute);
          margin-top: 16px;
        }
        .ph-founder-based {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-pine-glow);
          margin-top: 6px;
        }
        .ph-founder-bio {
          margin: 28px 0 0;
          color: var(--lp-fg-mute);
          font-size: 16px;
          line-height: 1.65;
        }
        .ph-founder-stack {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--ph-rule-faint);
        }
        .ph-founder-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0 4px;
          font-size: 14px;
          color: var(--lp-fg);
          letter-spacing: -0.005em;
        }
        .ph-founder-tag { display: inline-flex; align-items: center; gap: 8px; }
        .ph-founder-tag-sep { color: var(--lp-fg-dim); margin-left: 4px; }

        @media (max-width: 880px) {
          .ph-founders-grid { grid-template-columns: 1fr; }
          .ph-founders-grid > * .ph-founder {
            padding: 40px 0;
            border-right: none;
            border-bottom: 1px solid var(--ph-rule);
          }
          .ph-founders-grid > *:last-child .ph-founder { border-bottom: none; padding-left: 0; }
        }
      `}</style>
    </section>
  );
}

/* ─── Story ─────────────────────────────────────────────────── */

function StudioStory() {
  return (
    <section className="ph-story">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1100}>
          <div className="ph-story-grid">
            <div>
              <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
                <span style={{ color: "var(--lp-pine-glow)" }}>§03</span> How we&rsquo;re set up
              </div>
              <h2 className="ph-display ph-story-h2">
                Small,
                <br />
                <em>on purpose</em>.
              </h2>
            </div>
            <div className="ph-story-body">
              <p>
                We&rsquo;re two cofounders, in the UK. Tom handles engineering
                and design. Jack handles product. We started the studio in 2026
                to make iOS apps we wanted to use ourselves.
              </p>
              <p>
                The company is self-funded. No investors, no debt, no plans to
                take any on. The apps pay for the apps.
              </p>
              <p>
                We don&rsquo;t expect to grow much past two people. We&rsquo;d
                rather build a handful of things we&rsquo;re proud of than a
                company that needs to keep growing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .ph-story {
          padding: var(--lp-section-y) 0;
          background: var(--lp-base-deep);
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-story-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .ph-story-h2 { margin: 0; font-size: clamp(40px, 5.2vw, 88px); }
        .ph-story-h2 em { color: var(--lp-pine-mist); }
        .ph-story-body { display: flex; flex-direction: column; gap: 22px; }
        .ph-story-body p { margin: 0; color: var(--lp-fg); font-size: 17px; line-height: 1.75; }
        .ph-story-body p + p { color: var(--lp-fg-mute); }
        @media (max-width: 880px) {
          .ph-story-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}

/* ─── Facts ledger ──────────────────────────────────────────── */

function StudioFacts() {
  return (
    <section className="ph-facts">
      <div className="lp-container">
        <Reveal variant="up-lg">
          <div className="ph-eyebrow" style={{ marginBottom: 32 }}>
            <span style={{ color: "var(--lp-pine-glow)" }}>§04</span> The studio, in numbers
          </div>
        </Reveal>

        <div className="ph-facts-grid">
          {facts.map(([k, v], i) => (
            <Reveal key={k} variant="up" delay={i * 60}>
              <div
                className="ph-facts-row"
                style={{ borderTop: i === 0 ? "1px solid var(--ph-rule)" : undefined }}
              >
                <span className="ph-facts-k">{k}</span>
                <span className="ph-h3 ph-facts-v">{v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-facts { padding: var(--lp-section-y) 0; }
        .ph-facts-grid {
          max-width: 760px;
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-facts-row {
          display: grid;
          grid-template-columns: 220px 1fr;
          align-items: baseline;
          gap: 24px;
          padding: 22px 0;
          border-top: 1px solid var(--ph-rule);
        }
        .ph-facts-k {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-fg-dim);
        }
        .ph-facts-v { font-size: 24px; }
        @media (max-width: 560px) {
          .ph-facts-row { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
        }
      `}</style>
    </section>
  );
}
