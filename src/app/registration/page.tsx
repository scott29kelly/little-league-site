import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../_components/Icon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import {
  divisions,
  registrationCards,
  registrationChannelNote,
  registrationLink,
  registrationStatus,
  registrationSteps,
} from "../_data/league-content";

export const metadata: Metadata = {
  title: "Registration | Middletown-Neshaminy Baseball",
  description:
    "Sports Connect registration guidance for Middletown-Neshaminy Baseball families.",
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <RegistrationHero />
      <RegistrationChecklist />
      <RegistrationChannelNote />
      <DivisionGuide />
      <SiteFooter />
    </main>
  );
}

function RegistrationHero() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Registration
          </p>
          <h1 className="mt-4 font-display text-7xl leading-[0.85] text-white sm:text-8xl lg:text-9xl">
            Register through Sports Connect.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/78 sm:text-xl">
            {registrationStatus} This page helps families understand who can
            play, what to have ready, and where the official registration
            process continues.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href={registrationLink.href}
              rel="noreferrer"
              target="_blank"
            >
              {registrationLink.label}
            </a>
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href="/season"
            >
              Review divisions
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/16 bg-white/9 p-5 shadow-[0_24px_80px_oklch(13%_0.04_253_/_0.35)] sm:p-6">
          <div className="flex items-start gap-4 rounded-[1.5rem] bg-white p-5 text-navy">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay-soft text-navy">
              <Icon name="clipboard" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-xl font-black">
                Sports Connect remains the official system
              </h2>
              <p className="mt-3 leading-7 text-muted">
                Use this site for public guidance. Use Sports Connect for
                registration forms, waivers, family account details, and league
                records.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {registrationSteps.map((step, index) => (
              <article
                className="rounded-[1.25rem] bg-white/8 p-4"
                key={step.title}
              >
                <p className="text-sm font-black uppercase tracking-[0.14em] text-clay-soft">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-white/76">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationChecklist() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Before you register
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Keep the family path simple.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Parents can answer the common pre-registration questions here before
            moving into the approved registration platform.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {registrationCards.map((item, index) => (
            <article
              className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_14px_45px_oklch(20%_0.04_253_/_0.08)]"
              key={item.title}
            >
              <span className="font-display text-6xl leading-none text-clay">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-navy">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationChannelNote() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-field-soft p-6 text-navy sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-field">
            <Icon name="megaphone" className="h-7 w-7" />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-field">
              Registration updates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Watch official league channels.
            </h2>
            <p className="mt-3 max-w-4xl font-semibold leading-7 text-navy/72">
              {registrationChannelNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DivisionGuide() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-clay-soft p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Division guide
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Start with age and experience.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-navy/72">
              Final placement can still be handled by league coordinators after
              registration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((division) => (
              <article
                className="rounded-[1.35rem] bg-surface p-5 shadow-[0_14px_35px_oklch(20%_0.04_253_/_0.08)]"
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
                <p className="mt-4 leading-7 text-muted">
                  {division.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
