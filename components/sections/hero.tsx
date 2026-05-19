import { GhostButton, PrimaryButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Pill, Section } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <Section py="80px">
      <div className="lp-hero-pad-top" style={{ textAlign: "center", position: "relative", paddingTop: 60 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">Pinehollow Studios · 2026</Pill>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "var(--lp-track-display)",
              fontSize: "var(--lp-text-6xl)",
              lineHeight: "var(--lp-leading-tight)",
              margin: "32px auto 0",
              maxWidth: 1100,
            }}
          >
            Independent software,<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              built quietly.
            </em>
          </h1>
        </Reveal>

        <Reveal variant="up" immediate delay={420}>
          <p
            style={{
              color: "var(--lp-fg-mute)",
              fontSize: "var(--lp-text-lg)",
              lineHeight: 1.55,
              maxWidth: 580,
              margin: "32px auto 0",
            }}
          >
            A two-person studio by Tom and Jack. We design, build, and ship our own apps for iOS, macOS and the web — on our own time, with our own money, for the long run.
          </p>
        </Reveal>

        <Reveal variant="up" immediate delay={560}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <PrimaryButton href="/manifesto" size="lg">Read the manifesto →</PrimaryButton>
            <GhostButton href="/studio" size="lg">Meet the studio</GhostButton>
          </div>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={700} duration={1200}>
          <div style={{ position: "relative", marginTop: 96 }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-60px -60px 20%",
                background:
                  "radial-gradient(60% 60% at 50% 40%, rgba(127,228,255,0.30), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <GlassCard strong style={{ padding: 18 }}>
              <div
                className="hero-tiles"
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}
              >
                <Reveal variant="up" immediate delay={900}>
                  <PrincipleTile
                    no="PH-001"
                    kicker="What we make"
                    title="Considered tools"
                    body="Small, focused apps that do one thing well. iOS first, with macOS and the web close behind."
                    glow="var(--lp-pine-glow)"
                  />
                </Reveal>
                <Reveal variant="up" immediate delay={1020}>
                  <PrincipleTile
                    no="PH-002"
                    kicker="How we work"
                    title="Slowly, on our own"
                    body="No investors. No advertising. No engagement tricks. We ship when the work is ready, and not before."
                    glow="var(--lp-sky)"
                  />
                </Reveal>
                <Reveal variant="up" immediate delay={1140}>
                  <PrincipleTile
                    no="PH-003"
                    kicker="How we charge"
                    title="Free at the centre"
                    body="Every app ships free, with the whole thing usable on day one. Pro is for the power-user edges — nice to have, never required."
                    glow="var(--lp-pine-mist)"
                  />
                </Reveal>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-tiles { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function PrincipleTile({
  no,
  kicker,
  title,
  body,
  glow,
}: {
  no: string;
  kicker: string;
  title: string;
  body: string;
  glow: string;
}) {
  return (
    <div
      className="lp-tile-auto-h"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: 24,
        minHeight: 280,
        borderRadius: "var(--lp-r-lg)",
        background: "var(--lp-glass)",
        border: "1px solid var(--lp-glass-rim)",
        boxShadow: "var(--lp-glass-inset), var(--lp-shadow)",
        backdropFilter: "var(--lp-blur)",
        WebkitBackdropFilter: "var(--lp-blur)",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: 99,
          background: `radial-gradient(circle at center, ${glow}, transparent 70%)`,
          opacity: 0.4,
          filter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            color: "var(--lp-fg-dim)",
            letterSpacing: "0.18em",
          }}
        >
          {no}
        </span>
        <span
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            color: "var(--lp-fg-mute)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </span>
      </div>
      <div style={{ marginTop: 28, position: "relative" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.025em" }}>{title}</div>
        <p
          style={{
            color: "var(--lp-fg-mute)",
            fontSize: 14,
            lineHeight: 1.6,
            marginTop: 10,
            marginBottom: 0,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
