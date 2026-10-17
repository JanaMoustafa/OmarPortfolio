import Reveal from "./Reveal";

const traits = [
  { title: "Analytical thinking", text: "Turning complex problems into clear, workable plans." },
  { title: "Execution focus", text: "Moving from idea to shipped result without losing momentum." },
  { title: "Continuous learning", text: "From CCNA and MCSA to Kubernetes and Terraform, always adding the next layer." },
  { title: "People & communication", text: "Building long-term relationships with clients, partners and teams." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            More than one discipline.
            <br />
            <span className="italic text-claret">One connected mindset.</span>
          </h2>
        </Reveal>

        <Reveal stagger>
          <p data-reveal className="font-display text-[1.375rem] leading-[1.55] text-ivory/90">
            I&apos;m a Business Informatics student at Helwan University with hands-on cloud engineering experience
            and strong foundations in networking, Linux, operating systems and virtualization.
          </p>
          <p data-reveal className="mt-6 max-w-[38rem] text-[17px] leading-[1.75] text-ivory/70">
            Alongside the technical track, I&apos;ve led business development at Enactus, founded Lokaly Egypt, and work
            as a property consultant closing residential and investment deals across Egypt. I also have working
            knowledge of .NET full-stack development, so I understand how the applications running on cloud
            infrastructure are actually built. Right now I&apos;m looking for a cloud engineering internship to go deeper
            into cloud platforms and DevOps while helping build scalable, reliable systems.
          </p>

          <dl data-reveal className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 text-[15px] sm:grid-cols-3">
            <div>
              <dt className="text-muted">Education</dt>
              <dd className="mt-1">B.Sc. Business Informatics, Helwan University, 2029</dd>
            </div>
            <div>
              <dt className="text-muted">GPA</dt>
              <dd className="mt-1">3.4</dd>
            </div>
            <div>
              <dt className="text-muted">Languages</dt>
              <dd className="mt-1">Arabic (native), English (B2, advanced)</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <Reveal as="ul" stagger className="mt-20 grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <li key={t.title} data-reveal className="bg-ink px-0 py-7 sm:px-7">
            <h3 className="font-display text-xl">{t.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
