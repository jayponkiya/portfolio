import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce !== false) return undefined;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
    });
    window.__lenis = lenis;

    let frame = 0;
    const loop = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, [reduce]);

  return children;
}
