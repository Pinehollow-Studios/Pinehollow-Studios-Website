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
  heroTitle: "We build apps for iOS, macOS, and the web.",
  heroSubtitle:
    "A two-person software studio working on a small number of products at a time.",
  principles: [
    {
      title: "Privacy by default",
      body: "We collect only what we need. We don't sell user data and we don't show ads.",
    },
    {
      title: "Focus",
      body: "Each product does one thing well. Features that don't serve it get cut.",
    },
    {
      title: "Free tiers stay useful",
      body: "Paid plans add depth. They don't gate the basics.",
    },
    {
      title: "Built to last",
      body: "Engineering and design choices that hold up over years, not months.",
    },
  ],
  team: {
    eyebrow: "About",
    title: "Founded by Tom and Jack.",
    intro:
      "Pinehollow Studios is a two-person software studio. Tom leads engineering and design. Jack leads product and content.",
    founders: [
      {
        initial: "T",
        name: "Tom Slater",
        role: "Co-founder · Engineering & design",
        bio: "Builds Pinehollow's apps. Works in Swift and SwiftUI for iOS and macOS, and TypeScript and React on the web.",
        accent: "pine" as const,
      },
      {
        initial: "J",
        name: "Jack",
        role: "Co-founder · Product & content",
        bio: "Leads product direction and content. Decides what we build, who it's for, and how it gets to customers.",
        accent: "timber" as const,
      },
    ],
  },
  contact: {
    email: "support@pinehollow.studio",
  },
} as const;
