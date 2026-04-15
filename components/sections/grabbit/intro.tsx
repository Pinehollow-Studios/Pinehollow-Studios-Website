"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeLeft, fadeRight, viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitIntro() {
  return (
    <section className="section-space bg-[var(--color-cream)] app-page-muted">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <motion.div {...fadeLeft} viewport={viewportOnce}>
          <p className="label-overline text-[var(--color-grabbit)]">What is Grabbit</p>
          <h2 className="section-title mt-3">A camera roll you can actually search</h2>
          <p className="body-copy mt-6 max-w-[38rem] text-[var(--color-mid-grey)]">{grabbitContent.intro}</p>
        </motion.div>
        <motion.div {...fadeRight} viewport={viewportOnce}>
          <div className="texture-block texture-block--timber grain-surface">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
              alt="Organised notes and phone on a desk"
              width={900}
              height={620}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full min-h-[280px] w-full object-cover opacity-80 saturate-[0.5]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
