import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const postIndex = posts.findIndex((item) => item.slug === slug);
  const post = posts[postIndex];
  const nextPost = postIndex >= 0 ? posts[(postIndex + 1) % posts.length] : undefined;

  if (!post) {
    return (
      <PageLayout title="Post not found" description="This writing note could not be found.">
        <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
          <p className="page-kicker">404 · Writing archive</p>
          <h1 className="mt-5 font-display text-5xl font-semibold text-foreground">This note has wandered off.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">The address may have changed, but the rest of the notebook is still here.</p>
          <Link to="/writing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> Back to writing
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={post.title} description={post.excerpt}>
      <article className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <header className="mx-auto max-w-3xl">
          <Link to="/writing" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All writing
          </Link>

          <div className="mt-14 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="page-kicker">{post.category}</span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" />{post.readTime}</span>
          </div>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">{post.title}</h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.excerpt}</p>
        </header>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 border-t border-border pt-12 md:grid-cols-[10rem_minmax(0,42rem)] md:justify-center">
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">A note by</p>
              <p className="mt-2 text-sm font-medium text-foreground">Soham Panchal</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Engineer, writer, and curious observer in Mumbai.</p>
            </div>
          </aside>
          <div className="space-y-7">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-[1.05rem] leading-[1.9] text-foreground/85">{paragraph}</p>
            ))}
          </div>
        </div>

        {nextPost ? (
          <footer className="mx-auto mt-20 max-w-3xl border-t border-border pt-10">
            <p className="page-kicker">Read next</p>
            <Link to={`/writing/${nextPost.slug}`} className="group mt-5 flex items-start justify-between gap-6 rounded-lg border border-border bg-card/35 p-6 transition-colors hover:bg-accent/50 sm:p-8">
              <div>
                <p className="text-xs text-primary">{nextPost.category}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{nextPost.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{nextPost.readTime}</p>
              </div>
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </footer>
        ) : null}
      </article>
    </PageLayout>
  );
};

export default BlogPost;
