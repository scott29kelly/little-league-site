import Image from "next/image";
import Link from "next/link";
import {
  leagueShortName,
  registrationLink,
  siteNavItems,
} from "../_data/league-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-white shadow-[0_18px_60px_oklch(20%_0.04_253_/_0.18)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          href="/"
          aria-label="Home"
        >
          <span className="relative h-[3.25rem] w-14 shrink-0 sm:h-14 sm:w-16">
            <Image
              alt="Middletown-Neshaminy Baseball logo"
              className="object-contain"
              fill
              sizes="64px"
              src="/images/middletown-neshaminy-logo.png"
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-lg tracking-[0.04em] sm:text-2xl">
              {leagueShortName}
            </span>
            <span className="hidden text-xs font-extrabold uppercase tracking-[0.2em] text-red-200 sm:block">
              Chartered Little League
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-extrabold text-white/82 lg:flex">
          {siteNavItems.map((item) => (
            <Link
              className="transition hover:text-white focus-visible:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-action px-5 text-sm font-extrabold text-white shadow-[0_10px_30px_oklch(46%_0.17_29_/_0.28)] transition hover:bg-action-dark"
          href={registrationLink.href}
          rel="noreferrer"
          target="_blank"
        >
          Register
        </a>
      </div>

      <nav
        aria-label="Main pages"
        className="flex flex-wrap gap-2 px-4 pb-3 sm:px-6 lg:hidden"
      >
        {siteNavItems.map((item) => (
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-extrabold text-white/86 transition hover:bg-white/14 hover:text-white"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
