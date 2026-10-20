import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Camera, CarFront, Code2, Compass, Swords } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import PageCta from "@/components/shared/PageCta";

const practices = [
  { icon: Code2, title: "Engineering", text: "Production software, AI infrastructure, financial data systems, and developer tools.", href: "/projects" },
  { icon: BookOpen, title: "Writing", text: "Making technical lessons and wider questions clear enough to share and discuss.", href: "/writing" },
  { icon: Camera, title: "Photography", text: "Learning to notice light, place, people, and the details that usually pass too quickly.", href: "/photography" },
  { icon: Compass, title: "Exploration", text: "Mountain trails, city walks, food, and field notes from Mumbai and beyond.", href: "/explore" },
  { icon: Swords, title: "Chess", text: "A practice in calculation, patience, pattern recognition, and living with imperfect decisions.", href: "https://www.chess.com/member/soham0410", external: true },
  { icon: CarFront, title: "Cars and Formula 1", text: "A lifelong love of cars, with a special pull toward Ferrari, its racing legacy, and Formula 1 history." },
];

const principles = [
  ["01", "Follow the question", "Let curiosity cross disciplines instead of forcing every interest into one label."],
  ["02", "Build to understand", "The fastest route from an abstract idea to real knowledge is often making something."],
  ["03", "Pay close attention", "Good systems, photographs, and stories all begin with noticing what others overlook."],
  ["04", "Keep the edges open", "Expertise matters, but so does leaving room for unfamiliar subjects and new obsessions."],
];

const About = () => (
  <PageLayout
    title="About"
    description="Meet Soham Panchal, a Mumbai-based engineer, writer, photographer, explorer, chess player, and Formula 1 enthusiast."
  >
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <PageIntro
        kicker="About · The whole person"
        title={<>Curiosity is the common thread<span className="text-primary">.</span></>}
        lead="I am Soham Panchal, a builder from Mumbai. Engineering is a deep part of my practice, but the larger story includes writing, photography, mountains, chess, cars, and whatever I am learning next."
        aside={<span className="inline-flex rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">Mumbai, India</span>}
      />

      <div className="mt-16 grid overflow-hidden rounded-lg border border-border md:grid-cols-[0.9fr_1.1fr]">
        <div className="min-h-[28rem] overflow-hidden bg-card">
          <img src="/images/soham.jpeg" alt="Soham Panchal" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-card/35 p-7 sm:p-10 md:p-12">
          <p className="page-kicker">In my own words</p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I hold a BE in Computer Engineering from the University of Mumbai. I enjoy working on systems where reliability, data, and thoughtful product decisions matter, especially in AI and financial technology.
            </p>
            <p>
              Away from code, I write to sharpen ideas and photograph to sharpen attention. Trekking gets me out of abstraction. Chess brings me back to it. I have loved cars for as long as I can remember, and Formula 1 gives that interest a world of engineering, competition, history, and emotion. Ferrari’s legacy is the part I return to most.
            </p>
            <p>
              Football is still an open door. I would like to follow it, but I have not yet found the club, player, or story that gives me a reason to care. I like being honest about interests that are still waiting to begin.
            </p>
          </div>
          <Link to="/now" className="group mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            See what has my attention now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <section className="mt-20 grid gap-10 border-y border-border py-14 md:grid-cols-[0.58fr_1.42fr] md:items-start">
        <div>
          <p className="page-kicker">A sports memory</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Mumbai · 2011 Cricket World Cup final</p>
        </div>
        <div>
          <p className="font-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            I was eating sev puri when Sachin got out. I was so stunned that I dropped it.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            That moment is still one of my clearest memories of caring about sport. I kept following cricket closely until around 2018 or 2019, then gradually stopped watching. The memory stayed even after the habit disappeared. It is probably why I understand that a sport becomes meaningful through a story, not just its rules. Football has not given me that story yet. Formula 1 has, especially through cars, engineering, competition, and Ferrari’s legacy.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="page-kicker">The practice</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Six ways I stay curious.</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            These are not separate versions of me. Each one trains a different kind of attention, and the most interesting ideas tend to appear where they overlap.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => {
            const Icon = practice.icon;
            const content = (
              <>
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-8 font-display text-2xl font-semibold text-foreground">{practice.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.text}</p>
                {practice.href ? <span className="mt-auto pt-7 text-xs text-primary">Explore this thread</span> : null}
              </>
            );

            return practice.href ? (
              practice.external ? (
                <a key={practice.title} href={practice.href} target="_blank" rel="noopener noreferrer" className="flex min-h-64 flex-col bg-background p-7 transition-colors hover:bg-accent/50">
                  {content}
                </a>
              ) : (
                <Link key={practice.title} to={practice.href} className="flex min-h-64 flex-col bg-background p-7 transition-colors hover:bg-accent/50">
                  {content}
                </Link>
              )
            ) : (
              <article key={practice.title} className="flex min-h-64 flex-col bg-background p-7">{content}</article>
            );
          })}
        </div>
      </section>

      <section className="mt-24 grid gap-12 border-t border-border pt-16 md:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="page-kicker">Working principles</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">How I try to move through the work.</h2>
        </div>
        <div className="border-t border-border">
          {principles.map(([number, title, text]) => (
            <div key={number} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2rem_10rem_1fr]">
              <span className="font-mono text-xs text-primary">{number}</span>
              <h3 className="text-sm font-medium text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        eyebrow="Continue exploring"
        title="See the work these interests produce."
        description="The portfolio brings together production systems, experiments, writing, and the questions behind them."
        to="/projects"
        label="View selected work"
      />
    </section>
  </PageLayout>
);

export default About;
