"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

export function PhilosophyStrip() {
  return (
    <section className="grain-surface-dark bg-[var(--color-deep-pine)] py-20 text-[var(--color-cream)] sm:py-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mb-14"
        >
          <p className="label-overline mb-4" style={{ color: "rgba(250,248,245,0.4)" }}>
            How we work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--color-cream)",
            }}
          >
            Four things we always come back to.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteContent.principles.map((principle) => (
            <motion.div
              key={principle.title}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="principle-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  lineHeight: 1.25,
                  color: "var(--color-cream)",
                  marginBottom: "0.75rem",
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.72,
                  color: "rgba(250,248,245,0.58)",
                }}
              >
                {principle.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
