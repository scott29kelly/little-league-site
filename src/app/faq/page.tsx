import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../_components/Icon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { faqs, registrationLink } from "../_data/league-content";

export const metadata: Metadata = {
  title: "Family FAQ | Middletown-Neshaminy Baseball",
  description:
    "Plain-language answers for Middletown-Neshaminy Baseball families.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <FAQHero />
      <FAQList />
      <SiteFooter />
    </main>
  );
}

function FAQHero() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Family FAQ
          </p>
          <h1 className="mt-4 font-display text-7xl leading-[0.85] text-white sm:text-8xl lg:text-9xl">
            Quick answers before first pitch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/76 sm:text-xl">
            Find answers about registration, divisions, weather updates, field
            locations, sponsorship, and volunteering.
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
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href="/season#fields"
            >
              View field locations
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: "clipboard" as const,
              title: "Official records",
              copy: "Registration, waivers, and family account details stay in Sports Connect.",
            },
            {
              icon: "megaphone" as const,
              title: "Game-day updates",
              copy: "The homepage carries the current game-day notice, and coaches can send team-specific updates.",
            },
          ].map((item) => (
            <article
              className="rounded-[1.5rem] bg-white p-6 text-navy shadow-[0_22px_70px_oklch(13%_0.04_253_/_0.16)]"
              key={item.title}
            >
              <Icon name={item.icon} className="h-8 w-8 text-field" />
              <h2 className="mt-6 text-2xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQList() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Parent questions
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            The answers families ask for most.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Quick reference for the questions families ask most often.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              className="group overflow-hidden rounded-[1.5rem] border border-line bg-surface"
              key={faq.question}
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-xl font-black text-navy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-soft text-navy transition group-open:rotate-90">
                  <Icon name="chevron" className="h-5 w-5" />
                </span>
              </summary>
              <p className="border-t border-line px-6 py-5 leading-8 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
