"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol" | "header";
  /** Stagger direct children marked with data-reveal instead of the whole block. */
  stagger?: boolean;
};

/**
 * Small, quiet scroll reveal. Content renders visible on the server; the hidden
 * start state is only applied by GSAP once JS runs and motion is allowed.
 */
export default function Reveal({ children, className, as = "div", stagger }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = ref.current!;
        const targets = stagger ? el.querySelectorAll("[data-reveal]") : el;
        gsap.from(targets, {
          opacity: 0,
          y: 18,
          duration: 0.9,
          ease: "power3.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref },
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
