import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { socialLinks } from "@/data/socials";

const Contact = () => (
  <PageLayout>
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <p className="mb-4 text-sm text-muted-foreground">Contact · Collaborate · Follow</p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Let’s exchange ideas<span className="text-primary">.</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I’m open to thoughtful collaborations, engineering opportunities, writing conversations,
          photo walks, trek recommendations, and good questions that cross disciplines.
        </p>
      </motion.div>

      <motion.a
        href="mailto:sohampanchal1469@gmail.com"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="group mt-12 flex items-center justify-between gap-5 rounded-lg border border-border bg-foreground p-6 text-background sm:p-8"
      >
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5" />
          <div>
            <p className="text-xs opacity-60">The most direct route</p>
            <p className="mt-1 text-base font-medium sm:text-lg">sohampanchal1469@gmail.com</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </motion.a>

      <div className="mt-20">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Find me elsewhere</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Every corner of the work</h2>
          </div>
          <span className="hidden text-xs text-muted-foreground sm:inline">Code · Essays · Practice · Conversation</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              {link.url ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-32 items-start justify-between gap-4 rounded-lg border border-border bg-card/40 p-5 transition-colors hover:bg-accent/60"
                >
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary">{link.label}</p>
                    <p className="mt-1 text-xs text-primary">{link.handle}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{link.note}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </a>
              ) : (
                <div className="flex min-h-32 items-start justify-between gap-4 rounded-lg border border-dashed border-border bg-card/20 p-5">
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    <p className="mt-1 text-xs text-primary">{link.handle}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{link.note}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">URL needed</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contact;
