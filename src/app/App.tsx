import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ExternalLink, Github, Mail, Menu, Phone, X, MapPin, Code2, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTheme } from "./useTheme";
import { useLocale, type Locale, type Translation } from "./useLocale";

const SKILLS = [
  {
    icon: Code2,
    label: "Front-end",
    items: ["HTML/CSS", "JavaScript", "ReactJS", "TailwindCSS"],
  },
  {
    icon: Server,
    label: "Back-end",
    items: ["ASP.NET Core (C# .NET 8)", "NodeJS", "PHP", "RESTful API"],
  },
  {
    icon: Database,
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Entity Framework Core"],
  },
  {
    icon: Cloud,
    label: "DevOps",
    items: ["Docker", "Railway", "Vercel", "Git/GitHub"],
  },
  {
    icon: Cpu,
    label: "AI Tools",
    items: ["Aide IDE", "Cursor", "Claude", "GPT / Gemini"],
  },
  {
    icon: Wrench,
    label: "Tools & Concepts",
    items: ["OOP", "Clean Architecture", "JWT", "Postman", "Figma", "WinSCP"],
  },
];

const PROJECTS = [
  {
    year: "2025",
    tag: "Personal Project",
    title: "Task Management System",
    subtitle: "Mini Jira Clone",
    description:
      "Full-stack task management app with CRUD, JWT authentication, role-based access (Admin/User), and search & filter by status/priority.",
    highlights: [
      "Clean Architecture with Controller → Service → Repository pattern",
      "Secure authentication with JWT and role-based access",
      "Backend: ASP.NET Core Web API + EF Core + PostgreSQL",
      "Frontend: React + Vite with polished UX",
    ],
    stack: ["C# .NET 8", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT", "React", "Docker", "Railway", "Vercel"],
    links: {
      backend: "https://learningnettaskmanagement-production.up.railway.app",
      frontend: "https://task-management-ui-murex.vercel.app",
    },
  },
  {
    year: "2024",
    tag: "Personal Project",
    title: "Personal Portfolio",
    subtitle: "nguyenquangdo2002.github.io",
    description:
      "Responsive portfolio built with modern web standards and a minimal visual language.",
    highlights: [
      "Figma-first design, mobile responsive layout",
      "Clean implementation with React and Tailwind",
      "Fast performance and accessible structure",
    ],
    stack: ["ReactJS", "HTML/CSS", "JavaScript", "Figma", "GitHub Pages"],
    links: {
      frontend: "https://nguyenquangdo2002.github.io/portfolio_nguyenquangdo_main",
    },
  },
];

const EXPERIENCE = [
  {
    role: "Web & Game Developer",
    company: "Multiplayer Game Development Company",
    period: "Feb 2025 – Jan 2026",
    bullets: [
      "Built and maintained websites using PHP, HTML, CSS, JavaScript",
      "Created referral tracking and registration workflows",
      "Implemented game event systems with Lua scripting",
      "Managed QA, incident response, and player support",
    ],
    sites: ["tl2gvn.com", "chuyenvan.net", "tantlhj.net", "vulinhgioi.com"],
  },
];

const FAQS = [
  {
    q: "What roles are you targeting?",
    a: "I'm seeking a full-time Front-end or Full-stack Developer position with strong React and ASP.NET Core skills.",
  },
  {
    q: "Are you available for immediate hire?",
    a: "Yes, I'm ready for full-time roles and can start quickly.",
  },
  {
    q: "What is your English proficiency?",
    a: "I can read technical documentation, participate in code reviews, and work with international teams.",
  },
  {
    q: "Do you have experience with cloud deployment?",
    a: "Yes. I've deployed apps with Docker, Railway, and Vercel.",
  },
];

function NavBar({
  open,
  setOpen,
  theme,
  toggleTheme,
  locale,
  setLocale,
  t,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (value: Locale) => void;
  t: Translation;
}) {
  const links = [
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.transformation, href: "/transformation" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-base font-semibold tracking-wide text-foreground">
          NQD.dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} setLocale={setLocale} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="mailto:nguyenquangdodmx2002@gmail.com"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 md:inline-flex"
          >
            {t.buttons.hire}
          </a>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground transition hover:text-foreground" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              )
            )}
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
            <a
              href="mailto:nguyenquangdodmx2002@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              {t.buttons.hire}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative min-h-screen bg-background/95 pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] items-start">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-border bg-card/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {t.hero.badge}
            </span>
            <div className="space-y-5 max-w-xl">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                {t.hero.title}
              </h1>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:nguyenquangdodmx2002@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition hover:opacity-90">
                {t.buttons.contact}
                <ArrowRight size={16} />
              </a>
              <a href="https://github.com/nguyenquangdo2002" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm text-foreground transition hover:border-foreground">
                {t.buttons.github}
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-card p-8 text-foreground">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.overview.title}</p>
            <div className="mt-8 space-y-5">
              {t.overview.stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-background/80 p-5">
                  <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ t }: { t: Translation }) {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center pb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Tech stack</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">{t.skills.title}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {t.skills.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {SKILLS.map(({ icon: Icon, label, items }) => (
            <div key={label} className="rounded-[28px] border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/15 text-foreground">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{label}</h3>
              </div>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                {items.map((item) => (
                  <div key={item} className="rounded-2xl bg-background/80 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ t }: { t: Translation }) {
  return (
    <section id="projects" className="py-24 bg-background/95">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center pb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.projects.label}</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">{t.projects.title}</h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <article key={project.title} className="rounded-[32px] border border-border bg-card p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{project.tag}</p>
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <span className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">{project.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl bg-background/80 p-4 text-sm text-muted-foreground">
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.backend && (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-foreground transition hover:border-foreground"
                  >
                    <Server size={14} /> Backend
                  </a>
                )}
                {project.links.frontend && (
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-foreground transition hover:border-foreground"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ t }: { t: Translation }) {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center pb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.experience.label}</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">{t.experience.title}</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="rounded-[32px] border border-border bg-card p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.sites.map((site) => (
                    <a key={site} href={`https://${site}`} target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-foreground">
                      {site}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.experience.education}</p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Industrial University of Ho Chi Minh City</h3>
              <p className="mt-2 text-sm text-muted-foreground">Information Systems · Oct 2020 – Present</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['GPA 3.0 / 4.0', 'TOEIC 700'].map((badge) => (
                  <span key={badge} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.experience.aboutTitle}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                {[
                  "Seeking full-time Front-end or Full-stack Developer role",
                  "Strong in React, ASP.NET Core, and modern web development",
                  "Experience with Clean Architecture and cloud deployment",
                  "Fast learner and detail-oriented",
                  "Comfortable collaborating with international teams",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: Translation }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background/95">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center pb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.faq.label}</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">{t.faq.title}</h2>
        </div>
        <div className="space-y-3 rounded-[32px] border border-border bg-card">
          {t.faq.items.map((faq, index) => (
            <div key={faq.q} className="border-b border-border last:border-b-0">
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-foreground"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${open === index ? "rotate-180" : ""}`} />
              </button>
              {open === index && (
                <div className="px-6 pb-6 pt-1">
                  <p className="text-sm leading-7 text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Translation }) {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-[32px] border border-border bg-card px-8 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.contact.label}</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground">{t.contact.title}</h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {t.contact.description}
          </p>
          <a
            href="mailto:nguyenquangdodmx2002@gmail.com"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            <Mail size={16} /> {t.contact.button}
          </a>
          <p className="mt-8 text-xs text-muted-foreground">{t.contact.meta}</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Translation }) {
  return (
    <footer className="border-t border-border bg-background/95 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <span className="text-base font-semibold text-foreground">NQD.dev</span>
        <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        <a href="https://github.com/nguyenquangdo2002" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
          <Github size={14} /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <NavBar open={menuOpen} setOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} locale={locale} setLocale={setLocale} t={t} />
      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <FAQ t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
