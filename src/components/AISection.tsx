"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ai } from "@/content";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AREAS = 4;

/** Curves from the edge of the core to the inner edge of each area, in real pixels. */
function layoutConnectors(net: HTMLElement) {
  const box = net.getBoundingClientRect();
  const core = net.querySelector<HTMLElement>(".ai-core")!.getBoundingClientRect();
  const cx = core.left + core.width / 2 - box.left;
  const cy = core.top + core.height / 2 - box.top;
  const r = core.width / 2;
  const svg = net.querySelector("svg")!;
  svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
  net.querySelectorAll<HTMLElement>(".ai-area").forEach((area, i) => {
    const a = area.getBoundingClientRect();
    const left = a.left + a.width / 2 < core.left;
    const ex = (left ? a.right : a.left) - box.left;
    const ey = a.top + a.height / 2 - box.top;
    const sx = cx + (left ? -r : r);
    const mid = (sx + ex) / 2;
    const d = `M${sx} ${cy} C ${mid} ${cy}, ${mid} ${ey}, ${ex} ${ey}`;
    net.querySelectorAll(`[data-path="${i}"]`).forEach((p) => p.setAttribute("d", d));
  });
}

export default function AISection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const net = ref.current!.querySelector<HTMLElement>(".ai-net")!;
      const relayout = () => layoutConnectors(net);
      relayout();
      const ro = new ResizeObserver(relayout);
      ro.observe(net);

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: ".ai-net", start: "top 70%", once: true } });
        tl.from(".ai-core", { scale: 0.4, opacity: 0, duration: 0.9, ease: "back.out(1.6)" })
          .fromTo(".base-path", { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 1, stagger: 0.12, ease: "power2.inOut" }, 0.3)
          .from(".ai-area", { opacity: 0, x: (i) => (i < 2 ? -30 : 30), duration: 0.8, stagger: 0.12, ease: "power3.out" }, 0.8)
          .fromTo(".pulse-group", { opacity: 0 }, { opacity: 1, duration: 0.4 }, 1.3);
      });
      return () => ro.disconnect();
    },
    { scope: ref },
  );

  const left = ai.areas.slice(0, 2);
  const right = ai.areas.slice(2);

  return (
    <section id="ai" ref={ref} className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="max-w-[46rem]">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            AI, automation &amp; digital transformation
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-ivory/80">{ai.vision}</p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            I actively bring AI-powered tools and automation into marketing, sales, operations and technical work to
            move faster and make better decisions.
          </p>
        </Reveal>

        <div className="ai-net relative mt-16 grid gap-6 lg:mt-24 lg:min-h-[460px] lg:grid-cols-[1fr_minmax(180px,240px)_1fr] lg:grid-rows-2 lg:gap-x-0 lg:gap-y-10">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            {Array.from({ length: AREAS }, (_, i) => (
              <path
                key={i}
                data-path={i}
                className="base-path"
                fill="none"
                stroke="#3a2730"
                strokeWidth="1.25"
                pathLength={100}
                strokeDasharray="100"
              />
            ))}
            <g className="pulse-group">
              {Array.from({ length: AREAS }, (_, i) => (
                <path
                  key={i}
                  data-path={i}
                  className="pulse-path"
                  fill="none"
                  stroke="var(--rose)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength={100}
                  style={{ "--d": `${i * 0.8}s` } as React.CSSProperties}
                />
              ))}
            </g>
          </svg>

          <div className="flex items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="ai-core flex h-36 w-36 items-center justify-center rounded-full border border-rose/50 bg-burgundy lg:h-44 lg:w-44">
              <span className="font-display text-5xl italic text-rose lg:text-6xl">AI</span>
            </div>
          </div>

          {[...left, ...right].map((a, i) => (
            <div
              key={a.id}
              className={`ai-area relative rounded-[3px] border border-line bg-ink-2 p-6 lg:max-w-[22rem] lg:self-center ${
                i < 2 ? "lg:col-start-1 lg:justify-self-start" : "lg:col-start-3 lg:justify-self-end"
              } ${i % 2 === 0 ? "lg:row-start-1" : "lg:row-start-2"}`}
            >
              <h3 className="font-display text-2xl">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
