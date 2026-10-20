import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import PageCta from "@/components/shared/PageCta";
import { posts } from "@/data/posts";
import { socialLinks } from "@/data/socials";

const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

const Writing = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((post) => post.category === active);
  const [featured, ...remaining] = filtered;
  const writingLinks = socialLinks.filter((link) => link.kind === "writing" && link.url);

  return (
    <PageLayout
      title="Writing"
      description="Essays and working notes by Soham Panchal on software systems, AI, markets, learning, places, and wider curiosities."
    >
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <PageIntro
          kicker="Writing · Thinking in public"
          title={<>Ideas become clearer on the page<span className="text-primary">.</span></>}
          lead="Essays and working notes on software, systems, learning, markets, and the interests that keep pulling me beyond engineering. This archive begins with technical practice and is growing outward."
          aside={<span className="font-mono text-xs text-muted-foreground">{posts.length.toString().padStart(2, "0")} notes</span>}
        />

        <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter writing by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={category === active}
              className={`rounded-full px-4 py-2 text-xs transition-colors ${
                category === active
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {featured ? (
          <div className="mt-12">
            <p className="page-kicker">{active === "All" ? "Start here" : active}</p>
            <Link
              to={`/writing/${featured.slug}`}
              className="group mt-4 grid gap-8 rounded-lg border border-border bg-card/45 p-7 transition-colors hover:bg-accent/50 sm:p-10 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary">{featured.category}</span>
                  <span>{featured.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" />{featured.readTime}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-primary">
                Read note
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        ) : null}

        {remaining.length ? (
          <div className="mt-16 grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="page-kicker">Continue reading</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Notes from the archive, ordered by when they were written.</p>
            </div>
            <div className="border-t border-border">
              {remaining.map((post) => (
                <Link
                  key={post.slug}
                  to={`/writing/${post.slug}`}
                  className="group grid gap-4 border-b border-border py-7 transition-colors sm:grid-cols-[1fr_auto] sm:items-start sm:px-4 sm:hover:bg-accent/35"
                >
                  <div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="text-primary">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    {post.readTime}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <section className="mt-24 border-t border-border pt-14">
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="page-kicker">Also published elsewhere</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Choose your reading corner.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {writingLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-40 flex-col rounded-lg border border-border bg-card/40 p-5 transition-colors hover:bg-accent"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-xs text-primary">{link.handle}</p>
                  <p className="mt-auto pt-5 text-xs leading-relaxed text-muted-foreground">{link.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          eyebrow="Have a question?"
          title="The best notes often begin as conversations."
          description="If an idea here connects with something you are building or learning, I would be glad to hear from you."
          to="/contact"
          label="Start a conversation"
        />
      </section>
    </PageLayout>
  );
};

export default Writing;
