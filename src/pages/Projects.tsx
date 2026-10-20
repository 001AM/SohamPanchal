import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import PageCta from "@/components/shared/PageCta";
import { socialLinks } from "@/data/socials";

const projects = [
  {
    number: "01",
    title: "LLM monitoring platform",
    kind: "AI infrastructure",
    summary: "An observability layer for understanding prompts, token usage, latency, cost, and failures across multiple model providers.",
    question: "How do you make an unpredictable AI feature measurable enough to operate with confidence?",
    approach: "Provider-neutral event ingestion, asynchronous processing, durable storage, and a focused dashboard for investigating cost and performance.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"],
  },
  {
    number: "02",
    title: "AI job matcher",
    kind: "Applied AI",
    summary: "A semantic matching system that connects developer profiles with relevant opportunities through skills, experience, and preferences.",
    question: "Can matching go beyond brittle keyword overlap without becoming impossible to explain?",
    approach: "Structured profiles, vector embeddings, explicit preference filters, and an interface that keeps the reasons behind a match visible.",
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
  },
  {
    number: "03",
    title: "Market sentiment pipeline",
    kind: "Data systems",
    summary: "A collection and analysis pipeline for turning fast-moving public financial conversation into researchable market signals.",
    question: "How do you collect noisy, changing web data reliably without confusing volume for insight?",
    approach: "Distributed collection, resilient queues, normalization, entity extraction, and sentiment scoring with confidence attached.",
    stack: ["Python", "Scrapy", "Redis", "PostgreSQL", "NLP"],
  },
  {
    number: "04",
    title: "Stock backtesting engine",
    kind: "Trading systems",
    summary: "An event-driven environment for evaluating trading strategies against historical market data and realistic execution constraints.",
    question: "How do you test an idea without quietly giving the strategy information it could never have known?",
    approach: "Strict point-in-time data access, event simulation, transaction cost modelling, and performance analysis built around reproducibility.",
    stack: ["Python", "Pandas", "NumPy", "Plotly", "PostgreSQL"],
  },
  {
    number: "05",
    title: "Broker data pipeline",
    kind: "Financial infrastructure",
    summary: "An automated pipeline for collecting, validating, transforming, and serving market data from brokerage APIs.",
    question: "What does reliable market data infrastructure look like when every source has different limits and failure modes?",
    approach: "Idempotent jobs, source adapters, gap detection, time-series storage, and clear recovery paths when upstream data is incomplete.",
    stack: ["Python", "Celery", "PostgreSQL", "Docker", "Redis"],
  },
];

const github = socialLinks.find((link) => link.label === "GitHub");

const Projects = () => (
  <PageLayout
    title="Selected Work"
    description="Selected AI infrastructure, financial data, trading, and developer systems built by Soham Panchal."
  >
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <PageIntro
        kicker="Selected work · Systems with consequences"
        title={<>Built from the problem outward<span className="text-primary">.</span></>}
        lead="I like software where the hard part is not only writing code. It is understanding the system, choosing useful constraints, and making failure visible before it becomes expensive."
        aside={github?.url ? (
          <a href={github.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            GitHub {github.handle}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ) : null}
      />

      <div className="mt-16 border-t border-border">
        {projects.map((project) => (
          <article key={project.title} className="grid gap-8 border-b border-border py-12 lg:grid-cols-[3rem_0.8fr_1.2fr] lg:gap-10">
            <span className="font-mono text-xs text-primary">{project.number}</span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.kind}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground">{project.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="bg-card/70 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">The question</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{project.question}</p>
              </div>
              <div className="bg-card/70 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">The approach</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{project.approach}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <PageCta
        eyebrow="Behind the systems"
        title="The implementation is only half the story."
        description="My writing explores the decisions, tradeoffs, and lessons that appear while building production systems."
        to="/writing"
        label="Read the engineering notes"
      />
    </section>
  </PageLayout>
);

export default Projects;
