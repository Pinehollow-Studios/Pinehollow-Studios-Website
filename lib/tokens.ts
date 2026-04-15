export const tokens = {
  color: {
    pine: "var(--color-pine)",
    timber: "var(--color-timber)",
    bark: "var(--color-bark)",
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
    easeOut: [0, 0, 0.2, 1],
    slow: 0.7,
    slower: 0.8,
    fast: 0.6,
  },
} as const;

export const siteContent = {
  heroEyebrow: "Pinehollow Studios",
  heroTitle: "Software built with care, for people who notice.",
  heroSubtitle:
    "Thoughtfully crafted applications for everyday life, shaped with restraint, warmth, and lasting utility.",
  heroCard: {
    label: "Pinehollow Studios",
    title: "Quiet software, made to stay useful.",
    body: "We build digital tools with the patience of a craftsperson — warm in tone, precise in detail, and steady enough to live with every day.",
    notes: ["Cream canvas", "Pine as an accent", "Nothing louder than it needs to be"],
  },
  philosophy: ["Quiet Confidence", "Earned Trust", "Built to Last"],
  products: {
    roost: {
      status: "Available Now",
      name: "Roost",
      descriptor: "Shared household management for couples. macOS · iOS",
      copy:
        "A calm place to share the rhythms of home, from weekly chores to the small details that keep a household in step.",
      href: "/apps/roost",
    },
    grabbit: {
      status: "Coming Soon",
      name: "Grabbit",
      descriptor: "Smart save-and-find for iPhone. iOS · In Development",
      copy:
        "A private home for screenshots, photos, recipes, places, outfits, quotes, and anything else you want to find again.",
      href: "/apps/grabbit",
    },
  },
  craft: [
    {
      title: "Made with restraint",
      body:
        "We favour clarity over spectacle. Each interaction is reduced to what matters, then refined until it feels natural, steady, and easy to trust.",
    },
    {
      title: "Built to endure",
      body:
        "Our software is shaped like well-made objects: considered in detail, warm in tone, and designed to remain useful long after novelty wears away.",
    },
  ],
} as const;

export const roostContent = {
  hero: {
    overline: "Pinehollow Studios",
    title: "One place for your home, shared between two.",
    subtitle:
      "Roost keeps your shopping, expenses, chores, and calendar in sync — across both your devices, instantly.",
    caption: "Free to start · Early access · No account required to try",
  },
  features: [
    {
      glyph: "⌂",
      title: "Shopping List",
      body: "Add from either screen and watch the list update in real time, so both of you see the same shop as it happens.",
    },
    {
      glyph: "◫",
      title: "Expenses",
      body: "Log what you spend, split it fairly, keep a running balance, and settle up in one deliberate tap.",
    },
    {
      glyph: "◔",
      title: "Budget",
      body: "Set monthly limits by category and track progress with simple traffic-light cues before spending drifts too far.",
    },
    {
      glyph: "✓",
      title: "Chores",
      body: "Assign work by room, repeat what needs repeating, and quietly remove the usual whose-turn friction.",
    },
    {
      glyph: "◷",
      title: "Calendar",
      body: "Keep events, chores, and reminders in one shared view so your week stays visible to both people at once.",
    },
    {
      glyph: "✦",
      title: "Pinboard",
      body: "A shared place for notes, links, and things worth keeping close — coming soon to the Roost household.",
      badge: "Coming Soon",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Download on both devices",
      body: "Install Roost on Mac and iPhone, then open it like any other tool you plan to keep.",
    },
    {
      number: "02",
      title: "Create a home and share invite code",
      body: "One of you sets up the household, the other joins with a simple code, and the shared space is ready.",
    },
    {
      number: "03",
      title: "Everything syncs instantly",
      body: "Lists, balances, tasks, and plans stay aligned across devices without ceremony or manual refresh.",
    },
  ],
  hazel:
    "Hazel is the AI assistant built into Roost Nest. Ask her anything about your home — spending patterns, what needs doing, upcoming events. She has full context on your household and answers in plain language. Not a chatbot. Not a gimmick. A genuinely useful tool for two people running a home together.",
  pricing: {
    free: {
      title: "Roost Free",
      subtitle: "Free forever.",
      features: [
        "Shopping list",
        "Expenses",
        "Chores",
        "Calendar",
        "Real-time sync",
        "One home, two people",
      ],
    },
    nest: {
      title: "Roost Nest",
      subtitle: "Early access pricing",
      features: [
        "Everything in Free",
        "Full expense history",
        "Budget insights",
        "Hazel AI assistant",
        "Priority support",
        "Early access to new features",
      ],
    },
  },
  privacy:
    "Roost is private by design. Your household data lives in its own isolated database. No tracking, no advertising, no third parties. Just two people and their home.",
} as const;

export const grabbitContent = {
  hero: {
    overline: "Pinehollow Studios",
    title: "Save anything. Find it again in seconds.",
    subtitle: "Grabbit gives your screenshots and saved photos a proper home, then makes them searchable in plain English.",
    status: "Coming Soon",
    note: "iPhone first · Private by design · TestFlight planned",
  },
  intro:
    "Your camera roll is full of things you meant to come back to: a recipe, a product, an outfit, a place, a quote. Grabbit understands what you save, tags it for you, and brings it back when you search.",
  steps: [
    {
      number: "01",
      title: "Grab",
      body: "Save a screenshot or photo from your camera roll, the share sheet, or a quick prompt after taking a screenshot.",
    },
    {
      number: "02",
      title: "Let Grabbit sort it",
      body: "Text, visual clues, and context become useful tags and a simple title. You do not need to organise first.",
    },
    {
      number: "03",
      title: "Find it later",
      body: "Search for what you remember: “that pasta recipe”, “blue trainers”, or “the place I saved last week”.",
    },
  ],
  features: [
    {
      glyph: "◌",
      title: "Plain-English search",
      body: "Look for saved things the way you remember them, not by file name, date, or where they ended up.",
    },
    {
      glyph: "→",
      title: "Automatic tags",
      body: "Recipes, products, places, quotes, outfits, documents, and design ideas are labelled as they arrive.",
    },
    {
      glyph: "□",
      title: "Inbox first",
      body: "New saves land in a calm queue. Swipe to keep, collect, or discard them when you are ready.",
    },
    {
      glyph: "∿",
      title: "Private by default",
      body: "Understanding happens on your iPhone. Your saved screenshots are not sent away to be read.",
    },
  ],
  partnership:
    "Start free with space for 50 saves. Upgrade to Grabbit Pro when your library becomes something worth keeping.",
} as const;
