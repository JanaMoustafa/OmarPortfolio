import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Omar Elhfnawy — Business, Marketing & Technology",
  description:
    "Omar Elhfnawy uses technology to turn raw ideas into profitable, scalable businesses. Founder of Uni Course and Lokaly, marketer, cloud engineer and property consultant in Cairo.",
  keywords: [
    "Omar Elhfnawy",
    "Entrepreneur",
    "Uni Course",
    "Lokaly",
    "Marketing Agency Egypt",
    "Business Development",
    "Cloud Engineer",
    "Property Consultant",
    "Cairo",
  ],
  authors: [{ name: "Omar Elhfnawy" }],
  openGraph: {
    title: "Omar Elhfnawy — Turning raw ideas into profitable businesses",
    description:
      "Founder of Uni Course (300K EGP in its first 3 months) and Lokaly marketing agency. Marketing, AI, cloud and sales in Cairo.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/omar.jpg", width: 840, height: 1120, alt: "Omar Elhfnawy" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

// Runs before paint: lets CSS hold animated elements in their start state only
// when JS is running and the visitor hasn't asked for reduced motion.
const motionFlag = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
