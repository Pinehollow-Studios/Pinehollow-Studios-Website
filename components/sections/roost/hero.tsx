"use client";

import { motion } from "framer-motion";
import { roostContent } from "@/lib/tokens";

const words = roostContent.hero.title.split(" ");

const shoppingItems = [
  { name: "Olive oil", done: false },
  { name: "Sourdough", done: false },
  { name: "Parmesan", done: true },
  { name: "Oat milk", done: true },
];

const expenses = [
  { name: "Weekly shop", amount: "£67.40" },
  { name: "Dinner out", amount: "£46.00" },
];

export function RoostHero() {
  return (
    <section className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.78fr)] lg:gap-16">

          {/* Left — text */}
          <div className="max-w-[58rem]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="label-overline text-[var(--color-pine)]"
            >
              {roostContent.hero.overline}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              className="headline-app mt-6 max-w-[13ch] text-[var(--color-charcoal)]"
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
              transition={{ duration: 0.8, delay: 0.45, ease: [0, 0, 0.2, 1] }}
              className="body-copy mt-8 max-w-[46rem] text-[var(--color-mid-grey)]"
            >
              {roostContent.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a href="#download" className="button-primary">Download for Mac</a>
              <a href="#download" className="button-secondary">Download for iPhone</a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0, 0, 0.2, 1] }}
              className="mt-4 text-[0.875rem] text-[var(--color-mid-grey)]"
            >
              {roostContent.hero.caption}
            </motion.p>
          </div>

          {/* Right — CSS app mockup (no screenshot needed) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
            className="app-mockup"
          >
            {/* Header */}
            <div className="mockup-header">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem" }}>
                Roost
              </span>
              <span style={{ fontSize: "0.75rem", opacity: 0.55, letterSpacing: "0.02em" }}>
                ↻ Synced
              </span>
            </div>

            {/* Shopping section */}
            <div className="mockup-section">
              <p className="mockup-section-label">Shopping this week</p>
              {shoppingItems.map(({ name, done }) => (
                <div key={name} className={`mockup-row${done ? " done" : ""}`}>
                  <div className={`mockup-check${done ? " done" : ""}`} />
                  <span className="mockup-text">{name}</span>
                </div>
              ))}
            </div>

            {/* Expenses section */}
            <div className="mockup-section">
              <p className="mockup-section-label">Recent expenses</p>
              {expenses.map(({ name, amount }) => (
                <div key={name} className="mockup-row">
                  <span style={{ flex: 1 }}>{name}</span>
                  <span className="mockup-amount">{amount}</span>
                </div>
              ))}
              <p className="mockup-balance">✓ Balance settled</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
