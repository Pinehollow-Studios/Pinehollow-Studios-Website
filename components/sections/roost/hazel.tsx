"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostHazel() {
  return (
    <section className="grain-surface-dark bg-[var(--color-deep-pine)] py-24 text-[var(--color-cream)] sm:py-32">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          >
            <p className="label-overline" style={{ color: "rgba(250,248,245,0.4)" }}>
              Roost Nest
            </p>
            <h2
              className="mt-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--color-cream)",
              }}
            >
              Meet Hazel.
            </h2>
            <p
              className="mt-6 max-w-[40rem]"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.78,
                color: "rgba(250,248,245,0.72)",
              }}
            >
              {roostContent.hazel.intro}
            </p>
            <p
              className="mt-8"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(250,248,245,0.5)",
                fontStyle: "italic",
              }}
            >
              {roostContent.hazel.closing}
            </p>
          </motion.div>

          {/* Right — capability list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
            className="lg:pt-2"
          >
            <p
              className="label-overline mb-4"
              style={{ color: "rgba(250,248,245,0.38)" }}
            >
              Ask Hazel anything
            </p>
            {roostContent.hazel.capabilities.map((cap) => (
              <motion.p
                key={cap}
                variants={fadeUpItem}
                transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
                className="hazel-capability"
              >
                {cap}
              </motion.p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
