"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SPINS = 3; // each column holds 0–9 this many times, so it rolls past several times before landing

/** Mechanical counter: every digit is a reel that spins and lands on its value. */
export default function Odometer({ value, suffix, className }: { value: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reels = gsap.utils.toArray<HTMLElement>(".reel", ref.current);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
        reels.forEach((reel, i) => {
          const target = Number(reel.dataset.target);
          tl.fromTo(
            reel,
            { y: "0em" },
            { y: `${-target}em`, duration: 2.4 + (reels.length - i) * 0.35, ease: "power4.out" },
            0,
          );
        });
        tl.fromTo(".odo-suffix", { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 1.2);
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className ?? ""}`} aria-label={`${value}${suffix ?? ""}`} role="img">
      {[...value].map((ch, i) => {
        const digit = Number(ch);
        if (Number.isNaN(digit)) return <span key={i}>{ch}</span>;
        const target = (SPINS - 1) * 10 + digit;
        return (
          <span key={i} aria-hidden className="relative inline-block h-[1em] overflow-hidden leading-none">
            <span className="reel block" data-target={target} style={{ transform: `translateY(${-target}em)` }}>
              {Array.from({ length: SPINS * 10 }, (_, n) => (
                <span key={n} className="block h-[1em] leading-none">
                  {n % 10}
                </span>
              ))}
            </span>
          </span>
        );
      })}
      {suffix && (
        <span aria-hidden className="odo-suffix ml-[0.08em] inline-block leading-none">
          {suffix}
        </span>
      )}
    </span>
  );
}
