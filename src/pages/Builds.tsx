import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const builds = [
  { title: "LLM Token Price Calculator", desc: "CLI tool to compare token costs across providers.", type: "Tool", date: "Mar 2026", status: "SHIPPED" },
  { title: "Auto RSS Feed Aggregator", desc: "Aggregates engineering blogs and sends daily digests.", type: "Automation", date: "Feb 2026", status: "ACTIVE" },
  { title: "Prompt Template Manager", desc: "Version-controlled prompt management for LLM apps.", type: "AI Experiment", date: "Feb 2026", status: "WIP" },
  { title: "Stock News Headline Scraper", desc: "Scrapes financial news and extracts relevant tickers.", type: "Scraping", date: "Jan 2026", status: "SHIPPED" },
  { title: "GitHub Repo Analytics Script", desc: "Fetches repo stats and generates weekly reports.", type: "Automation", date: "Dec 2025", status: "SHIPPED" },
  { title: "Markdown to Blog Pipeline", desc: "Converts markdown files into a static blog.", type: "Tool", date: "Nov 2025", status: "STABLE" },
];

const statusColors: Record<string, string> = {
  SHIPPED: "bg-primary/10 text-primary",
  ACTIVE: "bg-neon-cyan/10 text-neon-cyan",
  WIP: "bg-neon-amber/10 text-neon-amber",
  STABLE: "bg-neon-purple/10 text-neon-purple",
};

const Builds = () => {
  return (
    <PageLayout>
      <section className="relative mx-auto max-w-4xl px-6 py-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <SectionLabel>Lab</SectionLabel>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Experiments
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Small experiments, scripts, and developer utilities from the lab.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-3 sm:grid-cols-2">
          {builds.map((build, i) => (
            <AnimatedSection key={build.title} delay={i * 0.05}>
              <div className="group rounded-lg border border-border bg-card/30 p-5 transition-all hover:neon-border">
                <div className="flex items-center justify-between">
                  <span className="rounded-sm border border-border bg-secondary/30 px-2 py-0.5 font-mono text-[8px] text-muted-foreground">{build.type}</span>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-sm px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider ${statusColors[build.status] || ""}`}>
                      {build.status}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground/50">{build.date}</span>
                  </div>
                </div>
                <h3 className="mt-4 font-mono text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{build.title}</h3>
                <p className="mt-2 text-[11px] text-muted-foreground">{build.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Builds;
