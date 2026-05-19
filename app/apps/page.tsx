import type { Metadata } from "next";
import { GhostButton, PrimaryButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { OrbMark } from "@/components/shared/orb-mark";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Apps — Pinehollow Studios",
  description:
    "What we're building. One iOS app in development — Fairways, a golf app. Plus how we charge for the apps we ship.",
};

export default function AppsPage() {
  return (
    <Page atmosphere="default">
      <AppsHero />
      <FairwaysTeaser />
      <FreemiumStripe />
    </Page>
  );
}

function AppsHero() {
  return (
    <Section py="80px">
      <div className="lp-hero-pad-top" style={{ paddingTop: 40, maxWidth: 1000 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">One in development</Pill>
        </Reveal>
        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "var(--lp-track-display)",
              fontSize: "var(--lp-text-6xl)",
              lineHeight: "var(--lp-leading-tight)",
              margin: "28px 0 0",
            }}
          >
            What we&rsquo;re
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              building
            </em>
            .
          </h1>
        </Reveal>
        <Reveal variant="up" immediate delay={420}>
          <p
            style={{
              color: "var(--lp-fg-mute)",
              fontSize: "var(--lp-text-lg)",
              lineHeight: 1.55,
              maxWidth: 620,
              marginTop: 28,
            }}
          >
            Nothing shipped yet. One iOS app in development — Fairways, a golf app.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function FairwaysTeaser() {
  return (
    <Section py="60px">
      <Reveal variant="up-xl" duration={1200}>
      <GlassCard
        strong
        style={{ padding: 0, position: "relative", overflow: "hidden", minHeight: 560 }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 560,
            height: 560,
            borderRadius: 99,
            background:
              "radial-gradient(circle at center, rgba(127,228,255,0.30), transparent 70%)",
            opacity: 0.4,
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: -160,
            bottom: -160,
            width: 600,
            height: 600,
            borderRadius: 99,
            background:
              "radial-gradient(circle at center, rgba(42,74,94,0.55), transparent 70%)",
            opacity: 0.5,
            filter: "blur(40px)",
          }}
        />

        <div
          className="fairways-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            alignItems: "stretch",
            position: "relative",
          }}
        >
          {/* CONTENT */}
          <div
            className="fairways-content"
            style={{
              padding: 56,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--lp-font-mono)",
                  fontSize: 11,
                  color: "var(--lp-fg-dim)",
                  letterSpacing: "0.22em",
                }}
              >
                PH-001
              </span>
              <Pill tone="ember" icon="dot">In development</Pill>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                marginTop: 24,
                flexWrap: "wrap",
              }}
            >
              <h2
                className="fairways-title"
                style={{
                  fontFamily: "var(--lp-font-display)",
                  fontSize: "clamp(48px, 12vw, 92px)",
                  fontWeight: 500,
                  letterSpacing: "-0.045em",
                  margin: 0,
                  lineHeight: 0.95,
                }}
              >
                Fairways
              </h2>
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--lp-pine-mist)",
                  fontSize: 24,
                  fontWeight: 400,
                }}
              >
                a golf app
              </em>
            </div>

            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--lp-font-mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--lp-pine-glow)",
              }}
            >
              ● Launching 2026
            </div>

            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 17,
                lineHeight: 1.65,
                marginTop: 24,
                maxWidth: 520,
              }}
            >
              We&rsquo;re not saying much about Fairways yet. The screens, the features, the full pitch — those come closer to launch.
            </p>
            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 17,
                lineHeight: 1.65,
                marginTop: 0,
                maxWidth: 520,
              }}
            >
              Drop us a line if you&rsquo;d like a note when it&rsquo;s ready.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              <PrimaryButton href="/contact">Get in touch →</PrimaryButton>
              <GhostButton href="/manifesto">Our approach</GhostButton>
            </div>

            <div
              style={{
                marginTop: 36,
                paddingTop: 24,
                borderTop: "1px solid var(--lp-glass-rim)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24,
              }}
              className="fairways-meta"
            >
              <Meta label="Stage" value="In development" />
              <Meta label="Platform" value="iOS only" />
              <Meta label="Pricing" value="Free" />
            </div>
          </div>

          {/* TEASE side */}
          <div
            className="fairways-tease"
            style={{
              padding: 48,
              minHeight: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1px solid var(--lp-glass-rim)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <ObscuredCard />
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .fairways-grid { grid-template-columns: 1fr !important; }
            .fairways-tease { border-left: none !important; border-top: 1px solid var(--lp-glass-rim); min-height: 360px !important; padding: 32px !important; }
            .fairways-content { padding: 36px !important; }
            .fairways-meta { grid-template-columns: 1fr !important; gap: 16px !important; }
          }
          @media (max-width: 560px) {
            .fairways-content { padding: 24px !important; }
            .fairways-tease { min-height: 280px !important; padding: 24px !important; }
          }
        `}</style>
      </GlassCard>
      </Reveal>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Overline>{label}</Overline>
      <div
        style={{
          marginTop: 8,
          fontFamily: "var(--lp-font-display)",
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "var(--lp-fg)",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ObscuredCard() {
  return (
    <div
      style={{
        width: 280,
        height: 380,
        borderRadius: 28,
        background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
        border: "1px solid var(--lp-glass-rim-hi)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.20), 0 30px 60px -20px rgba(0,0,0,0.6)",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "var(--lp-blur)",
        WebkitBackdropFilter: "var(--lp-blur)",
      }}
    >
      {/* obscured gradient interior */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 60% at 50% 35%, rgba(127,228,255,0.35), transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(42,74,94,0.6), transparent 70%)",
        }}
      />

      {/* strong frosted overlay — the "wraps" */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(7,12,18,0.32)",
          backdropFilter: "blur(28px) saturate(120%)",
          WebkitBackdropFilter: "blur(28px) saturate(120%)",
        }}
      />

      {/* centre seal */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          padding: 24,
          textAlign: "center",
        }}
      >
        <OrbMark mark="f" size={68} glow="var(--lp-pine-glow)" />
        <div
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--lp-pine-glow)",
          }}
        >
          In development
        </div>
        <div
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--lp-fg-mute)",
            maxWidth: 200,
            lineHeight: 1.6,
          }}
        >
          PH-001 · Fairways<br />Pinehollow Studios Limited
        </div>
      </div>
    </div>
  );
}

function FreemiumStripe() {
  const values = [
    { k: "Free", d: "Each app, free to download" },
    { k: "Pro", d: "Optional paid extras" },
    { k: "iOS", d: "Phones first" },
    { k: "Direct", d: "Sold by us, no middleman" },
  ];
  return (
    <Section py="100px">
      <Reveal variant="up-lg" duration={1000}>
      <GlassCard strong style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "48px 48px 32px" }}>
          <Overline>Pricing</Overline>
          <h2
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              fontSize: "var(--lp-text-4xl)",
              lineHeight: 1.05,
              margin: "14px 0 0",
              maxWidth: 700,
            }}
          >
            Free, with an{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              optional
            </em>{" "}
            paid tier.
          </h2>
          <p
            style={{
              color: "var(--lp-fg-mute)",
              fontSize: 16,
              lineHeight: 1.65,
              marginTop: 18,
              maxWidth: 620,
            }}
          >
            Each app is free to download and useful on its own. A paid Pro tier adds extras for people who want them — it never gates the basics.
          </p>
        </div>
        <div
          className="freemium-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--lp-glass-rim)",
          }}
        >
          {values.map((v, i) => (
            <Reveal key={i} variant="up" delay={i * 90} duration={700}>
              <div
                className="freemium-cell"
                style={{
                  padding: 40,
                  borderRight: i < values.length - 1 ? "1px solid var(--lp-glass-rim)" : "none",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--lp-font-display)",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    fontSize: 56,
                    lineHeight: 1,
                    color: "var(--lp-pine-glow)",
                  }}
                >
                  {v.k}
                </div>
                <div style={{ color: "var(--lp-fg-mute)", fontSize: 14, marginTop: 12 }}>
                  {v.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          @media (max-width: 880px) {
            .freemium-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .freemium-cell:nth-child(2) { border-right: none !important; }
            .freemium-cell:nth-child(1), .freemium-cell:nth-child(2) { border-bottom: 1px solid var(--lp-glass-rim); }
          }
        `}</style>
      </GlassCard>
      </Reveal>
    </Section>
  );
}
