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

type Sponsor = {
  name: string;
  initials: string;
  role: string;
  message: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type RegistrationLink = {
  label: string;
  href: string;
};

// Replace this with the league's direct PlayMetrics registration URL when supplied.
const registrationLink: RegistrationLink = {
  label: "Find registration in PlayMetrics",
  href: "https://playmetrics.com/find-my-club",
};

const quickActions: QuickAction[] = [
  {
    title: "Register for spring",
    description: "Sign up players ages 4-12 through PlayMetrics.",
    href: "#registration",
    icon: "clipboard",
  },
  {
    title: "View the schedule",
    description: "Find evaluations, team week, opening day, and picture day.",
    href: "#season",
    icon: "calendar",
  },
  {
    title: "Check field status",
    description: "See today's open, limited, and closed fields before you leave.",
    href: "#fields",
    icon: "field",
  },
  {
    title: "Volunteer on game day",
    description: "Coach, work the stand, help with fields, or join event setup.",
    href: "#volunteer",
    icon: "people",
  },
];

const fields: Field[] = [
  {
    name: "Memorial Park Field 1",
    address: "123 Park Avenue",
    status: "Open",
    note: "6:00 PM games are on",
  },
  {
    name: "Pinewood Practice Field",
    address: "456 Pine Street",
    status: "Limited",
    note: "Cages open, infield closed",
  },
  {
    name: "Riverside Softball Field",
    address: "789 River Road",
    status: "Closed",
    note: "Standing water near first base",
  },
  {
    name: "Northview Field 2",
    address: "321 Northview Drive",
    status: "Open",
    note: "Practice starts at 5:30 PM",
  },
];

const seasonDates = [
  { date: "Feb 12", label: "Spring registration opens" },
  { date: "Mar 02", label: "Player evaluations" },
  { date: "Mar 18", label: "Teams announced" },
  { date: "Apr 06", label: "Opening day parade" },
  { date: "May 11", label: "Picture day at Memorial Park" },
];

const divisions: Division[] = [
  {
    name: "T-Ball",
    ages: "Ages 4-5",
    summary: "First swings, short practices, and lots of parent help.",
  },
  {
    name: "Rookies",
    ages: "Ages 6-8",
    summary: "Coach pitch games focused on confidence and fundamentals.",
  },
  {
    name: "Minors",
    ages: "Ages 9-10",
    summary: "Player pitch games with steady skill-building and teamwork.",
  },
  {
    name: "Softball",
    ages: "Ages 7-12",
    summary: "Fast-growing teams for players learning game sense and leadership.",
  },
];

const sponsors: Sponsor[] = [
  {
    name: "Riverfront Dental",
    initials: "RD",
    role: "Opening Day Sponsor",
    message: "Helping every player start the season with a smile.",
  },
  {
    name: "Pine Street Market",
    initials: "PM",
    role: "Snack Stand Partner",
    message: "Keeping families fueled between doubleheaders.",
  },
  {
    name: "Hometown Hardware",
    initials: "HH",
    role: "Field Crew Supporter",
    message: "Backing the volunteers who keep the fields ready.",
  },
];

const faqs: FAQ[] = [
  {
    question: "How do I register my player?",
    answer:
      "Use the Register button to find the league in PlayMetrics. Official signups, waivers, and family account details stay in the approved league platform.",
  },
  {
    question: "Which division should my child play in?",
    answer:
      "Start with your player's league age and experience level. If you are unsure, register for the closest division and a league coordinator will help place your player.",
  },
  {
    question: "What happens when a field closes?",
    answer:
      "Field status is updated here first. Coaches may also send team messages when a practice or game changes because of weather.",
  },
  {
    question: "Can my business sponsor a team?",
    answer:
      "Yes. Local businesses can support teams, field care, equipment, and league events. Send a note to the sponsorship chair and the league will share current options directly.",
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
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <QuickActions />
      <RegistrationSection />
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
    { label: "Register", href: "#registration" },
    { label: "Schedule", href: "#season" },
    { label: "Fields", href: "#fields" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-white shadow-[0_18px_60px_oklch(20%_0.04_253_/_0.18)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-2 sm:gap-3"
          href="#top"
          aria-label="Home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/25 bg-white/10 shadow-inner sm:h-12 sm:w-12">
            <Icon
              name="diamond"
              className="h-6 w-6 text-white sm:h-7 sm:w-7"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.04em] sm:text-2xl">
              Hometown
            </span>
            <span className="hidden text-xs font-extrabold uppercase tracking-[0.2em] text-red-200 sm:block">
              Baseball & Softball
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
          href="#registration"
        >
          Register
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[720px] bg-navy text-white"
    >
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

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.45fr)] lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-red-100">
            Spring 2026 registration is open
          </p>
          <h1 className="font-display text-[clamp(3.6rem,12vw,9rem)] leading-[0.82] tracking-[0.01em] text-white">
            Hometown Youth Baseball
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-white/88 sm:text-2xl">
            Baseball and softball for local players ages 4-12. Find registration,
            season dates, team updates, field status, and game-day volunteer
            opportunities in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.35)] transition hover:-translate-y-0.5 hover:bg-action-dark"
              href="#registration"
            >
              Register for spring
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-white/12 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
              href="#season"
            >
              View season calendar
            </a>
          </div>
        </div>

        <aside className="hidden self-end rounded-[2rem] border border-white/16 bg-navy/78 p-5 shadow-[0_24px_80px_oklch(13%_0.04_253_/_0.35)] backdrop-blur-md lg:block">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-field-soft text-field">
              <Icon name="megaphone" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-lg font-black text-white">
                Tonight at the park
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Field status was checked at 2:30 PM. Coaches will send team
                messages if weather changes before first pitch.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm font-bold">
            {[
              "Rookies play at Memorial Park at 6:00 PM",
              "Softball practice is on Field 2 at 5:30 PM",
              "Snack stand opens 30 minutes before games",
            ].map((item) => (
              <div
                className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3"
                key={item}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-field" />
                <span>{item}</span>
              </div>
            ))}
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

function RegistrationSection() {
  return (
    <section
      id="registration"
      className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Registration
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Spring signups are open.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            New and returning families can register players, update contact
            information, and review volunteer steps through PlayMetrics.
          </p>
          <a
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-action px-7 text-base font-extrabold text-white shadow-[0_16px_40px_oklch(46%_0.17_29_/_0.22)] transition hover:-translate-y-0.5 hover:bg-action-dark"
            href={registrationLink.href}
            rel="noreferrer"
            target="_blank"
          >
            {registrationLink.label}
          </a>
          <p className="mt-4 max-w-lg text-sm font-bold leading-6 text-muted">
            Swap this fallback for the league&apos;s direct PlayMetrics
            registration link when the board provides it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Who can play",
              copy: "Programs are available for T-Ball, baseball, and softball players ages 4-12.",
            },
            {
              title: "What to have ready",
              copy: "Player birth date, parent contact details, uniform sizes, and volunteer availability.",
            },
            {
              title: "After signup",
              copy: "Families receive evaluation times, team updates, and coach messages from the league.",
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
    <section
      id="season"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy p-5 text-white shadow-[0_30px_90px_oklch(20%_0.04_253_/_0.2)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
              Season calendar
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              Mark the big dates now.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-white/76">
              The spring season starts with evaluations, team announcements,
              and opening day, then settles into weeknight practices and weekend
              games.
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
                Opening day parade starts at 9:00 AM
              </p>
              <p className="mt-3 leading-7 text-navy/72">
                Players should arrive in uniform 20 minutes early. Teams will
                line up behind the third-base dugout at Memorial Park.
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
    <section
      id="fields"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Field status
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Today&apos;s field calls.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-muted">
              Check before you pack the car. Status updates are posted here
              first, then coaches follow up with team-specific details.
            </p>
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
    <section
      id="sponsors"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Community sponsors
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Thank you to the local businesses behind the season.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Sponsor support helps with uniforms, field care, equipment, and
            family events throughout the spring.
          </p>
        </div>

        <div className="grid gap-4">
          {sponsors.map((sponsor) => (
            <article
              className="grid gap-5 rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_18px_50px_oklch(20%_0.04_253_/_0.08)] sm:grid-cols-[96px_1fr]"
              key={sponsor.name}
            >
              <div className="grid h-24 w-24 place-items-center rounded-[1.35rem] bg-clay-soft font-display text-5xl text-navy">
                {sponsor.initials}
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-action">
                  {sponsor.role}
                </p>
                <h3 className="mt-2 font-display text-5xl leading-none text-navy">
                  {sponsor.name}
                </h3>
                <p className="mt-4 leading-7 text-muted">{sponsor.message}</p>
              </div>
            </article>
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
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-clay-soft p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
              Volunteers
            </p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
              Help make game day happen.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-navy/72">
              Every family can help in a way that fits their schedule, from
              coaching to field setup to a single snack stand shift.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: "people" as const,
                title: "Coach a team",
                copy: "Practice plans and age-group support help new coaches get started.",
              },
              {
                icon: "mail" as const,
                title: "Join a shift",
                copy: "Pick a snack stand, scoreboard, or opening day slot that fits your week.",
              },
              {
                icon: "shield" as const,
                title: "Complete safety steps",
                copy: "Volunteer checks and training stay in the approved league process.",
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
    <section id="faq" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-action">
            Parent questions
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-navy sm:text-7xl">
            Quick answers before first pitch.
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
            Hometown Youth Baseball & Softball
          </p>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            Serving young players and families across Hometown, Pinewood,
            Riverside, and Northview.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Quick links
          </h2>
          <div className="mt-4 grid gap-3 text-white/75">
            {[
              { label: "Register", href: "#registration" },
              { label: "Schedule", href: "#season" },
              { label: "Fields", href: "#fields" },
              { label: "Sponsors", href: "#sponsors" },
              { label: "Volunteer", href: "#volunteer" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                className="font-bold transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-clay-soft">
            Registration note
          </h2>
          <p className="mt-4 leading-7 text-white/75">
            Registration and official league records remain in PlayMetrics or
            the approved league platform. This public site helps families find
            the right next step.
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
