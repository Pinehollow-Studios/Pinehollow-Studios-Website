import { GhostButton, PrimaryButton } from "@/components/shared/buttons";
import { Section } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

export function FinalCta() {
  return (
    <Section py="80px">
      <div style={{ textAlign: "center", padding: "64px 0", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-40px 20%",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(127,228,255,0.15), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <Reveal variant="up-lg" duration={1100}>
          <h2
            style={{
              position: "relative",
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              fontSize: "var(--lp-text-5xl)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Get in touch.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <p
            style={{
              position: "relative",
              color: "var(--lp-fg-mute)",
              fontSize: 17,
              maxWidth: 520,
              margin: "20px auto 0",
            }}
          >
            We&rsquo;d be glad to hear from you. Email works best.
          </p>
        </Reveal>
        <Reveal variant="up" delay={320}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <PrimaryButton href="/contact" size="lg">Contact us →</PrimaryButton>
            <GhostButton href="/manifesto" size="lg">Our approach</GhostButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
