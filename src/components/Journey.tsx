"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { journey } from "@/content";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const milestones = journey;

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".journey-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".journey-list", start: "top 65%", end: "bottom 65%", scrub: 0.6 },
          },
        );
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 65%",
            onEnter: () => item.classList.add("is-active"),
            onLeaveBack: () => item.classList.remove("is-active"),
          });
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".journey-progress", { scaleY: 1 });
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((i) => i.classList.add("is-active"));
      });
    },
    { scope: ref },
  );

  return (
    <section id="journey" ref={ref} className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            The path so far
          </h2>
          <p className="mt-5 max-w-[26rem] text-[17px] leading-relaxed text-muted">
            Business, marketing, tech and sales, running in parallel since 2025. Each one makes the others sharper.
          </p>
        </Reveal>

        <ol className="journey-list relative">
          <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
          <span
            aria-hidden
            className="journey-progress absolute bottom-3 left-[7px] top-3 w-px origin-top bg-rose"
          />
          {milestones.map((m) => (
            <li key={m.title} className="journey-item group relative pb-14 pl-12 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-[0.4rem] h-[15px] w-[15px] rounded-full border border-line bg-ink transition-[background-color,border-color,box-shadow] duration-500 group-[.is-active]:border-rose group-[.is-active]:bg-rose group-[.is-active]:shadow-[0_0_0_6px_rgba(215,160,173,0.15)]"
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-2xl text-ivory/50 transition-colors duration-500 group-[.is-active]:text-ivory">
                  {m.when}
                </span>
                <span className="text-sm text-muted">
                  to {m.until}, {m.track.toLowerCase()}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-medium">
                {m.title}, <span className="text-rose">{m.org}</span>
              </h3>
              <p className="mt-2 max-w-[36rem] text-[16px] leading-relaxed text-ivory/70">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
