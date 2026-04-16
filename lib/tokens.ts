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
    "Small applications for everyday life — designed with the patience of a craftsperson, built to stay useful long after the novelty fades.",
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
  products: {
    roost: {
      status: "Available Now",
      name: "Roost",
      tagline: "Shared household management for couples.",
      descriptor:
        "Shopping, expenses, chores, budget, and calendar — synced across Mac and iPhone in real time, quietly and without ceremony.",
      platforms: "macOS · iOS",
      href: "/apps/roost",
    },
    grabbit: {
      status: "Coming Soon",
      name: "Grabbit",
      tagline: "Save anything. Find it in plain English.",
      descriptor:
        "Your screenshots and saved photos, organised automatically by on-device AI and searchable the way you remember them.",
      platforms: "iPhone · In development",
      href: "/apps/grabbit",
    },
  },
  craft: [
    {
      title: "Made with restraint",
      body: "We favour clarity over spectacle. Each interaction is reduced to what matters, then refined until it feels natural, steady, and easy to trust. Nothing is added for the sake of it.",
      accent: "pine" as const,
    },
    {
      title: "Built to endure",
      body: "Our software is shaped like well-made objects: considered in detail, warm in tone, and designed to stay useful long after novelty wears away. We don't build for the demo.",
      accent: "paper" as const,
    },
    {
      title: "Private by default",
      body: "Your data is yours. We build with privacy as a foundation — your household, your saves, your life. Not pooled, not analysed, not shared. Just yours.",
      accent: "timber" as const,
    },
  ],
} as const;

export const roostContent = {
  hero: {
    overline: "Pinehollow Studios",
    title: "One place for your home, shared between two.",
    subtitle:
      "Shopping lists, shared expenses, chores, budget, and calendar — kept in sync across Mac and iPhone, instantly and quietly.",
    caption: "Free to start · Mac and iPhone · Two people, one home",
  },
  features: [
    {
      glyph: "⌂",
      title: "Shopping List",
      body: "One list, two phones. Add from either device and watch it update in real time — no refresh, no duplicates, no wondering if it's already in the trolley.",
    },
    {
      glyph: "◫",
      title: "Shared Expenses",
      body: "Log what you spend, split it fairly, track a running balance, and settle up in one tap. No awkward conversations. No spreadsheet on the fridge.",
    },
    {
      glyph: "◔",
      title: "Budget",
      body: "Set monthly limits by category — groceries, eating out, subscriptions. Roost tracks progress with calm visual cues before spending drifts too far.",
    },
    {
      glyph: "✓",
      title: "Chores",
      body: "Assign tasks by room, set them to repeat, and quietly eliminate the friction of whose turn it is this week. No nagging. No keeping score.",
    },
    {
      glyph: "◷",
      title: "Calendar",
      body: "A shared view of events, chores, and reminders so both of you can see what the week looks like — from the same screen, on either device.",
    },
    {
      glyph: "✦",
      title: "Pinboard",
      body: "A shared space for links, notes, and things worth keeping close — flat inspo, travel ideas, things to do together. Coming to Roost soon.",
      badge: "Coming Soon",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Download on both devices",
      body: "Install Roost on Mac and iPhone. It works on both from the start — no choosing one over the other.",
    },
    {
      number: "02",
      title: "Create a home, share the code",
      body: "One of you sets up the household. The other joins with a six-digit invite code. The shared space is ready in under a minute.",
    },
    {
      number: "03",
      title: "Everything stays in sync",
      body: "Lists, balances, chores, and plans update the moment either of you makes a change. No refreshing. No manual sync. Just works.",
    },
  ],
  hazel: {
    intro:
      "Hazel is the AI assistant built into Roost Pro — the premium tier. She has full context on your household: what you spend, what needs doing, what's coming up. Ask her anything about your home in plain language.",
    capabilities: [
      "How much have we spent on groceries this month?",
      "What chores haven't been done in a while?",
      "What's on for this week?",
      "What do we tend to overspend on?",
    ],
    closing:
      "Not a chatbot. Not a gimmick. A genuinely useful tool for two people running a home together.",
  },
  pricing: {
    free: {
      title: "Roost Free",
      subtitle: "Free forever",
      price: null as string | null,
      features: [
        "Shopping list with real-time sync",
        "Shared expenses and settle-up",
        "Chores and task assignment",
        "Shared calendar",
        "One home, two people",
        "Mac and iPhone",
      ],
    },
    nest: {
      title: "Roost Pro",
      subtitle: "Early access pricing",
      price: "£3.99 / month" as string | null,
      features: [
        "Everything in Free",
        "Full expense history and insights",
        "Budget tracking by category",
        "Hazel AI household assistant",
        "Priority support",
        "Early access to every new feature",
      ],
    },
  },
  privacy:
    "Roost is private by design. Your household data lives in a private, isolated database — not pooled, not analysed, not monetised. No tracking, no advertising, no third-party access. Just two people and their home.",
} as const;

export const grabbitContent = {
  hero: {
    overline: "Pinehollow Studios",
    title: "Save anything. Find it again in seconds.",
    subtitle:
      "Grabbit gives your screenshots and saved photos a proper home — then makes them searchable in plain English, privately, without sending anything away.",
    status: "Coming Soon",
    note: "iPhone · Private by design · TestFlight planned",
    searches: [
      "that pasta recipe I saved last week",
      "blue trainers from Instagram",
      "the cafe in Paris",
      "sofa inspiration for the living room",
    ],
  },
  intro:
    "Your camera roll is full of things you meant to come back to — a recipe, a product, an outfit, a quote, a place. You save them constantly. You never find them again. Grabbit fixes that. The moment you save something, it reads the content, understands what it is, and tags it automatically. When you need it back, you search the way you remember it. Grabbit finds it.",
  steps: [
    {
      number: "01",
      title: "Grab it",
      body: "Save a screenshot or photo via screenshot detection, the iOS Share Sheet, or manual import from your camera roll. One tap is all it takes.",
    },
    {
      number: "02",
      title: "Grabbit sorts it",
      body: "On-device AI reads the content, classifies it — recipe, product, place, quote, outfit — and generates tags automatically. No organising from you.",
    },
    {
      number: "03",
      title: "Find it later",
      body: "Search for what you remember: \"that pasta recipe\", \"blue trainers\", \"the place I saved last week\". Grabbit finds it instantly.",
    },
  ],
  features: [
    {
      glyph: "◌",
      title: "Plain-English search",
      body: "Search the way you remember things — by what it was, not by date or file name. Grabbit parses your words and scores every save against them in real time.",
    },
    {
      glyph: "→",
      title: "Automatic classification",
      body: "Recipes, products, places, quotes, outfits, documents, design ideas — tagged and labelled the moment they arrive. No effort from you.",
    },
    {
      glyph: "□",
      title: "Inbox triage",
      body: "New saves land in a calm queue. Swipe right to collect, swipe left to discard. Or use Triage All to sweep through everything like a deck of cards.",
    },
    {
      glyph: "∿",
      title: "Private by default",
      body: "All AI processing happens on your iPhone. Nothing leaves your device for classification or search. Your saves are read by you alone.",
    },
    {
      glyph: "◈",
      title: "Collections",
      body: "Create boards for anything — Gift Ideas, Flat Inspo, Recipes to Try. Assign saves to one or several collections. No limits on free or Pro.",
    },
    {
      glyph: "⌘",
      title: "Share Sheet",
      body: "Save directly from Instagram, Safari, TikTok, Pinterest, or anywhere on iPhone. Tap Share → Grabbit. Done in one step.",
    },
  ],
  pricing: {
    free: {
      title: "Grabbit Free",
      subtitle: "Up to 50 saves",
      features: [
        "Full AI classification and tagging",
        "Plain-English search",
        "Collections — no limit",
        "Share Sheet extension",
        "Screenshot detection",
        "Private, on-device processing",
      ],
    },
    pro: {
      title: "Grabbit Pro",
      subtitle: "Unlimited everything",
      priceMonthly: "£2.99 / month",
      priceAnnual: "£19.99 / year",
      saving: "Save 44%",
      features: [
        "Everything in Free",
        "Unlimited saves",
        "Priority processing",
        "Full save history",
        "Early access to new features",
        "Support the development",
      ],
    },
  },
  privacyNote:
    "On-device AI only. Your screenshots are never sent to a server for classification or search. Grabbit reads your content privately, on your device, using Apple's Vision and Core ML frameworks.",
} as const;
