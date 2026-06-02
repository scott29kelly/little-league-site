import type { Metadata } from "next";
import { Icon } from "../_components/Icon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import {
  divisions,
  fieldLocations,
  gameDayNotice,
  registrationLink,
  seasonDates,
  seasonTimelineCaption,
} from "../_data/league-content";

export const metadata: Metadata = {
  title: "Schedule & Fields | Middletown-Neshaminy Baseball",
  description:
    "Season dates, baseball divisions, game-day updates, and field locations for Middletown-Neshaminy Baseball families.",
};

export default function SeasonPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <SeasonHero />
      <DivisionSection />
      <FieldLocationsSection />
      <SiteFooter />
    </main>
  );
}

function SeasonHero() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Schedule & fields
            </p>
            <h1 className="mt-4 font-display text-7xl leading-[0.85] sm:text-8xl lg:text-9xl">
              Season information.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/76 sm:text-xl">
              Find season milestones, division information, the current
              game-day notice, and field-location details.
            </p>
            <a
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href={registrationLink.href}
              rel="noreferrer"
              target="_blank"
            >
              Register in Sports Connect
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-6 text-navy">
              <div className="flex items-center gap-3">
                <Icon name="calendar" className="h-6 w-6 text-action" />
                <h2 className="text-lg font-black">Season timeline</h2>
              </div>
              <div className="mt-5 divide-y divide-line">
                {seasonDates.map((item) => (
                  <div
                    className="flex items-center justify-between gap-5 py-3"
                    key={`${item.date}-${item.label}`}
                  >
                    <span className="font-black text-action">{item.date}</span>
                    <span className="text-right font-bold text-muted">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-bold leading-6 text-muted">
                {seasonTimelineCaption}
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-field-soft p-6 text-navy">
              <div className="flex items-center gap-3">
                <Icon name="megaphone" className="h-6 w-6 text-field" />
                <h2 className="text-lg font-black">Game-day update</h2>
              </div>
              <p className="mt-5 text-2xl font-black leading-8">
                {gameDayNotice.status}
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-field">
                {gameDayNotice.updatedAt}
              </p>
              <p className="mt-4 leading-7 text-navy/72">
                {gameDayNotice.note}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function DivisionSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Divisions
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Baseball divisions for every stage.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-muted">
              Division placement depends on league age, experience, and final
              roster needs. Team schedules are confirmed by coaches, with
              travel tryout details announced by league email and Facebook.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {divisions.map((division) => (
            <article
              className="rounded-[1.25rem] border border-line bg-surface p-5 shadow-[0_14px_35px_oklch(20%_0.04_253_/_0.08)]"
              key={division.name}
            >
              <p className="font-display text-4xl text-navy">
                {division.name}
              </p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-action">
                {division.ages}
              </p>
              {division.practices || division.games ? (
                <div className="mt-4 grid gap-2 text-sm font-extrabold text-navy/78">
                  {division.practices ? <p>{division.practices}</p> : null}
                  {division.games ? <p>{division.games}</p> : null}
                </div>
              ) : null}
              <p className="mt-4 leading-7 text-muted">{division.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldLocationsSection() {
  return (
    <section
      id="fields"
      className="scroll-mt-32 px-4 pb-24 pt-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Field locations
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Where we play.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-muted">
              Use these locations for planning. Teams should always confirm
              exact field assignments with their coach or posted schedule.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fieldLocations.map((field) => (
            <article
              className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)]"
              key={field.name}
            >
              <Icon name="field" className="h-8 w-8 text-field" />
              <h3 className="mt-6 text-2xl font-black text-navy">
                {field.name}
              </h3>
              <p className="mt-2 font-extrabold text-action">
                {field.address}
              </p>
              <p className="mt-4 leading-7 text-muted">{field.details}</p>
              {field.fields ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {field.fields.map((fieldName) => (
                    <span
                      className="rounded-full bg-field-soft px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-field"
                      key={`${field.name}-${fieldName}`}
                    >
                      {fieldName}
                    </span>
                  ))}
                </div>
              ) : null}
              <p className="mt-5 rounded-2xl bg-surface-strong px-4 py-3 text-sm font-extrabold leading-6 text-navy">
                {field.parking}
              </p>
              <a
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-5 text-sm font-extrabold text-white transition hover:bg-action-dark"
                href={field.mapHref}
                rel="noreferrer"
                target="_blank"
              >
                Open map
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
