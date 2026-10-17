import { contact } from "@/content";
import { ArrowUpRight, Download, LinkedIn, Mail, Phone, WhatsApp } from "./Icons";
import Reveal from "./Reveal";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
  { label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref, Icon: Phone },
  { label: "WhatsApp", value: "Message directly", href: contact.whatsapp, Icon: WhatsApp, external: true },
  { label: "LinkedIn", value: "Omar Elhfnawy", href: contact.linkedin, Icon: LinkedIn, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 -z-10 h-[80vh] w-[90vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(125,31,51,.6), rgba(125,31,51,0) 70%)" }}
      />
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-[15px] text-muted">
            Open to cloud engineering internships, partnerships and property enquiries
          </p>
          <h2 className="mt-6 max-w-[17ch] font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.98] tracking-[-0.02em]">
            Let&apos;s build something <span className="italic text-claret">worth growing.</span>
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="mt-16 grid border-t border-line sm:grid-cols-2">
          {channels.map(({ label, value, href, Icon, external }, i) => (
            <li
              key={label}
              data-reveal
              className={`border-b border-line ${i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}
            >
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center justify-between gap-6 py-7"
              >
                <span className="flex items-center gap-5">
                  <Icon className="shrink-0 text-claret" width={22} height={22} />
                  <span>
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="mt-1 block break-all text-lg sm:text-xl">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-muted transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ivory" />
              </a>
            </li>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-burgundy px-7 py-3.5 text-[15px] font-medium transition-colors duration-200 hover:bg-burgundy-deep"
          >
            Email Omar
          </a>
          <a
            href={contact.cv}
            download
            className="flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 text-[15px] transition-colors duration-200 hover:border-ivory/60"
          >
            <Download width={18} height={18} />
            Download CV
          </a>
        </div>
      </div>

      <footer className="border-t border-line/80">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Omar Elhfnawy. {contact.location}.</p>
          <a href="#top" className="transition-colors hover:text-ivory">
            Back to top
          </a>
        </div>
      </footer>
    </section>
  );
}
