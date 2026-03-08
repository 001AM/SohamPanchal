import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "ai",
    label: "AI Systems",
    x: 50,
    y: 30,
    color: "var(--neon-green)",
    projects: ["LLM Monitoring Platform", "AI Job Matcher", "Multi-provider LLM API"],
  },
  {
    id: "data",
    label: "Data Pipelines",
    x: 20,
    y: 60,
    color: "var(--neon-cyan)",
    projects: ["Zerodha Trading Data Pipeline", "Financial Market ETL"],
  },
  {
    id: "scraping",
    label: "Scraping Infra",
    x: 80,
    y: 55,
    color: "var(--neon-amber)",
    projects: ["Twitter Stock Sentiment Scraper", "Stock News Scraper"],
  },
  {
    id: "trading",
    label: "Trading Systems",
    x: 35,
    y: 85,
    color: "var(--neon-red)",
    projects: ["Stock Backtesting Engine", "Zerodha Trading Pipeline"],
  },
  {
    id: "devtools",
    label: "Dev Tools",
    x: 70,
    y: 85,
    color: "var(--neon-purple)",
    projects: ["LLM Token Calculator", "Prompt Template Manager"],
  },
];

const connections = [
  ["ai", "data"],
  ["ai", "scraping"],
  ["data", "trading"],
  ["scraping", "trading"],
  ["ai", "devtools"],
  ["data", "devtools"],
];

const SystemMap = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/10]">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to]) => {
          const a = getNodeById(from);
          const b = getNodeById(to);
          if (!a || !b) return null;
          const isActive = activeNode === from || activeNode === to;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={isActive ? "hsl(160 100% 45% / 0.5)" : "hsl(220 15% 18%)"}
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div
            className={`relative flex items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-300 ${
              activeNode === node.id
                ? "border-primary/50 bg-card neon-border scale-110"
                : "border-border bg-card/80 hover:border-primary/30"
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${activeNode === node.id ? "node-pulse" : ""}`}
              style={{ backgroundColor: `hsl(${node.color})` }}
            />
            <span className="font-mono text-[10px] text-foreground whitespace-nowrap">{node.label}</span>
          </div>

          {/* Tooltip */}
          {activeNode === node.id && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10 w-48 rounded-lg border border-primary/20 bg-card p-3 neon-border"
            >
              <p className="font-mono text-[10px] text-primary mb-2">Related Projects</p>
              {node.projects.map((p) => (
                <p key={p} className="text-[10px] text-muted-foreground leading-4">{p}</p>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SystemMap;
