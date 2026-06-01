"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type IconName =
  | "calendar"
  | "chevron"
  | "clipboard"
  | "diamond"
  | "field"
  | "mail"
  | "megaphone"
  | "people"
  | "shield"
  | "sponsor";

type FieldStatus = "Open" | "Limited" | "Closed";
type FieldFilter = FieldStatus | "All";

type Field = {
  name: string;
  address: string;
  status: FieldStatus;
  note: string;
};

type QuickAction = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

type Division = {
  name: string;
  ages: string;
  summary: string;
};

type SponsorTier = {
  name: string;
  emphasis: string;
  benefits: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

const quickActions: QuickAction[] = [
  {
    title: "Start registration",
    description: "Send families to the approved league platform.",
    href: "#platform",
    icon: "clipboard",
  },
  {
    title: "Check field status",
    description: "See what is open before driving across town.",
    href: "#fields",
    icon: "field",
  },
  {
    title: "Find the schedule",
    description: "Surface key dates and division links fast.",
    href: "#season",
    icon: "calendar",
  },
  {
    title: "Support the league",
    description: "Show sponsors where their support appears.",
    href: "#sponsors",
    icon: "sponsor",
  },
];

const fields: Field[] = [
  {
    name: "Memorial Field",
    address: "123 Park Ave",
    status: "Open",
    note: "Games on time",
  },
  {
    name: "Pinewood Field",
    address: "456 Pine St",
    status: "Limited",
    note: "Use batting cages only",
  },
  {
    name: "Riverside Field",
    address: "789 River Rd",
    status: "Closed",
    note: "Infield drying",
  },
  {
    name: "Northview Field",
    address: "321 Northview Dr",
    status: "Open",
    note: "Practice slots available",
  },
];

const seasonDates = [
  { date: "Feb 12", label: "Registration opens" },
  { date: "Mar 02", label: "Skills evaluations" },
  { date: "Mar 18", label: "Coach meeting" },
  { date: "Apr 06", label: "Opening weekend" },
];

const divisions: Division[] = [
  {
    name: "T-Ball",
    ages: "Ages 4-5",
    summary: "First swings, soft instruction, and parent-friendly scheduling.",
  },
  {
    name: "Minors",
    ages: "Ages 6-8",
    summary: "Skill-building games with clear practice expectations.",
  },
  {
    name: "Majors",
    ages: "Ages 9-11",
    summary: "Competitive play with teamwork and sportsmanship at the center.",
  },
  {
    name: "Softball",
    ages: "Ages 6-12",
    summary: "A dedicated path for players building confidence and game sense.",
  },
];

const sponsorTiers: SponsorTier[] = [
  {
    name: "Grand Slam",
    emphasis: "Top site placement",
    benefits: ["Homepage logo", "Sponsor spotlight", "Opening day recognition"],
  },
  {
    name: "Home Run",
    emphasis: "Season-long visibility",
    benefits: ["Sponsor page listing", "Team mention", "Social-ready blurb"],
  },
  {
    name: "Community Partner",
    emphasis: "Local support",
    benefits: ["Directory listing", "Thank-you placement", "Board-approved copy"],
  },
];

const faqs: FAQ[] = [
  {
    question: "Does this replace SportsConnect?",
    answer:
      "No. The website gives families a clearer public starting point while official registration, volunteer records, and league operations stay in the approved platform.",
  },
  {
    question: "Can this adapt when PlayMetrics is ready?",
    answer:
      "Yes. Platform links and parent instructions are kept in one place so the league can update the public path without rebuilding the whole site.",
  },
  {
    question: "Can sponsors be shown safely during a screen share?",
    answer:
      "Yes. The site can show recognition levels, logos, benefits, and contact steps while private planning details stay off screen.",
  },
];

const fieldFilters: FieldFilter[] = ["All", "Open", "Limited", "Closed"];

export default function Home() {
  const [fieldFilter, setFieldFilter] = useState<FieldFilter>("All");
  const [openFaq, setOpenFaq] = useState<string>(faqs[0].question);

  const visibleFields = useMemo(() => {
    if (fieldFilter === "All") {
      return fields;
    }

    return fields.filter((field) => field.status === fieldFilter);
  }, [fieldFilter]);

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <QuickActions />
      <PlatformSection />
      <SeasonSection />
      <FieldsSection
        activeFilter={fieldFilter}
        fields={visibleFields}
        onFilterChange={setFieldFilter}
      />
      <SponsorsSection />
      <VolunteerSection />
      <FAQSection openFaq={openFaq} onToggle={setOpenFaq} />
      <Footer />
    </main>
  );
}

function Header() {
  const navItems = [
    { label: "Season", href: "#season" },
    { label: "Fields", href: "#fields" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-white shadow-[0_18px_60px_oklch(20%_0.04_253_/_0.18)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/25 bg-white/10 shadow-inner">
            <Icon name="diamond" className="h-7 w-7 text-white" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-[0.04em]">
              Hometown
            </span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-red-200">
              Youth Baseball
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-extrabold text-white/82 lg:flex">
          {navItems.map((item) => (
            <a
              className="transition hover:text-white focus-visible:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-action px-5 text-sm font-extrabold text-white shadow-[0_10px_30px_oklch(46%_0.17_29_/_0.28)] transition hover:bg-action-dark"
          href="#platform"
        >
          Register
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[780px] bg-navy text-white">
      <Image
        src="/images/youth-baseball-hero.png"
        alt="Youth baseball players warming up on a local field at sunset."
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(20%_0.07_254_/_0.93)_0%,oklch(20%_0.07_254_/_0.76)_36%,oklch(20%_0.07_254_/_0.24)_68%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 pb-20 pt-20 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.45fr)] lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(4.6rem,11vw,10rem)] leading-[0.78] tracking-[0.01em] text-white">
            One clear home base for the season
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-white/88 sm:text-2xl">
            A parent-friendly public site that keeps registration in the
            approved league platform and puts schedules, fields, sponsors, and
            volunteer steps where families expect them.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href="#platform"
            >
              Preview registration path
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href="#fields"
            >
              Check field status
            </a>
          </div>
        </div>

        <aside className="self-end rounded-[2rem] border border-white/16 bg-navy/78 p-5 shadow-[0_24px_80px_oklch(13%_0.04_253_/_0.35)] backdrop-blur-md">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-field-soft text-field">
              <Icon name="shield" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-lg font-black text-white">
                Built around the approved platform
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/78">
                SportsConnect links can stay active now, with copy and link
                paths ready to adjust as PlayMetrics comes online.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm font-bold">
            {["No duplicate registration", "Field updates above the fold", "Sponsor recognition kept client-safe"].map(
              (item) => (
                <div
                  className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3"
                  key={item}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-field" />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <a
            className="group rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_18px_50px_oklch(20%_0.04_253_/_0.1)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_oklch(20%_0.04_253_/_0.16)]"
            href={action.href}
            key={action.title}
          >
            <div className="flex items-start justify-between gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay-soft text-navy">
                <Icon name={action.icon} className="h-6 w-6" />
              </span>
              <Icon
                name="chevron"
                className="mt-3 h-5 w-5 text-action transition group-hover:translate-x-1"
              />
            </div>
            <h2 className="mt-6 text-xl font-black text-navy">
              {action.title}
            </h2>
            <p className="mt-2 leading-7 text-muted">{action.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Platform strategy
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            SportsConnect today. PlayMetrics ready later.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            The website becomes the public front door. Official registration,
            volunteer records, and operations remain inside the approved league
            platform.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Public site",
              copy: "Clear pages for families, sponsors, volunteers, and board contacts.",
            },
            {
              title: "Approved platform",
              copy: "Registration buttons route to the league system instead of creating a duplicate workflow.",
            },
            {
              title: "Transition layer",
              copy: "Platform links and instructions can be updated as PlayMetrics integration progresses.",
            },
          ].map((item, index) => (
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

function SeasonSection() {
  return (
    <section id="season" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy p-5 text-white shadow-[0_30px_90px_oklch(20%_0.04_253_/_0.2)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Season hub
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              What parents need, before they ask.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-white/76">
              Put dates, announcements, division details, and status updates in
              one place so families stop hunting through old emails.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-6 text-navy">
              <div className="flex items-center gap-3">
                <Icon name="calendar" className="h-6 w-6 text-action" />
                <h3 className="text-lg font-black">Upcoming dates</h3>
              </div>
              <div className="mt-5 divide-y divide-line">
                {seasonDates.map((item) => (
                  <div
                    className="flex items-center justify-between gap-5 py-3"
                    key={item.date}
                  >
                    <span className="font-black text-action">{item.date}</span>
                    <span className="text-right font-bold text-muted">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.5rem] bg-field-soft p-6 text-navy">
              <div className="flex items-center gap-3">
                <Icon name="megaphone" className="h-6 w-6 text-field" />
                <h3 className="text-lg font-black">Latest announcement</h3>
              </div>
              <p className="mt-5 text-2xl font-black leading-8">
                Coaches meeting moves indoors
              </p>
              <p className="mt-3 leading-7 text-navy/72">
                All head coaches and assistants should check the board email
                for the updated location and safe-sport reminders.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {divisions.map((division) => (
            <article
              className="rounded-[1.35rem] border border-white/12 bg-white/9 p-5"
              key={division.name}
            >
              <p className="font-display text-4xl text-white">
                {division.name}
              </p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-clay-soft">
                {division.ages}
              </p>
              <p className="mt-4 leading-7 text-white/76">{division.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldsSection({
  activeFilter,
  fields,
  onFilterChange,
}: {
  activeFilter: FieldFilter;
  fields: Field[];
  onFilterChange: (filter: FieldFilter) => void;
}) {
  return (
    <section id="fields" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Field status
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Fewer texts. Faster field calls.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {fieldFilters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className={`min-h-11 rounded-full px-5 text-sm font-black transition ${
                  activeFilter === filter
                    ? "bg-navy text-white"
                    : "border border-line bg-surface text-navy hover:border-navy/40"
                }`}
                key={filter}
                onClick={() => onFilterChange(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fields.map((field) => (
            <article
              className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_16px_45px_oklch(20%_0.04_253_/_0.08)]"
              key={field.name}
            >
              <StatusPill status={field.status} />
              <h3 className="mt-8 text-2xl font-black text-navy">
                {field.name}
              </h3>
              <p className="mt-2 font-semibold text-muted">{field.address}</p>
              <p className="mt-5 rounded-2xl bg-surface-strong px-4 py-3 text-sm font-extrabold text-navy">
                {field.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: FieldStatus }) {
  const styles: Record<FieldStatus, string> = {
    Open: "bg-field-soft text-field",
    Limited: "bg-clay-soft text-navy",
    Closed: "bg-red-100 text-action",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${styles[status]}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Sponsors
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Make community support visible.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Sponsors can see where they appear while private planning details
            stay out of the screen-share view.
          </p>
        </div>

        <div className="grid gap-4">
          {sponsorTiers.map((tier) => (
            <article
              className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_18px_50px_oklch(20%_0.04_253_/_0.08)]"
              key={tier.name}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-5xl leading-none text-navy">
                    {tier.name}
                  </h3>
                  <p className="mt-2 font-black text-action">
                    {tier.emphasis}
                  </p>
                </div>
                <span className="rounded-full bg-clay-soft px-4 py-2 text-sm font-black text-navy">
                  Client-safe details
                </span>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {tier.benefits.map((benefit) => (
                  <li
                    className="flex items-center gap-3 rounded-2xl bg-surface-strong px-4 py-3 text-sm font-extrabold text-navy"
                    key={benefit}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-field" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerSection() {
  return (
    <section id="volunteer" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-clay-soft p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Volunteer flow
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              The board should not have to explain every step twice.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: "people" as const,
                title: "Coach or help",
                copy: "Route interested parents to the right volunteer next step.",
              },
              {
                icon: "mail" as const,
                title: "Contact the board",
                copy: "Make league contacts easy to find and easy to update.",
              },
              {
                icon: "shield" as const,
                title: "Safe and clear",
                copy: "Use approved background-check and safety language.",
              },
            ].map((item) => (
              <article
                className="rounded-[1.35rem] bg-surface p-6 shadow-[0_14px_35px_oklch(20%_0.04_253_/_0.08)]"
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

function FAQSection({
  openFaq,
  onToggle,
}: {
  openFaq: string;
  onToggle: (question: string) => void;
}) {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Parent-ready answers
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Plain language, not portal confusion.
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.question;

            return (
              <article
                className="overflow-hidden rounded-[1.5rem] border border-line bg-surface"
                key={faq.question}
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-xl font-black text-navy"
                  onClick={() => onToggle(isOpen ? "" : faq.question)}
                  type="button"
                >
                  {faq.question}
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-soft text-navy transition ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    <Icon name="chevron" className="h-5 w-5" />
                  </span>
                </button>
                {isOpen ? (
                  <p className="border-t border-line px-6 py-5 leading-8 text-muted">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-4xl leading-none">
            Hometown Youth Baseball
          </p>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            A cleaner public home for registration paths, season updates,
            field status, sponsor recognition, and volunteer next steps.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Quick links
          </h2>
          <div className="mt-4 grid gap-3 text-white/75">
            {["Season", "Fields", "Sponsors", "Volunteer", "FAQ"].map((item) => (
              <a
                className="font-bold transition hover:text-white"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Platform note
          </h2>
          <p className="mt-4 leading-7 text-white/75">
            Registration and official league records remain powered by the
            approved league platform.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Icon({ name, className }: { name: IconName; className?: string }) {
  const commonProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...commonProps}>
          <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
          <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...commonProps}>
          <path d="m9 5 7 7-7 7" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...commonProps}>
          <path d="M9 4h6l1 2h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2l1-2Z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...commonProps}>
          <path d="M12 3 21 12 12 21 3 12 12 3Z" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );
    case "field":
      return (
        <svg {...commonProps}>
          <path d="M12 4 20 12 12 20 4 12 12 4Z" />
          <path d="M12 8v8M8 12h8" />
          <path d="M8.5 8.5 15.5 15.5M15.5 8.5 8.5 15.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...commonProps}>
          <path d="M4 14h3l9 4V6l-9 4H4v4Z" />
          <path d="M7 14v4M19 9.5c1 .7 1.5 1.5 1.5 2.5S20 13.8 19 14.5" />
        </svg>
      );
    case "people":
      return (
        <svg {...commonProps}>
          <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M20 20v-2a3 3 0 0 0-2-2.83M17 5.2a3 3 0 0 1 0 5.6" />
          <path d="M4 20v-2a3 3 0 0 1 2-2.83M7 5.2a3 3 0 0 0 0 5.6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "sponsor":
      return (
        <svg {...commonProps}>
          <path d="M8 12h8M12 8v8" />
          <path d="M5 7h14v10H5z" />
          <path d="M7 7V5h10v2M7 17v2h10v-2" />
        </svg>
      );
    default:
      return null;
  }
}
