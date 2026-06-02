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
  practices?: string;
  games?: string;
};

export type FieldLocation = {
  name: string;
  address: string;
  details: string;
  parking: string;
  mapHref: string;
  fields?: string[];
};

export type Sponsor = {
  name: string;
  href: string;
  logoSrc?: string;
  role: string;
  message: string;
  isPresenting?: boolean;
};

export type SponsorOpportunity = {
  title: string;
  copy: string;
  icon: IconName;
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

export type LeagueUpdate = {
  title: string;
  label: string;
  copy: string;
  href?: string;
  isExternal?: boolean;
};

export type BoardMember = {
  name: string;
  role: string;
};

export const leagueName = "Middletown-Neshaminy Baseball";
export const leagueShortName = "Middletown-Neshaminy";
export const leagueTagline =
  "Volunteer-run youth baseball for players ages 4-16 across Levittown and Lower Bucks County.";
export const leagueLocation =
  "Based in Levittown, PA | Mailing: PO Box 511, Levittown, PA 19058";
export const leagueContactEmail = "MNBaseball215@gmail.com";
export const associationName = "Middletown Athletic Association";
export const associationContactEmail = "MAARegistration@outlook.com";
export const associationWebsite = "https://www.middletownaa.org/";
export const facebookUrl = "https://www.facebook.com/MiddletownAA";
export const wildBaseballFacebookUrl =
  "https://www.facebook.com/profile.php?id=61562316094614";
export const leagueMission =
  "Middletown Athletic Association gives local players a safe, fun place to build confidence, develop character, learn the game, and grow as community-minded teammates.";
export const serviceAreas = [
  "Levittown",
  "Morrisville",
  "Penndel",
  "Langhorne",
  "Newtown",
];

export const siteNavItems: SiteNavItem[] = [
  { label: "Registration", href: "/registration" },
  { label: "Schedule & Fields", href: "/season" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
];

export const footerLinks: SiteNavItem[] = [
  { label: "Registration", href: "/registration" },
  { label: "Schedule & Fields", href: "/season" },
  { label: "Field locations", href: "/season#fields" },
  { label: "About the league", href: "/about" },
  { label: "Board contacts", href: "/about#board" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Volunteer", href: "/sponsors#volunteer" },
  { label: "Family FAQ", href: "/faq" },
];

export const registrationLink: RegistrationLink = {
  label: "Register in Sports Connect",
  href: "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/83299&app_name=MN+Baseball+and+Middletown+Softball&portalid=83299&instancekey=leagues",
};

export const registrationStatus =
  "2026 travel baseball registration is open in Sports Connect.";

export const gameDayNotice: GameDayNotice = {
  status: "This week's games are on as scheduled",
  updatedAt: "Updated today at 2:15 PM",
  note: "If weather changes, coaches will send team-specific updates.",
};

export const leagueUpdates: LeagueUpdate[] = [
  {
    title: "2026 travel baseball registration",
    label: "Registration",
    copy: "Travel baseball registration is open through Sports Connect. In-house programs will appear there when the league posts active divisions.",
    href: registrationLink.href,
    isExternal: true,
  },
  {
    title: "Tryout updates",
    label: "Travel baseball",
    copy: "Travel tryout dates, times, and locations are announced through the league Facebook page and league email.",
    href: facebookUrl,
    isExternal: true,
  },
  {
    title: "Family Fun Day",
    label: "Community event",
    copy: "MAA promotes family events with games, vendors, snack stand activity, and field-day fun for the community.",
    href: facebookUrl,
    isExternal: true,
  },
];

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
    description: "Check whether this week's games are still scheduled.",
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
    copy: "Baseball programs serve players ages 4-16, with divisions based on league age, experience, and final roster needs.",
  },
  {
    title: "What to have ready",
    copy: "Player birth date, parent contact details, uniform sizes, and volunteer availability.",
  },
  {
    title: "Finish payment",
    copy: "A player is not rostered until the Sports Connect registration and payment steps are complete.",
  },
];

export const registrationSteps: RegistrationCard[] = [
  {
    title: "Review league information",
    copy: "Check divisions, travel notes, season timing, and field locations before starting the registration form.",
  },
  {
    title: "Sign in to Sports Connect",
    copy: "Create or use your Sports Connect account for official signups, waivers, family details, and league records.",
  },
  {
    title: "Watch for league follow-up",
    copy: "Families receive evaluation details, tryout updates, team placement notes, and coach messages from the league.",
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
    name: "T-Ball",
    ages: "Ages 4 & 5",
    practices: "1 day per week",
    games: "Saturday games",
    summary: "Two-inning games for players starting to learn baseball basics.",
  },
  {
    name: "Coach Pitch",
    ages: "Ages 5 & 6",
    practices: "1 day per week",
    games: "Saturday games",
    summary: "Three-inning games for players who completed T-Ball or are ready for coach pitch.",
  },
  {
    name: "Rookies",
    ages: "Ages 7 & 8",
    practices: "Practice and games",
    games: "Tuesday, Thursday, and Saturday",
    summary: "A mix of coach pitch and player pitch for developing game confidence.",
  },
  {
    name: "Minors",
    ages: "Ages 9 & 10",
    summary: "Player-pitch baseball with more structure and stronger skill development.",
  },
  {
    name: "Majors",
    ages: "Ages 11 & 12",
    summary: "Competitive Little League baseball for players ready for bigger game situations.",
  },
  {
    name: "Juniors",
    ages: "Ages 13 & 14",
    summary: "Player-pitch baseball on a 60-90 field for older players.",
  },
  {
    name: "Seniors",
    ages: "Ages 15 & 16",
    summary: "A 60-90 field experience for players continuing through the older youth level.",
  },
];

export const fieldLocations: FieldLocation[] = [
  {
    name: "MAA @ Twin Oaks Park",
    address: "2897 Trenton Road, Levittown, PA 19057",
    details: "Primary MAA complex for baseball games, events, snack stand activity, and league operations.",
    parking: "Use the main MAA parking areas and follow posted field signs.",
    mapHref:
      "https://www.google.com/maps/dir//Middletown+Athletic+Association,+2897+Trenton+Rd,+Levittown,+PA",
    fields: ["Dunkin", "Rookies", "Majors", "Babe Ruth", "Minors"],
  },
  {
    name: "Walter Miller Elementary",
    address: "10 Cobalt Ridge Drive S, Levittown, PA 19057",
    details: "School fields used for younger divisions and selected practices or games.",
    parking: "Park in school-approved areas only and keep fire lanes clear.",
    mapHref:
      "https://www.google.com/maps?q=10+Cobalt+Ridge+Dr+S,+Levittown,+PA+19057",
    fields: ["Miller Full Size", "Miller U12", "Miller U10", "Miller U8", "Miller U6"],
  },
  {
    name: "Carl Sandburg Fields",
    address: "30 Harmony Road, Levittown, PA 19056",
    details: "School-area fields used by assigned teams during the regular season.",
    parking: "Use available school parking and avoid blocking neighborhood streets.",
    mapHref:
      "https://www.google.com/maps?q=30+Harmony+Road,+Levittown,+PA+19056",
    fields: ["Carl Sandburg Gym"],
  },
  {
    name: "Penndel",
    address: "Pfc John Delola Avenue, Penndel, PA 19047",
    details: "Shared field location used for selected games and league activity.",
    parking: "Check coach messages for exact entrance and parking details.",
    mapHref:
      "https://www.google.com/maps?q=Pfc+John+Delola+Avenue,+Penndel,+PA+19047",
    fields: ["Field #1", "Field #2", "Field #3"],
  },
  {
    name: "Albert Schweitzer Elementary",
    address: "30 Harmony Road, Levittown, PA 19056",
    details: "Practice and game field used by assigned teams.",
    parking: "Use posted school or field-lot parking where available.",
    mapHref:
      "https://www.google.com/maps/place/Albert+Schweitzer+Elementary+School",
    fields: ["Schweitzer"],
  },
  {
    name: "Samuel Everitt School",
    address: "145 Forsythia Drive South, Levittown, PA 19056",
    details: "Practice and game field used by assigned teams.",
    parking: "Confirm field entrance and parking notes with your coach.",
    mapHref: "https://www.google.com/maps/place/Samuel+Everitt+School",
    fields: ["Everitt", "Eve"],
  },
  {
    name: "Pearl S. Buck Elementary",
    address: "143 Top Road, Levittown, PA 19056",
    details: "School field location used for selected practices and games.",
    parking: "Use school-approved parking and confirm field access with your coach.",
    mapHref:
      "https://www.google.com/maps/place/Pearl+S.+Buck+Elementary+School",
    fields: ["Pearl Buck"],
  },
  {
    name: "Dunkin Field",
    address: "2897 Trenton Road, Levittown, PA 19057",
    details: "Field at the MAA complex used for younger baseball activity.",
    parking: "Use the main MAA parking areas and follow posted field signs.",
    mapHref:
      "https://www.google.com/maps/dir//Middletown+Athletic+Association,+2897+Trenton+Rd,+Levittown,+PA",
    fields: ["Field Dunkin"],
  },
];

export const sponsors: Sponsor[] = [
  {
    name: "Fred Beans Ford Langhorne",
    href: "https://www.fredbeansfordlanghorne.com/",
    logoSrc: "/images/sponsor-fred-beans-ford-langhorne.png",
    role: "Platinum sponsor",
    message: "Helping local players and volunteers keep the season moving.",
    isPresenting: true,
  },
  {
    name: "Brian Fitzpatrick One Community",
    href: "https://fitzpatrick.house.gov/",
    logoSrc: "/images/sponsor-brian-fitzpatrick.png",
    role: "Platinum sponsor",
    message: "Recognizing the families and volunteers behind the league.",
    isPresenting: true,
  },
  {
    name: "McHale's",
    href: "https://mchales.net/",
    logoSrc: "/images/sponsor-mchales-full.jpg",
    role: "Platinum sponsor",
    message: "Helping make game day possible for players and families.",
    isPresenting: true,
  },
  {
    name: "A&E Lawns Inc.",
    href: "https://www.aelawnsinc.com/",
    logoSrc: "/images/sponsor-ae-lawns.png",
    role: "MVP sponsor",
    message: "Supporting fields, families, and local youth sports.",
  },
  {
    name: "Dairy Delite Woodbourne",
    href: "https://www.facebook.com/profile.php?id=100066367496521",
    logoSrc: "/images/sponsor-dairy-delite.jpg",
    role: "MVP sponsor",
    message: "Backing the community traditions that make game day special.",
  },
  {
    name: "Diana R Delivers",
    href: "http://www.dianardelivers.com/",
    logoSrc: "/images/sponsor-diana-r-delivers.jpg",
    role: "MVP sponsor",
    message: "Helping keep the season active for players and families.",
  },
  {
    name: "Mawson and Mawson",
    href: "https://www.mawsonandmawson.com/",
    logoSrc: "/images/sponsor-mawson-and-mawson.png",
    role: "MVP sponsor",
    message: "Supporting the volunteer effort behind local baseball.",
  },
  {
    name: "Neshaminy Kids Club",
    href: "https://neshaminykids.org/",
    logoSrc: "/images/sponsor-neshaminy-kids-club.png",
    role: "MVP sponsor",
    message: "Backing youth programs and community connection.",
  },
  {
    name: "Revere Restaurant",
    href: "https://revererestaurant.com/",
    logoSrc: "/images/sponsor-revere-restaurant.png",
    role: "MVP sponsor",
    message: "Supporting local families on and off the field.",
  },
  {
    name: "Verder Scientific",
    href: "https://www.verder-scientific.com/",
    logoSrc: "/images/sponsor-verder-scientific.jpg",
    role: "MVP sponsor",
    message: "Helping create a stronger season for players and volunteers.",
  },
  {
    name: "Patient First",
    href: "https://www.patientfirst.com/locations/eastern-pennsylvania/langhorne",
    logoSrc: "/images/sponsor-patient-first.jpg",
    role: "Community sponsor",
    message: "Supporting youth athletics and local families.",
  },
  {
    name: "Nailed It 2 Cabinets",
    href: "https://nailedit2cabinets.com/",
    logoSrc: "/images/sponsor-nailed-it-2-cabinets.jpg",
    role: "Community sponsor",
    message: "Helping strengthen local programs and community pride.",
  },
  {
    name: "Trash Daddy",
    href: "https://trashdaddy.net/home/",
    logoSrc: "/images/sponsor-trash-daddy.jpg",
    role: "Community sponsor",
    message: "Supporting the local game-day experience.",
  },
  {
    name: "Chick-fil-A Oxford Valley Rd",
    href: "https://www.cfaoxfordvalleyroad.com/",
    logoSrc: "/images/sponsor-chick-fil-a-full.jpg",
    role: "Community sponsor",
    message: "Backing the local game-day experience.",
  },
  {
    name: "Rep. Joe Hogan",
    href: "https://rephogan.com/",
    logoSrc: "/images/sponsor-joe-hogan.png",
    role: "Community sponsor",
    message: "Recognizing Middletown athletes and community sports.",
  },
  {
    name: "Dougherty Funeral Home",
    href: "https://www.doughertyfuneralhome.com/",
    logoSrc: "/images/sponsor-dougherty.png",
    role: "Community sponsor",
    message: "Supporting local families and league traditions.",
  },
];

export const sponsorInquiryHref = `mailto:${associationContactEmail}?subject=Middletown-Neshaminy%20Baseball%20sponsor%20inquiry`;
export const sponsorOpportunityFormHref =
  "https://dt5602vnjxv0c.cloudfront.net/portals/83299/docs/2025%20maa%20sponsorship%20opportunities.pdf";

export const sponsorRecognitionOptions: SponsorOpportunity[] = [
  {
    title: "Field banner recognition",
    copy: "Display a customized banner at the MAA field complex for families and visiting teams to see during the season.",
    icon: "field",
  },
  {
    title: "Team sponsorship recognition",
    copy: "Support a league team with sponsor recognition connected to player uniforms and team communication.",
    icon: "people",
  },
  {
    title: "Website and social recognition",
    copy: "Give local businesses visibility through the public website and league social channels.",
    icon: "megaphone",
  },
  {
    title: "Event and game-day support",
    copy: "Help underwrite community events, special game days, snack stand activity, and field-day needs.",
    icon: "calendar",
  },
];

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

export const boardMembers: BoardMember[] = [
  { role: "MN Baseball President", name: "Ryan Komar" },
  { role: "MN Baseball Treasurer", name: "Kerri Homan" },
  { role: "MN Facilities Manager", name: "Andrew Hoffman" },
  { role: "MN Equipment Manager", name: "Jeff Gilchrist" },
  { role: "Food Services Director", name: "Lauren Ramsden" },
  { role: "Sponsorship Director", name: "Joseph Rosselli" },
  { role: "Purchasing Director", name: "Cesar Ballestar" },
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
      "Start with your player's Little League age and experience level. The league uses divisions from T-Ball through Seniors, and a coordinator can help confirm placement.",
  },
  {
    question: "Is registration complete when I start the form?",
    answer:
      "No. A player is not eligible to be rostered until Sports Connect registration and payment are complete.",
  },
  {
    question: "How does travel baseball work?",
    answer:
      "Travel teams participate in a more competitive program. Tryout dates, times, and locations are announced through league email and the league Facebook page.",
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
