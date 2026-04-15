export const viewportOnce = { once: true, amount: 0.3 } as const;

export const easeOut = [0, 0, 0.2, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut },
} as const;

export const fadeLeft = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: easeOut },
} as const;

export const fadeRight = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: easeOut },
} as const;

export const staggerContainer = (staggerChildren = 0.15) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren },
  },
});

export const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;