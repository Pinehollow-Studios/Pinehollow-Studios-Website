"use client";

import { useState, type CSSProperties } from "react";
import { PrimaryButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline } from "@/components/shared/primitives";

type Topic = "hello" | "support" | "press" | "work";

const topicLabels: Record<Topic, string> = {
  hello: "Just hello",
  support: "Support",
  press: "Press",
  work: "Work with us",
};

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
    const url = `mailto:support@pinehollow.studio?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <GlassCard strong style={{ padding: 48, position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: 99,
          background: "radial-gradient(circle at center, rgba(63,229,160,0.25), transparent 70%)",
          opacity: 0.4,
          filter: "blur(40px)",
        }}
      />

      {submitted ? (
        <div style={{ position: "relative", textAlign: "center", padding: "64px 0" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 99,
              background: "var(--lp-pine-glow)",
              boxShadow: "0 0 32px var(--lp-pine-glow)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: 28,
              color: "#04190E",
              fontWeight: 700,
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "var(--lp-font-display)",
              fontSize: 42,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              marginTop: 28,
            }}
          >
            Off it goes — <em style={{ fontStyle: "italic", color: "var(--lp-pine-mist)" }}>thanks</em>.
          </h2>
          <p
            style={{
              color: "var(--lp-fg-mute)",
              maxWidth: 400,
              margin: "12px auto 0",
            }}
          >
            Your mail client should have opened. If nothing happened, write to us directly at{" "}
            <a href="mailto:support@pinehollow.studio" style={{ color: "var(--lp-pine-glow)" }}>
              support@pinehollow.studio
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ position: "relative" }}>
          <Overline>The form</Overline>
          <h2
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              fontSize: "var(--lp-text-3xl)",
              margin: "16px 0 32px",
              lineHeight: 1.1,
            }}
          >
            Tell us what you&apos;re
            <br />
            writing about.
          </h2>

          <div style={{ marginBottom: 24 }}>
            <Label>Topic</Label>
            <div
              className="topic-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
                marginTop: 10,
              }}
            >
              {(Object.keys(topicLabels) as Topic[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  style={{
                    padding: "11px 8px",
                    borderRadius: "var(--lp-r)",
                    background: topic === t ? "rgba(63,229,160,0.10)" : "var(--lp-glass)",
                    border: `1px solid ${topic === t ? "rgba(63,229,160,0.40)" : "var(--lp-glass-rim)"}`,
                    color: topic === t ? "var(--lp-pine-glow)" : "var(--lp-fg)",
                    fontFamily: "var(--lp-font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    transition: "all var(--lp-dur) var(--lp-ease)",
                    backdropFilter: "var(--lp-blur-sm)",
                    WebkitBackdropFilter: "var(--lp-blur-sm)",
                    cursor: "pointer",
                  }}
                >
                  {topicLabels[t]}
                </button>
              ))}
            </div>
          </div>

          <div
            className="form-row"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}
          >
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 8,
              color: "var(--lp-fg-dim)",
              fontSize: 12,
              fontFamily: "var(--lp-font-mono)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: 99,
                background: "var(--lp-pine-glow)",
              }}
            />
            <span>Replies within two working days · usually one</span>
          </div>

          <div style={{ marginTop: 28 }}>
            <PrimaryButton size="lg" type="submit">Send message →</PrimaryButton>
          </div>
        </form>
      )}

      <style>{`
        @media (max-width: 600px) {
          .topic-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </GlassCard>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--lp-font-mono)",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--lp-fg-mute)",
      }}
    >
      {children}
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
  const [focused, setFocused] = useState(false);
  const style: CSSProperties = {
    width: "100%",
    marginTop: 10,
    padding: multiline ? "14px 16px" : "12px 16px",
    background: focused ? "var(--lp-glass-strong)" : "var(--lp-glass)",
    backdropFilter: "var(--lp-blur-sm)",
    WebkitBackdropFilter: "var(--lp-blur-sm)",
    border: `1px solid ${focused ? "var(--lp-pine-glow)" : "var(--lp-glass-rim)"}`,
    borderRadius: "var(--lp-r)",
    fontFamily: "var(--lp-font-body)",
    fontSize: 15,
    color: "var(--lp-fg)",
    transition: "all var(--lp-dur) var(--lp-ease)",
    boxShadow: focused ? "0 0 0 4px rgba(63,229,160,0.10)" : "none",
    outline: "none",
    resize: "vertical",
  };
  return (
    <div style={{ marginBottom: 18 }}>
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
