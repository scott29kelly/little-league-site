import Link from "next/link";
import {
  facebookUrl,
  footerLinks,
  leagueContactEmail,
  leagueLocation,
  leagueName,
  registrationLink,
  sponsorInquiryHref,
} from "../_data/league-content";
import { SponsorLogoCloud } from "./SponsorLogoCloud";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_0.72fr_0.78fr]">
          <div>
            <p className="font-display text-4xl leading-none">{leagueName}</p>
            <p className="mt-4 max-w-md leading-7 text-white/72">
              {leagueLocation}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-action px-5 text-sm font-extrabold text-white transition hover:bg-action-dark"
                href={registrationLink.href}
                rel="noreferrer"
                target="_blank"
              >
                Register in Sports Connect
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/24 px-5 text-sm font-extrabold text-white/86 transition hover:bg-white/10 hover:text-white"
                href={facebookUrl}
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Quick links
            </h2>
            <div className="mt-4 grid gap-3 text-white/75">
              {footerLinks.map((item) => (
                <Link
                  className="font-bold transition hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Registration note
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Official registration, waivers, and league records stay in Sports
              Connect. This public site helps families find the right next step.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-white/24 px-5 text-sm font-extrabold text-white/86 transition hover:bg-white/10 hover:text-white"
              href={`mailto:${leagueContactEmail}`}
            >
              Email the league
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
                Community sponsors
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/68">
                Thank you to the local organizations supporting players,
                volunteers, fields, and league events.
              </p>
            </div>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold text-navy transition hover:bg-clay-soft"
              href={sponsorInquiryHref}
            >
              Become a Sponsor
            </a>
          </div>
          <div className="mt-5">
            <SponsorLogoCloud variant="compact" />
          </div>
        </div>
      </div>
    </footer>
  );
}
