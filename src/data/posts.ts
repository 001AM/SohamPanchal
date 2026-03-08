export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "building-llm-cost-tracker",
    title: "Building an LLM Cost Tracker from Scratch",
    category: "AI Engineering",
    date: "Mar 2026",
    readTime: "8 min",
    excerpt: "How I built a lightweight system to track token usage, latency, and cost across OpenAI, Anthropic, and Cohere — without relying on third-party observability tools.",
    content: [
      "When you're running LLM calls in production, cost sneaks up on you. A misplaced retry loop or an overly verbose system prompt can blow through your budget overnight. I needed something simple: a way to log every call, tag it by feature, and see where the money was going.",
      "The first version was just a decorator. Wrap any LLM call, capture the input/output tokens, model name, and timestamp. Store it in PostgreSQL. That alone gave me 80% of the value — I could finally answer 'which feature costs the most?'",
      "The tricky part was handling multiple providers. OpenAI returns token counts in the response. Anthropic does too, but the format differs. For models that don't return token counts, I used tiktoken for estimation. The abstraction layer normalizes everything into a common schema: prompt_tokens, completion_tokens, model, provider, cost_usd.",
      "For cost calculation, I built a pricing engine with configurable rates per model. When providers update pricing (which happens often), I just update a config file. Historical costs are calculated at ingestion time and stored, so queries are fast.",
      "The dashboard is a simple React app. Three views: cost over time (line chart), cost by feature (bar chart), and a detailed log table. Nothing fancy — just the information I actually need when debugging a cost spike.",
      "Lessons learned: Start with logging, not alerting. You need to understand your baseline before you can set meaningful thresholds. Also, batch your inserts — individual row inserts for every LLM call will kill your database at scale."
    ],
  },
  {
    slug: "event-driven-architecture-financial-data",
    title: "Event-Driven Architecture for Financial Data",
    category: "System Design",
    date: "Feb 2026",
    readTime: "12 min",
    excerpt: "Why event-driven patterns are the natural fit for financial data pipelines, and how I designed one that handles market data from multiple Indian brokers.",
    content: [
      "Financial data is inherently event-driven. A trade happens. A price updates. An order fills. Trying to model this with polling and batch jobs feels wrong — and it introduces latency that matters when you're trying to capture market microstructure.",
      "I started with a simple architecture: broker API → collector → database. It worked until it didn't. Market open would spike the load, collectors would fall behind, and by the time data landed in the DB, it was stale. I needed to decouple ingestion from processing.",
      "The redesign introduced an event bus (Redis Streams for simplicity, though Kafka would work at larger scale). Collectors emit raw events. Processors subscribe and handle validation, normalization, and storage independently. If a processor falls behind, events queue up instead of being dropped.",
      "Schema design was critical. Financial time-series data has specific access patterns: you almost always query by symbol + time range. I partitioned PostgreSQL tables by date and added composite indexes. Materialized views handle the common aggregations (OHLCV candles from tick data).",
      "Gap detection runs as a separate consumer. It compares expected data points against received ones and flags anomalies. During market hours, gaps trigger alerts. After hours, a reconciliation job fills gaps from backup sources.",
      "The system now handles data from Zerodha, Upstox, and Angel One. Each broker has its own collector with provider-specific rate limiting. The event schema is broker-agnostic — adapters normalize at the edge. This means adding a new broker is just writing a new collector, not touching the pipeline."
    ],
  },
  {
    slug: "scaling-web-scraping-proxy-rotation",
    title: "Scaling Web Scraping with Proxy Rotation",
    category: "Web Scraping",
    date: "Jan 2026",
    readTime: "6 min",
    excerpt: "Practical patterns for scraping at scale — proxy management, fingerprint rotation, and graceful degradation when targets fight back.",
    content: [
      "At low volume, scraping is easy. At scale, it's an arms race. The targets get smarter, and you need infrastructure that adapts. Here's what I've learned building scrapers that process tens of thousands of pages daily.",
      "Proxy rotation is table stakes, but how you rotate matters. Round-robin is predictable and gets caught. I use weighted random selection based on success rates — proxies that work well get more traffic, failing ones get automatically deprioritized and tested less frequently.",
      "Residential proxies are expensive. I use a tiered approach: datacenter proxies for easy targets, residential for protected ones, and mobile proxies as a last resort. The router decides which tier to use based on the target domain's difficulty score, which updates dynamically.",
      "Browser fingerprinting is the next frontier. Modern anti-bot systems check canvas fingerprints, WebGL renderer strings, and navigator properties. I maintain a pool of realistic fingerprint profiles and rotate them with proxy changes. Consistency matters — the fingerprint should match the proxy's geographic location.",
      "Graceful degradation is underrated. When a target starts blocking, most scrapers hammer harder and get banned faster. Mine backs off exponentially, switches strategies (direct → browser → residential proxy), and alerts me if success rate drops below a threshold. It's better to get data slowly than to get blocked entirely.",
      "The orchestration layer uses Celery with Redis. Each task is a page fetch with retry logic. Failed tasks go to a dead letter queue for manual inspection. This has caught everything from target site redesigns to proxy provider outages."
    ],
  },
  {
    slug: "backtesting-avoiding-look-ahead-bias",
    title: "Backtesting Strategies: Avoiding Look-Ahead Bias",
    category: "Trading Systems",
    date: "Dec 2025",
    readTime: "10 min",
    excerpt: "The subtle ways look-ahead bias creeps into backtests, and the engineering patterns I use to prevent it.",
    content: [
      "Look-ahead bias is the silent killer of backtesting. Your strategy looks amazing in testing, you deploy it, and it falls apart. The culprit: your backtest inadvertently used future information that wouldn't have been available in real time.",
      "The most obvious form is using today's close price to make today's trading decision. But the subtle forms are worse: using a stock's entire history to calculate a moving average at each point (instead of only data available up to that point), or filtering your universe based on stocks that survived to the present day (survivorship bias).",
      "My backtesting engine enforces a strict temporal boundary. The strategy receives a 'snapshot' object that only contains data up to the current simulation timestamp. Any attempt to access future data raises an exception. This is implemented at the data access layer, not the strategy layer — you can't accidentally bypass it.",
      "For indicators, I use an incremental calculation pattern. Instead of recalculating a 200-day moving average from scratch at each step (which is slow and error-prone), I maintain a running state that updates as new data arrives. This is both faster and guarantees no look-ahead.",
      "Universe selection is handled by point-in-time datasets. I maintain historical index compositions — which stocks were in the Nifty 50 on any given date. The strategy only sees and can trade stocks that were actually available at that point in time.",
      "Testing for bias: I run every strategy with a 'shuffled' mode where the order of data points is randomized. A strategy that performs well on shuffled data is almost certainly using future information — it shouldn't be able to extract signal from randomized sequences."
    ],
  },
  {
    slug: "building-cli-tools-python-rich",
    title: "Building CLI Tools with Python and Rich",
    category: "Developer Tools",
    date: "Nov 2025",
    readTime: "5 min",
    excerpt: "How Rich transforms boring command-line scripts into tools people actually enjoy using.",
    content: [
      "Most developer tools start as scripts. A quick Python file that automates something tedious. Then someone else needs to use it, and suddenly you need argument parsing, help text, error messages, and progress indicators. This is where Rich comes in.",
      "Rich isn't just about making output colorful. It's about information hierarchy. When your CLI dumps a wall of text, nothing stands out. With Rich's panels, tables, and syntax highlighting, users can scan output and find what matters instantly.",
      "I structure my CLIs around three Rich components: Console for output, Progress for long operations, and Table for structured data. The Console handles all printing and automatically adapts to terminal width. Progress shows real-time status for multi-step operations. Tables replace ad-hoc string formatting.",
      "Error handling gets special treatment. Instead of stack traces, I use Rich's Panel with a red border for errors and yellow for warnings. The panel includes the error message, a hint for common fixes, and a reference to documentation. Users solve problems without asking me.",
      "For complex tools, I add a Tree view of the operation plan before execution. 'Here's what I'm about to do — proceed?' This builds trust and catches mistakes before they happen. Rich's Tree component makes this trivial to implement.",
      "The pattern I've settled on: Click for argument parsing (it has the best help generation), Rich for all output, and a thin 'presenter' layer between business logic and display. The business logic returns data structures, the presenter formats them with Rich. This keeps the code testable and the output beautiful."
    ],
  },
  {
    slug: "multi-provider-llm-routing",
    title: "Multi-Provider LLM Routing Patterns",
    category: "AI Engineering",
    date: "Oct 2025",
    readTime: "9 min",
    excerpt: "Designing a unified interface for OpenAI, Anthropic, and open-source models with intelligent failover and cost optimization.",
    content: [
      "If you're using LLMs in production, you're probably using multiple providers. OpenAI for GPT-4, Anthropic for Claude, maybe a self-hosted model for simple tasks. Each has different APIs, pricing, rate limits, and failure modes. You need an abstraction layer.",
      "The core interface is simple: send(messages, config) → response. The config specifies requirements: max_cost, max_latency, required_capabilities (like vision or function calling). The router picks the best provider based on these constraints.",
      "Routing strategies: cost-optimized routes to the cheapest model that meets capability requirements. Latency-optimized picks the fastest. Quality-optimized uses the best model available. In practice, I use a scoring function that weights all three based on the use case.",
      "Failover is where it gets interesting. Each provider has a circuit breaker. If error rate exceeds a threshold, the circuit opens and traffic shifts to fallbacks. But LLM errors are nuanced — a rate limit (429) is temporary, while an invalid request (400) won't be fixed by retrying with another provider.",
      "The adapter pattern handles API differences. Each provider gets an adapter that translates the unified request format to provider-specific API calls, and normalizes responses back. Adding a new provider means writing one adapter class with three methods: send, stream, and count_tokens.",
      "Cost tracking is built into the routing layer. Every request logs tokens, model, provider, and calculated cost. This feeds back into the router — if a provider's costs spike (they change pricing), the router automatically adjusts. I've saved significant money by catching pricing changes early through this feedback loop."
    ],
  },
];
