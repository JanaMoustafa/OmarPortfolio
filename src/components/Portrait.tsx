"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Portrait that opens like a camera aperture, has its rose frame traced on,
 * leans toward the pointer, and drifts inside its frame as the page scrolls.
 */
export default function Portrait({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.55 });
        tl.fromTo(
          ".aperture",
          { clipPath: "circle(0% at 50% 58%)" },
          { clipPath: "circle(150% at 50% 58%)", duration: 1.6, ease: "expo.inOut" },
        )
          .fromTo(".portrait-img", { scale: 1.35 }, { scale: 1.08, duration: 2, ease: "expo.out" }, 0)
          .fromTo(
            ".frame-edge",
            { scaleX: (i) => (i % 2 === 0 ? 0 : 1), scaleY: (i) => (i % 2 === 1 ? 0 : 1), visibility: "visible" },
            { scaleX: 1, scaleY: 1, duration: 0.45, ease: "power1.inOut", stagger: 0.45 },
            0.5,
          )
          .fromTo(".portrait-caption", { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: "expo.out" }, 1.3);

        gsap.to(".portrait-img", {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

        // Pointer lean, only on devices that actually hover.
        if (!window.matchMedia("(hover: hover)").matches) return;
        const card = root.current!.querySelector<HTMLElement>(".tilt")!;
        const rx = gsap.quickTo(card, "rotationX", { duration: 0.8, ease: "power3.out" });
        const ry = gsap.quickTo(card, "rotationY", { duration: 0.8, ease: "power3.out" });
        const gx = gsap.quickTo(card, "--gx", { duration: 0.6, ease: "power3.out" });
        const gy = gsap.quickTo(card, "--gy", { duration: 0.6, ease: "power3.out" });
        const move = contextSafe!((e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          ry((px - 0.5) * 10);
          rx((0.5 - py) * 10);
          gx(px * 100);
          gy(py * 100);
        });
        const leave = contextSafe!(() => {
          rx(0);
          ry(0);
          gx(50);
          gy(30);
        });
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        return () => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={`[perspective:1100px] ${className}`}>
      <figure
        className="tilt relative aspect-[3/4] w-full [transform-style:preserve-3d] [--gx:50] [--gy:30]"
        style={{ willChange: "transform" }}
      >
        <div className="aperture absolute inset-0 overflow-hidden rounded-[3px] bg-burgundy">
          <Image
            src="/omar.jpg"
            alt="Omar Elhfnawy standing in a lit colonnade at night"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 92vw"
            className="portrait-img object-cover object-[50%_60%]"
          />
          {/* burgundy grade so the photo sits inside the palette */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "linear-gradient(180deg, rgba(53,21,33,.15) 0%, rgba(53,21,33,.55) 100%)" }}
          />
          {/* specular highlight that follows the pointer */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(40% 35% at calc(var(--gx) * 1%) calc(var(--gy) * 1%), rgba(215,160,173,.55), transparent 70%)",
            }}
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
          <figcaption className="absolute bottom-5 left-5 right-5 overflow-hidden">
            <span className="portrait-caption block">
              <span className="block font-display text-2xl leading-tight">Omar Elhfnawy</span>
              <span className="mt-0.5 block text-sm text-ivory/70">Founder, Cairo</span>
            </span>
          </figcaption>
        </div>

        {/* traced frame, offset like a passe-partout: drawn edge by edge, clockwise */}
        <span aria-hidden className="pointer-events-none absolute -inset-3 [transform:translateZ(30px)]">
          <span className="frame-edge absolute left-0 right-0 top-0 h-px origin-left bg-rose" />
          <span className="frame-edge absolute bottom-0 right-0 top-0 w-px origin-top bg-rose" />
          <span className="frame-edge absolute bottom-0 left-0 right-0 h-px origin-right bg-rose" />
          <span className="frame-edge absolute bottom-0 left-0 top-0 w-px origin-bottom bg-rose" />
        </span>
      </figure>
    </div>
  );
}
