"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { roostContent } from "@/lib/tokens";

const words = roostContent.hero.title.split(" ");

export function RoostHero() {
  return (
    <section className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.82fr)] lg:gap-20">
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
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="headline-app mt-6 max-w-[13ch] text-[var(--color-charcoal)]"
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
            <a href="#download" className="button-primary">
              Download for Mac
            </a>
            <a href="#download" className="button-secondary">
              Download for iPhone
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0, 0, 0.2, 1] }}
            className="mt-4 text-[0.95rem] text-[var(--color-mid-grey)]"
          >
            {roostContent.hero.caption}
          </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
            className="material-image"
          >
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
              alt="Calm home interior with a shared table"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="material-caption">
              <span>Shared home rhythm</span>
              <span>Roost</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
