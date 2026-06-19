/**
 * Content for the SaaS agency landing page (/agency).
 * Fictional placeholder brand — swap in real details before launch.
 * Kept separate from site.ts so the two landing pages never share copy.
 */

export const agency = {
  name: "Northpeak",
  kicker: "Product & Platform Studio",
  tagline: "We design, build, and scale SaaS products.",
  subline:
    "A senior team of product strategists and engineers that takes you from a rough idea to a revenue-generating platform — and stays to scale it.",
  email: "hello@northpeak.studio",
  emailHref: "mailto:hello@northpeak.studio",
  calendlyLabel: "Book a strategy call",
} as const;

export const stats = [
  { value: "60+", label: "Products shipped" },
  { value: "6 wks", label: "Idea → MVP" },
  { value: "$140M+", label: "Raised by clients" },
  { value: "4.9/5", label: "Client rating" },
];

export type Capability = {
  group: "Consultation" | "Development";
  title: string;
  description: string;
  icon: "chart" | "shield" | "sparkles" | "code" | "layers" | "rocket";
};

export const capabilities: Capability[] = [
  {
    group: "Consultation",
    title: "Product Strategy",
    description:
      "Positioning, roadmap, and scope. We turn an idea into a buildable plan with clear bets and milestones.",
    icon: "chart",
  },
  {
    group: "Consultation",
    title: "Technical Due Diligence",
    description:
      "Architecture, security, and team audits for founders and investors — risks surfaced, not buried.",
    icon: "shield",
  },
  {
    group: "Consultation",
    title: "AI & Automation Advisory",
    description:
      "Where LLMs actually move the needle for your product, and where they don't. Pragmatic, not hype.",
    icon: "sparkles",
  },
  {
    group: "Development",
    title: "MVP Engineering",
    description:
      "A production-grade first version in weeks, built on a stack you can hire for and scale on.",
    icon: "code",
  },
  {
    group: "Development",
    title: "Platform & Infra",
    description:
      "Multi-tenant SaaS architecture, billing, auth, and CI/CD that hold up as you grow.",
    icon: "layers",
  },
  {
    group: "Development",
    title: "Scale & Embedded Teams",
    description:
      "Senior engineers embedded in your team to ship faster without lowering the bar.",
    icon: "rocket",
  },
];

export const steps = [
  {
    no: "01",
    title: "Discover",
    description:
      "A focused sprint to align on goals, users, scope, and success metrics.",
  },
  {
    no: "02",
    title: "Design",
    description:
      "Architecture and product design — clickable flows and a tech plan you sign off on.",
  },
  {
    no: "03",
    title: "Build",
    description:
      "Weekly shipping in production, with demos every Friday and no black boxes.",
  },
  {
    no: "04",
    title: "Scale",
    description:
      "Performance, reliability, and team enablement so growth doesn't break things.",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Strategy Sprint",
    price: "€4.5k",
    cadence: "fixed, 2 weeks",
    blurb: "Validate the idea and leave with a plan.",
    features: [
      "Discovery workshops",
      "Product & technical roadmap",
      "Scope, estimate & risk map",
      "Architecture outline",
    ],
  },
  {
    name: "MVP Build",
    price: "from €28k",
    cadence: "fixed scope, 6–10 weeks",
    blurb: "Ship a production-ready first version.",
    features: [
      "Everything in Strategy Sprint",
      "Full-stack product build",
      "Auth, billing & deploys",
      "Weekly demos & handover",
    ],
    featured: true,
  },
  {
    name: "Embedded Team",
    price: "from €12k",
    cadence: "per month, rolling",
    blurb: "Senior engineers in your team, monthly.",
    features: [
      "Dedicated senior engineers",
      "Product & infra ownership",
      "Sprint cadence with your team",
      "Cancel anytime, 30-day notice",
    ],
  },
];
