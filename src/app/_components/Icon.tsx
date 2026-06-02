import type { IconName } from "../_data/league-content";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
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
    case "camera":
      return (
        <svg {...commonProps}>
          <path d="M8 7 9.5 4h5L16 7h3a2 2 0 0 1 2 2v10H3V9a2 2 0 0 1 2-2h3Z" />
          <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
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
    case "external":
      return (
        <svg {...commonProps}>
          <path d="M14 4h6v6" />
          <path d="m10 14 10-10" />
          <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
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
