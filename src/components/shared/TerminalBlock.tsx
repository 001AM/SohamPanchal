import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: "visitor@systems-lab:~$ ", command: "whoami", delay: 0 },
  { output: "Soham Panchal", delay: 800 },
  { output: "Engineer building intelligent systems.", delay: 1200 },
  { output: "", delay: 1600 },
  { prompt: "visitor@systems-lab:~$ ", command: "cat /etc/focus", delay: 2000 },
  { output: "→ AI infrastructure", delay: 2600 },
  { output: "→ LLM observability", delay: 2900 },
  { output: "→ Financial data pipelines", delay: 3200 },
  { output: "→ Developer tooling", delay: 3500 },
  { output: "", delay: 3800 },
  { prompt: "visitor@systems-lab:~$ ", command: "uptime", delay: 4200 },
  { output: "Location: Mumbai, India", delay: 4800 },
  { output: "Status: Building systems that matter", delay: 5100 },
];

const TerminalBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((_, i) => {
      const line = lines[i];
      const delay = "delay" in line ? line.delay : 0;
      timers.push(setTimeout(() => setVisibleLines(i + 1), delay));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-2xl rounded-lg border border-border neon-border overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-neon-red/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-neon-amber/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-neon-green/80" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">systems-lab — bash</span>
      </div>
      <div className="terminal-bg p-4 font-mono text-xs leading-6 min-h-[240px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {"prompt" in line && line.prompt ? (
              <span>
                <span className="text-neon-green">{line.prompt}</span>
                <span className="text-foreground">{"command" in line ? line.command : ""}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">{"output" in line ? line.output : ""}</span>
            )}
          </div>
        ))}
        {visibleLines >= lines.length && (
          <div>
            <span className="text-neon-green">visitor@systems-lab:~$ </span>
            <span className="inline-block w-2 h-3.5 bg-neon-green animate-terminal-blink" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalBlock;
