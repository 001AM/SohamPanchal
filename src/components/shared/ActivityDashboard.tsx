import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const activities = [
  {
    platform: "LeetCode",
    handle: "@001AM",
    stat: "500+",
    statLabel: "Problems",
    url: "https://leetcode.com/u/001AM/",
    color: "neon-amber",
    metrics: [
      { label: "Solved", value: "500+" },
      { label: "Streak", value: "Active" },
      { label: "Rank", value: "Top 15%" },
    ],
  },
  {
    platform: "LinkedIn",
    handle: "Soham Panchal",
    stat: "—",
    statLabel: "Connections",
    url: "https://www.linkedin.com/in/soham-panchal-430956255/",
    color: "neon-cyan",
    metrics: [
      { label: "Posts", value: "12" },
      { label: "Articles", value: "3" },
      { label: "Network", value: "Growing" },
    ],
  },
  {
    platform: "Dev.to",
    handle: "@001am",
    stat: "—",
    statLabel: "Followers",
    url: "https://dev.to/001am",
    color: "neon-green",
    metrics: [
      { label: "Posts", value: "8" },
      { label: "Reactions", value: "120+" },
      { label: "Comments", value: "45" },
    ],
  },
  {
    platform: "Medium",
    handle: "@sohampanchal",
    stat: "—",
    statLabel: "Reads",
    url: "https://medium.com/@sohampanchal1469",
    color: "neon-purple",
    metrics: [
      { label: "Articles", value: "6" },
      { label: "Followers", value: "50+" },
      { label: "Views", value: "2K+" },
    ],
  },
  {
    platform: "X",
    handle: "@Soham0001AM",
    stat: "—",
    statLabel: "Following",
    url: "https://x.com/Soham0001AM",
    color: "neon-red",
    metrics: [
      { label: "Posts", value: "200+" },
      { label: "Likes", value: "500+" },
      { label: "Topics", value: "Tech" },
    ],
  },
];

const colorMap: Record<string, string> = {
  "neon-amber": "hsl(38 100% 55%)",
  "neon-cyan": "hsl(180 80% 50%)",
  "neon-green": "hsl(160 100% 45%)",
  "neon-purple": "hsl(270 80% 60%)",
  "neon-red": "hsl(0 80% 55%)",
};

const ActivityDashboard = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {activities.map((a, i) => (
      <motion.a
        key={a.platform}
        href={a.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08, duration: 0.5 }}
        className="group relative rounded-lg border border-border bg-card/80 p-5 transition-all hover:neon-border overflow-hidden"
      >
        {/* Top bar accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${colorMap[a.color]}, transparent)` }}
        />

        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-mono text-xs font-semibold text-foreground">{a.platform}</p>
            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{a.handle}</p>
          </div>
          <ExternalLink className="h-3 w-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {a.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-mono text-sm font-bold text-foreground">{m.value}</p>
              <p className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </motion.a>
    ))}
  </div>
);

export default ActivityDashboard;
