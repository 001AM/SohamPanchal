import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { socialLinks } from "@/data/socials";

type Metric = { label: string; value: string };

type SyncedPlatform = {
  platform: string;
  handle: string;
  url: string;
  note?: string;
  metrics: Metric[];
};

type ActivityResponse = {
  updatedAt: string;
  platforms: SyncedPlatform[];
};

const fallbackPlatforms: SyncedPlatform[] = socialLinks.map((social) => ({
  platform: social.label,
  handle: social.handle,
  url: social.url ?? "",
  note: social.note,
  metrics: [
    {
      label: "Space",
      value:
        social.kind === "building"
          ? "Build"
          : social.kind === "writing"
            ? "Write"
            : social.kind === "thinking"
              ? "Think"
              : "Connect",
    },
    { label: "Status", value: social.url ? "Linked" : "Pending" },
  ],
}));

const ActivityDashboard = () => {
  const [synced, setSynced] = useState<ActivityResponse | null>(null);
  const [syncFailed, setSyncFailed] = useState(false);
  const apiUrl = import.meta.env.VITE_ACTIVITY_API_URL?.replace(/\/$/, "");

  useEffect(() => {
    if (!apiUrl) return;

    const controller = new AbortController();
    fetch(`${apiUrl}/activity`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Activity API returned ${response.status}`);
        return response.json() as Promise<ActivityResponse>;
      })
      .then((data) => {
        if (Array.isArray(data.platforms)) setSynced(data);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setSyncFailed(true);
      });

    return () => controller.abort();
  }, [apiUrl]);

  const platforms = useMemo(() => {
    if (!synced) return fallbackPlatforms;

    const liveByName = new Map(synced.platforms.map((platform) => [platform.platform, platform]));
    return fallbackPlatforms.map((fallback) => liveByName.get(fallback.platform) ?? fallback);
  }, [synced]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${synced ? "bg-emerald-500" : "bg-primary/60"}`} />
          {synced ? "Live profile data" : syncFailed ? "Showing saved profile links" : "Connected profiles"}
        </span>
        {synced?.updatedAt && (
          <span className="inline-flex items-center gap-1.5">
            <RefreshCw className="h-3 w-3" />
            Synced {new Date(synced.updatedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
          </span>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform, index) => {
          const card = (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">{platform.platform}</p>
                  <p className="mt-1 text-xs text-primary">{platform.handle}</p>
                </div>
                {platform.url ? (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                ) : (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] text-muted-foreground">link needed</span>
                )}
              </div>

              <p className="mt-5 min-h-10 text-sm leading-relaxed text-muted-foreground">{platform.note}</p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
                {platform.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label}>
                    <p className="text-sm font-medium text-foreground">{metric.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </>
          );

          return (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              {platform.url ? (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-h-52 rounded-lg border border-border bg-card/40 p-5 transition-colors hover:bg-accent/60"
                >
                  {card}
                </a>
              ) : (
                <div className="min-h-52 rounded-lg border border-dashed border-border bg-card/20 p-5">{card}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityDashboard;
