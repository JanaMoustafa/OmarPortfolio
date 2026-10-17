import Reveal from "./Reveal";
import WordLight from "./WordLight";

const traits = [
  { title: "Commercial thinking", text: "Every idea is judged by whether it can become a profitable business." },
  { title: "Execution focus", text: "Moving from idea to launched product without losing momentum." },
  { title: "AI-first workflows", text: "Using AI to research, create, qualify and follow up faster." },
  { title: "People & communication", text: "Long-term relationships with clients, partners, instructors and teams." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            Business first.
            <br />
            <span className="italic text-rose">Technology as the engine.</span>
          </h2>
        </Reveal>

        <div>
          <WordLight
            className="font-display text-[clamp(1.35rem,2.1vw,1.75rem)] leading-[1.5]"
            emphasis={["300K", "EGP", "AI"]}
            text="I'm a business builder with a technical edge. I founded Uni Course, a learning agency that made 300K EGP in its first three weeks, then Lokaly, a growth-focused marketing agency. I integrate AI into how I market and sell, and I can build the cloud infrastructure behind it myself."
          />
          <Reveal>
            <p className="mt-8 max-w-[38rem] text-[17px] leading-[1.75] text-ivory/70">
              Before and alongside the agencies, I led business development at Enactus, completed a cloud engineering
              internship at IT Gate, and work as a property consultant closing residential and investment deals across
              Egypt. A background in Business Informatics and working knowledge of .NET full-stack development mean I
              understand both the business model and how the product is actually built.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 text-[15px] sm:grid-cols-3">
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="mt-1">Cairo, Egypt</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="mt-1">Business, marketing, tech, sales</dd>
              </div>
              <div>
                <dt className="text-muted">Languages</dt>
                <dd className="mt-1">Arabic (native), English (B2, advanced)</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>

      <Reveal as="ul" stagger className="mt-20 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <li key={t.title} data-reveal className="border-b border-line py-7 sm:px-7 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:border-l lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:nth-child(odd)]:pl-7 lg:first:pl-0">
            <h3 className="font-display text-xl">{t.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
