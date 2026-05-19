import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact — Pinehollow Studios",
  description: "Get in touch with Pinehollow Studios. Email is the fastest way.",
};

export default function ContactPage() {
  return (
    <Page atmosphere="ember">
      <ContactHero />
      <ContactGrid />
      <ContactFaq />
    </Page>
  );
}

function ContactHero() {
  return (
    <Section py="100px">
      <div className="lp-hero-pad-top" style={{ paddingTop: 40, maxWidth: 1000 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">Contact</Pill>
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
            Get in{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              touch
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
              maxWidth: 600,
              marginTop: 28,
            }}
          >
            Email is the fastest way to reach us. Tom and Jack both see what comes in.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactGrid() {
  return (
    <Section py="40px">
      <div
        className="contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}
      >
        <Reveal variant="up-lg" duration={1000}>
          <ContactForm />
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Reveal variant="up-lg" duration={900} delay={360}>
          <GlassCard hover style={{ padding: 28 }}>
            <Overline>Email</Overline>
            <a
              href="mailto:support@pinehollow.studio"
              style={{
                display: "block",
                fontFamily: "var(--lp-font-display)",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 12,
                color: "var(--lp-fg)",
              }}
            >
              support@pinehollow.studio
            </a>
            <div style={{ fontSize: 14, color: "var(--lp-fg-mute)", marginTop: 8 }}>
              For anything — support, questions, hello.
            </div>
          </GlassCard>
          </Reveal>

          <Reveal variant="up-lg" duration={900} delay={500}>
          <GlassCard hover style={{ padding: 28, position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(60% 60% at 80% 30%, rgba(127,228,255,0.20), transparent 70%)",
                opacity: 0.45,
              }}
            />
            <Overline>The studio</Overline>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 12,
                position: "relative",
              }}
            >
              Tom &amp; Jack · UK
            </div>
            <div
              style={{
                fontFamily: "var(--lp-font-mono)",
                fontSize: 11,
                color: "var(--lp-pine-glow)",
                letterSpacing: "0.22em",
                marginTop: 12,
                position: "relative",
              }}
            >
              ● BUILDING FAIRWAYS
            </div>
          </GlassCard>
          </Reveal>

          <Reveal variant="up-lg" duration={900} delay={640}>
          <GlassCard hover style={{ padding: 28 }}>
            <Overline>Replies</Overline>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 12,
              }}
            >
              Usually within a few days
            </div>
            <div style={{ fontSize: 14, color: "var(--lp-fg-mute)", marginTop: 8 }}>
              Sometimes longer if we&rsquo;re deep in something.
            </div>
          </GlassCard>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function ContactFaq() {
  const faqs = [
    {
      q: "What do you make?",
      a: "iOS apps. Our first is Fairways, a golf app — in development, no shipping date yet.",
    },
    {
      q: "Do you take client work?",
      a: "Not usually. Pinehollow is focused on our own products. If you have something interesting, write to us anyway.",
    },
    {
      q: "Do you sell my data?",
      a: "We don't sell personal data. See our privacy page for the detail on what each app collects and shares.",
    },
    {
      q: "Are you hiring?",
      a: "No. We're two people and that's the plan for the foreseeable.",
    },
  ];
  return (
    <Section py="120px">
      <Reveal variant="up-lg" duration={1000}>
        <div style={{ marginBottom: 40 }}>
          <Overline>Things people ask</Overline>
          <h2
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              fontSize: "var(--lp-text-4xl)",
              lineHeight: 1.05,
              margin: "16px 0 0",
            }}
          >
            A few common
            <br />
            questions.
          </h2>
        </div>
      </Reveal>

      <div
        className="faq-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}
      >
        {faqs.map((f, i) => (
          <Reveal key={i} variant="up" delay={(i % 2) * 90}>
          <GlassCard style={{ padding: 28, height: "100%" }}>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              {f.q}
            </div>
            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 15,
                lineHeight: 1.6,
                margin: "10px 0 0",
              }}
            >
              {f.a}
            </p>
          </GlassCard>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
