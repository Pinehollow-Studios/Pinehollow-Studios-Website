"use client";

import { useState, type CSSProperties } from "react";
import { PrimaryButton } from "@/components/shared/buttons";

type Topic = "hello" | "support" | "press" | "work";

const topicLabels: Record<Topic, string> = {
  hello: "Just hello",
  support: "Support",
  press: "Press",
  work: "Work with us",
};

/**
 * Contact form — Volume IV editorial direction.
 * Hairline-bounded card with mono labels and clean inputs. No glass
 * wrapper, no glow blobs.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState<Topic>("hello");

  const subjectPrefix: Record<Topic, string> = {
    hello: "Hello",
    support: "Support request",
    press: "Press enquiry",
    work: "Work with us",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");

    const fullSubject = `[${subjectPrefix[topic]}] ${subject || "(no subject)"}`;
    const body = `${message}\n\n— ${name}`;
    const url = `mailto:support@pinehollow.studio?subject=${encodeURIComponent(
      fullSubject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <div className="ph-form">
      {submitted ? (
        <div className="ph-form-sent">
          <div className="ph-form-sent-tick">✓</div>
          <h2 className="ph-display ph-form-sent-h2">
            Sent — <em>thanks</em>.
          </h2>
          <p className="ph-form-sent-body">
            Your mail client should have opened. If not, write to{" "}
            <a
              href="mailto:support@pinehollow.studio"
              className="ph-link"
              style={{ color: "var(--lp-pine-glow)" }}
            >
              support@pinehollow.studio
            </a>{" "}
            directly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="ph-eyebrow" style={{ marginBottom: 16 }}>
            The form
          </div>
          <h2 className="ph-display ph-form-h2">
            Write us
            <br />
            <em>a line.</em>
          </h2>

          <div className="ph-form-section">
            <Label>Topic</Label>
            <div className="topic-grid">
              {(Object.keys(topicLabels) as Topic[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className="ph-form-topic"
                  data-active={topic === t || undefined}
                >
                  {topicLabels[t]}
                </button>
              ))}
            </div>
          </div>

          <div className="form-row">
            <Field
              label="Your name"
              name="name"
              placeholder="Alex"
              required
            />
            <Field
              label="Email"
              name="email"
              placeholder="alex@example.com"
              type="email"
              required
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            placeholder="A short line about what this is"
            required
          />
          <Field
            label="Message"
            name="message"
            placeholder="Write as long or short as you'd like."
            multiline
            required
          />

          <div className="ph-form-foot">
            <span className="ph-live-dot" />
            <span>Replies usually within a few days</span>
          </div>

          <div style={{ marginTop: 28 }}>
            <PrimaryButton size="lg" type="submit">
              Send message →
            </PrimaryButton>
          </div>
        </form>
      )}

      <style>{FORM_CSS}</style>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="ph-eyebrow ph-form-label">{children}</div>;
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  multiline,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const style: CSSProperties = {
    width: "100%",
    marginTop: 10,
    padding: multiline ? "14px 16px" : "12px 16px",
    background: focused ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${
      focused ? "var(--lp-pine-glow)" : "var(--ph-rule-hi)"
    }`,
    borderRadius: 4,
    fontFamily: "var(--lp-font-body)",
    fontSize: 15,
    color: "var(--lp-fg)",
    transition: "all 220ms var(--lp-ease)",
    boxShadow: focused ? "0 0 0 4px rgba(127,228,255,0.10)" : "none",
    outline: "none",
    resize: "vertical",
  };
  return (
    <div style={{ marginBottom: 22 }}>
      <Label>{label}</Label>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={style}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={style}
        />
      )}
    </div>
  );
}

const FORM_CSS = `
  .ph-form {
    padding: 48px;
    border: 1px solid var(--ph-rule-hi);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01));
    position: relative;
  }
  .ph-form-h2 {
    margin: 0 0 32px;
    font-size: clamp(36px, 4.4vw, 64px);
  }
  .ph-form-label {
    margin-bottom: 0;
  }
  .ph-form-section { margin-bottom: 28px; }
  .topic-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 12px;
  }
  .ph-form-topic {
    padding: 11px 8px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid var(--ph-rule);
    color: var(--lp-fg-mute);
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 220ms var(--lp-ease);
  }
  .ph-form-topic:hover {
    color: var(--lp-fg);
    border-color: var(--ph-rule-hi);
  }
  .ph-form-topic[data-active] {
    color: var(--lp-pine-glow);
    border-color: rgba(127,228,255,0.40);
    background: rgba(127,228,255,0.06);
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 0;
  }

  .ph-form-foot {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
    color: var(--lp-fg-dim);
    font-size: 11px;
    font-family: var(--lp-font-mono);
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .ph-form-sent {
    text-align: center;
    padding: 64px 0;
  }
  .ph-form-sent-tick {
    width: 64px;
    height: 64px;
    border-radius: 99px;
    background: var(--lp-pine-glow);
    box-shadow: 0 0 32px rgba(127,228,255,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 28px;
    color: var(--lp-ice-ink);
    font-weight: 700;
  }
  .ph-form-sent-h2 {
    font-size: clamp(36px, 4vw, 56px);
    margin-top: 28px;
  }
  .ph-form-sent-body {
    color: var(--lp-fg-mute);
    max-width: 420px;
    margin: 16px auto 0;
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .ph-form { padding: 32px 24px; }
    .topic-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; }
  }
`;
