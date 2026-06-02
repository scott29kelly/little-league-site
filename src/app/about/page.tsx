import type { Metadata } from "next";
import {
  associationContactEmail,
  associationName,
  associationWebsite,
  boardMembers,
  facebookUrl,
  leagueContactEmail,
  leagueMission,
  leagueName,
  registrationLink,
  serviceAreas,
  wildBaseballFacebookUrl,
} from "../_data/league-content";
import { Icon } from "../_components/Icon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Middletown-Neshaminy Baseball",
  description:
    "Mission, service area, board contacts, and league information for Middletown-Neshaminy Baseball.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <AboutHero />
      <MissionSection />
      <BoardSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            About the league
          </p>
          <h1 className="mt-4 font-display text-7xl leading-[0.85] text-white sm:text-8xl lg:text-9xl">
            Volunteer-run baseball for local families.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/78 sm:text-xl">
            {leagueName} is part of {associationName}, a local nonprofit youth
            sports organization serving families across Lower Bucks County.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href={registrationLink.href}
              rel="noreferrer"
              target="_blank"
            >
              Register in Sports Connect
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href={facebookUrl}
              rel="noreferrer"
              target="_blank"
            >
              Follow on Facebook
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-white p-6 text-navy shadow-[0_22px_70px_oklch(13%_0.04_253_/_0.16)]">
            <Icon name="people" className="h-8 w-8 text-field" />
            <h2 className="mt-6 text-2xl font-black">Community first</h2>
            <p className="mt-3 leading-7 text-muted">
              Coaches, team parents, field crews, and board members all help
              make the season possible.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-field-soft p-6 text-navy shadow-[0_22px_70px_oklch(13%_0.04_253_/_0.16)]">
            <Icon name="shield" className="h-8 w-8 text-field" />
            <h2 className="mt-6 text-2xl font-black">Safe and organized</h2>
            <p className="mt-3 leading-7 text-navy/72">
              The public site helps families find registration, fields,
              contacts, and game-day updates in one place.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Mission
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Build confidence, character, and love of the game.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            {leagueMission}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_18px_55px_oklch(20%_0.04_253_/_0.08)]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Service area
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                className="rounded-full bg-field-soft px-4 py-2 text-sm font-black uppercase tracking-[0.1em] text-field"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 leading-8 text-muted">
            The association is based at 2897 Trenton Road in Levittown and
            serves families across the nearby Middletown Township community.
          </p>
        </div>
      </div>
    </section>
  );
}

function BoardSection() {
  return (
    <section
      id="board"
      className="scroll-mt-32 bg-clay-soft px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Board contacts
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Public league roles.
          </h2>
          <p className="mt-6 text-lg font-semibold leading-8 text-navy/72">
            These public roles help families route questions to the right part
            of the league.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {boardMembers.map((member) => (
            <article
              className="rounded-[1.25rem] bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)]"
              key={`${member.role}-${member.name}`}
            >
              <p className="text-sm font-black uppercase tracking-[0.14em] text-action">
                {member.role}
              </p>
              <h3 className="mt-3 text-2xl font-black text-navy">
                {member.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Baseball questions",
            copy: leagueContactEmail,
            href: `mailto:${leagueContactEmail}`,
          },
          {
            title: "Association registration",
            copy: associationContactEmail,
            href: `mailto:${associationContactEmail}`,
          },
          {
            title: "MAA website",
            copy: associationWebsite.replace("https://", ""),
            href: associationWebsite,
          },
          {
            title: "Travel baseball updates",
            copy: "MN Wild Baseball Facebook",
            href: wildBaseballFacebookUrl,
          },
        ].map((item) => (
          <a
            className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)] transition hover:-translate-y-1"
            href={item.href}
            key={item.title}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            target={item.href.startsWith("http") ? "_blank" : undefined}
          >
            <Icon name="mail" className="h-8 w-8 text-field" />
            <h2 className="mt-6 text-xl font-black text-navy">
              {item.title}
            </h2>
            <p className="mt-3 break-words font-extrabold leading-7 text-action">
              {item.copy}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
