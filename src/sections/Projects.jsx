import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ease } from "../lib/motion";

const covers = [
  "linear-gradient(155deg, #1c2612 0%, #3e4f1c 48%, #10140c 100%)",
  "linear-gradient(160deg, #10211e 0%, #1d4a44 50%, #101614 100%)",
  "linear-gradient(155deg, #241c10 0%, #4a3b22 52%, #14110c 100%)",
  "linear-gradient(160deg, #141822 0%, #2a3a52 50%, #10131a 100%)",
  "linear-gradient(155deg, #241628 0%, #4a2c58 48%, #140f18 100%)",
  "linear-gradient(160deg, #101816 0%, #1e4038 50%, #0e1412 100%)",
  "linear-gradient(155deg, #241610 0%, #5a3224 48%, #160f0c 100%)",
];

function siteUrl(domain) {
  return `https://${String(domain).replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
}

function mark(name) {
  const words = name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "•";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ProjectCard({ project, tech, cover }) {
  const ref = useRef(null);
  const url = siteUrl(project.domain);

  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "transform 80ms linear";
    el.style.transform = `perspective(1000px) rotateX(${(-py * 4.5).toFixed(2)}deg) rotateY(${(px * 5.5).toFixed(2)}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass group flex h-full flex-col overflow-hidden rounded-[1.75rem]"
      style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)" }}
    >
      <div className="relative h-40 overflow-hidden" style={{ background: cover }} aria-hidden="true">
        <span className="absolute top-5 left-6 origin-left font-display text-5xl tracking-tight text-white/90 transition-transform duration-500 group-hover:scale-105">
          {mark(project.name)}
        </span>
        <span className="absolute right-6 bottom-4 left-6 truncate text-sm text-white/75">{project.domain}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted">{project.type}</p>
        <h3 className="mt-2 font-display text-2xl tracking-tight">{project.name}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent"
        >
          {project.domain}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {project.features?.length ? (
          <ul className="mt-4 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-fill" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {tech?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tech.map((item) => (
              <li key={item} className="chip !py-1 text-xs">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            {portfolio.actions.visit}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only">
              {" "}
              {project.name}, opens in a new tab
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const groups = portfolio.projectGroups;
  const [active, setActive] = useState(groups[0]?.id ?? "");
  const group = groups.find((item) => item.id === active) ?? groups[0];

  const onKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = groups.findIndex((item) => item.id === active);
    const next =
      event.key === "ArrowRight"
        ? groups[(index + 1) % groups.length]
        : groups[(index - 1 + groups.length) % groups.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  if (!group) return null;

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="projects-title" index="04" title="Projects" />

        <div className="flex flex-col items-start gap-3">
          <div role="tablist" aria-label="Project platforms" className="flex flex-wrap gap-2" onKeyDown={onKeyDown}>
            {groups.map((item) => {
              const selected = item.id === group.id;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    selected ? "bg-fill text-onfill" : "border border-line bg-card text-ink"
                  }`}
                >
                  {item.label}
                  <span className="ml-2 font-medium opacity-70">{item.items.length}</span>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-muted">Role: {group.role}</p>
        </div>

        <motion.div
          key={group.id}
          id={`panel-${group.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${group.id}`}
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="mt-8"
        >
          {group.items.length ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {group.items.map((project, index) => (
                <Reveal key={project.domain} delay={(index % 2) * 0.05} className="h-full">
                  <ProjectCard
                    project={project}
                    tech={project.tech?.length ? project.tech : group.tech}
                    cover={covers[index % covers.length]}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-muted">No projects in this category yet.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
