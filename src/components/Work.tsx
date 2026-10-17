import { caseStudies } from "@/content";
import { practiceIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="border-t border-line bg-ink-2/60">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="max-w-[44rem]">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            A closer look at the work
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Four practices that feed each other: the infrastructure, the company, the audience and the deal.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {caseStudies.map((c) => {
            const Icon = practiceIcons[c.id as keyof typeof practiceIcons];
            return (
              <article
                key={c.id}
                id={`case-${c.id}`}
                className="grid scroll-mt-24 gap-8 border-t border-line py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:py-20"
              >
                <header className="md:sticky md:top-28 md:self-start">
                  <p className="flex items-center gap-2.5 text-[15px] text-claret">
                    <Icon width={18} height={18} />
                    {c.practice}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.08]">{c.title}</h3>
                  <p className="mt-4 text-[15px] text-muted">
                    {c.org}
                    <br />
                    {c.period}
                  </p>
                </header>

                <Reveal stagger>
                  <p data-reveal className="font-display text-xl leading-[1.6] text-ivory/90">
                    {c.summary}
                  </p>
                  <ul data-reveal className="mt-8 space-y-3.5">
                    {c.role.map((r) => (
                      <li key={r} className="flex gap-4 text-[16px] leading-relaxed text-ivory/75">
                        <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-claret" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <ul data-reveal className="mt-9 flex flex-wrap gap-2" aria-label="Tools and skills">
                    {c.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ivory/80">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
