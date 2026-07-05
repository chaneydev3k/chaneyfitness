import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Apple,
  BarChart3,
  Brain,
  CalendarCheck,
  HeartPulse,
  MessageSquare,
  Moon,
  Target,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Brand + contact                                                           */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: "Chaney Fitness",
  tagline: "Strength. Performance. Longevity.",
  description:
    "Personal training in St. Petersburg, FL and across Manatee County, plus online coaching — helping busy professionals get stronger, leaner, and healthier, built around a real schedule.",
  // Canonical host is the non-www apex (the site serves from non-www).
  // The www -> apex 301 must be configured in Cloudflare (see Needs list).
  url: "https://chaneyfitness.com",
  // Anchor city (GBP home base / Pinellas). Manatee County is served via
  // organic city pages (Palmetto, Bradenton) — see SEO brief.
  locality: "St. Petersburg",
  region: "FL",
  regionName: "Florida",
  areaServed: [
    "St. Petersburg",
    "Palmetto",
    "Bradenton",
    "Parrish",
    "Ellenton",
    "Lakewood Ranch",
    "Online",
  ],
  email: "chaneyfitnessfla@gmail.com",
  phone: "(727) 498-1679",
  phoneHref: "tel:+17274981679",
  // Real Calendly booking link. The CTA buttons scroll to the #contact
  // section, where the Calendly widget is embedded (themed dark to match).
  bookingUrl: "https://calendly.com/chaneyfitnessfla/15min",
  calendlyEmbedUrl:
    "https://calendly.com/chaneyfitnessfla/15min?hide_gdpr_banner=1&background_color=0b0b0b&text_color=ffffff&primary_color=3b82f6",
  // Google Business Profile reviews (share link).
  reviewsUrl: "https://share.google/60izWuCx8WjJfpBlm",
  // Coach identity for the Person/founder schema + About (real EEAT signals).
  coach: {
    name: "Jamaal Chaney",
    jobTitle: "Certified Personal Trainer & Fitness Coach",
    credential: "ISSA Certified Personal Trainer",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Why", href: "#why" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Differentiators — "Why Chaney Fitness"                                    */
/* -------------------------------------------------------------------------- */

export const pillars: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Personalized programming",
    body: "Every plan is built for your body, your schedule, and your equipment — then adjusted as you progress.",
    icon: Target,
  },
  {
    title: "Real accountability",
    body: "Weekly check-ins and direct messaging keep you consistent when motivation runs out.",
    icon: CalendarCheck,
  },
  {
    title: "Sustainable habits",
    body: "We build routines that survive travel, deadlines, and family life.",
    icon: HeartPulse,
  },
  {
    title: "Evidence-based training",
    body: "Methods grounded in exercise science, not trends. What works, and why it works.",
    icon: Brain,
  },
  {
    title: "Nutrition & meal planning",
    body: "Custom meal plans and flexible nutrition coaching built around your tastes, schedule, and goals — sustainable eating, not another crash diet.",
    icon: Apple,
  },
  {
    title: "Long-term health",
    body: "We optimize for a body that performs for decades through strength, mobility, and resilience.",
    icon: Moon,
  },
];

/* -------------------------------------------------------------------------- */
/*  Programs                                                                   */
/* -------------------------------------------------------------------------- */

export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

export const programs: Program[] = [
  {
    id: "online-coaching",
    name: "Online Coaching",
    tagline: "Your complete plan, fully remote.",
    description:
      "Premium 1:1 coaching delivered through a dedicated app. Everything you need to train smart and stay accountable, anywhere.",
    features: [
      "Personalized workouts",
      "Nutrition coaching",
      "Weekly check-ins",
      "Progress tracking",
      "Exercise video library",
      "Habit coaching",
      "Unlimited messaging",
    ],
  },
  {
    id: "executive-coaching",
    name: "Executive Coaching",
    tagline: "High-touch coaching for demanding schedules.",
    description:
      "For leaders and frequent travelers who need performance to keep up with the pace of their life. Everything in Online Coaching, elevated.",
    features: [
      "Everything in Online Coaching",
      "Priority communication",
      "Lifestyle optimization",
      "Travel & hotel-gym planning",
      "Performance coaching",
      "High-touch accountability",
    ],
    highlight: true,
    badge: "Most popular",
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "Private, in-person, one-on-one.",
    description:
      "Hands-on coaching across St. Petersburg and Manatee County, focused on quality movement and measurable strength gains.",
    features: [
      "Private 1:1 sessions",
      "Small group sessions",
      "Strength & fat loss",
      "Athletic performance",
      "Mobility & injury prevention",
      "Movement quality",
      "Form coaching in real time",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Results / metrics                                                          */
/* -------------------------------------------------------------------------- */

export const stats: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}[] = [
  { value: 94, suffix: "%", label: "Client success rate" },
  { value: 500, suffix: "+", label: "Pounds of fat lost" },
  { value: 100, suffix: "%", label: "Clients with better habits" },
  { value: 7, suffix: " yrs", label: "Coaching experience" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I travel three weeks a month. For the first time, my training actually fits my life — and I'm stronger at 44 than I was at 30.",
    name: "Daniel R.",
    role: "VP, Private Equity",
    initials: "DR",
  },
  {
    quote:
      "Jamaal is really someone who pays attention. I've lost 28 lbs and am keeping it off for a year now.",
    name: "Marcus T.",
    role: "Founder & CEO",
    initials: "MT",
  },
  {
    quote:
      "As a mom of three running a company, I needed something realistic. The habit coaching changed how I think about my health.",
    name: "Priya S.",
    role: "Lawyer",
    initials: "PS",
  },
  {
    quote:
      "Former college athlete, then ten years behind a desk. This rebuilt my strength and my mobility without wrecking my knees.",
    name: "Chris W.",
    role: "Director of Engineering",
    initials: "CW",
  },
];

/* -------------------------------------------------------------------------- */
/*  Transformations                                                            */
/* -------------------------------------------------------------------------- */

export interface Transformation {
  id: string;
  name: string;
  meta: string;
  story: string;
  beforeSrc: string;
  afterSrc: string;
}

export const transformations: Transformation[] = [
  {
    id: "exec-1",
    name: "James — 42, Finance Executive",
    meta: "16 weeks · −31 lbs fat · +9 lbs muscle",
    story:
      "Down 31 pounds without missing a single board meeting. We built training around 5:45am sessions and a travel-proof nutrition plan.",
    beforeSrc: "/transformations/before-1.svg",
    afterSrc: "/transformations/after-1.svg",
  },
  {
    id: "parent-1",
    name: "Elena — 38, Founder & Parent",
    meta: "24 weeks · −22 lbs · regained energy",
    story:
      "Two kids, one company. Three short strength sessions a week and a few keystone habits brought her energy and confidence back.",
    beforeSrc: "/transformations/before-2.svg",
    afterSrc: "/transformations/after-2.svg",
  },
  {
    id: "athlete-1",
    name: "Marcus — 47, Former Athlete",
    meta: "20 weeks · +18% strength · pain-free",
    story:
      "Rebuilt the strength and mobility he had in college — this time with knees and shoulders that feel better, not worse.",
    beforeSrc: "/transformations/before-3.svg",
    afterSrc: "/transformations/after-3.svg",
  },
];

/* -------------------------------------------------------------------------- */
/*  Coaching process                                                          */
/* -------------------------------------------------------------------------- */

export const processSteps: { title: string; body: string }[] = [
  {
    title: "Book a consultation",
    body: "A relaxed, no-pressure call to understand your goals, history, and schedule.",
  },
  {
    title: "Assessment",
    body: "We assess movement, strength, nutrition, and lifestyle to find your real starting point.",
  },
  {
    title: "Custom plan",
    body: "A training and nutrition plan engineered around your week — not a generic template.",
  },
  {
    title: "Weekly coaching",
    body: "Check-ins, adjustments, and direct access keep you progressing and accountable.",
  },
  {
    title: "Long-term results",
    body: "Habits and strength that compound — a body that performs for decades, not weeks.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Coaching features                                                          */
/* -------------------------------------------------------------------------- */

export const features: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Programming",
    body: "Periodized training built for your goals and equipment.",
    icon: Target,
  },
  {
    title: "Nutrition",
    body: "Flexible nutrition that fits restaurants, travel, and real life.",
    icon: Apple,
  },
  {
    title: "Mobility",
    body: "Move better and stay pain-free with targeted mobility work.",
    icon: Activity,
  },
  {
    title: "Recovery",
    body: "Sleep, stress, and recovery dialed in for steady progress.",
    icon: Moon,
  },
  {
    title: "Performance",
    body: "Build strength, power, and conditioning that carry over.",
    icon: HeartPulse,
  },
  {
    title: "Accountability",
    body: "Weekly check-ins that keep you consistent for the long haul.",
    icon: CalendarCheck,
  },
  {
    title: "Progress tracking",
    body: "Clear metrics so you always know what's working.",
    icon: BarChart3,
  },
  {
    title: "Messaging",
    body: "Direct access to your coach whenever questions come up.",
    icon: MessageSquare,
  },
  {
    title: "Lifestyle coaching",
    body: "Strategies that integrate fitness into a demanding life.",
    icon: Brain,
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How does online coaching work?",
    answer:
      "After your consultation and assessment, you receive a personalized plan inside a dedicated coaching app — workouts, nutrition targets, and habit goals. You log your progress, we review it every week, and your plan is adjusted as you go. You also have direct messaging access between check-ins.",
  },
  {
    question: "Do I need a gym?",
    answer:
      "No. Your program is built around the equipment you actually have — a full gym, a home setup, or a hotel gym on the road. We design it to fit your environment, not the other way around.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely. A large share of clients are returning to training after years away or starting for the first time. Everything is scaled to your current level, with video guidance and form coaching so you build confidence safely.",
  },
  {
    question: "How often do we meet?",
    answer:
      "Online and Executive clients have structured weekly check-ins plus ongoing messaging. In-person Personal Training is scheduled around your calendar, typically two to three sessions per week.",
  },
  {
    question: "Do you provide nutrition guidance?",
    answer:
      "Yes. Nutrition coaching is included in every program. It's a flexible, sustainable approach designed for restaurants, travel, and a busy schedule — not a rigid meal plan you can't maintain.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients notice improvements in energy, strength, and sleep within the first few weeks. Visible body composition changes typically follow over 8–16 weeks. The goal is durable results that last for decades, not a short-term transformation.",
  },
];
