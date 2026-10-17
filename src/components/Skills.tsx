import { marquee, skillGroups } from "@/content";
import Reveal from "./Reveal";

export default function Skills() {
  const row = [...marquee, ...marquee];
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Reveal className="max-w-[44rem]">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            The toolkit
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Technical depth for building systems, and the people skills to sell what gets built.
          </p>
        </Reveal>
      </div>

      <div className="marquee mt-14 overflow-hidden border-y border-line py-6" aria-hidden>
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-[clamp(1.75rem,3.5vw,3rem)] italic text-ivory/30">
          {row.map((m, i) => (
            <span key={i} className="flex items-center gap-12">
              {m}
              <span className="h-2 w-2 rotate-45 bg-burgundy" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Reveal as="div" stagger className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.name} data-reveal>
              <h3 className="border-b border-line pb-3 text-[15px] text-claret">{g.name}</h3>
              <ul className="mt-4 space-y-2 text-[16px] text-ivory/85">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
          <div data-reveal>
            <h3 className="border-b border-line pb-3 text-[15px] text-claret">Languages</h3>
            <ul className="mt-4 space-y-2 text-[16px] text-ivory/85">
              <li>Arabic, native</li>
              <li>English, B2 advanced</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
