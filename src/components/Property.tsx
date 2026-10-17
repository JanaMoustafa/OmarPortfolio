import { destinations, salesCycle } from "@/content";
import Reveal from "./Reveal";

export default function Property() {
  return (
    <section id="property" className="relative overflow-hidden border-y border-rose/15 bg-burgundy">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="text-[15px] text-rose">Sales & real estate at August Real Estate</p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
              Connecting people with the right property
            </h2>
            <p className="mt-6 max-w-[30rem] text-[17px] leading-relaxed text-ivory/75">
              I bring a commercially driven mindset to sales: consultative selling, CRM-based pipelines and
              AI-assisted follow-up, across Egypt&apos;s major destinations in both primary and resale markets. I
              consistently exceed my targets while generating my own qualified leads through digital marketing.
            </p>
            <div className="mt-10 flex gap-10 border-t border-rose/20 pt-8">
              <div>
                <div className="font-display text-4xl">Primary</div>
                <div className="mt-1 text-sm text-ivory/60">Developer launches</div>
              </div>
              <div>
                <div className="font-display text-4xl">Resale</div>
                <div className="mt-1 text-sm text-ivory/60">Secondary market</div>
              </div>
            </div>
          </Reveal>

          <div>
            <h3 className="text-[15px] text-muted">Where I sell</h3>
            <Reveal as="ul" stagger className="mt-4 border-t border-rose/20">
              {destinations.map((d) => (
                <li
                  key={d.name}
                  data-reveal
                  className="group flex flex-col gap-1 border-b border-rose/20 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight transition-[color,transform] duration-300 ease-out group-hover:translate-x-2 group-hover:text-rose">
                    {d.name}
                  </span>
                  <span className="text-[15px] text-muted">{d.note}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <h3 className="font-display text-3xl">How a deal moves</h3>
          <Reveal as="ol" stagger className="mt-10 grid border-l border-t border-rose/20 sm:grid-cols-2 lg:grid-cols-5">
            {salesCycle.map((s, i) => (
              <li key={s.step} data-reveal className="border-b border-r border-rose/20 bg-burgundy-deep/60 p-6 lg:min-h-[13rem]">
                <span className="font-display text-lg italic text-rose">{i + 1}.</span>
                <h4 className="mt-6 text-xl font-medium">{s.step}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
