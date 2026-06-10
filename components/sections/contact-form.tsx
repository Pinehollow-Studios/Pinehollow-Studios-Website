"use client";

import { useState } from "react";

type Topic = "hello" | "support" | "press" | "work";

const topicLabels: Record<Topic, string> = {
  hello: "Just hello",
  support: "Support",
  press: "Press",
  work: "Work with us",
};

/**
 * Contact form — editorial paper-form styling: mono labels, hairline
 * underlined fields, square topic chips, one solid ice submit block.
 * Submission opens the visitor's mail client (no backend, on purpose).
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
            <a href="mailto:support@pinehollow.studio" className="ph-link" style={{ color: "var(--lp-pine-glow)" }}>
              support@pinehollow.studio
            </a>{" "}
            directly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="ph-form-headrow">
            <span className="ph-eyebrow">The form</span>
            <span className="ph-eyebrow ph-eyebrow-dim">PH/CORR-26</span>
          </div>
          <h2 className="ph-display ph-form-h2">
            Write us <em>a line.</em>
          </h2>

          <div className="ph-form-section">
            <div className="ph-form-label">Topic</div>
            <div className="ph-form-topics">
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

          <div className="ph-form-row">
            <Field label="Your name" name="name" placeholder="Alex" required />
            <Field label="Email" name="email" placeholder="alex@example.com" type="email" required />
          </div>
          <Field label="Subject" name="subject" placeholder="A short line about what this is" required />
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

          <button type="submit" className="ph-btn ph-form-submit" data-cursor-label="Send">
            <span>Send message</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      )}

      <style>{FORM_CSS}</style>
    </div>
  );
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
  return (
    <div className="ph-field">
      <label className="ph-form-label" htmlFor={`ph-${name}`}>{label}</label>
      {multiline ? (
        <textarea
          id={`ph-${name}`}
          name={name}
          rows={5}
          placeholder={placeholder}
          required={required}
          className="ph-field-input"
        />
      ) : (
        <input
          id={`ph-${name}`}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="ph-field-input"
        />
      )}
    </div>
  );
}

const FORM_CSS = `
  .ph-form {
    padding: clamp(32px, 4vw, 56px);
    border: 1px solid var(--ph-rule-hi);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01));
    position: relative;
  }
  .ph-form-headrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 18px;
  }
  .ph-form-h2 {
    margin: 0 0 36px;
    font-size: clamp(34px, 4vw, 58px);
  }
  .ph-form-h2 em { color: var(--lp-pine-mist); }

  .ph-form-label {
    display: block;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-form-section { margin-bottom: 30px; }
  .ph-form-topics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 12px;
  }
  .ph-form-topic {
    padding: 12px 8px;
    border-radius: 2px;
    background: transparent;
    border: 1px solid var(--ph-rule);
    color: var(--lp-fg-mute);
    font-family: var(--lp-font-mono);
    font-size: 10.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    transition: all 220ms var(--lp-ease);
  }
  .ph-form-topic:hover { color: var(--lp-fg); border-color: var(--ph-rule-hi); }
  .ph-form-topic[data-active] {
    color: var(--lp-pine-glow);
    border-color: rgba(127,228,255,0.40);
    background: rgba(127,228,255,0.06);
  }

  .ph-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .ph-field { margin-bottom: 26px; }
  .ph-field-input {
    width: 100%;
    margin-top: 10px;
    padding: 12px 2px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--ph-rule-hi);
    border-radius: 0;
    font-family: var(--lp-font-body);
    font-size: 16px;
    color: var(--lp-fg);
    transition: border-color 240ms var(--lp-ease), box-shadow 240ms var(--lp-ease);
    outline: none;
    resize: vertical;
  }
  .ph-field-input::placeholder { color: var(--lp-fg-dim); }
  .ph-field-input:focus {
    border-bottom-color: var(--lp-pine-glow);
    box-shadow: 0 1px 0 0 var(--lp-pine-glow);
  }

  .ph-form-foot {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 6px;
    color: var(--lp-fg-dim);
    font-size: 10px;
    font-family: var(--lp-font-mono);
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
  .ph-form-submit {
    margin-top: 28px;
    width: 100%;
    justify-content: center;
  }

  .ph-form-sent { text-align: center; padding: 64px 0; }
  .ph-form-sent-tick {
    width: 64px; height: 64px;
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
  .ph-form-sent-h2 { font-size: clamp(34px, 4vw, 54px); margin-top: 28px; }
  .ph-form-sent-h2 em { color: var(--lp-pine-mist); }
  .ph-form-sent-body {
    color: var(--lp-fg-mute);
    max-width: 420px;
    margin: 16px auto 0;
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .ph-form-topics { grid-template-columns: repeat(2, 1fr); }
    .ph-form-row { grid-template-columns: 1fr; gap: 0; }
  }
`;
