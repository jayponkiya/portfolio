import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    setOn(true);
    document.documentElement.classList.add("custom-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let visible = false;
    let frame = 0;

    const paint = () => {
      const opacity = visible ? "1" : "0";
      if (dot.current) {
        dot.current.style.opacity = opacity;
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.opacity = opacity;
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      paint();
      frame = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      visible = true;
    };

    const onOver = (event) => {
      const hot = event.target instanceof Element && event.target.closest("a, button, [role='tab']");
      document.documentElement.classList.toggle("cursor-hot", Boolean(hot));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("custom-cursor", "cursor-hot");
    };
  }, []);

  return (
    <div className={on ? undefined : "hidden"} aria-hidden="true">
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring">
        <span />
      </div>
    </div>
  );
}
