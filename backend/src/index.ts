interface Env {
  ALLOWED_ORIGIN?: string;
  SUBSTACK_FEED_URL?: string;
}

type Metric = { label: string; value: string };

type Platform = {
  platform: string;
  handle: string;
  url: string;
  note: string;
  metrics: Metric[];
};

type ActivityPayload = {
  updatedAt: string;
  platforms: Platform[];
  syncedSources: string[];
  failedSources: string[];
};

const CACHE_URL = "https://cache.soham-activity.internal/activity-v1";
const SIX_HOURS = 60 * 60 * 6;

const profileOnly: Platform[] = [
  {
    platform: "LinkedIn",
    handle: "Soham Panchal",
    url: "https://www.linkedin.com/in/soham-panchal-430956255/",
    note: "Work, ideas, and professional updates",
    metrics: [{ label: "Profile", value: "Open" }],
  },
  {
    platform: "X",
    handle: "@Soham0001AM",
    url: "https://x.com/Soham0001AM",
    note: "Short thoughts and things worth sharing",
    metrics: [{ label: "Profile", value: "Open" }],
  },
];

const substackProfile: Platform = {
  platform: "Substack",
  handle: "@soham04",
  url: "https://substack.com/@soham04",
  note: "Essays, notes, and ideas beyond engineering",
  metrics: [{ label: "Profile", value: "Open" }],
};

const compactNumber = (value: number) =>
  new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);

const decodeXml = (value: string) =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const xmlValue = (xml: string, tag: string) => {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]).replace(/<[^>]*>/g, "").trim() : "";
};

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { Accept: "application/json", ...init?.headers },
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function github(): Promise<Platform> {
  const data = await fetchJson<{
    public_repos: number;
    followers: number;
    following: number;
  }>("https://api.github.com/users/001AM", {
    headers: { "User-Agent": "soham-portfolio-activity-worker" },
  });

  return {
    platform: "GitHub",
    handle: "@001AM",
    url: "https://github.com/001AM",
    note: "Code, experiments, and open-source work",
    metrics: [
      { label: "Repos", value: compactNumber(data.public_repos) },
      { label: "Followers", value: compactNumber(data.followers) },
      { label: "Following", value: compactNumber(data.following) },
    ],
  };
}

async function leetcode(): Promise<Platform> {
  const data = await fetchJson<{
    data?: {
      matchedUser?: {
        profile?: { ranking?: number };
        submitStatsGlobal?: { acSubmissionNum?: Array<{ difficulty: string; count: number }> };
      };
    };
  }>("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Referer: "https://leetcode.com/u/001AM/" },
    body: JSON.stringify({
      query: `query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          profile { ranking }
          submitStatsGlobal { acSubmissionNum { difficulty count } }
        }
      }`,
      variables: { username: "001AM" },
    }),
  });

  const user = data.data?.matchedUser;
  if (!user) throw new Error("LeetCode profile was not returned");
  const solved = user.submitStatsGlobal?.acSubmissionNum?.find((item) => item.difficulty === "All")?.count ?? 0;

  return {
    platform: "LeetCode",
    handle: "@001AM",
    url: "https://leetcode.com/u/001AM/",
    note: "Algorithms and problem-solving practice",
    metrics: [
      { label: "Solved", value: compactNumber(solved) },
      { label: "Rank", value: user.profile?.ranking ? compactNumber(user.profile.ranking) : "N/A" },
    ],
  };
}

async function devto(): Promise<Platform> {
  const articles = await fetchJson<Array<{ public_reactions_count: number; comments_count: number }>>(
    "https://dev.to/api/articles?username=001am&per_page=100",
    { headers: { "User-Agent": "soham-portfolio-activity-worker" } },
  );
  const reactions = articles.reduce((total, article) => total + article.public_reactions_count, 0);
  const comments = articles.reduce((total, article) => total + article.comments_count, 0);

  return {
    platform: "Dev.to",
    handle: "@001am",
    url: "https://dev.to/001am",
    note: "Practical engineering guides",
    metrics: [
      { label: "Articles", value: compactNumber(articles.length) },
      { label: "Reactions", value: compactNumber(reactions) },
      { label: "Comments", value: compactNumber(comments) },
    ],
  };
}

async function rssPlatform(
  feedUrl: string,
  platform: string,
  handle: string,
  profileUrl: string,
  note: string,
): Promise<Platform> {
  const response = await fetch(feedUrl, { signal: AbortSignal.timeout(8_000) });
  if (!response.ok) throw new Error(`${platform} feed returned ${response.status}`);
  const xml = await response.text();
  const items = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) ?? [];
  const latest = items[0] ? xmlValue(items[0], "title") : "N/A";

  return {
    platform,
    handle,
    url: profileUrl,
    note,
    metrics: [
      { label: "Articles", value: compactNumber(items.length) },
      { label: "Latest", value: latest === "N/A" ? latest : "New" },
    ],
  };
}

async function npmProfile(): Promise<Platform> {
  const data = await fetchJson<{ total: number }>(
    "https://registry.npmjs.org/-/v1/search?text=maintainer%3Asoham-panchal&size=1",
  );

  return {
    platform: "npm",
    handle: "soham-panchal",
    url: "https://www.npmjs.com/~soham-panchal",
    note: "Published tools and packages",
    metrics: [{ label: "Packages", value: compactNumber(data.total) }],
  };
}

async function chess(): Promise<Platform> {
  const stats = await fetchJson<{
    chess_rapid?: {
      last?: { rating?: number };
      record?: { win: number; loss: number; draw: number };
    };
  }>("https://api.chess.com/pub/player/soham0410/stats", {
    headers: { "User-Agent": "soham-portfolio-activity-worker" },
  });
  const rapid = stats.chess_rapid;
  const games = rapid?.record
    ? rapid.record.win + rapid.record.loss + rapid.record.draw
    : 0;

  return {
    platform: "Chess.com",
    handle: "@soham0410",
    url: "https://www.chess.com/member/soham0410",
    note: "Chess games, calculation, and strategic practice",
    metrics: [
      { label: "Rapid", value: rapid?.last?.rating ? compactNumber(rapid.last.rating) : "N/A" },
      { label: "Games", value: compactNumber(games) },
      { label: "Wins", value: rapid?.record ? compactNumber(rapid.record.win) : "N/A" },
    ],
  };
}

async function collectActivity(env: Env): Promise<ActivityPayload> {
  const sources: Array<{ name: string; run: () => Promise<Platform> }> = [
    { name: "GitHub", run: github },
    { name: "LeetCode", run: leetcode },
    { name: "Dev.to", run: devto },
    {
      name: "Medium",
      run: () =>
        rssPlatform(
          "https://medium.com/feed/@sohampanchal1469",
          "Medium",
          "@sohampanchal1469",
          "https://medium.com/@sohampanchal1469",
          "Long-form technical essays and field notes",
        ),
    },
    { name: "npm", run: npmProfile },
    { name: "Chess.com", run: chess },
  ];

  if (env.SUBSTACK_FEED_URL) {
    const profileUrl = env.SUBSTACK_FEED_URL.replace(/\/feed\/?$/, "");
    sources.push({
      name: "Substack",
      run: () =>
        rssPlatform(
          env.SUBSTACK_FEED_URL as string,
          "Substack",
          "Newsletter",
          profileUrl,
          "Essays and notes delivered by email",
        ),
    });
  }

  const results = await Promise.allSettled(sources.map((source) => source.run()));
  for (let index = 0; index < results.length; index += 1) {
    if (results[index].status === "fulfilled") continue;

    try {
      results[index] = { status: "fulfilled", value: await sources[index].run() };
    } catch (error) {
      console.warn(`Activity sync failed for ${sources[index].name}`, error);
    }
  }
  const platforms = results.flatMap((result) => (result.status === "fulfilled" ? [result.value] : []));
  const syncedSources = sources.filter((_, index) => results[index].status === "fulfilled").map((source) => source.name);
  const failedSources = sources.filter((_, index) => results[index].status === "rejected").map((source) => source.name);

  return {
    updatedAt: new Date().toISOString(),
    platforms: [...platforms, ...(env.SUBSTACK_FEED_URL ? [] : [substackProfile]), ...profileOnly],
    syncedSources,
    failedSources,
  };
}

async function cacheActivity(payload: ActivityPayload) {
  const cache = await caches.open("soham-activity");
  await cache.put(
    new Request(CACHE_URL),
    new Response(JSON.stringify(payload), {
      headers: { "Cache-Control": `public, max-age=${SIX_HOURS}` },
    }),
  );
}

function corsHeaders(request: Request, env: Env) {
  const origin = request.headers.get("Origin") ?? "";
  const allowed = env.ALLOWED_ORIGIN || "*";
  return {
    "Access-Control-Allow-Origin": allowed === "*" || origin === allowed ? allowed : "null",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(request: Request, env: Env, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=21600, stale-while-revalidate=86400",
      ...corsHeaders(request, env),
    },
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(request, env) });

    const { pathname } = new URL(request.url);
    if (pathname === "/health") return json(request, env, { ok: true, service: "soham-activity-api" });
    if (pathname !== "/activity" || request.method !== "GET") {
      return json(request, env, { error: "Not found" }, 404);
    }

    const cache = await caches.open("soham-activity");
    const cached = await cache.match(new Request(CACHE_URL));
    if (cached) return json(request, env, await cached.json());

    try {
      const payload = await collectActivity(env);
      ctx.waitUntil(cacheActivity(payload));
      return json(request, env, payload);
    } catch (error) {
      return json(request, env, { error: "Activity sync unavailable", detail: String(error) }, 502);
    }
  },

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(collectActivity(env).then(cacheActivity));
  },
} satisfies ExportedHandler<Env>;
