import type { Metadata } from "next";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Manifesto — Pinehollow Studios",
  description: "How we build, and why. The Pinehollow agreement, in six lines.",
};

const principles = [
  {
    no: "01",
    title: "One job each.",
    body: "Every app does one thing well. Feature creep is the slow death of considered software — we'd rather start something new than overload what already works.",
  },
  {
    no: "02",
    title: "No streaks. No badges. No nudges.",
    body: "We will never engineer for engagement. If you don't open one of our apps for a month, that is a successful outcome — for both of us.",
  },
  {
    no: "03",
    title: "Privacy by default.",
    body: "On-device or end-to-end where it matters. No analytics. No telemetry. No third-party scripts. Your data is yours, and we don't want to see it.",
  },
  {
    no: "04",
    title: "Free at the centre, Pro at the edges.",
    body: "Every app ships free, with the whole thing usable on day one. Pro adds power-user features for people who want them. The free version is the product. Pro is the cherry on top.",
  },
  {
    no: "05",
    title: "Calm by construction.",
    body: "Animations settle, they don't bounce. Notifications are gentle, and rare. The default state is quiet. Loudness is something we have to justify.",
  },
  {
    no: "06",
    title: "Independent, by choice.",
    body: "We are two people. No investors. No exit plan. No acquisition. We answer to ourselves and to the people who use our work — and that is the whole company.",
  },
];

export default function ManifestoPage() {
  return (
    <Page active="manifesto" atmosphere="quiet">
      <ManifestoHero />
      <ManifestoBody />
      <ManifestoPrinciples />
      <ManifestoSign />
    </Page>
  );
}

function ManifestoHero() {
  return (
    <Section py="120px">
      <div style={{ paddingTop: 60, textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill>The Pinehollow Manifesto · 2026</Pill>
        </Reveal>
        <Reveal variant="up-xl" immediate delay={200} duration={1200}>
          <h1
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "var(--lp-track-display)",
              fontSize: "var(--lp-text-display)",
              lineHeight: 0.92,
              margin: "28px 0 0",
            }}
          >
            We build
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              quietly.
            </em>
          </h1>
        </Reveal>
        <Reveal variant="up" immediate delay={520}>
          <div
            style={{
              fontFamily: "var(--lp-font-mono)",
              fontSize: 12,
              letterSpacing: "0.22em",
              color: "var(--lp-fg-dim)",
              textTransform: "uppercase",
              marginTop: 36,
            }}
          >
            Tom · Jack · MMXXVI
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ManifestoBody() {
  return (
    <Section py="80px">
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          color: "var(--lp-fg)",
          fontSize: "var(--lp-text-xl)",
          lineHeight: 1.75,
          fontWeight: 400,
        }}
      >
        <Reveal variant="up">
          <p style={{ marginTop: 0 }}>
            We started Pinehollow because we wanted to use software that felt the way our favourite objects feel. Well-made. Honest. Quiet. Software that wears in rather than out.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            Most of the internet got very loud somewhere along the way. Every app wanted to be a platform. Every feature wanted to be a hook. Every screen wanted to be the one you came back to. Engagement, we were told, was the point.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>We disagree.</p>
        </Reveal>

        <Reveal variant="up-lg" duration={1000}>
          <blockquote
            style={{
              margin: "48px 0",
              padding: "0 0 0 28px",
              borderLeft: "2px solid var(--lp-pine-glow)",
              fontFamily: "var(--lp-font-display)",
              fontSize: "var(--lp-text-3xl)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--lp-pine-mist)",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            The point of a tool is to{" "}
            <span style={{ color: "var(--lp-fg)", fontStyle: "normal" }}>do its job</span> — and then to wait, without complaint, until you need it again.
          </blockquote>
        </Reveal>

        <Reveal variant="up">
          <p>
            Our apps don&apos;t have streaks. They don&apos;t have badges. They don&apos;t send notifications you didn&apos;t ask for. They don&apos;t try to be your second brain. They certainly don&apos;t want to be your friend.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>What they do is one thing. Quietly. With care.</p>
        </Reveal>

        <Reveal variant="up">
          <p>
            We are two people. Tom designs and engineers the apps. Jack leads product and content — what we build, who it&apos;s for, and how it gets to people. We work for ourselves, on our own time, with our own money.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            We are not, and will never be, a platform. We will never raise venture capital. We will never run analytics on you. We will never sell, share, or peek at your data. The apps ship free, with the full thing usable on day one — and the optional Pro upgrade adds depth for power users without ever holding the basics hostage.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            We will, in exchange, make small, considered software that respects you. We&apos;ll support it for years. We&apos;ll mend it when it breaks. We&apos;ll retire it kindly when its time is over.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p style={{ marginBottom: 0 }}>That is the whole agreement.</p>
        </Reveal>
      </div>
    </Section>
  );
}

function ManifestoPrinciples() {
  return (
    <Section py="120px">
      <Reveal variant="up-lg" duration={1000}>
        <div style={{ marginBottom: 48 }}>
          <Overline>Six principles</Overline>
          <h2
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              fontSize: "var(--lp-text-5xl)",
              lineHeight: 1,
              margin: "16px 0 0",
            }}
          >
            The agreement,
            <br />
            in <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>six lines</em>.
          </h2>
        </div>
      </Reveal>

      <div
        className="principle-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
      >
        {principles.map((p, i) => (
          <Reveal key={p.no} variant="up" delay={(i % 2) * 90}>
          <GlassCard hover style={{ padding: 36, height: "100%" }}>
            <span
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                fontSize: 48,
                color: "var(--lp-pine-glow)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {p.no}
            </span>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontSize: "var(--lp-text-2xl)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 18,
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 15,
                lineHeight: 1.65,
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              {p.body}
            </p>
          </GlassCard>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .principle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function ManifestoSign() {
  return (
    <Section py="100px">
      <div
        style={{
          textAlign: "center",
          padding: "64px 0",
          borderTop: "1px solid var(--lp-glass-rim)",
        }}
      >
        <Reveal variant="up">
          <Overline>Signed</Overline>
        </Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 80,
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <Reveal variant="up-lg" delay={120} duration={1000}>
            <Signature name="Tom" role="Engineering · Design" mark="t" />
          </Reveal>
          <Reveal variant="up-lg" delay={260} duration={1000}>
            <Signature name="Jack" role="Product · Content" mark="j" />
          </Reveal>
        </div>
        <div
          style={{
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            color: "var(--lp-fg-dim)",
            textTransform: "uppercase",
            marginTop: 48,
          }}
        >
          MMXXVI
        </div>
      </div>
    </Section>
  );
}

function Signature({ name, role, mark }: { name: string; role: string; mark: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--lp-font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 64,
          color: "var(--lp-pine-mist)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {mark}
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, marginTop: 10 }}>{name}</div>
      <div
        style={{
          fontFamily: "var(--lp-font-mono)",
          fontSize: 11,
          color: "var(--lp-fg-mute)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginTop: 2,
        }}
      >
        {role}
      </div>
    </div>
  );
}
