"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { grabbitContent } from "@/lib/tokens";

const words = grabbitContent.hero.title.split(" ");

export function GrabbitHero() {
  return (
    <section className="hero-section grain-surface relative bg-[var(--color-paper)] app-page-muted">
      <div className="hero-inner container-shell flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.88fr)] lg:gap-20">
          <div className="max-w-[52rem]">
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
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="headline-app mt-6 max-w-[11ch] text-[var(--color-charcoal)]"
            >
              {words.map((word) => (
                <motion.span
                  key={word}
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
              className="body-copy mt-8 max-w-[38rem] text-[var(--color-mid-grey)]"
            >
              {grabbitContent.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
              className="mt-10"
            >
              <span className="status-pill-timber px-5 py-3 text-[0.95rem]">{grabbitContent.hero.status}</span>
              <p className="mt-4 text-[0.98rem] text-[var(--color-mid-grey)]">{grabbitContent.hero.note}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0, 0, 0.2, 1] }}
              className="mt-8 max-w-[32rem]"
            >
              <div className="field-shell">
                <input className="email-input" type="email" placeholder="your@email.com" />
                <button className="button-secondary" type="button">
                  Join the waitlist
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
            className="material-image"
          >
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80"
              alt="Phone on a quiet desk"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <div className="material-caption">
              <span>Recipes · products · places · quotes</span>
              <span>Grabbit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
