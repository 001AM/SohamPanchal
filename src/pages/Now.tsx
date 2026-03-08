import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

const Now = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Now</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            What I'm up to<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated March 2026 — Mumbai, India
          </p>
        </motion.div>

        <div className="mt-14 space-y-12">
          {/* Building */}
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Currently building</h2>
            <div className="space-y-3">
              {[
                "AI infrastructure tools — LLM monitoring and observability platforms",
                "Financial data systems — market data pipelines and backtesting engines",
                "Developer tooling — CLI tools and SDK abstractions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
                  <span className="mt-0.5 text-primary text-sm">→</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-divider" />

          {/* Exploring */}
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Exploring</h2>
            <div className="flex flex-wrap gap-2">
              {["Rust", "Go", "Kafka", "ClickHouse", "LangGraph", "WASM", "gRPC", "Temporal"].map((t) => (
                <span key={t} className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="editorial-divider" />

          {/* Reading & Interests */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">Interests</h2>
              <div className="space-y-2">
                {[
                  "Distributed systems & consensus",
                  "Quantitative finance",
                  "AI agent architectures",
                  "Developer experience & APIs",
                ].map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">• {item}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">Reading</h2>
              <div className="space-y-2">
                {[
                  "Designing Data-Intensive Applications",
                  "Art of Multiprocessor Programming",
                  "Advances in Financial ML",
                ].map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">• {item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="editorial-divider" />

          {/* Off-screen */}
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Off the screen</h2>
            <div className="space-y-2">
              {[
                "Weekend treks in the Sahyadris",
                "Street food hunts around Mumbai",
                "Photography walks in old Bombay",
              ].map((item) => (
                <p key={item} className="text-sm text-muted-foreground">• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Now;
