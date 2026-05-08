"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/tokens";

const words = siteContent.heroTitle.split(" ");

export function Hero() {
  return (
    <section id="top" className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="w-full max-w-[60rem]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="mb-7 flex items-center gap-3"
          >
            <Image
              src="/pinehollow-icon.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-[10px]"
            />
            <p className="label-overline text-[var(--color-pine)]">
              {siteContent.heroEyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="display-type max-w-[14ch] text-[var(--color-charcoal)]"
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
            className="body-copy mt-8 max-w-[42rem] text-[var(--color-mid-grey)]"
          >
            {siteContent.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0, 0, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link href="#approach" className="button-primary">
              How we work
            </Link>
            <Link href="#contact" className="button-secondary">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
