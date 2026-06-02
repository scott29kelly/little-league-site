import Image from "next/image";
import type { Sponsor } from "../_data/league-content";
import { sponsors } from "../_data/league-content";

type SponsorLogoCloudProps = {
  variant?: "feature" | "compact";
};

export function SponsorLogoCloud({
  variant = "feature",
}: SponsorLogoCloudProps) {
  const isCompact = variant === "compact";
  const logoSponsors = sponsors.filter(
    (sponsor): sponsor is Sponsor & { logoSrc: string } =>
      Boolean(sponsor.logoSrc),
  );

  return (
    <div
      className={
        isCompact
          ? "grid grid-cols-2 gap-3 sm:grid-cols-4"
          : "grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      }
    >
      {logoSponsors.map((sponsor) => (
        <a
          aria-label={`Visit ${sponsor.name}`}
          className={`group grid place-items-center rounded-[1.35rem] border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-navy/20 ${
            isCompact
              ? "min-h-24"
              : sponsor.isPresenting
                ? "min-h-36 shadow-[0_18px_55px_oklch(20%_0.04_253_/_0.12)]"
                : "min-h-32 shadow-[0_14px_40px_oklch(20%_0.04_253_/_0.08)]"
          }`}
          href={sponsor.href}
          key={sponsor.name}
          rel="noreferrer"
          target="_blank"
        >
          <span
            className={`relative block w-full ${
              isCompact ? "h-14" : "h-20"
            }`}
          >
            <Image
              alt={`${sponsor.name} logo`}
              className="object-contain transition group-hover:scale-[1.03]"
              fill
              sizes={isCompact ? "160px" : "280px"}
              src={sponsor.logoSrc}
            />
          </span>
          {!isCompact ? (
            <span className="mt-3 text-center text-xs font-black uppercase tracking-[0.14em] text-action">
              {sponsor.role}
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}
