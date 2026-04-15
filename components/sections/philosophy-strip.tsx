"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

export function PhilosophyStrip() {
  return (
    <section className="grain-surface-dark bg-[var(--color-deep-pine)] py-8 text-[var(--color-cream)] sm:py-10">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="grid gap-4 md:grid-cols-3 md:gap-8"
        >
          {siteContent.philosophy.map((item) => (
            <p key={item} className="font-[var(--font-display)] text-[1.35rem] text-[var(--color-cream)]">
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
