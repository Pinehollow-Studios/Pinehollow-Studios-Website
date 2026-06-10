import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact — Pinehollow Studios",
  description: "Get in touch with Pinehollow Studios. Email is the fastest way.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="§01 · Contact"
        lines={[
          <span key="1">Get in</span>,
          <em key="2">touch.</em>,
        ]}
        lede="Email is the fastest way to reach us. Tom and Jack both see what comes in."
      />
      <ContactGrid />
      <ContactFaq />
    </>
  );
}

/* ─── Form + side ledger ────────────────────────────────────── */

function ContactGrid() {
  const panels: Array<{ k: string; title: string; href?: string; meta: string; live?: boolean }> = [
    {
      k: "Email",
      title: "support@pinehollow.studio",
      href: "mailto:support@pinehollow.studio",
      meta: "For anything — support, questions, hello.",
    },
    {
      k: "The studio",
      title: "Tom & Jack · UK",
      meta: "Building Vestige",
      live: true,
    },
    {
      k: "Replies",
      title: "Within a few days",
      meta: "Sometimes longer if we're deep in something.",
    },
  ];

  return (
    <section className="ph-cgrid-section">
      <div className="lp-container">
        <div className="ph-cgrid">
          <Reveal variant="up-lg" duration={1000}>
            <ContactForm />
          </Reveal>

          <div className="ph-cside">
            {panels.map((p, i) => (
              <Reveal key={p.k} variant="up" duration={900} delay={200 + i * 130}>
                <div className="ph-cpanel" style={{ borderTop: i === 0 ? "1px solid var(--ph-rule)" : undefined }}>
                  <div className="ph-eyebrow" style={{ marginBottom: 12 }}>{p.k}</div>
                  {p.href ? (
                    <a href={p.href} className="ph-h3 ph-cpanel-title ph-cpanel-link" data-cursor-label="Email">
                      {p.title}
                    </a>
                  ) : (
                    <div className="ph-h3 ph-cpanel-title">{p.title}</div>
                  )}
                  <div className="ph-cpanel-meta">
                    {p.live ? <span className="ph-live-dot" style={{ marginRight: 10 }} /> : null}
                    {p.meta}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ph-cgrid-section { padding: 0 0 80px; }
        .ph-cgrid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(32px, 4vw, 64px);
          align-items: start;
        }
        .ph-cside { display: flex; flex-direction: column; }
        .ph-cpanel {
          padding: 30px 0;
          border-bottom: 1px solid var(--ph-rule);
        }
        .ph-cpanel-title {
          display: block;
          font-size: clamp(18px, 1.8vw, 24px);
          color: var(--lp-fg);
          margin-top: 4px;
          word-break: break-word;
        }
        .ph-cpanel-link {
          transition: color 240ms var(--lp-ease);
        }
        .ph-cpanel-link:hover { color: var(--lp-pine-glow); }
        .ph-cpanel-meta {
          margin-top: 10px;
          line-height: 1.6;
          color: var(--lp-fg-mute);
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        @media (max-width: 1000px) {
          .ph-cgrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ─── FAQ rows ──────────────────────────────────────────────── */

function ContactFaq() {
  const faqs = [
    {
      q: "What do you make?",
      a: "iOS apps. Our first is Vestige, a golf app — in development, no shipping date yet.",
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
            <div className="ph-eyebrow" style={{ marginBottom: 20 }}>
              <span style={{ color: "var(--lp-pine-glow)" }}>§02</span> Things people ask
            </div>
            <h2 className="ph-display ph-faq-h2">
              A few common
              <br />
              <em>questions.</em>
            </h2>
          </div>
        </Reveal>

        <div className="ph-faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="up" delay={i * 70}>
              <div className="ph-faq-row" style={{ borderTop: i === 0 ? "1px solid var(--ph-rule)" : undefined }}>
                <span className="ph-faq-no">{String(i + 1).padStart(2, "0")}</span>
                <div className="ph-h3 ph-faq-q">{f.q}</div>
                <p className="ph-faq-a">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <hr className="ph-rule" />
      </div>

      <style>{`
        .ph-faq { padding: var(--lp-section-y) 0; }
        .ph-faq-head { margin-bottom: 56px; }
        .ph-faq-h2 { margin: 0; font-size: clamp(38px, 5.2vw, 80px); }
        .ph-faq-h2 em { color: var(--lp-pine-mist); }
        .ph-faq-row {
          display: grid;
          grid-template-columns: 64px 1fr 1.6fr;
          gap: 40px;
          padding: 36px 0;
          border-top: 1px solid var(--ph-rule);
          align-items: baseline;
          position: relative;
          transition: padding-left 420ms var(--ph-ease-out);
        }
        .ph-faq-row::before {
          content: "";
          position: absolute;
          top: -1px; left: 0;
          width: 100%; height: 1px;
          background: var(--lp-pine-glow);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 600ms var(--ph-ease-expo);
        }
        .ph-faq-row:hover { padding-left: 18px; }
        .ph-faq-row:hover::before { transform: scaleX(1); }
        .ph-faq-row:hover .ph-faq-no { color: var(--lp-pine-glow); }
        .ph-faq-no {
          font-family: var(--lp-font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          color: var(--lp-fg-dim);
          transition: color 300ms var(--lp-ease);
        }
        .ph-faq-q { font-size: clamp(20px, 2vw, 28px); line-height: 1.15; }
        .ph-faq-a {
          margin: 0;
          color: var(--lp-fg-mute);
          font-size: 16px;
          line-height: 1.65;
        }
        @media (max-width: 720px) {
          .ph-faq-row { grid-template-columns: 40px 1fr; gap: 16px; }
          .ph-faq-a { grid-column: 2; }
        }
      `}</style>
    </section>
  );
}
