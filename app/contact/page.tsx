import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact — Pinehollow Studios",
  description: "Get in touch with Pinehollow Studios. Email is the fastest way.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactGrid />
      <ContactFaq />
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */

function ContactHero() {
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
            <span>§01 · Contact</span>
          </div>
        </Reveal>

        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1 className="ph-display ph-pg-hero-h1">
            Get in
            <br />
            <em>touch.</em>
          </h1>
        </Reveal>

        <Reveal variant="up" immediate delay={420}>
          <p className="ph-pg-hero-lede">
            Email is the fastest way to reach us. Tom and Jack both see what
            comes in.
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
          max-width: 600px;
          margin-top: 36px;
        }
      `}</style>
    </section>
  );
}

/* ─── Form + side panels ────────────────────────────────────── */

function ContactGrid() {
  return (
    <section className="ph-contact-grid-section">
      <div className="lp-container">
        <div className="ph-contact-grid">
          <Reveal variant="up-lg" duration={1000}>
            <ContactForm />
          </Reveal>

          <div className="ph-contact-side">
            <Reveal variant="up-lg" duration={900} delay={240}>
              <ContactPanel
                eyebrow="Email"
                title="support@pinehollow.studio"
                href="mailto:support@pinehollow.studio"
                meta="For anything — support, questions, hello."
              />
            </Reveal>
            <Reveal variant="up-lg" duration={900} delay={380}>
              <ContactPanel
                eyebrow="The studio"
                title="Tom & Jack · UK"
                meta="● Building Fairways"
                metaColor="var(--lp-pine-glow)"
                metaMono
              />
            </Reveal>
            <Reveal variant="up-lg" duration={900} delay={520}>
              <ContactPanel
                eyebrow="Replies"
                title="Usually within a few days"
                meta="Sometimes longer if we're deep in something."
              />
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .ph-contact-grid-section { padding: 0 0 80px; }
        .ph-contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 20px;
        }
        .ph-contact-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 1000px) {
          .ph-contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function ContactPanel({
  eyebrow,
  title,
  href,
  meta,
  metaColor,
  metaMono,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  meta?: string;
  metaColor?: string;
  metaMono?: boolean;
}) {
  const TitleEl = href ? "a" : "div";
  return (
    <div className="ph-contact-panel">
      <div className="ph-eyebrow" style={{ marginBottom: 12 }}>
        {eyebrow}
      </div>
      <TitleEl
        href={href}
        className="ph-contact-panel-title"
        style={href ? { color: "var(--lp-fg)" } : undefined}
      >
        {title}
      </TitleEl>
      {meta ? (
        <div
          className="ph-contact-panel-meta"
          style={{
            color: metaColor ?? "var(--lp-fg-mute)",
            fontFamily: metaMono
              ? "var(--lp-font-mono)"
              : "var(--lp-font-body)",
            fontSize: metaMono ? 11 : 14,
            letterSpacing: metaMono ? "0.22em" : "-0.005em",
            textTransform: metaMono ? "uppercase" : "none",
          }}
        >
          {meta}
        </div>
      ) : null}

      <style>{`
        .ph-contact-panel {
          padding: 28px;
          border: 1px solid var(--ph-rule);
          border-radius: 4px;
          background: rgba(255,255,255,0.015);
          transition: border-color 240ms var(--lp-ease), background 240ms var(--lp-ease);
        }
        .ph-contact-panel:hover {
          border-color: var(--ph-rule-hi);
          background: rgba(255,255,255,0.03);
        }
        .ph-contact-panel-title {
          display: block;
          font-family: var(--lp-font-display);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.025em;
          margin-top: 6px;
        }
        .ph-contact-panel-meta {
          margin-top: 10px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

/* ─── FAQ — hairline-bounded row table ──────────────────────── */

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
    <section className="ph-faq">
      <div className="lp-container">
        <Reveal variant="up-lg" duration={1000}>
          <div className="ph-faq-head">
            <div>
              <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
                §02 · Things people ask
              </div>
              <h2 className="ph-display ph-faq-h2">
                A few common
                <br />
                <em>questions.</em>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="ph-faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="up" delay={i * 70}>
              <div
                className="ph-faq-row"
                style={{
                  borderTop: i === 0 ? "1px solid var(--ph-rule)" : "none",
                }}
              >
                <div className="ph-faq-q">{f.q}</div>
                <p className="ph-faq-a">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .ph-faq { padding: clamp(80px, 10vw, 140px) 0; }
        .ph-faq-head { margin-bottom: 56px; }
        .ph-faq-h2 {
          margin: 0;
          font-size: clamp(40px, 5.2vw, 80px);
        }
        .ph-faq-list {
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-faq-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          padding: 36px 0;
          border-top: 1px solid var(--ph-rule);
          align-items: start;
        }
        .ph-faq-q {
          font-family: var(--lp-font-display);
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }
        .ph-faq-a {
          margin: 0;
          color: var(--lp-fg-mute);
          font-size: 16px;
          line-height: 1.65;
        }
        @media (max-width: 720px) {
          .ph-faq-row { grid-template-columns: 1fr; gap: 12px; padding: 28px 0; }
        }
      `}</style>
    </section>
  );
}
