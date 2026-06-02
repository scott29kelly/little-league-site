import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "../_components/Icon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import {
  sponsorInquiryHref,
  sponsorOpportunityFormHref,
  sponsorRecognitionOptions,
  sponsors,
  volunteerRoles,
} from "../_data/league-content";

export const metadata: Metadata = {
  title: "Sponsors | Middletown-Neshaminy Baseball",
  description:
    "Community sponsors and volunteer opportunities for Middletown-Neshaminy Baseball.",
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <SponsorsHero />
      <SponsorshipOpportunitiesSection />
      <SponsorsSection />
      <VolunteerSection />
      <SiteFooter />
    </main>
  );
}

function SponsorsHero() {
  return (
    <section className="bg-clay-soft px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Sponsors
          </p>
          <h1 className="mt-4 font-display text-7xl leading-[0.85] text-navy sm:text-8xl lg:text-9xl">
            Local support for local baseball.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-navy/72 sm:text-xl">
            Sponsors help keep teams equipped, fields maintained, and league
            events running throughout the season.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.22)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href="#opportunities"
            >
              Sponsorship Options
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-navy/18 bg-white px-7 text-base font-extrabold text-navy transition hover:-translate-y-0.5 hover:border-navy/35"
              href="#sponsors"
            >
              View Sponsors
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-navy p-6 text-white shadow-[0_22px_70px_oklch(20%_0.04_253_/_0.18)]">
            <Icon name="sponsor" className="h-9 w-9 text-clay-soft" />
            <h2 className="mt-6 text-2xl font-black">Sponsor the league</h2>
            <p className="mt-3 leading-7 text-white/76">
              Local businesses can support teams, field care, equipment, and
              league events.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-surface p-6 text-navy shadow-[0_22px_70px_oklch(20%_0.04_253_/_0.12)]">
            <Icon name="people" className="h-9 w-9 text-field" />
            <h2 className="mt-6 text-2xl font-black">Volunteer</h2>
            <p className="mt-3 leading-7 text-muted">
              Families can help with coaching, field setup, scoreboard, snack
              stand shifts, and opening day needs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function SponsorshipOpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="scroll-mt-32 bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Sponsorship opportunities
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
            Support the season without replacing the league platform.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/74">
            MAA offers recognition options for local businesses that want to
            help with teams, fields, equipment, and community events.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.26)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href={sponsorInquiryHref}
            >
              Start a Sponsor Inquiry
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/24 px-7 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white/45"
              href={sponsorOpportunityFormHref}
              rel="noreferrer"
              target="_blank"
            >
              Download Form
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {sponsorRecognitionOptions.map((option) => (
            <article
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_45px_oklch(11%_0.04_253_/_0.22)]"
              key={option.title}
            >
              <Icon name={option.icon} className="h-8 w-8 text-clay-soft" />
              <h3 className="mt-5 text-2xl font-black text-white">
                {option.title}
              </h3>
              <p className="mt-3 leading-7 text-white/72">{option.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Community sponsors
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Thank you to the businesses behind the season.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Sponsor support helps with uniforms, field care, equipment, and
            family events throughout the spring.
          </p>
          <a
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.22)] transition hover:-translate-y-0.5 hover:bg-action-dark"
            href={sponsorInquiryHref}
          >
            Become a Sponsor
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sponsors.map((sponsor) => (
            <a
              className="group flex min-h-[18rem] flex-col rounded-[1.25rem] border border-line bg-surface p-5 shadow-[0_18px_50px_oklch(20%_0.04_253_/_0.08)] transition hover:-translate-y-1 hover:border-navy/20"
              href={sponsor.href}
              key={sponsor.name}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-[1rem] bg-white p-4">
                {sponsor.logoSrc ? (
                  <Image
                    alt={`${sponsor.name} logo`}
                    className="object-contain p-4 transition group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1280px) 260px, (min-width: 640px) 40vw, 90vw"
                    src={sponsor.logoSrc}
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-center text-sm font-black uppercase leading-5 tracking-[0.12em] text-navy">
                    {sponsor.name}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-action">
                  {sponsor.role}
                </p>
                <h3 className="mt-2 break-words text-2xl font-black leading-tight text-navy">
                  {sponsor.name}
                </h3>
                <p className="mt-3 leading-7 text-muted">{sponsor.message}</p>
                <span className="mt-auto pt-5 text-sm font-black uppercase tracking-[0.12em] text-navy/55 transition group-hover:text-action">
                  Visit sponsor
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerSection() {
  return (
    <section
      id="volunteer"
      className="scroll-mt-32 px-4 pb-24 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-navy p-6 text-white sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Volunteers
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              Help make game day happen.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/76">
              Every family can help in a way that fits their schedule, from
              coaching to field setup to a single game-day shift.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {volunteerRoles.map((item) => (
              <article
                className="rounded-[1.25rem] bg-white p-6 text-navy shadow-[0_14px_35px_oklch(13%_0.04_253_/_0.16)]"
                key={item.title}
              >
                <Icon name={item.icon} className="h-8 w-8 text-field" />
                <h3 className="mt-5 text-xl font-black text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
