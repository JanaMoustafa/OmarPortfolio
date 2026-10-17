"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * A paragraph that is read into existence: words sit dim and are lit one by one
 * as the reader scrolls through it. Words listed in `emphasis` light up in rose.
 */
export default function WordLight({
  text,
  emphasis = [],
  className,
}: {
  text: string;
  emphasis?: string[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const words = gsap.utils.toArray<HTMLElement>(".wl", ref.current);
        gsap.fromTo(
          words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: 0.5 },
          },
        );
      });
    },
    { scope: ref },
  );

  const strong = new Set(emphasis.map((w) => w.toLowerCase()));
  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className={`wl ${strong.has(w.toLowerCase().replace(/[.,]/g, "")) ? "text-rose" : ""}`}>{w}</span>{" "}
        </span>
      ))}
    </p>
  );
}
