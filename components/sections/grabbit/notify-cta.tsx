"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";

export function GrabbitNotifyCta() {
  return (
    <section className="grain-surface-dark bg-[var(--color-deep-pine)] py-24 text-[var(--color-cream)] sm:py-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="max-w-[46rem]"
        >
          <p className="label-overline mb-5" style={{ color: "rgba(250,248,245,0.4)" }}>
            Grabbit · Coming Soon
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-cream)",
            }}
          >
            Be the first to find everything.
          </h2>
          <p
            className="mt-6"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(250,248,245,0.62)",
              maxWidth: "38rem",
            }}
          >
            Join the waitlist for TestFlight access and launch updates. No spam — just a note when Grabbit is ready for you.
          </p>
          <div className="mt-10 max-w-[38rem]">
            <div className="field-shell">
              <input
                className="email-input"
                style={{
                  background: "rgba(250,248,245,0.08)",
                  borderColor: "rgba(250,248,245,0.15)",
                  color: "var(--color-cream)",
                }}
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button className="button-outline-inverse" type="button">
                Join the waitlist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
