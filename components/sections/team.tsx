"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

const accentMap = {
  pine: "var(--color-pine)",
  timber: "var(--color-timber)",
} as const;

export function Team() {
  return (
    <section id="team" className="section-space bg-[var(--color-cream)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mb-14 max-w-[40rem]"
        >
          <p className="label-overline text-[var(--color-mid-grey)]">{siteContent.team.eyebrow}</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            {siteContent.team.title}
          </h2>
          <p className="body-copy mt-6 text-[var(--color-mid-grey)]">
            {siteContent.team.intro}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {siteContent.team.founders.map((founder) => (
            <motion.article
              key={founder.name}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="founder-card grain-surface"
            >
              <span
                aria-hidden="true"
                className="founder-monogram"
                style={{ color: accentMap[founder.accent] }}
              >
                {founder.initial}
              </span>

              <div className="relative">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {founder.name}
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "0.9375rem",
                    color: accentMap[founder.accent],
                    letterSpacing: "0.01em",
                    fontWeight: 500,
                  }}
                >
                  {founder.role}
                </p>
                <p
                  className="mt-6 max-w-[34ch] text-[var(--color-mid-grey)]"
                  style={{ fontSize: "1rem", lineHeight: 1.78 }}
                >
                  {founder.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
