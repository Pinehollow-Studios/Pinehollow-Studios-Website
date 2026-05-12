import { GhostButton, PrimaryButton } from "@/components/shared/buttons";
import { Section } from "@/components/shared/primitives";

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
              "radial-gradient(60% 60% at 50% 50%, rgba(63,229,160,0.15), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
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
          Write to us, when you&apos;re{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
            ready
          </em>
          .
        </h2>
        <p
          style={{
            position: "relative",
            color: "var(--lp-fg-mute)",
            fontSize: 17,
            maxWidth: 520,
            margin: "20px auto 0",
          }}
        >
          We&apos;re a small studio, so we read every message ourselves. Reply within two working days.
        </p>
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
          <PrimaryButton href="/contact" size="lg">Say hello →</PrimaryButton>
          <GhostButton href="/manifesto" size="lg">Read the manifesto</GhostButton>
        </div>
      </div>
    </Section>
  );
}
