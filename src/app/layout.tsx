import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const signature = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar Elhfnawy — Cloud, Business & Property",
  description:
    "Omar Elhfnawy builds technology and businesses: cloud & DevOps engineering, founder of Lokaly Egypt, and property consultant at August Real Estate in Cairo.",
  keywords: [
    "Omar Elhfnawy",
    "Cloud Engineer",
    "DevOps",
    "Property Consultant",
    "Real Estate Egypt",
    "Lokaly",
    "Cairo",
  ],
  authors: [{ name: "Omar Elhfnawy" }],
  openGraph: {
    title: "Omar Elhfnawy — Technology, business, growth",
    description:
      "Cloud & DevOps engineer, founder of Lokaly Egypt and property consultant in Cairo.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#150f11",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${hanken.variable} ${signature.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
