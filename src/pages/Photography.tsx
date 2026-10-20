import { useState } from "react";
import { Camera, Maximize2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageIntro from "@/components/shared/PageIntro";
import PageCta from "@/components/shared/PageCta";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type PhotoCategory = "Mountains" | "Mumbai" | "People";

const basePhotos = [
  ["/images/trip_012.jpg", "Dhauladhar peaks at dusk"],
  ["/images/trip_013.jpg", "Mountains above Naddi"],
  ["/images/trip_011.jpg", "Village beneath mountains and clouds"],
  ["/images/trip_015.jpg", "Sunset over the hills"],
  ["/images/trip_010.jpg", "Bare trees and a hillside cabin"],
  ["/images/trip_060.jpg", "City lights seen from the mountain at night"],
  ["/images/trip_066.jpg", "Dharamshala cricket stadium"],
  ["/images/trip_101.jpg", "Snowy mountain stream"],
  ["/images/trip_061.jpg", "Snow peak from the plateau"],
  ["/images/trip_150.jpg", "Forested hills from the rooftop"],
  ["/images/trip_151.jpg", "Morning sun over the valley"],
  ["/images/trip_099.jpg", "Misty mountain plateau"],
  ["/images/trip_003.jpg", "A pause beside the rail tracks"],
  ["/images/mumbai_052.jpg", "Hazy Mumbai skyline across the sea"],
  ["/images/mumbai_121.jpg", "Sunrise over Mumbai"],
  ["/images/mumbai_132.jpg", "Sunset over the water and city"],
  ["/images/mumbai_184.jpg", "Skyline from the Sea Link"],
  ["/images/mumbai_174.jpg", "A rainy Mumbai road"],
  ["/images/mumbai_100.jpg", "Dusk street beneath a lamp"],
  ["/images/mumbai_195.jpg", "Palms and flyover at dusk"],
  ["/images/mumbai_205.jpg", "Golden building at night"],
  ["/images/mumbai_251.jpg", "Blue night buildings"],
  ["/images/mumbai_214.jpg", "Streetlamp after dark"],
  ["/images/mumbai_028.jpg", "Lit temple entrance at night"],
  ["/images/mumbai_257.jpg", "Rainy station platform"],
  ["/images/mumbai_169.jpg", "Waterfall in the green hills"],
  ["/images/mumbai_278.jpg", "Pink clouds over the hills"],
  ["/images/mumbai_021.jpg", "View from a plateau cliff"],
  ["/images/mumbai_046.jpg", "Ganpati pandal"],
  ["/images/mumbai_183.jpg", "Sea Link bridge and skyline"],
  ["/images/mumbai_165.jpg", "Green meadow beneath clouds"],
  ["/images/IMG_20260925_174754574.jpg", "A procession moving through the crowd"],
  ["/images/IMG_20260927_190251042.jpg", "A reflection inside the metro"],
  ["/images/IMG_20250615_102804104.jpg", "Mountain trail at sunrise"],
  ["/images/IMG_20250615_103053915.jpg", "A Mumbai street corner"],
  ["/images/IMG_20250615_105538363_HDR.jpg", "Trek campsite"],
  ["/images/IMG-20220718-WA0020.jpg", "City skyline"],
  ["/images/IMG-20230218-WA0035.jpg", "Looking out from the summit"],
  ["/images/IMG-20230218-WA0056.jpg", "Street vendor at work"],
  ["/images/soham.jpeg", "Portrait of Soham"],
] as const;

const photos = basePhotos.map(([src, alt], index) => ({
  id: index,
  src,
  alt,
  category: (index < 13 ? "Mountains" : index < 31 ? "Mumbai" : "People") as PhotoCategory,
}));

const filters = ["All", "Mountains", "Mumbai", "People"] as const;

const Photography = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  const visiblePhotos = active === "All" ? photos : photos.filter((photo) => photo.category === active);

  return (
    <PageLayout
      title="Photography"
      description="Photographs by Soham Panchal from mountain trails, Mumbai streets, treks, and everyday moments."
    >
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <PageIntro
          kicker="Photography · A visual notebook"
          title={<>Proof that I was paying attention<span className="text-primary">.</span></>}
          lead="I photograph the places that slow me down: mountain light, wet Mumbai streets, faces in motion, and the quiet details between destinations."
          aside={<span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"><Camera className="h-3.5 w-3.5 text-primary" />{photos.length} frames</span>}
        />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y border-border py-5">
          <p className="text-sm text-muted-foreground">Browse the visual archive</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photographs">
            {filters.map((filter) => {
              const count = filter === "All" ? photos.length : photos.filter((photo) => photo.category === filter).length;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={active === filter}
                  className={`rounded-full px-4 py-2 text-xs transition-colors ${active === filter ? "bg-foreground text-background" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
                >
                  {filter} <span className="ml-1 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 columns-2 gap-3 space-y-3 md:columns-3">
          {visiblePhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelected(photo)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg bg-card text-left"
              aria-label={`Open photograph: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full transition duration-500 group-hover:scale-[1.025]" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-end justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-left transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <span className="text-xs leading-relaxed text-white">{photo.alt}</span>
                <Maximize2 className="h-3.5 w-3.5 shrink-0 text-white/75" />
              </span>
            </button>
          ))}
        </div>

        <PageCta
          eyebrow="Beyond the frame"
          title="Every photograph begins with going somewhere."
          description="Continue into the field notes from Bhandardara, Triund, Mumbai walks, and the places that made these images possible."
          to="/explore"
          label="Follow the trail"
        />
      </section>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] w-[94vw] max-w-6xl border-white/10 bg-black p-2 text-white sm:rounded-lg">
          <DialogTitle className="sr-only">{selected?.alt ?? "Selected photograph"}</DialogTitle>
          <DialogDescription className="sr-only">Expanded view of a photograph from Soham Panchal's visual notebook.</DialogDescription>
          {selected ? <img src={selected.src} alt={selected.alt} className="max-h-[86vh] w-full object-contain" /> : null}
          {selected ? <p className="px-3 pb-2 text-xs text-white/65">{selected.alt} · {selected.category}</p> : null}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Photography;
