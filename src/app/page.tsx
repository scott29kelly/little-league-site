import Image from "next/image";
import Link from "next/link";
import { Icon } from "./_components/Icon";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { SponsorLogoCloud } from "./_components/SponsorLogoCloud";
import {
  galleryPhotos,
  gameDayNotice,
  leagueName,
  leagueMission,
  leagueTagline,
  leagueUpdates,
  quickActions,
  registrationLink,
  registrationStatus,
  seasonDates,
  sponsorInquiryHref,
} from "./_data/league-content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <Hero />
      <QuickActions />
      <LeagueUpdates />
      <TodayNotice />
      <SeasonPreview />
      <HomeGalleryPreview />
      <SponsorBand />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[680px] bg-navy text-white"
    >
      <Image
        src="/images/youth-baseball-hero.png"
        alt="Youth baseball players warming up on a local field at sunset."
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(20%_0.07_254_/_0.93)_0%,oklch(20%_0.07_254_/_0.78)_42%,oklch(20%_0.07_254_/_0.28)_74%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.4fr)] lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-red-100">
            {registrationStatus}
          </p>
          <h1 className="font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.84] tracking-[0.01em] text-white">
            {leagueName}
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-white/88 sm:text-2xl">
            {leagueTagline} Find registration, schedules, field locations,
            sponsors, volunteer opportunities, and game-day updates in one
            place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href={registrationLink.href}
              rel="noreferrer"
              target="_blank"
            >
              Register in Sports Connect
            </a>
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href="/season"
            >
              View schedule & fields
            </Link>
          </div>
        </div>

        <aside className="hidden self-end rounded-[1.5rem] border border-white/16 bg-navy/84 p-5 shadow-[0_24px_80px_oklch(13%_0.04_253_/_0.35)] backdrop-blur-md lg:block">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-field-soft text-field">
              <Icon name="megaphone" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-lg font-black text-white">
                {gameDayNotice.status}
              </h2>
              <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.12em] text-clay-soft">
                {gameDayNotice.updatedAt}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                {gameDayNotice.note}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function LeagueUpdates() {
  return (
    <section className="px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            League updates
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            What families need now.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            {leagueMission}
          </p>
        </div>
        <div className="grid gap-4">
          {leagueUpdates.map((update) => {
            const cardContent = (
              <>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-action">
                  {update.label}
                </p>
                <h3 className="mt-2 text-2xl font-black text-navy">
                  {update.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{update.copy}</p>
              </>
            );

            if (update.href && update.isExternal) {
              return (
                <a
                  className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)] transition hover:-translate-y-1"
                  href={update.href}
                  key={update.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  {cardContent}
                </a>
              );
            }

            if (update.href) {
              return (
                <Link
                  className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)] transition hover:-translate-y-1"
                  href={update.href}
                  key={update.title}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <article
                className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)]"
                key={update.title}
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const cardClass =
            "group rounded-[1.25rem] border border-line bg-surface p-5 shadow-[0_18px_50px_oklch(20%_0.04_253_/_0.1)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_oklch(20%_0.04_253_/_0.16)]";
          const cardContent = (
            <>
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay-soft text-navy">
                  <Icon name={action.icon} className="h-6 w-6" />
                </span>
                <Icon
                  name={action.isExternal ? "external" : "chevron"}
                  className="mt-3 h-5 w-5 text-action transition group-hover:translate-x-1"
                />
              </div>
              <h2 className="mt-6 text-xl font-black text-navy">
                {action.title}
              </h2>
              <p className="mt-2 leading-7 text-muted">
                {action.description}
              </p>
            </>
          );

          if (action.isExternal) {
            return (
              <a
                className={cardClass}
                href={action.href}
                key={action.title}
                rel="noreferrer"
                target="_blank"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link className={cardClass} href={action.href} key={action.title}>
              {cardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function TodayNotice() {
  return (
    <section id="today" className="px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_18px_55px_oklch(20%_0.04_253_/_0.08)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Game-day update
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] text-navy sm:text-6xl">
              {gameDayNotice.status}
            </h2>
          </div>
          <div className="rounded-[1.25rem] bg-field-soft px-5 py-4 text-navy">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-field">
              {gameDayNotice.updatedAt}
            </p>
            <p className="mt-2 text-lg font-extrabold leading-8">
              {gameDayNotice.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeasonPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Season at a glance
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Dates, divisions, and field information.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Check the season page for the full calendar, division overview, and
            field-location details.
          </p>
          <Link
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.22)] transition hover:-translate-y-0.5 hover:bg-action-dark"
            href="/season"
          >
            Open schedule & fields
          </Link>
        </div>

        <article className="rounded-[1.5rem] bg-navy p-6 text-white shadow-[0_22px_70px_oklch(20%_0.04_253_/_0.16)]">
          <div className="flex items-center gap-3">
            <Icon name="calendar" className="h-6 w-6 text-clay-soft" />
            <h3 className="text-lg font-black">Upcoming dates</h3>
          </div>
          <div className="mt-5 divide-y divide-white/14">
            {seasonDates.slice(0, 5).map((item) => (
              <div
                className="flex items-center justify-between gap-5 py-3"
                key={`${item.date}-${item.label}`}
              >
                <span className="font-black text-clay-soft">{item.date}</span>
                <span className="text-right font-bold text-white/76">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function HomeGalleryPreview() {
  const previewPhotos = galleryPhotos.filter((photo) => photo.featured).slice(0, 3);

  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Photos
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              Around the fields.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/76">
              A few recent moments from practices, games, and league events.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-extrabold text-navy transition hover:bg-clay-soft"
            href="/gallery"
          >
            View full gallery
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {previewPhotos.map((photo) => (
            <Link
              className="group overflow-hidden rounded-[1.25rem] border border-white/12 bg-white/9 shadow-[0_20px_60px_oklch(13%_0.04_253_/_0.24)]"
              href="/gallery"
              key={photo.title}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  alt={photo.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={photo.imageSrc}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-white">
                  {photo.title}
                </h3>
                <p className="mt-2 leading-7 text-white/72">{photo.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorBand() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] bg-surface-strong p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Sponsors
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] text-navy sm:text-6xl">
            Thank you to our community sponsors.
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-muted">
            Local support helps with teams, fields, equipment, and league
            events throughout the season.
          </p>
          <a
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.22)] transition hover:-translate-y-0.5 hover:bg-action-dark"
            href={sponsorInquiryHref}
          >
            Become a Sponsor
          </a>
        </div>
        <SponsorLogoCloud />
      </div>
    </section>
  );
}
