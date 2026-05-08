"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/tokens";

export function Hero() {
  return (
    <section id="top" className="hero-section grain-surface relative bg-[var(--color-cream)]">
      <div className="hero-inner container-shell flex items-center">
        <div className="w-full max-w-[60rem]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="display-type max-w-[18ch] text-[var(--color-charcoal)]"
          >
            {siteContent.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0, 0, 0.2, 1] }}
            className="body-copy mt-7 max-w-[40rem] text-[var(--color-mid-grey)]"
          >
            {siteContent.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0, 0, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link href="#team" className="button-primary">
              About the studio
            </Link>
            <Link href="#contact" className="button-secondary">
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
