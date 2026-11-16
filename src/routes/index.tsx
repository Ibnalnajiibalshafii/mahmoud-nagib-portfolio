import { SceneBackdrop } from "@/components/scene-backdrop";
import { SectionZoom } from "@/components/section-zoom";
import { SiteHeader } from "@/components/site-header";
import { listProjects } from "@/lib/projects";
import { getContact, getPortrait, listPages, listSkills } from "@/lib/site";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Database,
  FolderKanban,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PieChart,
  ShoppingCart,
  Table2,
  University,
} from "lucide-react";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [projects, contact, pages, portrait, skills] = await Promise.all([
      listProjects(),
      getContact(),
      listPages(),
      getPortrait(),
      listSkills(),
    ]);
    return { projects, contact, pages, portrait, skills };
  },
  head: () => ({
    meta: [{ title: "Mahmoud Nagib | Junior Data Analyst" }],
  }),
  component: Home,
});

const projects = [
  {
    to: "/work/supermarket",
    title: "Supermarket Sales Analytics",
    meta: "Python • Pandas • Matplotlib • Seaborn",
    copy: "Analyzed 120 supermarket transactions across 5 Kenyan branches. Total revenue KES 190,122. Eldoret led the branches and Household led the categories.",
    tags: ["Data Cleaning", "Aggregation", "Visualization"],
    tint: "from-cyan-900 to-blue-900",
    tag: "bg-teal/20 text-teal",
    icon: ShoppingCart,
  },
  {
    to: "/work/bank",
    title: "Bank Branch Performance",
    meta: "Excel • PivotTables • Formulas • Analysis",
    copy: "Five branches, 50 employees. Nakuru missed its sales target by KES 600,000 and has the lowest customer score.",
    tags: ["Excel", "KPI Analysis", "Recommendations"],
    tint: "from-teal-900 to-cyan-900",
    tag: "bg-copper/20 text-copper",
    icon: University,
  },
  {
    to: "/work/students",
    title: "Student Performance Analysis",
    meta: "Data Cleaning • Scoring • Grading",
    copy: "Eighty students across four forms. Totals, averages, and grades, including a gender field that contradicts the names.",
    tags: ["Data Quality", "Scoring", "Reporting"],
    tint: "from-indigo-900 to-purple-900",
    tag: "bg-indigo-400/20 text-indigo-300",
    icon: GraduationCap,
  },
] as const;

function Home() {
  const data = Route.useLoaderData();
  const custom = data.projects;
  const contact = data.contact;
  const portrait = data.portrait || "/portrait.jpg";
  const socials = [
    { href: contact.youtube, label: "YouTube", kind: "youtube" as const },
    { href: contact.tiktok, label: "TikTok", kind: "tiktok" as const },
    { href: contact.instagram, label: "Instagram", kind: "instagram" as const },
  ].filter((item) => item.href);
  return (
    <>
      <SceneBackdrop />
      <SectionZoom />
      <SiteHeader contact={contact} pages={data.pages} />
      <main className="page-layer">
        <section id="hero" className="zoom-section hero-stage relative overflow-hidden py-24 md:py-32">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orb orb-a" aria-hidden="true" />
          <div className="orb orb-b" aria-hidden="true" />
          <div className="drift relative mx-auto max-w-3xl px-6">
            <p className="hero-in mb-4 font-medium text-teal">Junior Data Analyst • {contact.location}</p>
            <h1 className="hero-in hero-in-2 mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Turning Data Into
              <br />
              <span className="shine bg-gradient-to-r from-teal to-copper bg-clip-text text-transparent">
                Clear Insights
              </span>
            </h1>
            <p className="hero-in hero-in-3 mb-8 max-w-xl text-lg text-slate-300">
              I help businesses make smarter decisions through data cleaning, analysis,
              visualization, and actionable reporting. Open a project to see its dashboard.
            </p>
            <div className="hero-in hero-in-4 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-teal px-8 py-3 font-medium text-white transition hover:bg-copper"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-teal px-8 py-3 font-medium text-teal transition hover:bg-teal hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="zoom-section section-glass py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-teal">About</p>
            <h2 className="mt-3 text-center text-4xl font-bold">About Me</h2>
            <div className="panel rise mt-12 overflow-hidden rounded-3xl md:grid md:grid-cols-[17rem_1fr]">
              <div className="flex flex-col items-center bg-gradient-to-b from-teal/25 via-teal/10 to-transparent px-8 py-10 text-center">
                <img
                  src={portrait}
                  alt="Mahmoud Nagib"
                  className="portrait-pop size-44 rounded-full object-cover shadow-2xl ring-4 ring-teal"
                />
                <p className="mt-5 text-2xl font-bold">Mahmoud Nagib</p>
                <p className="mt-1 text-teal">Junior Data Analyst</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                  <MapPin aria-hidden="true" className="size-4 text-teal" />
                  {contact.location}
                </p>
                {socials.length > 0 ? (
                  <div className="mt-5 flex gap-3">
                    {socials.map((item) => (
                      <a
                        key={item.kind}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="transition hover:scale-105"
                      >
                        <SocialIcon kind={item.kind} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="border-t border-line p-8 md:border-t-0 md:border-l md:p-10">
                <p className="text-lg leading-relaxed text-slate-300">
                  I am a junior data analyst in Nairobi. I take a raw file, check what can be
                  trusted, and turn it into a comparison a team can use.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  The dashboards on this site cover supermarket sales, bank branch performance, and
                  student scores. Each one names the result, the figure behind it, and the next step.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {data.skills.map((item, index) => {
                    const Icon = [BarChart3, Table2, Database, PieChart, Lightbulb][index % 5];
                    return (
                    <div
                      key={item.id}
                      className="panel rise skill-tile card-lift rounded-2xl"
                    >
                      <div className="flex items-start gap-3 p-4">
                      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        {item.note ? <p className="text-sm text-muted">{item.note}</p> : null}
                      </div>
                    </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="zoom-section section-glass py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="rise mb-4 text-center text-4xl font-bold">Featured Projects</h2>
            <p className="mb-12 text-center text-muted">Three analyses, each with a live dashboard</p>
            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.to}
                  to={project.to}
                  className="rise project-card block"
                >
                  <div className="panel card-lift overflow-hidden rounded-2xl">
                  <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.tint}`}>
                    <project.icon aria-hidden="true" className="size-16 text-white/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-sm text-muted">{project.meta}</p>
                    <p className="mb-4 text-slate-300">{project.copy}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`rounded-full px-3 py-1 text-xs ${project.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </Link>
              ))}
              {custom.map((project, index) => {
                const tags = project.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean);
                const tint = ["from-cyan-900 to-blue-900", "from-teal-900 to-cyan-900", "from-indigo-900 to-purple-900"][
                  index % 3
                ];
                return (
                  <Link
                    key={project.id}
                    to="/projects/$projectId"
                    params={{ projectId: String(project.id) }}
                    className="rise project-card block"
                  >
                    <div className="panel card-lift overflow-hidden rounded-2xl">
                      <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${tint}`}>
                        <FolderKanban aria-hidden="true" className="size-16 text-white/40" />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                        {project.tools ? <p className="mb-4 text-sm text-muted">{project.tools}</p> : null}
                        <p className="mb-4 text-slate-300">{project.summary}</p>
                        {tags.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-teal/20 px-3 py-1 text-xs text-teal">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="zoom-section section-glass py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="rise mb-12 text-center text-4xl font-bold">Services I Offer</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Data Cleaning & Preparation",
                  copy: "Clean messy datasets, handle missing values, standardize formats, and prepare data for analysis.",
                },
                {
                  title: "Analysis & Visualization",
                  copy: "Descriptive analysis, KPIs, charts, and dashboards in Python or Excel that tell a clear story.",
                },
                {
                  title: "Reporting & Insights",
                  copy: "Written findings, the figures behind them, and a recommendation you can act on.",
                },
              ].map((item) => (
                <article key={item.title} className="rise">
                  <div className="panel card-lift h-full rounded-2xl p-8">
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="social" className="zoom-section section-glass py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">Social</p>
            <h2 className="mt-3 text-4xl font-bold">Find me online</h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {socials.map((item) => (
                <a
                  key={item.kind}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3"
                >
                  <SocialIcon kind={item.kind} large />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-teal">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="zoom-section section-glass py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold">Let's Work Together</h2>
            <p className="mb-8 text-lg text-muted">
              Open to data analysis work. Reach out and tell me what you need looked at.
            </p>
            <div className="panel rise inline-block rounded-2xl p-8 text-left">
              <a
                className="mb-4 flex items-center gap-3 text-lg text-teal hover:underline"
                href={`mailto:${contact.email}`}
              >
                <Mail aria-hidden="true" className="size-5 shrink-0" />
                {contact.email}
              </a>
              <a
                className="mb-4 flex items-center gap-3 text-lg text-teal hover:underline"
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              >
                <Phone aria-hidden="true" className="size-5 shrink-0" />
                {contact.phone}
              </a>
              <a
                className="mb-4 flex items-center gap-3 text-lg text-teal hover:underline"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" className="size-5 shrink-0" />
                LinkedIn
              </a>
              <p className="flex items-center gap-3 text-muted">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-teal" />
                {contact.location}
              </p>
            </div>
          </div>
        </section>

        <footer id="footer" className="section-glass border-t border-line py-8 text-center text-muted">
          <p>© 2026 Mahmoud Nagib. Junior Data Analyst Portfolio.</p>
        </footer>
      </main>
    </>
  );
}

function SocialIcon({ kind, large = false }: { kind: "youtube" | "tiktok" | "instagram"; large?: boolean }) {
  const size = large ? "size-16" : "size-11";
  if (kind === "youtube") {
    return (
      <span className={`inline-flex ${size} items-center justify-center rounded-2xl bg-[#ff0033] text-white shadow-lg`}>
        <svg viewBox="0 0 24 24" className={large ? "size-8" : "size-6"} aria-hidden="true" fill="currentColor">
          <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
        </svg>
      </span>
    );
  }
  if (kind === "tiktok") {
    return (
      <span className={`inline-flex ${size} items-center justify-center rounded-2xl bg-black text-white shadow-lg ring-1 ring-white/20`}>
        <svg viewBox="0 0 24 24" className={large ? "size-8" : "size-6"} aria-hidden="true" fill="currentColor">
          <path d="M14.5 3c.4 2.4 1.8 4.1 4.1 4.4v2.6c-1.4 0-2.7-.4-3.9-1.2v6.5c0 3.4-2.6 6.2-6.1 6.2S2.5 18.7 2.5 15.3c0-3.3 2.6-6 5.9-6.2v2.7c-1.7.2-3 1.6-3 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4V3h2.3z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`inline-flex ${size} items-center justify-center rounded-2xl text-white shadow-lg`}
      style={{ background: "radial-gradient(circle at 30% 110%, #feda75, #fa7e1e 35%, #d62976 60%, #962fbf 80%, #4f5bd5)" }}
    >
      <svg viewBox="0 0 24 24" className={large ? "size-8" : "size-6"} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
