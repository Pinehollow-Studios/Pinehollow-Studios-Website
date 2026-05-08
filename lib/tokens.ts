export const tokens = {
  color: {
    pine: "var(--color-pine)",
    timber: "var(--color-timber)",
    cream: "var(--color-cream)",
    charcoal: "var(--color-charcoal)",
    midGrey: "var(--color-mid-grey)",
    borderLight: "var(--color-border-light)",
    borderDark: "var(--color-border-dark)",
    shadow: "var(--shadow-card)",
  },
  type: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
  radius: {
    card: "var(--radius-card)",
    control: "var(--radius-control)",
    pill: "var(--radius-pill)",
  },
  motion: {
    easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
    slow: 0.7,
    slower: 0.8,
    fast: 0.6,
  },
} as const;

export const siteContent = {
  heroEyebrow: "Pinehollow Studios",
  heroTitle: "Software built with care, for people who notice.",
  heroSubtitle:
    "A two-person studio working unhurriedly on a small number of things. We ship when they're ready — and not before.",
  principles: [
    {
      title: "Quiet Confidence",
      body: "Quality speaks through restraint. Every decision serves the person using it, not anyone watching. If it feels loud, it is wrong.",
    },
    {
      title: "Earned Trust",
      body: "We build software that feels stable and permanent — never rushed, never over-complicated, never asking more than it needs to.",
    },
    {
      title: "Warm Minimalism",
      body: "We strip back to essentials without feeling sterile. Natural tones, generous space, and careful detail keep things human and approachable.",
    },
    {
      title: "Built to Last",
      body: "Our palette, typography, and tone are chosen to feel as relevant in five years as they do today. Timelessness over trendiness.",
    },
  ],
  team: {
    eyebrow: "The studio",
    title: "Two people. One studio.",
    intro:
      "Pinehollow Studios is Tom and Jack. We started it to make software the way we wished we could — slowly, quietly, with care. We work on a small number of things at a time. We talk through every decision. We ship when it's ready.",
    founders: [
      {
        initial: "T",
        name: "Tom",
        role: "Co-founder · Design & engineering",
        bio: "Tom builds the software. He cares about the small calibrations — motion, type, weight — that make an interface worth returning to.",
        accent: "pine" as const,
      },
      {
        initial: "J",
        name: "Jack",
        role: "Co-founder · Product & direction",
        bio: "Jack shapes what we build and why. He starts every project with the questions other people skip: who it's for, what it means, whether it's worth doing at all.",
        accent: "timber" as const,
      },
    ],
  },
  craft: [
    {
      title: "Made with restraint",
      body: "We favour clarity over spectacle. Each interaction is reduced to what matters, then refined until it feels natural, steady, and easy to trust. Nothing is added for the sake of it.",
      accent: "pine" as const,
    },
    {
      title: "Built to endure",
      body: "Our work is shaped like well-made objects: considered in detail, warm in tone, and designed to stay useful long after novelty wears away. We don't build for the demo.",
      accent: "paper" as const,
    },
    {
      title: "Trust before everything",
      body: "No ads. No dark patterns. No selling user data. Our software is private by design — and stays that way, no matter how the rest of the industry drifts. Trust isn't a feature. It's the foundation.",
      accent: "timber" as const,
    },
  ],
  materials: {
    eyebrow: "Design language",
    title: "The materials of the studio.",
    intro:
      "A small, deliberate kit we return to again and again. Quiet, warm, considered. The visual choices are themselves a statement.",
    type: {
      display: { name: "Satoshi", role: "Display" },
      body: { name: "General Sans", role: "Body" },
      sample: "Aa",
      note: "A confident geometric for headlines. A humanist neutral for reading.",
    },
    palette: [
      { name: "Pine", hex: "#2D4F3F", token: "--color-pine" },
      { name: "Timber", hex: "#8B7355", token: "--color-timber" },
      { name: "Parchment", hex: "#ECE4D8", token: "--color-parchment" },
      { name: "Cream", hex: "#FAF8F5", token: "--color-cream" },
      { name: "Charcoal", hex: "#1C1F1E", token: "--color-charcoal" },
    ],
    detail: [
      {
        title: "Grain",
        body: "A subtle SVG texture over key surfaces. Imperceptible up close; unmistakable at distance.",
      },
      {
        title: "Motion",
        body: "Slow ease-out curves on every transition. Things settle, they don't snap into place.",
      },
      {
        title: "Radius",
        body: "A consistent 8-pixel corner across the studio. Friendly without being playful.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Say hello.",
    body: "We're a small studio. Email reaches both of us.",
    email: "support@pinehollow.studio",
  },
} as const;
