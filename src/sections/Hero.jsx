import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../data/portfolio";
import { ease } from "../lib/motion";
import { scrollToId } from "../lib/scroll";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { y: 28 },
  show: { y: 0, transition: { duration: 0.75, ease } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const [prefersReduce] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const calm = Boolean(reduce) || prefersReduce;
  const platforms = portfolio.skillGroups[0]?.items ?? [];

  const follow = (event, id) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <section id="home" className="pt-[calc(var(--nav-h)+2.75rem)] pb-8 sm:pb-12">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.8fr)] lg:gap-16">
        <motion.div variants={list} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm font-medium tracking-[0.16em] text-muted uppercase">
            {portfolio.location}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 font-display text-[clamp(3.4rem,9vw,6.6rem)] leading-[0.9] tracking-[-0.055em]"
          >
            {portfolio.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 min-h-[1.35em] font-display text-2xl tracking-tight text-accent sm:text-3xl"
            aria-label={portfolio.title}
          >
            {calm ? (
              portfolio.title
            ) : (
              <span aria-hidden="true">
                <TypeAnimation
                  sequence={portfolio.roles.flatMap((role) => [role, 1800])}
                  wrapper="span"
                  speed={45}
                  deletionSpeed={60}
                  repeat={Infinity}
                  cursor
                />
              </span>
            )}
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {portfolio.heroIntro}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" onClick={(event) => follow(event, "projects")} className="btn btn-primary">
              {portfolio.actions.projects}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={portfolio.resume} download className="btn btn-ghost">
              {portfolio.actions.resume}
              <Download size={16} aria-hidden="true" />
            </a>
            <a href="#contact" onClick={(event) => follow(event, "contact")} className="btn btn-ghost">
              {portfolio.actions.contact}
              <Mail size={16} aria-hidden="true" />
            </a>
          </motion.div>
          {platforms.length ? (
            <motion.ul variants={item} className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {platforms.map((platform) => (
                <li key={platform}>{platform}</li>
              ))}
            </motion.ul>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div
            className="absolute -inset-8 rounded-full blur-3xl"
            style={{ background: "color-mix(in srgb, var(--fill) 28%, transparent)" }}
            aria-hidden="true"
          />
          <div className="float-y relative">
            <img
              src={portfolio.profileImage}
              alt={portfolio.profileAlt}
              width={800}
              height={800}
              decoding="async"
              fetchPriority="high"
              className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow)] ring-1 ring-line"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
