import { MapPin, Mountain, Route } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import PageCta from "@/components/shared/PageCta";

const treks = [
  {
    number: "01",
    name: "Bhandardara",
    region: "Sahyadri, Maharashtra",
    pace: "Easy to moderate",
    image: "/images/mumbai_169.jpg",
    alt: "A waterfall in the green Sahyadri hills",
    note: "A landscape of water, monsoon-green hills, waterfalls, and quiet roads through the Western Ghats. Bhandardara is less about reaching one summit and more about letting the whole region set the pace.",
  },
  {
    number: "02",
    name: "Triund",
    region: "Dhauladhar, Himachal Pradesh",
    pace: "Moderate",
    image: "/images/trip_012.jpg",
    alt: "The Dhauladhar mountains near the Triund trail",
    note: "A steady climb above Dharamshala that opens into a wide view of the Dhauladhar range. The trail stays with me for the shift in scale, from forest paths to mountains filling the horizon.",
  },
];

const cityNotes = [
  { name: "Mama Kane", type: "Food", area: "Dadar", note: "My go-to place for misal pav. You can find me here at least once a month when I visit Siddhivinayak." },
  { name: "Colaba", type: "Wander", area: "South Mumbai", note: "Old facades, cafés, sea air, visitors, and residents sharing the same few streets." },
  { name: "Carter Road", type: "Walk", area: "Bandra", note: "A long coastal pause for sunsets, conversations, movement, and watching the city exhale." },
  { name: "Sassoon Docks", type: "Observe", area: "Colaba", note: "A working waterfront where the city feels raw, immediate, and completely awake." },
  { name: "Mumbai in the rain", type: "Season", area: "Across the city", note: "Reflections, stalled traffic, wet platforms, sudden green, and a different quality of light." },
];

const Explore = () => (
  <PageLayout
    title="Explore"
    description="Field notes from Soham Panchal's treks to Bhandardara and Triund, plus food, walks, and observations from Mumbai."
  >
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <PageIntro
        kicker="Explore · Field notes"
        title={<>The world makes more sense on foot<span className="text-primary">.</span></>}
        lead="A personal field guide to mountain trails, city walks, food, and the places that interrupt routine. It is less a list of recommendations and more a record of attention."
        aside={<span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"><Route className="h-3.5 w-3.5 text-primary" />Mumbai and beyond</span>}
      />

      <section className="mt-20">
        <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="page-kicker">Two trails</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Bhandardara and Triund.</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            One belongs to the rain-soaked Western Ghats, the other to the Dhauladhar range. Both are reminders that effort, weather, and distance change how a place is seen.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {treks.map((trek) => (
            <article key={trek.name} className="overflow-hidden rounded-lg border border-border bg-card/35">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={trek.image} alt={trek.alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]" />
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <span className="font-mono text-primary">{trek.number}</span>
                  <span>{trek.pace}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold text-foreground">{trek.name}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Mountain className="h-3.5 w-3.5 text-primary" />{trek.region}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{trek.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="page-kicker">Closer to home</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">A Mumbai notebook.</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Places I return to, pass through, or want to understand better. The point is not a definitive city guide. It is to notice how the city changes by neighbourhood, hour, season, and appetite.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {cityNotes.map((spot) => (
            <article key={spot.name} className="flex min-h-56 flex-col bg-background p-6 transition-colors hover:bg-accent/40">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.16em] text-primary">{spot.type}</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground"><MapPin className="h-3 w-3" />{spot.area}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-foreground">{spot.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{spot.note}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        eyebrow="The visual record"
        title="Some places are better remembered in images."
        description="Open the photography archive for mountain light, Mumbai rain, people, and moments from the trail."
        to="/photography"
        label="Browse the photographs"
      />
    </section>
  </PageLayout>
);

export default Explore;
