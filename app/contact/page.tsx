import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact — Pinehollow Studios",
  description: "Write to us. We read every message ourselves and reply within two working days.",
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
      <div style={{ paddingTop: 40, maxWidth: 1000 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">We read every message</Pill>
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
            Say hello,
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              without ceremony
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
            The fastest way to reach us is email. We — Tom and Jack — read everything ourselves, and reply within two working days. Usually one.
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
          <Reveal variant="up" delay={120}>
          <GlassCard hover style={{ padding: 28 }}>
            <Overline>General &amp; support</Overline>
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
              Goes to both of us. The fastest way to reach the studio.
            </div>
          </GlassCard>
          </Reveal>

          <Reveal variant="up" delay={240}>
          <GlassCard hover style={{ padding: 28, position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(60% 60% at 80% 30%, rgba(63,229,160,0.20), transparent 70%)",
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
              Two people · United Kingdom
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
              ● ACCEPTING MESSAGES
            </div>
          </GlassCard>
          </Reveal>

          <Reveal variant="up" delay={360}>
          <GlassCard hover style={{ padding: 28 }}>
            <Overline>Hours</Overline>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 12,
              }}
            >
              Reply within 2 working days
            </div>
            <div style={{ fontSize: 14, color: "var(--lp-fg-mute)", marginTop: 8 }}>
              From a real address. No autoresponder.
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
      q: "What do you actually make?",
      a: "Independent software, primarily for iOS — and increasingly for macOS and the web alongside. We're still early; the public catalogue is short on purpose.",
    },
    {
      q: "Are you available for client work?",
      a: "Generally no. Pinehollow's focus is our own products. If you have something genuinely interesting, write to us anyway — we'll consider it carefully.",
    },
    {
      q: "Will you sell my data?",
      a: "Not the kind that's tied to you. Our apps may share anonymised, aggregate usage with industry partners — Fairways with golf clubs, for example — and that's what keeps them free. It's never tied to your identity, and you can opt out in one tap.",
    },
    {
      q: "Are you hiring?",
      a: "No. We are two people and intend to stay that way. We will say so loudly if that ever changes.",
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
            Quick answers,
            <br />
            before you write.
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
