import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="about-title" index="01" title="About" />

        <Reveal className="glass rounded-[1.75rem] p-7 sm:p-9">
          <p className="max-w-3xl text-base leading-relaxed sm:text-lg">{portfolio.summary}</p>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {portfolio.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="glass lift rounded-[1.75rem] p-6">
              <p className="font-display text-5xl tracking-[-0.05em]">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
              {stat.detail ? <p className="mt-1 text-sm text-accent">{stat.detail}</p> : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={(index % 3) * 0.05} className="glass lift rounded-[1.75rem] p-6">
              <p className="font-display text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 leading-relaxed">{highlight}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
