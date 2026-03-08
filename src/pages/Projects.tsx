import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const projects = [
  {
    title: "LLM Monitoring Platform",
    description: "Full observability platform for tracking prompts, token usage, latency, and cost across multiple LLM providers in production.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"],
    metrics: ["10K+ req/day", "<100ms ingestion"],
    status: "Active",
  },
  {
    title: "AI Job Matcher",
    description: "AI system that semantically matches developers with job opportunities based on skills, experience, and preferences using vector embeddings.",
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
    metrics: ["85%+ relevance", "1000+ jobs/day"],
    status: "Active",
  },
  {
    title: "Twitter Stock Sentiment Scraper",
    description: "Large-scale scraping system that collects financial tweets and runs sentiment analysis for market signal detection.",
    stack: ["Python", "Scrapy", "Redis", "PostgreSQL", "NLP"],
    metrics: ["50K+ tweets/day", "Real-time scoring"],
    status: "Active",
  },
  {
    title: "Stock Backtesting Engine",
    description: "Event-driven backtesting framework for evaluating trading strategies on historical data with comprehensive performance analytics.",
    stack: ["Python", "Pandas", "NumPy", "Plotly", "PostgreSQL"],
    metrics: ["10+ years data", "Sub-second tests"],
    status: "Stable",
  },
  {
    title: "Zerodha Trading Data Pipeline",
    description: "Automated ETL pipeline for collecting, processing, and storing stock market data from Zerodha APIs with time-series optimizations.",
    stack: ["Python", "Celery", "PostgreSQL", "Docker", "Redis"],
    metrics: ["99.9% uptime", "Full market coverage"],
    status: "Stable",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Work</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Selected projects<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Systems I've designed and built — from data pipelines to AI infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === "Active"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-xs font-medium text-primary">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {i < projects.length - 1 && <div className="editorial-divider mt-12" />}
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
