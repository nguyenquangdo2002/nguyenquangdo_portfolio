import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X, ExternalLink, Github, Mail, Phone, MapPin, Code2, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";

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
      "Full-stack task management app with CRUD, JWT authentication, role-based access (Admin/User), and search & filter by status/priority. Deployed fully on cloud infrastructure.",
    highlights: [
      "Clean Architecture: Controller → Service → Repository pattern",
      "Global Exception Middleware, BCrypt password hashing, parameterized queries",
      "Backend: ASP.NET Core Web API (.NET 8) + EF Core + PostgreSQL on Railway via Docker",
      "Frontend: React + Vite deployed on Vercel",
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
      "Responsive developer portfolio built with HTML/CSS/JS and ReactJS. Designed with Figma prototype first, then implemented with full responsiveness across all devices.",
    highlights: [
      "Figma design prototype → production implementation",
      "Fully responsive across mobile, tablet, and desktop",
      "Built with ReactJS and modern CSS",
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
      "Developed and maintained game-related websites using PHP, HTML, CSS, JavaScript",
      "Built referral tracking system to record user visits and registrations from referral links",
      "Developed in-game events and item drop systems with Lua Script — directly impacts game revenue",
      "QA testing for all game features; handled server incidents and player compensation",
    ],
    sites: ["tl2gvn.com", "chuyenvan.net", "tantlhj.net", "vulinhgioi.com"],
  },
];

const FAQS = [
  {
    q: "What roles are you targeting?",
    a: "I'm seeking a full-time Front-end or Full-stack Developer position. I'm strongest in React and ASP.NET Core (.NET 8) but comfortable across the full stack from database design to UI implementation.",
  },
  {
    q: "Are you available for immediate hire?",
    a: "Yes. I'm actively looking for opportunities and available for full-time roles. I can join quickly and am comfortable with both onsite and remote arrangements.",
  },
  {
    q: "What is your English proficiency?",
    a: "I hold a TOEIC 700 score and am comfortable reading English technical documentation, participating in English-language code reviews, and collaborating with international teams.",
  },
  {
    q: "Do you have experience with cloud deployment?",
    a: "Yes — I've deployed full-stack applications on Railway (backend via Docker) and Vercel (frontend). I'm comfortable with Docker containerization and CI/CD workflows on GitHub.",
  },
];

function NavBar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = ["Skills", "Projects", "Experience", "Contact"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(201,168,76,0.12)] bg-[#080808]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <span className="font-['Playfair_Display'] text-[#c9a84c] font-bold text-lg tracking-tight">
          NQD<span className="text-foreground">·dev</span>
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-['DM_Sans'] text-muted-foreground hover:text-[#c9a84c] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="mailto:nguyenquangdodmx2002@gmail.com"
          className="hidden md:flex items-center gap-2 bg-[#c9a84c] text-[#080808] font-['DM_Sans'] font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-[#e0bc5c] transition-colors duration-200"
        >
          Hire Me
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-['DM_Sans'] text-muted-foreground text-base" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href="mailto:nguyenquangdodmx2002@gmail.com"
            className="bg-[#c9a84c] text-[#080808] font-['DM_Sans'] font-semibold text-sm px-5 py-3 rounded-sm text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&h=1200&fit=crop&auto=format')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/95 via-[#080808]/80 to-[#080808]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-8 items-center w-full">
        <div className="md:col-span-9">
          <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.06)] px-4 py-1.5 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase">
              Open to Work — Full-time
            </span>
          </div>

          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tight mb-4">
            Nguyen<br />
            <em className="italic text-[#c9a84c]">Quang Do.</em>
          </h1>

          <p className="font-['DM_Sans'] text-xl md:text-2xl text-foreground/60 font-light mb-3 tracking-wide">
            Full-Stack Web Developer
          </p>

          <p className="font-['DM_Sans'] text-base md:text-lg text-foreground/50 max-w-2xl leading-relaxed mb-10 font-light">
            Specialising in React and ASP.NET Core (.NET 8) — building production-grade applications with Clean Architecture, cloud deployment, and AI-assisted workflows.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: Phone, text: "0925 709 729", href: "tel:0925709729" },
              { icon: Mail, text: "nguyenquangdodmx2002@gmail.com", href: "mailto:nguyenquangdodmx2002@gmail.com" },
              { icon: MapPin, text: "Gò Vấp, HCMC", href: "#" },
              { icon: Github, text: "github.com/nguyenquangdo2002", href: "https://github.com/nguyenquangdo2002" },
            ].map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-[#0e0e0e] px-4 py-2 rounded-sm text-muted-foreground text-sm font-['DM_Mono'] hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] transition-all duration-200"
              >
                <Icon size={12} />
                {text}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:nguyenquangdodmx2002@gmail.com"
              className="group flex items-center justify-center gap-2 bg-[#c9a84c] text-[#080808] font-['DM_Sans'] font-semibold px-8 py-4 rounded-sm hover:bg-[#e0bc5c] transition-all duration-200 text-base"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://github.com/nguyenquangdo2002"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-['DM_Sans'] font-medium px-8 py-4 rounded-sm hover:bg-[rgba(201,168,76,0.06)] transition-colors duration-200 text-base"
            >
              <Github size={16} />
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-b-0 border-border rounded-t-sm overflow-hidden">
            {[
              { val: ".NET 8", label: "ASP.NET Core" },
              { val: "React", label: "Frontend Stack" },
              { val: "3.0", label: "GPA / 4.0" },
              { val: "700", label: "TOEIC Score" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0e0e0e] px-6 py-5 flex flex-col gap-0.5">
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#c9a84c]">{s.val}</span>
                <span className="font-['DM_Sans'] text-xs text-muted-foreground tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Tech Stack</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {SKILLS.map(({ icon: Icon, label, items }) => (
            <div
              key={label}
              className="group bg-[#0a0a0a] p-7 flex flex-col gap-4 hover:bg-[#111] transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.06)] flex items-center justify-center group-hover:border-[rgba(201,168,76,0.5)] transition-colors duration-300">
                  <Icon size={14} className="text-[#c9a84c]" />
                </div>
                <span className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase">{label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-['DM_Sans'] text-foreground/70 text-sm bg-[#141414] border border-border px-3 py-1 rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Work</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Projects
          </h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="border border-border bg-[#0a0a0a] rounded-sm overflow-hidden hover:border-[rgba(201,168,76,0.3)] transition-colors duration-300"
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Left accent */}
                <div className="md:col-span-1 bg-[#080808] border-r border-border flex items-center justify-center p-4 md:p-0">
                  <span className="font-['DM_Mono'] text-[#c9a84c]/40 text-xs md:[writing-mode:vertical-rl] md:rotate-180 tracking-widest">
                    {p.year}
                  </span>
                </div>

                <div className="md:col-span-11 p-7 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="font-['DM_Mono'] text-muted-foreground text-xs tracking-widest uppercase mb-2 block">
                        {p.tag}
                      </span>
                      <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-foreground">
                        {p.title}
                      </h3>
                      <p className="font-['DM_Mono'] text-[#c9a84c] text-sm mt-1">{p.subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                      {p.links.backend && (
                        <a
                          href={p.links.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 border border-border text-muted-foreground text-xs font-['DM_Mono'] px-3 py-2 rounded-sm hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] transition-all duration-200"
                        >
                          <Server size={11} /> Backend
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {p.links.frontend && (
                        <a
                          href={p.links.frontend}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 border border-border text-muted-foreground text-xs font-['DM_Mono'] px-3 py-2 rounded-sm hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] transition-all duration-200"
                        >
                          <ExternalLink size={11} /> Live
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed font-light mb-5">
                    {p.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                        <span className="font-['DM_Sans'] text-foreground/60 text-sm font-light">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-['DM_Mono'] text-[10px] text-[#c9a84c]/70 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] px-2.5 py-1 rounded-sm tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Background</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Experience & Education
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Experience */}
          <div className="md:col-span-7 space-y-6">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="border border-border bg-[#0a0a0a] rounded-sm p-7 hover:border-[rgba(201,168,76,0.3)] transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-foreground">{e.role}</h3>
                    <p className="font-['DM_Sans'] text-muted-foreground text-sm mt-0.5">{e.company}</p>
                  </div>
                  <span className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-wide border border-[rgba(201,168,76,0.25)] px-3 py-1 rounded-sm">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                      <span className="font-['DM_Sans'] text-foreground/60 text-sm font-light leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {e.sites.map((s) => (
                    <a
                      key={s}
                      href={`https://${s}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-['DM_Mono'] text-[10px] text-muted-foreground border border-border px-2.5 py-1 rounded-sm hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.3)] transition-all duration-200"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education + About */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-border bg-[#0a0a0a] rounded-sm p-7 hover:border-[rgba(201,168,76,0.3)] transition-colors duration-300">
              <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Education</p>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-foreground mb-1">
                Industrial University of Ho Chi Minh City
              </h3>
              <p className="font-['DM_Sans'] text-muted-foreground text-sm mb-4">
                Information Systems · Oct 2020 – Present
              </p>
              <div className="flex gap-3 flex-wrap">
                {["GPA 3.0 / 4.0", "TOEIC 700"].map((badge) => (
                  <span key={badge} className="font-['DM_Mono'] text-xs text-[#c9a84c] border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] px-3 py-1.5 rounded-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.03)] rounded-sm p-7">
              <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">About Me</p>
              <ul className="space-y-3">
                {[
                  "Seeking full-time Front-end or Full-stack Developer role",
                  "Strong in React, ASP.NET Core, and modern JS ecosystem",
                  "Hands-on from traditional PHP to Clean Architecture with .NET 8 and cloud deployment",
                  "Fast learner, responsible, team-oriented",
                  "Comfortable reading English technical documentation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                    <span className="font-['DM_Sans'] text-foreground/60 text-sm font-light leading-relaxed">{t}</span>
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

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Quick Answers</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Common Questions
          </h2>
        </div>
        <div className="space-y-px border border-border rounded-sm overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-[#0a0a0a] border-b border-border last:border-b-0">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-['DM_Sans'] text-foreground font-medium text-base group-hover:text-[#c9a84c] transition-colors duration-200">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180 text-[#c9a84c]" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="font-['DM_Sans'] text-muted-foreground text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1800&h=900&fit=crop&auto=format')" }}
      />
      <div className="absolute inset-0 bg-[#080808]/90" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="font-['DM_Mono'] text-[#c9a84c] text-xs tracking-widest uppercase mb-6">Let's Work Together</p>
        <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-foreground leading-[0.95] tracking-tight mb-6">
          Open to<br />
          <em className="italic text-[#c9a84c]">opportunities.</em>
        </h2>
        <p className="font-['DM_Sans'] text-foreground/50 text-base max-w-lg mx-auto mb-10 font-light leading-relaxed">
          I'm actively seeking full-time Front-end or Full-stack roles. If you're looking for a developer who ships production-grade code and learns fast, let's talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:nguyenquangdodmx2002@gmail.com"
            className="group inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#080808] font-['DM_Sans'] font-bold px-8 py-4 rounded-sm hover:bg-[#e0bc5c] transition-all duration-200 text-base"
          >
            <Mail size={16} />
            nguyenquangdodmx2002@gmail.com
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
        <p className="font-['DM_Mono'] text-muted-foreground text-xs mt-8">
          0925 709 729 · Gò Vấp, HCMC · github.com/nguyenquangdo2002
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-['Playfair_Display'] text-[#c9a84c] font-bold text-lg">
          NQD<span className="text-foreground">·dev</span>
        </span>
        <p className="font-['DM_Mono'] text-muted-foreground text-xs">
          © 2025 Nguyen Quang Do · Full-Stack Web Developer · Ho Chi Minh City
        </p>
        <a
          href="https://github.com/nguyenquangdo2002"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-['DM_Sans'] text-muted-foreground text-xs hover:text-[#c9a84c] transition-colors duration-200"
        >
          <Github size={12} /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <NavBar open={menuOpen} setOpen={setMenuOpen} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
