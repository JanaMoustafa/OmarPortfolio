import { marquee, skillGroups } from "@/content";
import Reveal from "./Reveal";
import VelocityMarquee from "./VelocityMarquee";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Reveal className="max-w-[44rem]">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            The toolkit
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Business and marketing first, AI throughout, and the technical depth to build what the business needs.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        <VelocityMarquee items={marquee} />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Reveal as="div" stagger className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.name} data-reveal>
              <h3 className="border-b border-line pb-3 text-[15px] text-rose">{g.name}</h3>
              <ul className="mt-4 space-y-2 text-[16px] text-ivory/85">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        <p className="mt-14 border-t border-line pt-6 text-[15px] text-muted">
          Languages: <span className="text-ivory/85">Arabic (native), English (B2, advanced)</span>
        </p>
      </div>
    </section>
  );
}
