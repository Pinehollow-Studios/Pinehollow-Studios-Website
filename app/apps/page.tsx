import type { Metadata } from "next";
import { GhostButton, PrimaryButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Apps — Pinehollow Studios",
  description:
    "What we're building. One app in development under wraps — and the way we'll ship everything: free at the centre, Pro at the edges.",
};

export default function AppsPage() {
  return (
    <Page active="apps" atmosphere="default">
      <AppsHero />
      <FairwaysTeaser />
      <FreemiumStripe />
    </Page>
  );
}

function AppsHero() {
  return (
    <Section py="80px">
      <div style={{ paddingTop: 40, maxWidth: 1000 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">01 in development · 0 shipped · yet</Pill>
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
            Small apps,
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              made slowly
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
            We&apos;ve nothing shipped yet — but there&apos;s one app in the workshop. It&apos;ll arrive when it&apos;s ready, and not a day before.
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
              "radial-gradient(circle at center, rgba(63,229,160,0.30), transparent 70%)",
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
              "radial-gradient(circle at center, rgba(45,79,63,0.55), transparent 70%)",
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
                PH-001 · CODENAME
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
                style={{
                  fontFamily: "var(--lp-font-display)",
                  fontSize: 92,
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
              ● Codename only · final name TBA
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
              That&apos;s most of what we can say.
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
              The shape, the screens, the feature list — we&apos;re keeping all of it under wraps until the work earns the announcement. If you&apos;d like to be among the first to hear about it, write to us.
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
              <PrimaryButton href="/contact">Hear from us first →</PrimaryButton>
              <GhostButton href="/manifesto">How we build</GhostButton>
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
              <Meta label="Platforms" value="iOS · first" />
              <Meta label="Pricing" value="Freemium" />
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
            "radial-gradient(80% 60% at 50% 35%, rgba(63,229,160,0.35), transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(45,79,63,0.6), transparent 70%)",
        }}
      />

      {/* strong frosted overlay — the "wraps" */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,20,16,0.32)",
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
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 99,
            background:
              "linear-gradient(160deg, var(--lp-pine-glow) 0%, var(--lp-pine-deep) 80%)",
            border: "1px solid var(--lp-glass-rim-hi)",
            boxShadow:
              "inset 0 2px 0 rgba(255,255,255,0.30), 0 0 32px -4px rgba(63,229,160,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--lp-font-display)",
            fontStyle: "italic",
            fontSize: 30,
            color: "rgba(255,255,255,0.95)",
            letterSpacing: "-0.02em",
          }}
        >
          f
        </div>
        <div
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--lp-pine-glow)",
          }}
        >
          Under wraps
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
          PH-001 · Fairways<br />Pinehollow Studios Ltd
        </div>
      </div>
    </div>
  );
}

function FreemiumStripe() {
  const values = [
    { k: "Free", d: "The full app, day one" },
    { k: "Pro", d: "Optional power-user depth" },
    { k: "0", d: "Ads · ever" },
    { k: "∞", d: "Years of updates" },
  ];
  return (
    <Section py="100px">
      <Reveal variant="up-lg" duration={1000}>
      <GlassCard strong style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "48px 48px 32px" }}>
          <Overline>The pact</Overline>
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
            Free at the centre,
            <br />
            Pro at the{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              edges
            </em>
            .
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
            Every app we make ships free, with the whole thing usable on day one. Pro is the nice-to-have layer for power users — never the gate to the basics.
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
