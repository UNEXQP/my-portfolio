import { useState } from "react";

type SkillCategory = "core" | "extended" | "tooling";

interface Skill {
  name: string;
  category: SkillCategory;
}

type ProjectStatus = "live" | "building" | "freelance";

interface Project {
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  url?: string;
}

const skills: Skill[] = [
  { name: "MongoDB", category: "core" },
  { name: "Express.js", category: "core" },
  { name: "React", category: "core" },
  { name: "Node.js", category: "core" },
  { name: "TypeScript", category: "extended" },
  // { name: "PostgreSQL", category: "extended" },
  // { name: "Redis", category: "extended" },
  // { name: "Tailwind CSS", category: "extended" },
  // { name: "Railway", category: "tooling" },
  // { name: "Render", category: "tooling" },
  // { name: "Git", category: "tooling" },
  // { name: "REST APIs", category: "tooling" },
];

const projects: Project[] = [
  {
    name: "Ecommerce",
    description:
      "A simple E-commerce Application.",
    stack: ["React","Tailwind","zustand","tanstack query"],
    status: "building",
    url: "https://e-commerce-upgrade.vercel.app/",
  }
  // {
  //   name: "ZELUX",
  //   description:
  //     "E-commerce platform with full auth, protected routes, cart state, and product UI.",
  //   stack: ["React", "Node.js", "MongoDB", "Context API"],
  //   status: "live",
  //   url: "#",
  // },
  // {
  //   name: "Pulse",
  //   description:
  //     "Mood tracking app built with a normalized PostgreSQL schema and live Express routes.",
  //   stack: ["Node.js", "PostgreSQL", "Express"],
  //   status: "live",
  //   url: "#",
  // },
  // {
  //   name: "PAU Dashboard",
  //   description:
  //     "Pixel-perfect Figma-to-React settings dashboard built for a client.",
  //   stack: ["React", "TypeScript", "Tailwind CSS"],
  //   status: "freelance",
  // },
];

const categoryDot: Record<SkillCategory, string> = {
  core: "bg-emerald-500",
  extended: "bg-blue-500",
  tooling: "bg-zinc-400",
};

const categoryLabel: Record<SkillCategory, string> = {
  core: "core stack",
  extended: "extended",
  tooling: "tooling",
};

const statusStyles: Record<ProjectStatus, string> = {
  live: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  building:
    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  freelance:
    "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#111210] dark:bg-zinc-950 text-[#e8e8e8] dark:text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <section className="mb-12">
          <h1 className="text-2xl font-medium tracking-tight mb-1">Hi Am Rotimi</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
            Full-stack developer · MERN · TypeScript
          </p>
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-5">
            Lagos, Nigeria
          </p>
          <nav className="flex gap-5 text-sm text-zinc-500 dark:text-zinc-400">
            {[
              { label: "GitHub", href: "https://github.com/" },
              { label: "Email", href: "mailto:hello@yourdomain.dev" },
              { label: "Twitter", href: "https://x.com/codemancer10" },
              { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <hr className="border-zinc-100 dark:border-zinc-800 mb-10" />

        {/* Skills */}
        <section className="mb-10">
          <p className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Skills
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-md px-3 py-2"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${categoryDot[skill.category]}`}
                />
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-5">
            {(["core", "extended", "tooling"] as SkillCategory[]).map((cat) => (
              <div key={cat} className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${categoryDot[cat]}`}
                />
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  {categoryLabel[cat]}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-zinc-100 dark:border-zinc-800 mb-10" />

        {/* Projects */}
        <section className="mb-12">
          <p className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Projects
          </p>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {projects.map((project) => (
              <div
                key={project.name}
                className="py-4 flex items-start justify-between gap-4 group"
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 transition-all"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{project.name}</span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                    {project.description}
                  </p>
                  <p
                    className={`text-xs font-mono transition-colors duration-200 ${hoveredProject === project.name
                        ? "text-zinc-500 dark:text-zinc-400"
                        : "text-zinc-300 dark:text-zinc-600"
                      }`}
                  >
                    {project.stack.join(" · ")}
                  </p>
                </div>
                <span
                  className={`text-[11px] font-mono px-2 py-1 rounded flex-shrink-0 mt-0.5 ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-zinc-100 dark:border-zinc-800 mb-6" />

        {/* Footer */}
        <footer className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} · Rotimi · Self-taught · Open to work
        </footer>
      </div>
    </main>
  );
}