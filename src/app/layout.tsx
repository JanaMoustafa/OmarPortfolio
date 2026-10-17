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

// No description, Open Graph or image tags on purpose: shared links (WhatsApp,
// LinkedIn, etc.) should stay a plain URL rather than unfurl into a preview card.
export const metadata: Metadata = {
  title: "Omar Elhfnawy",
  authors: [{ name: "Omar Elhfnawy" }],
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
