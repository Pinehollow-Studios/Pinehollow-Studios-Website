"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/tokens";

const words = siteContent.heroTitle.split(" ");

export function Hero() {
  return (
    <section id="top" className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.78fr)] lg:gap-20">
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
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="display-type max-w-[11ch] text-[var(--color-charcoal)]"
            >
              {words.map((word) => (
                <motion.span
                  key={word}
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
              className="body-copy mt-8 max-w-[42rem] text-[var(--color-mid-grey)]"
            >
              {siteContent.heroSubtitle}
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0, 0, 0.2, 1] }}
            className="grid gap-5"
          >
            <div className="material-image">
              <Image
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80"
                alt="Muted pine woodland in soft light"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="material-caption">
                <span>{siteContent.heroCard.title}</span>
                <span>Pine · Cream · Charcoal</span>
              </div>
            </div>

            <div className="grid gap-3 border-l border-[var(--color-border-light)] pl-5">
              <p className="body-copy max-w-[34rem] text-[var(--color-mid-grey)]">{siteContent.heroCard.body}</p>
              {siteContent.heroCard.notes.map((note) => (
                <p key={note} className="hero-panel-note">
                  {note}
                </p>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
