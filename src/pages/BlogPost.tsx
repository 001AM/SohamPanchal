import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground">Post not found</h1>
          <Link to="/writing" className="mt-6 inline-block text-sm text-primary hover:underline">
            ← Back to writing
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to writing
          </Link>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-primary font-medium">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed italic">
            {post.excerpt}
          </p>

          <div className="editorial-divider mt-10 mb-10" />

          <div className="flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="text-base leading-[1.85] text-foreground/85"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="editorial-divider mt-16 mb-8" />

          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
        </motion.div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
