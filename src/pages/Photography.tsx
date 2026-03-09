import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

const galleries = [
  { title: "Treks & Mountains", count: 12, desc: "Sahyadri ranges, Western Ghats, and summit moments." },
  { title: "Mumbai Streets", count: 8, desc: "The beautiful chaos of the city that never sleeps." },
  { title: "Portraits & People", count: 6, desc: "Faces and stories from the trail and the street." },
];

const photos = [
  { id: 0, src: "/images/IMG_20250615_102804104.jpg", alt: "Mountain trail sunrise", aspect: "aspect-[3/4]" },
  { id: 1, src: "/images/IMG_20250615_103053915.jpg", alt: "Mumbai street corner", aspect: "aspect-square" },
  { id: 2, src: "/images/IMG_20250615_105538363_HDR.jpg", alt: "Trek campsite", aspect: "aspect-[4/5]" },
  { id: 3, src: "/images/IMG-20220718-WA0020.jpg", alt: "City skyline", aspect: "aspect-[3/4]" },
  { id: 4, src: "/images/IMG-20230218-WA0035.jpg", alt: "Summit view", aspect: "aspect-square" },
  { id: 5, src: "/images/IMG-20230218-WA0056.jpg", alt: "Street vendor", aspect: "aspect-[4/5]" },
  { id: 6, src: "/images/soham.jpeg", alt: "Portrait", aspect: "aspect-[3/4]" },
];

const Photography = () => {
  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm text-muted-foreground mb-4">Photography</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Through the lens<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg">
            Moments captured while trekking, wandering through Mumbai, and exploring the world beyond code.
          </p>
        </motion.div>

        {/* Gallery categories */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {galleries.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card/50 p-5 cursor-pointer hover:bg-accent/50 transition-colors"
            >
              <h3 className="font-medium text-foreground">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
              <p className="mt-3 text-xs text-primary">{g.count} photos</p>
            </motion.div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="mt-16 columns-2 md:columns-3 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${photo.aspect} rounded-lg bg-card overflow-hidden break-inside-avoid`}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Photography;
