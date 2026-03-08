import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const links = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/soham-panchal-430956255/" },
  { label: "X (Twitter)", url: "https://x.com/Soham0001AM" },
  { label: "Email", url: "mailto:sohampanchal1469@gmail.com" },
  { label: "Dev.to", url: "https://dev.to/001am" },
  { label: "Medium", url: "https://medium.com/@sohampanchal1469" },
];

const Contact = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Contact</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Let's talk<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg">
            Open to collaborations, opportunities, or just a good conversation about systems, food, or mountains.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:bg-accent/30 -mx-4 px-4 rounded-md"
            >
              <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-lg border border-border bg-card/50 p-8"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send a message</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <textarea
              rows={4}
              placeholder="What's on your mind?"
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
            />
            <button
              type="submit"
              className="w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default Contact;
