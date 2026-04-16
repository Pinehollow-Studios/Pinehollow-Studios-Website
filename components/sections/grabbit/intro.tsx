"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitIntro() {
  return (
    <section className="section-space bg-[var(--color-cream)] app-page-muted">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          >
            <p className="label-overline text-[var(--color-grabbit)]">What is Grabbit</p>
            <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
              A camera roll you can actually search.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          >
            <p className="body-copy text-[var(--color-mid-grey)]">{grabbitContent.intro}</p>

            {/* Inline type categories for visual interest */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Recipes", "Products", "Places", "Quotes", "Outfits", "Documents", "Ideas"].map((cat) => (
                <span
                  key={cat}
                  className="rounded-[var(--radius-pill)] px-3 py-1.5 text-[0.8125rem] font-medium"
                  style={{
                    background: "var(--color-parchment)",
                    color: "var(--color-grabbit)",
                    border: "1px solid color-mix(in srgb, var(--color-timber) 20%, var(--color-border-light))",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
