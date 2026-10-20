import { ArrowRight, ArrowUpRight, Camera, Coffee, Mail, MessagesSquare } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import { socialLinks } from "@/data/socials";

const conversationStarters = [
  { icon: MessagesSquare, title: "Build together", text: "AI systems, data infrastructure, developer tools, and engineering problems with real operational depth." },
  { icon: Coffee, title: "Compare notes", text: "Writing, learning, markets, Formula 1, cars, chess, or a question that refuses to stay in one discipline." },
  { icon: Camera, title: "Go outside", text: "Photo walks, Mumbai places, food recommendations, and ideas for the next trek." },
];

const Contact = () => (
  <PageLayout
    title="Contact"
    description="Get in touch with Soham Panchal for engineering opportunities, collaborations, writing, photography, and thoughtful conversations."
  >
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <PageIntro
        kicker="Contact · Collaborate · Follow"
        title={<>Good work often starts with a good question<span className="text-primary">.</span></>}
        lead="I am open to thoughtful engineering opportunities, collaborations, writing conversations, photo walks, trek recommendations, and ideas that connect subjects in unexpected ways."
      />

      <a
        href="mailto:sohampanchal1469@gmail.com"
        className="group mt-14 grid gap-6 rounded-lg bg-foreground p-7 text-background transition-opacity hover:opacity-95 sm:p-10 md:grid-cols-[1fr_auto] md:items-end"
      >
        <div>
          <Mail className="h-5 w-5 text-primary" />
          <p className="mt-8 text-xs uppercase tracking-[0.16em] text-background/55">The most direct route</p>
          <p className="mt-2 break-all font-display text-2xl font-semibold sm:text-3xl">sohampanchal1469@gmail.com</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm">
          Write an email
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </a>

      <section className="mt-24">
        <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="page-kicker">Conversation starters</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">What we could talk about.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {conversationStarters.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-background p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-8 text-base font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-24 border-t border-border pt-14">
        <div className="mb-8 grid gap-4 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="page-kicker">Elsewhere</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Find the right corner.</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">Different platforms hold different parts of the practice: code, essays, algorithms, chess, and shorter updates.</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.filter((link) => link.url).map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-44 flex-col bg-background p-6 transition-colors hover:bg-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary">{link.label}</p>
                  <p className="mt-1 text-xs text-primary">{link.handle}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-auto pt-6 text-sm leading-relaxed text-muted-foreground">{link.note}</p>
            </a>
          ))}
        </div>
      </section>
    </section>
  </PageLayout>
);

export default Contact;
