import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

const values = [
  "Ship production systems, not demos.",
  "Observability is a feature, not an afterthought.",
  "Good infrastructure makes everything else possible.",
  "The best code is the code you understand deeply.",
];

const About = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-4">About</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            The full picture<span className="text-primary">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 aspect-[3/2] w-full rounded-lg bg-card overflow-hidden"
        >
          <img src="/images/soham.jpeg" alt="Soham Panchal" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground"
        >
          <p>
            I'm Soham Panchal — a full stack engineer from Mumbai, India with a BE in Computer Engineering 
            from the University of Mumbai. I build production-grade AI infrastructure, financial data systems, 
            and developer tools.
          </p>
          <p>
            When I'm not writing code, you'll find me trekking through the Sahyadri ranges, photographing 
            Mumbai's chaotic beauty, or hunting down the city's best street food. I believe the best engineers 
            are the ones who stay curious about the world beyond their screens.
          </p>
          <p>
            My work sits at the intersection of AI systems, financial engineering, and developer tooling. 
            I care about building things that are reliable, observable, and genuinely useful.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="editorial-divider mb-8" />
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10">Journey</h2>
          
          <div className="space-y-10">
            {[
              { period: "Early Days", title: "Curiosity", text: "Fascinated by how systems work under the hood. Started with simple scripts, quickly moved to understanding distributed systems, databases, and infrastructure." },
              { period: "University", title: "Builder Phase", text: "Built real production systems — LLM monitoring, trading pipelines, AI job matching, and large-scale scraping. Every project solved real engineering problems." },
              { period: "Present", title: "Systems Thinking", text: "Shifted from features to complete system design. Obsessed with observability, pipeline architecture, and building infrastructure developers can rely on." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8"
              >
                <div className="w-24 shrink-0">
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="editorial-divider mb-8" />
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Principles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card/50 p-5"
              >
                <p className="text-sm text-foreground">{v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
