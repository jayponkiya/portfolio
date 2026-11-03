import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

function TimelineDot({ progress, at }) {
  const start = Math.max(0, at - 0.08);
  const end = Math.min(1, Math.max(start + 0.06, at));
  const scale = useTransform(progress, [start, end], [0.45, 1]);
  const opacity = useTransform(progress, [start, end], [0.28, 1]);

  return (
    <motion.span
      aria-hidden="true"
      style={{ scale, opacity }}
      className="absolute top-8 left-0 z-[1] h-3 w-3 origin-center rounded-full bg-fill ring-4 ring-bg"
    />
  );
}

export function Experience() {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.82", "end 0.38"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const jobs = portfolio.experience;
  const last = Math.max(jobs.length - 1, 1);

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="experience-title" index="03" title="Experience" />
        <div ref={listRef} className="relative">
          <span aria-hidden="true" className="absolute top-3 bottom-3 left-[5px] w-px bg-line" />
          <motion.span
            aria-hidden="true"
            className="timeline-line absolute top-3 bottom-3 left-[5px] w-px origin-top bg-fill"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />
          <div className="space-y-5">
            {jobs.map((job, index) => (
              <Reveal
                key={`${job.company}-${job.dates}`}
                as="article"
                delay={index * 0.05}
                className="relative pl-10"
              >
                <TimelineDot progress={scrollYProgress} at={index / last} />
                <div className="glass rounded-[1.75rem] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-sm font-medium text-accent">{job.dates}</p>
                    <p className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">{job.role}</h3>
                  <p className="mt-2 text-muted">{job.company}</p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
