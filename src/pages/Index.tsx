import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const featuredWork = [
  { title: "LLM Monitoring Platform", tag: "AI Infrastructure", href: "/projects" },
  { title: "AI Job Matcher", tag: "Machine Learning", href: "/projects" },
  { title: "Stock Backtesting Engine", tag: "Financial Systems", href: "/projects" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm text-muted-foreground mb-6">Mumbai, India</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-7xl md:text-8xl text-balance">
            Engineer, explorer,<br />
            <span className="italic text-primary">storyteller.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Soham — a full stack engineer who builds AI systems and financial infrastructure
            by day, and explores mountains, city streets, and local kitchens the rest of the time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Read my story
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            View projects
          </Link>
        </motion.div>
      </section>

      {/* Photo Grid — placeholder for user images */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { alt: "Trekking in the mountains", aspect: "aspect-[4/5]" },
            { alt: "City street photography", aspect: "aspect-square" },
            { alt: "Local food exploration", aspect: "aspect-[4/5]" },
            { alt: "Engineering workspace", aspect: "aspect-square md:col-span-1" },
            { alt: "Mountain summit view", aspect: "aspect-[4/5] hidden md:block" },
            { alt: "Street food close-up", aspect: "aspect-square hidden md:block" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`${img.aspect} rounded-lg bg-card overflow-hidden`}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent to-card flex items-center justify-center">
                <span className="text-xs text-muted-foreground/60 px-4 text-center">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground/50 text-center">
          ↑ Replace these with your own photos
        </p>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="editorial-divider" />
      </div>

      {/* Featured Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-2">Selected work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Things I've built
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col">
          {featuredWork.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={project.href}
                className="group flex items-center justify-between border-b border-border py-6 transition-colors hover:bg-accent/30 -mx-4 px-4 rounded-md"
              >
                <div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.tag}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          View all projects <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* Interests */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trekking",
              desc: "Sahyadri ranges, Western Ghats, and beyond. There's clarity in climbing that no IDE can offer.",
              link: "/photography",
            },
            {
              title: "Photography",
              desc: "Capturing the raw textures of Mumbai's streets, mountain trails, and everything in between.",
              link: "/photography",
            },
            {
              title: "Food & City",
              desc: "From hole-in-the-wall street food to hidden cafés — mapping Mumbai one bite at a time.",
              link: "/explore",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={item.link} className="group block">
                <div className="aspect-[4/3] rounded-lg bg-card mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-card flex items-center justify-center">
                    <span className="text-xs text-muted-foreground/50">Your {item.title.toLowerCase()} photo</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
