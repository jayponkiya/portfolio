import { Reveal } from "./Reveal";

export function SectionHeading({ id, index, title, children }) {
  return (
    <Reveal className="mb-6 max-w-2xl sm:mb-8">
      <p className="text-[0.78rem] font-semibold tracking-[0.18em] text-accent uppercase">{index}</p>
      <h2
        id={id}
        className="mt-3 font-display text-[2.35rem] leading-[1.05] tracking-[-0.045em] sm:text-5xl"
      >
        {title}
      </h2>
      {children ? <div className="mt-4 max-w-xl text-base leading-relaxed text-muted">{children}</div> : null}
    </Reveal>
  );
}
