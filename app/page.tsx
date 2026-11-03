import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarMortarboardIcon,
  CourseIcon ,
  AiBrain01Icon,
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  GithubIcon,
  LinkSquare02Icon,
  Linkedin01Icon,
  Mail01Icon,
  ServerStack01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { GithubGraph } from "@/components/github-graph";
import { Section } from "@/components/section";
import { TechChip } from "@/components/tech-chip";
import { experience, education, projects, site, stack } from "@/lib/site";

const stackIcons = { frontend: CodeIcon, backend: ServerStack01Icon, tooling: Wrench01Icon, ai: AiBrain01Icon };
const eduIcons = { college: CalendarMortarboardIcon, school: CourseIcon  };

const btn =
  "inline-flex h-9 items-center gap-2 rounded-md border border-line-strong px-3.5 text-sm font-medium transition-colors hover:bg-hover";

export default function Home() {
  const links = [
    { label: "GitHub", href: site.socials.github, icon: GithubIcon, handle: site.handle },
    { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin01Icon, handle: "nikhil-tiwari-53743b339" },
    ...(site.email ? [{ label: "Email", href: `mailto:${site.email}`, icon: Mail01Icon, handle: site.email }] : []),
  ];

  return (
    <>
      {/* Hero */}
      <section id="home" aria-labelledby="hero-title" className="border-b border-line">
        <div className="rails bg-bg px-4 py-10 sm:px-6 sm:py-16">
          <div className="hero-in">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              width={96}
              height={96}
              priority
              className="size-24 rounded-full border border-line object-cover"
            />
          </div>
          <div className="hero-in mt-6">
            <h1 id="hero-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{site.role}</p>
          </div>
          <p className="hero-in mt-5 max-w-[62ch] leading-relaxed text-muted">{site.intro}</p>
          <div className="hero-in mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className={`${btn} bg-fg text-bg hover:bg-fg/90`}>
              View projects
            </a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className={btn}>
              <HugeiconsIcon icon={GithubIcon} size={16} strokeWidth={1.8} /> GitHub
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className={btn}>
              <HugeiconsIcon icon={Linkedin01Icon} size={16} strokeWidth={1.8} /> LinkedIn
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-ok" />
            Open to full-time roles and select freelance projects
          </p>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About" dots>
        <div className="space-y-4 px-4 py-5 text-[15px] leading-relaxed text-muted sm:px-6">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="max-w-[65ch]">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" description="Roles, teams and open source work.">
        <ol>
          {experience.map((e) => (
            <li
              key={e.company}
              className="cell grid gap-1 border-b border-dashed border-line-strong px-4 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-6"
            >
              <p className="font-mono text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="font-medium">{e.company}</h3>
                <p className="text-sm text-muted">{e.role}</p>
                <p className="mt-2 text-sm leading-relaxed">{e.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Work" description="Full-stack products I designed, built and deployed." dots>
        <ul className="grid sm:grid-cols-2">
          {projects.map((p, i) => {
            const lastOdd = i === projects.length - 1 && projects.length % 2 === 1;
            return (
              <li
                key={p.name}
                className={`cell flex flex-col border-b border-dashed border-line-strong px-4 py-6 sm:px-6 ${lastOdd ? "sm:col-span-2" : "sm:odd:border-r"
                  }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-sm text-muted">{p.tagline}</p>
                  </div>
                  <p className="text-sm text-muted border border-green-400 rounded-full px-3">{p.status}</p>
                  <div className="flex shrink-0 items-center gap-1">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} live site`}
                        className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg"
                      >
                        <HugeiconsIcon icon={LinkSquare02Icon} size={18} strokeWidth={1.8} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} source code`}
                        className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg"
                      >
                        <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${p.name} tech stack`}>
                  {p.tags.map((t) => (
                    <li key={t}><TechChip name={t} /></li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" description="Where I studied.">
        <ul>
          {education.map((e) => (
            <li
              key={e.institute}
              className="cell flex gap-4 border-b border-dashed border-line-strong px-4 py-5 last:border-b-0 sm:px-6"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-md border border-line text-muted">
                <HugeiconsIcon icon={eduIcons[e.icon]} size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-medium">{e.institute}</h3>
                <p className="mt-1 text-sm">{e.degree}</p>
                <p className="text-sm text-muted">{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Stack */}
      <Section id="stack" title="Stack" description="Tools I reach for most days." dots>
        <div className="grid sm:grid-cols-2">
          {stack.map((g, i) => (
            <div
              key={g.label}
              className={`cell border-b border-dashed border-line-strong px-4 py-6 sm:px-6 ${i % 2 === 0 ? "sm:border-r" : ""
                } ${i >= stack.length - 2 ? "sm:border-b-0" : ""} ${i === stack.length - 1 ? "border-b-0" : ""}`}
            >
              <h3 className="flex items-center gap-2 text-sm font-medium">
                <HugeiconsIcon icon={stackIcons[g.icon]} size={18} strokeWidth={1.8} />
                {g.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item}><TechChip name={item} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <GithubGraph />

      {/* Contact */}
      <Section id="contact" title="Connect" description="Pick the channel that fits." dots>
        <ul>
          {links.map((l) => (
            <li key={l.label} className="border-b border-dashed border-line-strong last:border-b-0">
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="cell group flex items-center justify-between gap-4 px-4 py-4 sm:px-6"
              >
                <span className="flex items-center gap-3">
                  <HugeiconsIcon icon={l.icon} size={20} strokeWidth={1.8} />
                  <span className="font-medium">{l.label}</span>
                  <span className="hidden font-mono text-sm text-muted sm:inline">{l.handle}</span>
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Footer />
    </>
  );
}
