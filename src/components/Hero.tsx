"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { contact, facts, practices } from "@/content";
import { LinkedIn, Mail, WhatsApp, practiceIcons } from "./Icons";
import Portrait from "./Portrait";
import ScatterHeadline from "./ScatterHeadline";

gsap.registerPlugin(useGSAP);

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // A rose glow that trails the pointer across the hero, like a lamp being carried.
  useGSAP(
    (_, contextSafe) => {
      if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
      const el = ref.current!;
      const x = gsap.quickTo(el, "--mx", { duration: 1.2, ease: "power3.out" });
      const y = gsap.quickTo(el, "--my", { duration: 1.2, ease: "power3.out" });
      const move = contextSafe!((e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x(((e.clientX - r.left) / r.width) * 100);
        y(((e.clientY - r.top) / r.height) * 100);
      });
      el.addEventListener("pointermove", move);
      return () => el.removeEventListener("pointermove", move);
    },
    { scope: ref },
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-[72px] [--mx:78] [--my:20]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40vw 40vw at calc(var(--mx) * 1%) calc(var(--my) * 1%), rgba(53,21,33,.95), rgba(53,21,33,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-14 md:px-10 md:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
          <div>
            <p className="fade-in text-[15px] text-muted" style={d(0.1)}>
              Founder, marketer and engineer in Cairo
            </p>

            <ScatterHeadline
              className="mt-7 font-display text-[clamp(2.6rem,5.4vw,5.4rem)] leading-[1.02] tracking-[-0.02em]"
              segments={[
                { text: "I use technology to turn " },
                { text: "raw ideas", raw: true, className: "italic" },
                { text: " into " },
                { text: "profitable, scalable businesses.", className: "italic text-rose" },
              ]}
            />

            <p className="fade-in mt-9 max-w-[36rem] text-lg leading-relaxed text-ivory/80" style={d(1.3)}>
              I&apos;ve founded a learning agency that made 300K EGP in its first three months and a growth-focused
              marketing agency, and I bring AI into how I market and sell, backed by hands-on cloud engineering.
            </p>

            <div className="fade-in mt-9 flex flex-wrap items-center gap-3" style={d(1.45)}>
              <a
                href="#agencies"
                className="rounded-full bg-rose px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ivory"
              >
                See my agencies
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-7 py-3.5 text-[15px] transition-colors duration-200 hover:border-rose"
              >
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1 text-muted">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-rose">
                  <LinkedIn />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="Send an email" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-rose">
                  <Mail />
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Message on WhatsApp" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-rose">
                  <WhatsApp />
                </a>
              </div>
            </div>
          </div>

          <Portrait className="mx-auto w-full max-w-[400px] lg:mx-0" />
        </div>

        {/* What he does, in priority order */}
        <ul aria-label="What Omar does" className="mt-16 grid border-t border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {practices.map((p, i) => {
            const Icon = practiceIcons[p.id];
            return (
              <li
                key={p.id}
                className={`fade-in border-b border-line lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-6" : ""} ${
                  i % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6"
                } lg:pr-6`}
                style={d(1.5 + i * 0.1)}
              >
                <a href={`#case-${p.id}`} className="group flex items-start gap-4 py-6">
                  <Icon className="mt-0.5 shrink-0 text-rose" width={22} height={22} />
                  <span>
                    <span className="block text-[17px] font-medium transition-colors group-hover:text-rose">{p.title}</span>
                    <span className="mt-1 block text-[15px] leading-snug text-muted">{p.line}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-y border-line">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:px-10 lg:grid-cols-[repeat(4,1fr)_1.4fr]">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`fade-in py-7 pr-4 ${i % 2 === 1 ? "border-l border-line pl-4 md:pl-6" : ""} ${
                i > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              style={d(1.8 + i * 0.08)}
            >
              <div className={`font-display text-2xl ${i === 0 ? "text-rose" : ""}`}>{f.value}</div>
              <div className="mt-1 text-sm text-muted">{f.label}</div>
            </div>
          ))}
          <blockquote
            className="fade-in col-span-2 border-t border-line py-7 font-display text-lg italic leading-snug text-ivory/80 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-8"
            style={d(2.1)}
          >
            Technology is my foundation. Business is my mindset. Growth is my objective.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
