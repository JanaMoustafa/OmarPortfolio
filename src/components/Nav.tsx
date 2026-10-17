"use client";

import { useEffect, useState } from "react";
import { Close, Menu } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#property", label: "Property" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "border-b border-line/70 bg-ink/85 backdrop-blur-md" : "border-b border-transparent"}`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:px-10" aria-label="Main">
        <a href="#top" className="group flex items-baseline gap-3" aria-label="Omar Elhfnawy, back to top">
          <span className="font-display text-3xl italic leading-none text-claret">O</span>
          <span className="font-display text-lg tracking-wide">Omar Elhfnawy</span>
        </a>

        <ul className="hidden items-center gap-9 text-[15px] text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-2 transition-colors duration-200 hover:text-ivory">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-burgundy px-5 py-2.5 text-[15px] transition-colors duration-200 hover:bg-burgundy md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-5" inert={!open}>
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <li key={l.href} className="border-t border-line/60">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-2xl">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
