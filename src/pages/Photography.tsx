import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

const galleries = [
  { title: "Treks & Mountains", count: 13, desc: "Sahyadri ranges, Western Ghats, and summit moments." },
  { title: "Mumbai Streets", count: 12, desc: "The beautiful chaos of the city that never sleeps." },
  { title: "Portraits & People", count: 6, desc: "Faces and stories from the trail and the street." },
];

const photos = [
  { id: 0, src: "/images/trip_012.jpg", alt: "Dhauladhar peaks at dusk" },
  { id: 1, src: "/images/trip_013.jpg", alt: "Mountains above Naddi" },
  { id: 2, src: "/images/trip_011.jpg", alt: "Village with mountains and clouds" },
  { id: 3, src: "/images/trip_015.jpg", alt: "Sunset over the hills" },
  { id: 4, src: "/images/trip_010.jpg", alt: "Bare trees and a hillside cabin" },
  { id: 5, src: "/images/trip_060.jpg", alt: "City lights from the mountain at night" },
  { id: 6, src: "/images/trip_066.jpg", alt: "Dharamshala cricket stadium" },
  { id: 7, src: "/images/trip_101.jpg", alt: "Snowy mountain stream" },
  { id: 8, src: "/images/trip_061.jpg", alt: "Snow peak from the plateau" },
  { id: 9, src: "/images/trip_150.jpg", alt: "Forested hills from the rooftop" },
  { id: 10, src: "/images/trip_151.jpg", alt: "Morning sun over the valley" },
  { id: 11, src: "/images/trip_099.jpg", alt: "Misty plateau" },
  { id: 12, src: "/images/trip_003.jpg", alt: "Feet on the rail tracks" },
  { id: 13, src: "/images/mumbai_052.jpg", alt: "Hazy Mumbai skyline across the sea" },
  { id: 14, src: "/images/mumbai_121.jpg", alt: "Sunrise over Mumbai" },
  { id: 15, src: "/images/mumbai_132.jpg", alt: "Sunset over the river and city" },
  { id: 16, src: "/images/mumbai_184.jpg", alt: "Skyline from the Sea Link" },
  { id: 17, src: "/images/mumbai_174.jpg", alt: "Rainy Mumbai road" },
  { id: 18, src: "/images/mumbai_100.jpg", alt: "Dusk street under a lamp" },
  { id: 19, src: "/images/mumbai_195.jpg", alt: "Palms and flyover at dusk" },
  { id: 20, src: "/images/mumbai_205.jpg", alt: "Golden building at night" },
  { id: 21, src: "/images/mumbai_251.jpg", alt: "Blue night buildings" },
  { id: 22, src: "/images/mumbai_214.jpg", alt: "Streetlamp at night" },
  { id: 23, src: "/images/mumbai_028.jpg", alt: "Lit temple entrance at night" },
  { id: 24, src: "/images/mumbai_257.jpg", alt: "Rainy station platform" },
  { id: 25, src: "/images/mumbai_169.jpg", alt: "Waterfall in the green hills" },
  { id: 26, src: "/images/mumbai_278.jpg", alt: "Pink clouds over the hills" },
  { id: 27, src: "/images/mumbai_021.jpg", alt: "Plateau cliff view" },
  { id: 28, src: "/images/mumbai_046.jpg", alt: "Ganpati pandal" },
  { id: 29, src: "/images/mumbai_183.jpg", alt: "Skyline from the Sea Link bridge" },
  { id: 30, src: "/images/mumbai_165.jpg", alt: "Green meadow under clouds" },
  { id: 31, src: "/images/IMG_20260925_174754574.jpg", alt: "Procession crowd" },
  { id: 32, src: "/images/IMG_20260927_190251042.jpg", alt: "Metro mirror" },
  { id: 33, src: "/images/IMG_20250615_102804104.jpg", alt: "Mountain trail sunrise" },
  { id: 34, src: "/images/IMG_20250615_103053915.jpg", alt: "Mumbai street corner" },
  { id: 35, src: "/images/IMG_20250615_105538363_HDR.jpg", alt: "Trek campsite" },
  { id: 36, src: "/images/IMG-20220718-WA0020.jpg", alt: "City skyline" },
  { id: 37, src: "/images/IMG-20230218-WA0035.jpg", alt: "Summit view" },
  { id: 38, src: "/images/IMG-20230218-WA0056.jpg", alt: "Street vendor" },
  { id: 39, src: "/images/soham.jpeg", alt: "Portrait" },
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
              className="rounded-lg bg-card overflow-hidden break-inside-avoid"
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Photography;
