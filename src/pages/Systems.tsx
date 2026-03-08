import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const systems = [
  {
    title: "Designing an LLM Observability Platform",
    summary: "How to build a production monitoring system for LLM applications — tracking prompts, tokens, latency, cost, and quality across providers.",
    diagram: ["LLM App", "SDK", "Event Queue", "Processor", "PostgreSQL", "Dashboard"],
    sections: [
      { heading: "The Problem", content: "LLM applications in production are black boxes. Teams can't answer: Which prompts are failing? What's our token spend? How does latency vary across providers?" },
      { heading: "Architecture", content: "Event-driven ingestion layer → Async processing pipeline → PostgreSQL for structured data → Redis for real-time aggregations → REST API for dashboard consumption." },
      { heading: "Key Decisions", content: "Async ingestion to avoid blocking LLM calls. Prompt hashing for deduplication. Provider-agnostic schema. Cost calculation engine with configurable pricing." },
      { heading: "Scaling", content: "Batch event ingestion for high-throughput. Materialized views for dashboard queries. Retention policies. Alerting pipeline for anomaly detection." },
    ],
  },
  {
    title: "Scaling a Twitter Sentiment Scraping Pipeline",
    summary: "Building a distributed scraping system that processes 50K+ financial tweets daily while avoiding rate limits.",
    diagram: ["Twitter", "Proxy Pool", "Scrapers", "NLP Engine", "Sentiment DB", "Alert System"],
    sections: [
      { heading: "Challenge", content: "Financial Twitter moves fast. Capturing real-time sentiment requires scraping at scale without getting blocked, while filtering signal from noise." },
      { heading: "System Design", content: "Distributed scraper pool with proxy rotation → Rate limiter → NLP pipeline → Time-series storage → Correlation engine." },
      { heading: "Anti-Detection", content: "Rotating residential proxies. Randomized timing. Browser fingerprint diversity. Graceful degradation." },
      { heading: "Sentiment Analysis", content: "Multi-stage: language detection → financial relevance filter → entity extraction → sentiment scoring → confidence weighting." },
    ],
  },
  {
    title: "Building a Stock Backtesting Engine",
    summary: "Designing an event-driven backtesting framework that accurately simulates trading strategies on historical data.",
    diagram: ["Market Data", "Event Bus", "Strategy", "Order Engine", "Portfolio", "Analytics"],
    sections: [
      { heading: "Core Architecture", content: "Event-driven loop processes data chronologically. Strategy layer receives events and emits orders. Execution simulator handles fills with realistic slippage." },
      { heading: "Avoiding Pitfalls", content: "Look-ahead bias prevention. Survivorship bias handling. Transaction cost modeling." },
      { heading: "Analytics", content: "Sharpe ratio, max drawdown, Calmar ratio, win/loss ratio. Rolling windows. Benchmark comparison." },
      { heading: "Optimization", content: "Vectorized operations with NumPy. Caching frequently accessed data. Parallel strategy evaluation." },
    ],
  },
  {
    title: "Multi-Provider LLM API Abstraction",
    summary: "Designing a unified interface for multiple LLM providers with failover, cost optimization, and observability.",
    diagram: ["Client", "Router", "Provider Adapter", "LLM API", "Response", "Metrics"],
    sections: [
      { heading: "Problem Space", content: "Applications need multiple providers for reliability, cost, and capability matching. Each has different APIs, pricing, and failure modes." },
      { heading: "Abstraction Layer", content: "Unified request/response format. Provider adapters. Smart router. Circuit breaker pattern." },
      { heading: "Smart Routing", content: "Cost-based, latency-based, capability-based routing. Fallback chains for reliability." },
      { heading: "Observability", content: "Every request instrumented. Cost tracking per provider. Latency percentiles. Error rate monitoring." },
    ],
  },
  {
    title: "Financial Market Data Pipelines",
    summary: "Building reliable ETL pipelines for collecting and serving real-time and historical market data.",
    diagram: ["Broker API", "Collector", "Validator", "Transform", "Time-Series DB", "Query API"],
    sections: [
      { heading: "Data Sources", content: "Broker APIs (Zerodha), exchange feeds, alternative data. Each with different reliability and rate limits." },
      { heading: "Ingestion", content: "Scheduled collectors with Celery. Real-time streaming. Data validation and gap detection. Idempotent processing." },
      { heading: "Storage Design", content: "Time-series optimized PostgreSQL. Partitioning by date. Materialized views. Archive strategy." },
      { heading: "Quality", content: "Automated gap detection. Cross-source validation. Anomaly detection. Monitoring and alerting." },
    ],
  },
];

const Systems = () => {
  return (
    <PageLayout>
      <section className="relative mx-auto max-w-5xl px-6 py-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <SectionLabel>Deep Dives</SectionLabel>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            System architecture
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            How I think about designing complex software systems.
          </p>
        </motion.div>

        <div className="relative mt-20 flex flex-col gap-12">
          {systems.map((system, i) => (
            <AnimatedSection key={system.title} delay={i * 0.05}>
              <article className="rounded-lg border border-border bg-card/30 overflow-hidden transition-all hover:neon-border">
                <div className="border-b border-border px-6 py-3 bg-secondary/20">
                  <span className="font-mono text-xs font-semibold text-foreground">{system.title}</span>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{system.summary}</p>

                  {/* Architecture diagram */}
                  <div className="mt-6 flex items-center gap-1 overflow-x-auto pb-2">
                    {system.diagram.map((step, j) => (
                      <div key={step} className="flex items-center gap-1 shrink-0">
                        <span className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[9px] text-primary whitespace-nowrap">
                          {step}
                        </span>
                        {j < system.diagram.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-primary/30 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    {system.sections.map((section) => (
                      <div key={section.heading} className="border-l-2 border-primary/20 pl-5">
                        <h4 className="font-mono text-[9px] font-medium uppercase tracking-wider text-primary">{section.heading}</h4>
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Systems;
