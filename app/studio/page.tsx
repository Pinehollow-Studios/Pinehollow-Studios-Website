import type { Metadata } from "next";
import Image from "next/image";
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
      <StudioHero />
      <StudioPhotoBand />
      <FoundersStrip />
      <StudioStory />
      <StudioFacts />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function StudioHero() {
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
            <span>§01 · The studio</span>
          </div>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1 className="ph-display ph-pg-hero-h1">
            <em>About</em>
            <br />
            us.
          </h1>
        </Reveal>

        <Reveal variant="up" immediate delay={420}>
          <p className="ph-pg-hero-lede">
            Pinehollow is the two of us — Tom and Jack. We started the studio
            in 2026 to make iOS apps we wanted to use ourselves. We do all the
            work ourselves: no outsourcing, no investors.
          </p>
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
          max-width: 660px;
          margin-top: 36px;
        }
      `}</style>
    </section>
  );
}

/* ─── Photo band ──────────────────────────────────────────────── */

function StudioPhotoBand() {
  return (
    <section className="ph-studio-photo">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1100}>
          <div className="ph-studio-photo-frame">
            <Image
              src="/jack-on-course.jpg"
              alt="Jack playing a parkland course in Surrey at sunset"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 560px"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="ph-studio-photo-veil" aria-hidden="true" />
            <div className="ph-studio-photo-caption">
              <div className="ph-studio-photo-eyebrow">● Jack</div>
              <div className="ph-studio-photo-italic">
                a Surrey parkland, at last light
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .ph-studio-photo { padding: 0 0 80px; }
        .ph-studio-photo-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          width: 100%;
          max-width: 560px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--ph-rule-hi);
          box-shadow: 0 50px 100px -40px rgba(0,0,0,0.65);
          background: var(--lp-base-raised);
        }
        .ph-studio-photo-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,12,18,0.30) 0%, transparent 30%, transparent 60%, rgba(4,8,13,0.85) 100%);
        }
        .ph-studio-photo-caption {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 24px;
        }
        .ph-studio-photo-eyebrow {
          font-family: var(--lp-font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lp-pine-glow);
        }
        .ph-studio-photo-italic {
          font-family: var(--ph-serif);
          font-style: italic;
          font-weight: 400;
          font-size: 24px;
          letter-spacing: -0.015em;
          color: var(--lp-pine-mist);
          margin-top: 8px;
          font-variation-settings: 'opsz' 28, 'SOFT' 50;
        }
      `}</style>
    </section>
  );
}

/* ─── Founders ──────────────────────────────────────────────── */

function FoundersStrip() {
  return (
    <section className="ph-founders">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1100}>
          <div className="ph-founders-head">
            <span className="ph-eyebrow">§02 · The two of us</span>
            <span className="ph-founders-head-rule" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="ph-founders-grid">
          {founders.map((f, idx) => (
            <Reveal
              key={f.name}
              variant="up-lg"
              delay={idx * 140}
              duration={1100}
            >
              <article className="ph-founder">
                <div className="ph-founder-name">{f.name}</div>
                <div className="ph-founder-role">{f.role}</div>
                <div className="ph-founder-based">● {f.based}</div>

                <p className="ph-founder-bio">{f.bio}</p>

                <div className="ph-founder-stack">
                  <div className="ph-eyebrow" style={{ marginBottom: 12 }}>
                    Toolkit
                  </div>
                  <div className="ph-founder-stack-row">
                    {f.stack.map((s, i) => (
                      <span key={s} className="ph-founder-tag">
                        {s}
                        {i < f.stack.length - 1 ? (
                          <span className="ph-founder-tag-sep">·</span>
                        ) : null}
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
        .ph-founders-head-rule {
          flex: 1;
          height: 1px;
          background: var(--ph-rule);
        }
        .ph-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid var(--ph-rule);
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-founder {
          padding-top: 48px;
          padding-bottom: 48px;
          padding-left: 0;
          padding-right: 0;
        }
        .ph-founders-grid > *:first-child .ph-founder {
          border-right: 1px solid var(--ph-rule);
          padding-right: 48px;
        }
        .ph-founders-grid > *:last-child .ph-founder {
          padding-left: 48px;
        }
        .ph-founder-name {
          font-family: var(--lp-font-display);
          font-weight: 600;
          font-size: clamp(40px, 4.4vw, 64px);
          letter-spacing: -0.035em;
          line-height: 1;
        }
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
          color: var(--lp-fg-dim);
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
        .ph-founder-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ph-founder-tag-sep {
          color: var(--lp-fg-dim);
          margin-left: 4px;
        }

        @media (max-width: 880px) {
          .ph-founders-grid { grid-template-columns: 1fr; }
          .ph-founder {
            padding: 40px 0 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--ph-rule);
          }
          .ph-founder:last-child { border-bottom: none; }
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
                §03 · How we&rsquo;re set up
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
                and design. Jack handles product. We started the studio in
                2026 to make iOS apps we wanted to use ourselves.
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
          padding: clamp(96px, 12vw, 160px) 0;
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
        .ph-story-h2 {
          margin: 0;
          font-size: clamp(40px, 5.2vw, 88px);
        }
        .ph-story-body {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .ph-story-body p {
          margin: 0;
          color: var(--lp-fg);
          font-size: 17px;
          line-height: 1.75;
        }
        .ph-story-body p + p { color: var(--lp-fg-mute); }
        @media (max-width: 880px) {
          .ph-story-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}

/* ─── Facts (typographic ledger) ─────────────────────────────── */

function StudioFacts() {
  return (
    <section className="ph-facts">
      <div className="lp-container">
        <Reveal variant="up-lg">
          <div className="ph-eyebrow" style={{ marginBottom: 32 }}>
            §04 · The studio, in numbers
          </div>
        </Reveal>

        <div className="ph-facts-grid">
          {facts.map(([k, v], i) => (
            <Reveal key={k} variant="up" delay={i * 60}>
              <div
                className="ph-facts-row"
                style={{
                  borderTop: i === 0 ? "1px solid var(--ph-rule)" : "none",
                }}
              >
                <span className="ph-facts-k">{k}</span>
                <span className="ph-facts-v">{v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-facts {
          padding: clamp(80px, 10vw, 140px) 0;
        }
        .ph-facts-grid {
          max-width: 720px;
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
        .ph-facts-v {
          font-family: var(--lp-font-display);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        @media (max-width: 560px) {
          .ph-facts-row { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
        }
      `}</style>
    </section>
  );
}
