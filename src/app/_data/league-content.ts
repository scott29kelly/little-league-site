export type IconName =
  | "calendar"
  | "camera"
  | "chevron"
  | "clipboard"
  | "diamond"
  | "external"
  | "field"
  | "mail"
  | "megaphone"
  | "people"
  | "shield"
  | "sponsor";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type RegistrationLink = {
  label: string;
  href: string;
};

export type QuickAction = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  isExternal?: boolean;
};

export type RegistrationCard = {
  title: string;
  copy: string;
};

export type SeasonDate = {
  date: string;
  label: string;
};

export type Division = {
  name: string;
  ages: string;
  summary: string;
};

export type FieldLocation = {
  name: string;
  address: string;
  details: string;
  parking: string;
};

export type Sponsor = {
  name: string;
  href: string;
  logoSrc: string;
  role: string;
  message: string;
  isPresenting?: boolean;
};

export type GalleryPhoto = {
  title: string;
  caption: string;
  imageSrc: string;
  alt: string;
  featured?: boolean;
};

export type VolunteerRole = {
  icon: IconName;
  title: string;
  copy: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type GameDayNotice = {
  status: string;
  updatedAt: string;
  note: string;
};

export const leagueName = "Middletown-Neshaminy Baseball";
export const leagueShortName = "Middletown-Neshaminy";
export const leagueTagline =
  "Youth baseball for families across Middletown Township and the Neshaminy community.";
export const leagueLocation =
  "Middletown Township, Bucks County, PA | Mailing: PO Box 511, Levittown, PA 19058";
export const leagueContactEmail = "MNBaseball215@gmail.com";
export const facebookUrl = "https://www.facebook.com/364224146774920";

export const siteNavItems: SiteNavItem[] = [
  { label: "Registration", href: "/registration" },
  { label: "Schedule & Fields", href: "/season" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
];

export const footerLinks: SiteNavItem[] = [
  { label: "Registration", href: "/registration" },
  { label: "Schedule & Fields", href: "/season" },
  { label: "Field locations", href: "/season#fields" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Volunteer", href: "/sponsors#volunteer" },
  { label: "Family FAQ", href: "/faq" },
];

export const registrationLink: RegistrationLink = {
  label: "Register in Sports Connect",
  href: "https://leagues.bluesombrero.com/Default.aspx?tabid=2112957",
};

export const gameDayNotice: GameDayNotice = {
  status: "Today's games are on as scheduled",
  updatedAt: "Updated today at 2:15 PM",
  note: "If weather changes, coaches will send team-specific updates.",
};

export const quickActions: QuickAction[] = [
  {
    title: "Register",
    description: "Open the Sports Connect registration page.",
    href: registrationLink.href,
    icon: "clipboard",
    isExternal: true,
  },
  {
    title: "Schedule & fields",
    description: "Find season dates, divisions, and field locations.",
    href: "/season",
    icon: "calendar",
  },
  {
    title: "Game-day update",
    description: "Check whether today's games are still scheduled.",
    href: "/#today",
    icon: "megaphone",
  },
  {
    title: "Volunteer",
    description: "Help coach, prep fields, or cover a game-day shift.",
    href: "/sponsors#volunteer",
    icon: "people",
  },
];

export const registrationCards: RegistrationCard[] = [
  {
    title: "Who can play",
    copy: "Programs are listed by league division. Choose the closest fit during registration and the league will confirm placement.",
  },
  {
    title: "What to have ready",
    copy: "Player birth date, parent contact details, uniform sizes, and volunteer availability.",
  },
  {
    title: "After signup",
    copy: "Families receive evaluation details, team placement updates, and coach messages from the league.",
  },
];

export const registrationSteps: RegistrationCard[] = [
  {
    title: "Review league information",
    copy: "Check divisions, season timing, and field locations before starting the registration form.",
  },
  {
    title: "Complete Sports Connect registration",
    copy: "Official signups, waivers, family account details, and records stay in Sports Connect.",
  },
  {
    title: "Watch for league follow-up",
    copy: "After signup, families receive evaluation times, team placement notes, and coach messages.",
  },
];

export const seasonDates: SeasonDate[] = [
  { date: "January", label: "Spring registration opens" },
  { date: "February", label: "Player evaluations" },
  { date: "March", label: "Teams and coaches announced" },
  { date: "April", label: "Opening Day ceremonies" },
  { date: "May", label: "Picture Day and sponsor recognition" },
  { date: "June", label: "Playoffs and closing weekend" },
];

export const seasonTimelineCaption =
  "Sample season timeline - final dates will be posted when confirmed.";

export const divisions: Division[] = [
  {
    name: "Dunkin",
    ages: "Intro division",
    summary: "First swings, simple fielding, short games, and parent help.",
  },
  {
    name: "Rookies",
    ages: "Development division",
    summary: "Early game play focused on confidence, teamwork, and fundamentals.",
  },
  {
    name: "Minors",
    ages: "Player-pitch division",
    summary: "A stronger baseball structure with more live play and skill-building.",
  },
  {
    name: "Majors",
    ages: "Advanced Little League division",
    summary: "Competitive baseball for players ready for bigger game situations.",
  },
  {
    name: "Babe Ruth",
    ages: "Older youth division",
    summary: "A larger-field experience for older players continuing in baseball.",
  },
];

export const fieldLocations: FieldLocation[] = [
  {
    name: "MAA @ Twin Oaks Park",
    address: "Twin Oaks Drive & Towpath Road, Levittown, PA",
    details: "Primary complex for league games and events.",
    parking: "Use marked park parking areas and follow posted field signs.",
  },
  {
    name: "Walter Miller Elementary",
    address: "10 Cobalt Ridge Drive S, Levittown, PA",
    details: "School field used for practices and selected games.",
    parking: "Park in school-approved areas only and keep fire lanes clear.",
  },
  {
    name: "Carl Sandburg Fields",
    address: "30 Harmony Road, Levittown, PA",
    details: "School-area fields used by assigned divisions.",
    parking: "Use available school parking and avoid blocking neighborhood streets.",
  },
  {
    name: "Penndel",
    address: "Penndel, PA",
    details: "Away or shared field location for selected games.",
    parking: "Check coach messages for exact entrance and parking details.",
  },
  {
    name: "Schweitzer",
    address: "30 Harmony Road area, Levittown, PA",
    details: "Practice and game field used during the regular season.",
    parking: "Use posted school or field-lot parking where available.",
  },
  {
    name: "Everitt",
    address: "Levittown, PA",
    details: "Practice and game field used by assigned teams.",
    parking: "Confirm field entrance and parking notes with your coach.",
  },
];

export const sponsors: Sponsor[] = [
  {
    name: "Dougherty Funeral Home",
    href: "https://www.doughertyfuneralhome.com/",
    logoSrc: "/images/sponsor-dougherty.png",
    role: "Community sponsor",
    message: "Supporting local families and league traditions.",
    isPresenting: true,
  },
  {
    name: "McHale's",
    href: "https://mchales.net/",
    logoSrc: "/images/sponsor-mchales.png",
    role: "Community sponsor",
    message: "Helping make game day possible for players and families.",
  },
  {
    name: "Rep. Brian Fitzpatrick",
    href: "https://fitzpatrick.house.gov/",
    logoSrc: "/images/sponsor-fitzpatrick.png",
    role: "Community sponsor",
    message: "Recognizing the volunteers and families behind the season.",
  },
  {
    name: "Chick-fil-A Oxford Valley Rd",
    href: "https://www.cfaoxfordvalleyroad.com/",
    logoSrc: "/images/sponsor-chick-fil-a.png",
    role: "Community sponsor",
    message: "Backing the local game-day experience.",
  },
];

export const sponsorInquiryHref = `mailto:${leagueContactEmail}?subject=Middletown-Neshaminy%20Baseball%20sponsor%20inquiry`;

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: "Warmups before first pitch",
    caption: "Players get loose before a spring game.",
    imageSrc: "/images/gallery/gallery-warmups.png",
    alt: "Youth baseball players warming up on the grass before a game.",
    featured: true,
  },
  {
    title: "Dugout talk",
    caption: "Coach and players review the next inning.",
    imageSrc: "/images/gallery/gallery-dugout.png",
    alt: "Youth baseball players listening to a coach in the dugout.",
    featured: true,
  },
  {
    title: "Field crew",
    caption: "Volunteers prepare the infield before games.",
    imageSrc: "/images/gallery/gallery-field-crew.png",
    alt: "Volunteers raking and lining a baseball field before a game.",
    featured: true,
  },
  {
    title: "At the plate",
    caption: "Game action from behind the fence.",
    imageSrc: "/images/gallery/gallery-action.png",
    alt: "A youth baseball player swings during a game from behind a fence.",
  },
  {
    title: "Opening Day",
    caption: "Teams line up for the start of the season.",
    imageSrc: "/images/gallery/gallery-opening-day.png",
    alt: "Youth baseball players walking onto a field during opening day.",
  },
  {
    title: "Practice reps",
    caption: "Fielding work during an afternoon practice.",
    imageSrc: "/images/gallery/gallery-practice.png",
    alt: "Youth baseball players spread across a field for practice.",
  },
];

export const volunteerRoles: VolunteerRole[] = [
  {
    icon: "people",
    title: "Coach or assistant coach",
    copy: "Help run practices, support players, and keep teams organized.",
  },
  {
    icon: "field",
    title: "Field setup",
    copy: "Help rake, line, and reset fields before or after games.",
  },
  {
    icon: "shield",
    title: "Game-day shifts",
    copy: "Cover scoreboard, snack stand, events, or other league needs.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I register my player?",
    answer:
      "Use the Register button to open Middletown-Neshaminy Baseball registration in Sports Connect. Official signups, waivers, and family account details stay there.",
  },
  {
    question: "Which division should my child play in?",
    answer:
      "Start with your player's league age and experience level. If you are unsure, register for the closest fit and a league coordinator can help confirm placement.",
  },
  {
    question: "How are weather updates handled?",
    answer:
      "The homepage shows a simple game-day notice. Coaches may also send team-specific updates when weather, travel, or field-use decisions affect a game.",
  },
  {
    question: "Where can I find field locations?",
    answer:
      "Use the Schedule & Fields page for field names, addresses, parking notes, and location details.",
  },
  {
    question: "Can my business sponsor a team?",
    answer:
      "Yes. Local businesses can support teams, field care, equipment, and league events. Use the Sponsors page to start a sponsorship inquiry.",
  },
];
