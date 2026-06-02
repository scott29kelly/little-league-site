import type { Metadata } from "next";
import { Bebas_Neue, Nunito_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Middletown-Neshaminy Baseball",
  description:
    "Registration, schedules, field locations, league contacts, sponsors, volunteer details, and family updates for Middletown-Neshaminy Baseball.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
