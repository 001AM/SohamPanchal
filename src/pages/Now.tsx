import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Camera, CarFront, Code2, Compass, Swords } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const currentThreads = [
  {
    number: "01",
    title: "Building",
    icon: Code2,
    description: "Making this portfolio feel like a living body of work instead of a static engineering résumé.",
    details: [
      "A Cloudflare Worker that keeps public activity data fresh",
      "AI infrastructure, financial systems, and useful developer tools",
    ],
    href: "/projects",
    linkLabel: "See the work",
  },
  {
    number: "02",
    title: "Writing",
    icon: BookOpen,
    description: "Turning implementation lessons and wider curiosities into notes that are useful to other people.",
    details: [
      "Technical essays on systems, Python, AI, and infrastructure",
      "Shorter observations across Substack, Medium, and Dev.to",
    ],
    href: "/writing",
    linkLabel: "Read the notes",
  },
  {
    number: "03",
    title: "Practising",
    icon: Swords,
    description: "Keeping the problem-solving muscles active through two very different kinds of puzzles.",
    details: [
      "Algorithms and data structures on LeetCode",
      "Rapid games and strategic practice on Chess.com",
    ],
    href: "/#elsewhere",
    linkLabel: "View activity",
  },
  {
    number: "04",
    title: "Following",
    icon: CarFront,
    description: "Staying close to the machines, histories, and competitions that make engineering feel emotional.",
    details: [
      "Formula 1, with a special love for Ferrari and its racing legacy",
      "Cars as objects of design, performance, memory, and personality",
    ],
    href: "/about",
    linkLabel: "Read the wider story",
  },
  {
    number: "05",
    title: "Exploring",
    icon: Compass,
    description: "Spending more time away from the screen and paying attention to place, light, food, and movement.",
    details: [
      "Trek memories from Bhandardara and Triund",
      "Photography walks through Mumbai and beyond",
    ],
    href: "/explore",
    linkLabel: "Open the field notes",
  },
  {
    number: "06",
    title: "Leaving open",
    icon: Camera,
    description: "Not every curiosity has become a real interest yet. Some need the right story before they take hold.",
    details: [
      "I followed cricket closely until 2018 or 2019, then gradually drifted away",
      "I would like to watch football, but have not found the story that makes it personal yet",
    ],
    href: "/contact",
    linkLabel: "Give me a reason",
  },
];

const openLoops = [
  "Connect my public work without turning the site into a scoreboard.",
  "Write more clearly about what production engineering actually teaches.",
  "Build a stronger visual archive from treks and city walks.",
  "Find the football story that turns casual curiosity into real attention.",
  "Keep following questions that do not fit inside a single discipline.",
];

const Now = () => (
  <PageLayout
    title="Now"
    description="What Soham Panchal is currently building, writing, practising, following, and exploring in October 2026."
  >
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">Now · October 2026</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            What has my attention<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A current snapshot of what I am building, learning, practising, and noticing from Mumbai.
            This changes as the questions change.
          </p>
        </div>
        <div className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
          Mumbai, India
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {currentThreads.map((thread) => {
          const Icon = thread.icon;
          return (
            <article
              key={thread.title}
              className="flex min-h-[22rem] flex-col bg-background p-7 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{thread.number}</span>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-8 font-display text-3xl font-semibold text-foreground">{thread.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{thread.description}</p>
              <ul className="mt-6 space-y-3">
                {thread.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={thread.href}
                className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm text-foreground hover:text-primary"
              >
                {thread.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>

      <section className="mt-24 grid gap-12 border-t border-border pt-16 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm text-muted-foreground">Open loops</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
            Questions still<br />in motion.
          </h2>
        </div>
        <div className="border-t border-border">
          {openLoops.map((loop, index) => (
            <motion.div
              key={loop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-5"
            >
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{loop}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 overflow-hidden rounded-lg border border-border bg-card/40">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
            <img
              src="/images/trip_012.jpg"
              alt="Dhauladhar mountains near the Triund trail"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <Camera className="h-5 w-5 text-primary" />
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-foreground">
              The point is not to do everything. It is to stay awake to more of the world.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This page is a timestamp, not a permanent identity. I update it when the shape of my attention changes.
            </p>
            <Link to="/photography" className="group mt-7 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              Browse the photography
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  </PageLayout>
);

export default Now;
