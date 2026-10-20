import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

const values = [
  "Follow questions across disciplines.",
  "Build to understand, not only to impress.",
  "Pay attention—the details are usually the story.",
  "Choose depth, then connect what you learn.",
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
          <p className="text-sm text-muted-foreground mb-4">About · The whole person</p>
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
            I'm Soham Panchal—a polymath in progress from Mumbai. Engineering is one of my deepest
            practices, but it is not the border of who I am. I also write, photograph, trek, study markets,
            and explore the food and street culture of the city I call home.
          </p>
          <p>
            I hold a BE in Computer Engineering from the University of Mumbai and build production-grade AI
            infrastructure, financial data systems, and developer tools. The same instinct that pulls me into
            a system also pulls me toward a mountain trail or a crowded Mumbai street: I want to understand
            what is happening beneath the surface.
          </p>
          <p>
            This site is where those threads meet. It is part portfolio, part notebook, part photo archive,
            and part field guide—a record of what I am building, noticing, and learning in public.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="editorial-divider mb-8" />
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10">Journey</h2>
          
          <div className="space-y-10">
            {[
              { period: "Early days", title: "Taking things apart", text: "Curiosity began with systems: how software works, why things break, and what becomes possible when the pieces are rearranged." },
              { period: "University", title: "Learning by building", text: "A computer engineering degree became a launchpad for production software, AI systems, trading tools, and technical writing." },
              { period: "Beyond code", title: "Looking outward", text: "Trekking, photography, and exploring Mumbai sharpened another kind of attention: to place, light, people, food, and lived experience." },
              { period: "Now", title: "Connecting the threads", text: "Building a practice where engineering, writing, observation, and exploration make each other richer." },
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
