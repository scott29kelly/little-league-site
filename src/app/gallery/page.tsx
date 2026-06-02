import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { galleryPhotos, leagueContactEmail } from "../_data/league-content";

export const metadata: Metadata = {
  title: "Photo Gallery | Middletown-Neshaminy Baseball",
  description:
    "Game-day photos, practice moments, and league event images for Middletown-Neshaminy Baseball.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <GalleryHero />
      <GalleryGrid />
      <SiteFooter />
    </main>
  );
}

function GalleryHero() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
          Photo gallery
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-7xl leading-[0.85] sm:text-8xl lg:text-9xl">
          Scenes from the season.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/76 sm:text-xl">
          Photos from games, practices, volunteer work, and league events.
        </p>
        <p className="mt-5 max-w-2xl rounded-[1.25rem] border border-white/14 bg-white/8 px-5 py-4 text-sm font-bold leading-6 text-white/70">
          For player privacy, captions avoid full names, contact details, and
          schedule pairings. To request a photo be removed, email{" "}
          <a
            className="font-black text-white underline decoration-white/35 underline-offset-4"
            href={`mailto:${leagueContactEmail}`}
          >
            {leagueContactEmail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function GalleryGrid() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((photo) => (
          <article
            className="group overflow-hidden rounded-[1.25rem] border border-line bg-surface shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)]"
            key={photo.title}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                alt={photo.alt}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={photo.imageSrc}
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-black text-navy">{photo.title}</h2>
              <p className="mt-2 leading-7 text-muted">{photo.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
