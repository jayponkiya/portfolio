import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Reveal({ as = "div", delay = 0, className, children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const end = Math.max(0.42, 0.68 - Math.min(delay, 0.16));
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.08", `start ${end}`],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag ref={ref} className={className} style={{ y: reduce ? 0 : y }}>
      {children}
    </Tag>
  );
}
