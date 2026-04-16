"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/lib/tokens";

const words = siteContent.heroTitle.split(" ");

export function Hero() {
  return (
    <section id="top" className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.72fr)] lg:gap-16">

          {/* Left — text */}
          <div className="max-w-[880px]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="label-overline mb-6 text-[var(--color-pine)]"
            >
              {siteContent.heroEyebrow}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="display-type max-w-[12ch] text-[var(--color-charcoal)]"
            >
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
              className="body-copy mt-8 max-w-[44rem] text-[var(--color-mid-grey)]"
            >
              {siteContent.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0, 0, 0.2, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link href="/apps/roost" className="button-primary">
                View Roost
              </Link>
              <Link href="/apps/grabbit" className="button-secondary">
                View Grabbit
              </Link>
            </motion.div>
          </div>

          {/* Right — product preview cards (no images) */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0, 0.2, 1] }}
            className="grid gap-4"
          >
            {/* Roost card — pine */}
            <Link href="/apps/roost" className="product-preview-pine grain-surface-dark">
              <div className="flex items-start justify-between gap-3">
                <p className="label-overline" style={{ color: "rgba(250,248,245,0.5)" }}>
                  Pinehollow Studios
                </p>
                <span className="status-pill flex-none" style={{ fontSize: "0.7rem" }}>
                  {siteContent.products.roost.status}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--color-cream)",
                  marginTop: "0.625rem",
                }}
              >
                {siteContent.products.roost.name}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "rgba(250,248,245,0.65)",
                  marginTop: "0.5rem",
                  flex: 1,
                }}
              >
                {siteContent.products.roost.descriptor}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span style={{ fontSize: "0.8rem", color: "rgba(250,248,245,0.38)" }}>
                  {siteContent.products.roost.platforms}
                </span>
                <span style={{ fontSize: "0.875rem", color: "rgba(250,248,245,0.75)" }}>
                  View →
                </span>
              </div>
            </Link>

            {/* Grabbit card — parchment */}
            <Link href="/apps/grabbit" className="product-preview-timber">
              <div className="flex items-start justify-between gap-3">
                <p className="label-overline text-[var(--color-timber)]">
                  Pinehollow Studios
                </p>
                <span className="status-pill-timber flex-none" style={{ fontSize: "0.7rem" }}>
                  {siteContent.products.grabbit.status}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--color-charcoal)",
                  marginTop: "0.625rem",
                }}
              >
                {siteContent.products.grabbit.name}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--color-mid-grey)",
                  marginTop: "0.5rem",
                  flex: 1,
                }}
              >
                {siteContent.products.grabbit.descriptor}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span style={{ fontSize: "0.8rem", color: "var(--color-mid-grey)" }}>
                  {siteContent.products.grabbit.platforms}
                </span>
                <span style={{ fontSize: "0.875rem", color: "var(--color-grabbit)" }}>
                  View →
                </span>
              </div>
            </Link>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}
