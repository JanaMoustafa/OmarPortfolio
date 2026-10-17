"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * A ribbon of words that drifts on its own, then surges and leans with the
 * reader's scroll: faster scrolling pushes it harder, scrolling up reverses it.
 */
export default function VelocityMarquee({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const track = ref.current!.querySelector<HTMLElement>(".vm-track")!;
        const skew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });
        let x = 0;
        let dir = 1;
        let boost = 0;

        const st = ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = self.getVelocity();
            if (v !== 0) dir = v > 0 ? 1 : -1;
            boost = Math.min(Math.abs(v) / 120, 18);
            skew(gsap.utils.clamp(-12, 12, -v / 220));
          },
        });

        const tick = () => {
          const half = track.scrollWidth / 2;
          x -= (0.6 + boost) * dir;
          boost *= 0.92;
          if (Math.abs(boost) < 0.05) skew(0);
          if (x <= -half) x += half;
          if (x > 0) x -= half;
          gsap.set(track, { x });
        };
        gsap.ticker.add(tick);
        return () => {
          gsap.ticker.remove(tick);
          st.kill();
        };
      });
    },
    { scope: ref },
  );

  const row = [...items, ...items];
  return (
    <div ref={ref} className="overflow-hidden border-y border-line py-6" aria-hidden>
      <div className="vm-track flex w-max gap-12 whitespace-nowrap font-display text-[clamp(1.75rem,3.5vw,3rem)] italic text-ivory/30 will-change-transform">
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-12">
            {m}
            <span className="h-2 w-2 rotate-45 bg-rose/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
