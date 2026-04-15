"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeLeft, fadeRight, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

const images = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm, restrained interior with natural materials",
  },
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80",
    alt: "Close timber surface with quiet grain",
  },
] as const;

export function Craft() {
  return (
    <section className="section-space bg-[var(--color-cream)]">
      <div className="container-shell space-y-10 sm:space-y-16">
        {siteContent.craft.map((item, index) => {
          const reverse = index % 2 === 1;

          return (
            <div key={item.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                {...(reverse ? fadeRight : fadeLeft)}
                viewport={viewportOnce}
                className={reverse ? "lg:order-2" : ""}
              >
                <p className="label-overline">Our Approach</p>
                <h2 className="section-title mt-3 text-[var(--color-charcoal)]">{item.title}</h2>
                <p className="body-copy mt-6 max-w-[36rem] text-[var(--color-mid-grey)]">{item.body}</p>
              </motion.div>

              <motion.div
                {...(reverse ? fadeLeft : fadeRight)}
                viewport={viewportOnce}
                className={reverse ? "lg:order-1" : ""}
              >
                <div className={`texture-block ${index === 0 ? "texture-block--pine grain-surface-dark" : "texture-block--cream grain-surface"}`}>
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    width={900}
                    height={620}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="h-full min-h-[280px] w-full object-cover opacity-80 saturate-[0.55]"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
