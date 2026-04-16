"use client";

import { motion } from "framer-motion";
import { grabbitContent } from "@/lib/tokens";

const words = grabbitContent.hero.title.split(" ");

export function GrabbitHero() {
  return (
    <section className="hero-section grain-surface relative bg-[var(--color-paper)] app-page-muted">
      <div className="hero-inner container-shell flex items-center">
        <div className="max-w-[72rem] w-full">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="label-overline text-[var(--color-grabbit)]"
          >
            {grabbitContent.hero.overline}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="headline-app mt-6 max-w-[16ch] text-[var(--color-charcoal)]"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
                className="word-span"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
            className="body-copy mt-8 max-w-[50rem] text-[var(--color-mid-grey)]"
          >
            {grabbitContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0, 0.2, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <span className="status-pill-timber px-5 py-3 text-[0.9rem]">
              {grabbitContent.hero.status}
            </span>
            <p className="text-[0.9rem] text-[var(--color-mid-grey)]">{grabbitContent.hero.note}</p>
          </motion.div>

          {/* Search examples — the core value prop, no screenshot needed */}
          <div className="search-examples mt-10 max-w-[52rem]">
            {grabbitContent.hero.searches.map((query, i) => (
              <motion.div
                key={query}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0, 0, 0.2, 1] }}
                className="search-example-row"
              >
                <span className="search-example-glyph">◌</span>
                <span className="search-example-query">{query}</span>
                <span className="search-example-arrow">→</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0, 0, 0.2, 1] }}
            className="mt-10 max-w-[36rem]"
          >
            <div className="field-shell">
              <input
                className="email-input"
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button className="button-secondary" type="button">
                Join the waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
