import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const spots = [
  { name: "Mohammad Ali Road", type: "Street Food", area: "South Mumbai", note: "Best seekh kebabs and malpua during Ramadan." },
  { name: "Cafe Mondegar", type: "Café", area: "Colaba", note: "Iconic murals, cold beer, and people watching since 1932." },
  { name: "Bademiya", type: "Street Food", area: "Colaba", note: "Late-night rolls that define Mumbai street food culture." },
  { name: "Prithvi Café", type: "Café", area: "Juhu", note: "Irish coffee and theatre vibes tucked away in Juhu." },
  { name: "Carter Road Promenade", type: "Walk", area: "Bandra", note: "Sunset walks with the sea, street performers, and cutting chai." },
  { name: "Sassoon Docks", type: "Walk", area: "Colaba", note: "Chaotic, fragrant, raw — Mumbai's oldest fishing dock at sunrise." },
];

const treks = [
  { name: "Kalsubai", elevation: "1,646m", difficulty: "Moderate", note: "Highest peak in Maharashtra. Pre-dawn start for sunrise." },
  { name: "Harishchandragad", elevation: "1,424m", difficulty: "Moderate-Hard", note: "The Konkan Kada cliff face is genuinely breathtaking." },
  { name: "Rajmachi", elevation: "917m", difficulty: "Easy-Moderate", note: "Monsoon firefly trails and twin fort ruins." },
  { name: "Lohagad", elevation: "1,033m", difficulty: "Easy", note: "Perfect first trek. Pune day-trip with incredible views." },
];

const Explore = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Explore</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Off the screen<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg">
            A running log of favourite food spots, city walks, and treks around Maharashtra.
          </p>
        </motion.div>

        {/* Food & City */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Food & City</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {spots.map((spot, i) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg border border-border bg-card/50 p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-foreground">{spot.name}</h3>
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    {spot.type}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {spot.area}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{spot.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Treks */}
        <div className="mt-20">
          <div className="editorial-divider mb-8" />
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Treks</h2>
          <div className="flex flex-col">
            {treks.map((trek, i) => (
              <motion.div
                key={trek.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-border py-6 first:border-t"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-foreground">{trek.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{trek.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-foreground">{trek.elevation}</p>
                    <p className="text-xs text-muted-foreground">{trek.difficulty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Explore;
