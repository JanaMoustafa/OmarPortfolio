import { contact, facts, practices } from "@/content";
import { LinkedIn, Mail, WhatsApp, practiceIcons } from "./Icons";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-[72px]">
      {/* ambient light, like a lamp-lit office at night */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] -top-[30%] -z-10 h-[90vh] w-[80vw] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(125,31,51,.55), rgba(125,31,51,0) 70%)" }}
      />

      <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-16 md:px-10 md:pt-24 lg:pb-20">
        <p className="fade-in text-[15px] text-muted" style={d(0.1)}>
          Cloud engineer, founder and property consultant in Cairo
        </p>

        <div className="relative">
          <h1 className="mt-7 font-display text-[clamp(2.75rem,6.6vw,6.75rem)] leading-[0.98] tracking-[-0.02em] lg:whitespace-nowrap">
            <span className="rise">
              <span style={d(0.2)}>I build technology.</span>
            </span>
            <span className="rise">
              <span style={d(0.32)}>I build businesses.</span>
            </span>
            <span className="rise">
              <span style={d(0.44)} className="italic text-claret">
                I turn ideas into growth.
              </span>
            </span>
          </h1>

          <svg
            className="signature absolute right-0 top-2 hidden w-[300px] lg:block"
            viewBox="0 0 300 130"
            role="img"
            aria-label="Omar's signature"
          >
            <text x="12" y="96" fontFamily="var(--font-signature)" fontSize="112">
              Omar
            </text>
          </svg>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="max-w-[34rem]">
            <p className="fade-in text-lg leading-relaxed text-ivory/80" style={d(0.9)}>
              I combine cloud engineering, entrepreneurial thinking, marketing and sales to build things that
              create real value, for clients, partners and the businesses behind them.
            </p>

            <div className="fade-in mt-9 flex flex-wrap items-center gap-3" style={d(1.05)}>
              <a
                href="#work"
                className="rounded-full bg-burgundy px-7 py-3.5 text-[15px] font-medium transition-colors duration-200 hover:bg-burgundy-deep"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-7 py-3.5 text-[15px] transition-colors duration-200 hover:border-ivory/60"
              >
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1 text-muted">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-ivory">
                  <LinkedIn />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="Send an email" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-ivory">
                  <Mail />
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Message on WhatsApp" className="flex h-11 w-11 items-center justify-center transition-colors hover:text-ivory">
                  <WhatsApp />
                </a>
              </div>
            </div>
          </div>

          {/* What he does, as an index rather than cards */}
          <ul aria-label="What Omar does" className="grid border-t border-line sm:grid-cols-2">
            {practices.map((p, i) => {
              const Icon = practiceIcons[p.id];
              return (
                <li
                  key={p.id}
                  className={`fade-in border-b border-line ${i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"}`}
                  style={d(0.7 + i * 0.1)}
                >
                  <a href={`#case-${p.id}`} className="group flex items-start gap-4 py-5">
                    <Icon className="mt-0.5 shrink-0 text-claret" width={22} height={22} />
                    <span>
                      <span className="block text-[17px] font-medium transition-colors group-hover:text-claret">{p.title}</span>
                      <span className="mt-1 block text-[15px] leading-snug text-muted">{p.line}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-y border-line/80">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:px-10 lg:grid-cols-[repeat(4,1fr)_1.4fr]">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`fade-in py-7 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i > 1 ? "border-t border-line/80 lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-line/80 lg:pl-6" : ""
              } ${i % 2 === 1 ? "border-l border-line/80" : ""}`}
              style={d(1.2 + i * 0.08)}
            >
              <div className="font-display text-2xl">{f.value}</div>
              <div className="mt-1 text-sm text-muted">{f.label}</div>
            </div>
          ))}
          <blockquote
            className="fade-in col-span-2 border-t border-line/80 py-7 font-display text-lg italic leading-snug text-ivory/80 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-8"
            style={d(1.55)}
          >
            Technology is my foundation. Business is my mindset. Growth is my objective.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
