import type { Metadata } from "next";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Approach — Pinehollow Studios",
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
    <Page atmosphere="quiet">
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
      <div className="lp-hero-pad-top" style={{ paddingTop: 60, textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill>Our approach</Pill>
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
            How we
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              work.
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
            Tom · Jack · 2026
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
            Pinehollow Studios is a two-person iOS software studio. Tom builds the apps. Jack runs product. That&rsquo;s the company.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            We&rsquo;re self-funded. There are no investors, no debt, no exit plan. The apps pay for the apps. That means we get to choose what we make, who it&rsquo;s for, and how long it takes.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            Most modern software is designed around attention — streaks, badges, push notifications dressed up as features, daily prompts to keep you opening the app. We don&rsquo;t do any of that. Our apps are there when you want them, and out of the way when you don&rsquo;t.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            We&rsquo;d rather make a small thing well than a big thing badly. Each app does one job. If we have a new idea, we start a new app — we don&rsquo;t bolt features onto something that&rsquo;s already done.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p>
            Each app is free to download. Where there are extras, they live behind a paid Pro tier — never the basics. Some of our apps may share anonymised, aggregate usage with industry partners (Fairways with golf clubs, for example) to fund the free tier; we go into the detail on the privacy page.
          </p>
        </Reveal>

        <Reveal variant="up">
          <p style={{ marginBottom: 0 }}>
            That&rsquo;s the approach. It might change in places, and if it does we&rsquo;ll say so here.
          </p>
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
            How we work,
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
          2026
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
