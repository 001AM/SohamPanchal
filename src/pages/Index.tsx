import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Camera, CarFront, CircleDot, Code2, Compass, Swords } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ActivityDashboard from "@/components/shared/ActivityDashboard";
import { posts } from "@/data/posts";

const pursuits = [
  {
    number: "01",
    title: "Build",
    description: "Production software, AI infrastructure, financial systems, and tools that make complex work feel simple.",
    href: "/projects",
    cta: "See selected work",
    icon: Code2,
  },
  {
    number: "02",
    title: "Write",
    description: "Notes on technology, learning, systems, and the questions that keep unfolding beyond the screen.",
    href: "/writing",
    cta: "Read the notes",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Observe",
    description: "Street frames, mountain light, people, and the small details that make a place feel alive.",
    href: "/photography",
    cta: "Open the gallery",
    icon: Camera,
  },
  {
    number: "04",
    title: "Explore",
    description: "Treks, city walks, local food, and a growing field guide to Mumbai and Maharashtra.",
    href: "/explore",
    cta: "Follow the trail",
    icon: Compass,
  },
];

const featuredImages = [
  { src: "/images/soham.jpeg", alt: "Soham Panchal", className: "col-span-2 row-span-2" },
  { src: "/images/trip_012.jpg", alt: "Dhauladhar peaks at dusk", className: "col-span-1" },
  { src: "/images/mumbai_257.jpg", alt: "Rainy Mumbai station", className: "col-span-1" },
];

const sideRoads = [
  { icon: Swords, title: "Chess", text: "Calculation, patience, and imperfect decisions.", href: "https://www.chess.com/member/soham0410", external: true },
  { icon: CarFront, title: "Cars and Formula 1", text: "Ferrari, racing legacy, engineering, and a lifelong love of cars.", href: "/about" },
  { icon: CircleDot, title: "Sport and story", text: "Cricket shaped an early memory. Football is still waiting for its reason.", href: "/about" },
];

const Index = () => (
  <PageLayout
    description="Soham Panchal is a Mumbai-based engineer, writer, photographer, explorer, chess player, and Formula 1 enthusiast."
  >
    <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-28 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pb-32 md:pt-40">
      <div>
        <p className="mb-7 text-xs font-medium uppercase tracking-[0.22em] text-primary">
          Mumbai · Building across disciplines
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.4rem]">
          A life built around <span className="italic text-primary">curiosity.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I’m Soham, an engineer, writer, photographer, and explorer following ideas across software,
          markets, mountains, city streets, chess, cars, and culture.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Meet the whole person <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Read my writing
          </Link>
        </div>
      </div>

      <div className="grid h-[480px] grid-cols-3 grid-rows-2 gap-3 sm:h-[560px]">
        {featuredImages.map((image) => (
          <div key={image.src} className={`${image.className} overflow-hidden rounded-lg bg-card`}>
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card/35">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="mb-3 text-sm text-muted-foreground">The practice</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Many threads.<br />One curious mind.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I don’t see engineering, writing, photography, and exploration as separate identities.
            They are different ways of doing the same thing: paying close attention, finding patterns,
            and making something useful from what I learn.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {pursuits.map((pursuit, index) => {
            const Icon = pursuit.icon;
            return (
              <motion.div
                key={pursuit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={pursuit.href}
                  className="group flex min-h-64 flex-col bg-background p-7 transition-colors hover:bg-accent/60 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{pursuit.number}</span>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold text-foreground">{pursuit.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{pursuit.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-foreground">
                    {pursuit.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-7 border-t border-border pt-10 md:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-sm text-muted-foreground">Side roads</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">The interests around the work.</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {sideRoads.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="mt-5 text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </>
              );

              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-background p-5 transition-colors hover:bg-accent/50">{content}</a>
              ) : (
                <Link key={item.title} to={item.href} className="rounded-lg border border-border bg-background p-5 transition-colors hover:bg-accent/50">{content}</Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[0.72fr_1.28fr] md:py-32">
      <div>
        <p className="mb-3 text-sm text-muted-foreground">From the notebook</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ideas worth<br />thinking through.
        </h2>
        <Link to="/writing" className="mt-7 inline-flex items-center gap-2 text-sm text-primary hover:underline">
          Browse all writing <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="border-t border-border">
        {posts.slice(0, 3).map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link
              to={`/writing/${post.slug}`}
              className="group grid gap-3 border-b border-border py-7 transition-colors hover:bg-accent/30 sm:grid-cols-[1fr_auto] sm:px-4"
            >
              <div>
                <p className="text-xs text-primary">{post.category} · {post.date}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </div>
              <ArrowRight className="mt-1 hidden h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 sm:block" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    <section id="elsewhere" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm text-muted-foreground">Elsewhere on the internet</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Follow the work as it happens.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Essays, code, algorithms, experiments, and shorter observations, automatically refreshed from the places where I publish.
          </p>
        </div>
        <div className="mt-12">
          <ActivityDashboard />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
