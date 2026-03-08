import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { posts } from "@/data/posts";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

const Writing = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm text-muted-foreground mb-4">Writing</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Engineering notes<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Thinking out loud about systems, AI, and infrastructure.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                cat === active
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/writing/${post.slug}`}
                className="group flex items-start justify-between gap-4 border-b border-border py-6 first:border-t -mx-4 px-4 rounded-md transition-colors hover:bg-accent/30"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xs text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 shrink-0 pt-1">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Writing;
