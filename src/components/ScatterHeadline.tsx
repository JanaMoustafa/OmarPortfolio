"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Segment = { text: string; className?: string; raw?: boolean };

/**
 * "Raw ideas → built business": every letter starts scattered, spun and blurred,
 * then snaps into its place in the sentence. The words marked `raw` start
 * further out and settle last, so the idea visibly assembles itself.
 */
export default function ScatterHeadline({ segments, className }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const label = segments.map((s) => s.text).join("");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const chars = gsap.utils.toArray<HTMLElement>(".scatter-char", ref.current);
        const rnd = gsap.utils.random;
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            x: (_, el: HTMLElement) => rnd(-1, 1) * (el.dataset.raw ? 260 : 120),
            y: (_, el: HTMLElement) => rnd(-1, 1) * (el.dataset.raw ? 180 : 90),
            rotation: () => rnd(-110, 110),
            scale: () => rnd(0.4, 1.8),
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "expo.out",
            delay: 0.15,
            stagger: { each: 0.018, from: "random" },
            clearProps: "filter,transform",
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <h1 ref={ref} className={className} aria-label={label}>
      {segments.map((seg, si) => (
        <span key={si} aria-hidden className={seg.className}>
          {seg.text.split(/(\s+)/).map((word, wi) =>
            /^\s+$/.test(word) ? (
              " "
            ) : (
              <span key={wi} className="inline-block whitespace-nowrap">
                {[...word].map((ch, ci) => (
                  <span key={ci} className="scatter-char inline-block" data-raw={seg.raw ? "1" : undefined}>
                    {ch}
                  </span>
                ))}
              </span>
            ),
          )}
        </span>
      ))}
    </h1>
  );
}
