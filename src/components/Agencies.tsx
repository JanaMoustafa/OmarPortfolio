"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { agencies, type Agency } from "@/content";
import Odometer from "./Odometer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * On large screens the section pins and the agencies travel sideways past the
 * reader, each with a giant outlined name drifting behind it at its own speed.
 * Everywhere else it is a plain vertical stack.
 */
export default function Agencies() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)", () => {
        const section = ref.current!;
        section.classList.add("is-horizontal");
        const track = section.querySelector<HTMLElement>(".agencies-track")!;
        const distance = () => track.scrollWidth - window.innerWidth;

        const slide = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(".agencies-progress", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        });

        gsap.utils.toArray<HTMLElement>(".agency-panel").forEach((panel) => {
          gsap.fromTo(
            panel.querySelector(".ghost-name"),
            { xPercent: 18 },
            {
              xPercent: -28,
              ease: "none",
              scrollTrigger: { trigger: panel, containerAnimation: slide, start: "left right", end: "right left", scrub: true },
            },
          );
          gsap.from(panel.querySelectorAll("[data-slide]"), {
            opacity: 0,
            x: 80,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, containerAnimation: slide, start: "left 75%", end: "left 25%", scrub: 0.6 },
          });
        });

        ScrollTrigger.refresh();
        return () => section.classList.remove("is-horizontal");
      });
    },
    { scope: ref },
  );

  return (
    <section id="agencies" ref={ref} className="agencies relative overflow-hidden border-t border-line bg-ink-2">
      <div className="agencies-track">
        <div className="agency-intro px-5 pb-6 pt-24 md:px-10 md:pt-36">
          <div className="max-w-[30rem]">
            <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">Agencies</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ivory/75">
              Two businesses I built from zero. One gives university students the courses they need; the other grows
              brands. Both started as raw ideas.
            </p>
            <p className="mt-8 hidden items-center gap-3 text-sm text-muted [.is-horizontal_&]:flex">
              <span aria-hidden className="inline-block h-px w-10 bg-rose" />
              Keep scrolling
            </p>
          </div>
        </div>

        {agencies.map((a) => (
          <AgencyPanel key={a.id} agency={a} />
        ))}
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[2px] bg-line [.is-horizontal_&]:block">
        <div className="agencies-progress h-full origin-left bg-rose" />
      </div>
    </section>
  );
}

function AgencyPanel({ agency: a }: { agency: Agency }) {
  const revenue = a.id === "uni-course";
  return (
    <article className="agency-panel relative overflow-hidden px-5 py-16 md:px-10 md:py-24" aria-labelledby={`${a.id}-name`}>
      <span
        aria-hidden
        className="ghost-name pointer-events-none absolute left-0 top-1/2 -z-0 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(8rem,22vw,22rem)] italic leading-none text-transparent [-webkit-text-stroke:1px_rgba(215,160,173,0.14)]"
      >
        {a.name}
      </span>

      <div className="relative grid w-full gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <header>
          <p data-slide className="text-[15px] text-rose">
            {a.kind}
          </p>
          <h3 id={`${a.id}-name`} data-slide className="mt-3 font-display text-[clamp(2.75rem,5vw,4.75rem)] leading-none">
            {a.name}
          </h3>
          <p data-slide className="mt-4 text-[15px] text-muted">
            {a.role}, launched <time dateTime={a.launchedIso}>{a.launched}</time>
          </p>

          {revenue && (
            <div data-slide className="mt-10 rounded-[3px] border border-rose/30 bg-burgundy/60 p-6 md:p-8">
              <Odometer
                value="300"
                suffix="K EGP"
                className="whitespace-nowrap font-display text-[clamp(3rem,5vw,4.75rem)] text-rose"
              />
              <p className="mt-4 max-w-[22rem] text-[16px] leading-snug text-ivory/85">
                Revenue within the first three weeks of launch.
              </p>
            </div>
          )}
        </header>

        <div>
          <p data-slide className="font-display text-xl leading-[1.55] text-ivory/90">
            {a.summary}
          </p>
          <p data-slide className="mt-5 text-[16px] leading-relaxed text-ivory/70">
            {a.model}
          </p>
          <ul className={`mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 ${a.points.length > 4 ? "lg:grid-cols-2" : ""}`}>
            {a.points.map((p) => (
              <li key={p.title} data-slide className="border-t border-line pt-4">
                <h4 className="text-[16px] font-medium">{p.title}</h4>
                <p className="mt-1 text-[15px] leading-snug text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
