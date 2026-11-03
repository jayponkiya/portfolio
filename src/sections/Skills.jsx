import { useState } from "react";
import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Skills() {
  const [reduce] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const groups = portfolio.skillGroups;

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="skills-title" index="02" title="Skills" />
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => {
            const wide = groups.length % 2 === 1 && index === groups.length - 1;
            return (
              <Reveal
                key={group.title}
                delay={(index % 2) * 0.06}
                className={`glass lift rounded-[1.75rem] p-6 sm:p-7 ${wide ? "md:col-span-2" : ""}`}
              >
                <h3 className="font-display text-2xl tracking-tight">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="marquee-wrap mt-10 overflow-hidden border-y border-line py-4" aria-hidden="true">
        {reduce ? (
          <div className="shell flex flex-wrap gap-2">
            {portfolio.marquee.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex gap-3 pr-3">
                {portfolio.marquee.map((item, index) => (
                  <span key={`${copy}-${index}`} className="chip shrink-0 whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
