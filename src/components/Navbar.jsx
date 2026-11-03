import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { portfolio, sectionIds } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { scrollToId } from "../lib/scroll";

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    const menu = menuRef.current;
    const items = () => [...(menu?.querySelectorAll("a, button") ?? [])];
    items()[0]?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const list = items();
      const first = list[0];
      const last = list[list.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.__lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const follow = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (open) {
      document.body.style.overflow = "";
      window.__lenis?.start();
      setOpen(false);
    }
    document.getElementById("main")?.focus({ preventScroll: true });
    scrollToId(id);
  };

  return (
    <>
    <header className={`nav-bar fixed inset-x-0 top-0 z-50 ${stuck ? "is-stuck" : ""}`}>
      <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(event) => follow(event, "home")}
          className="flex items-center gap-3 rounded-full"
          aria-label={`${portfolio.name}, home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-fill font-display text-sm font-semibold text-onfill">
            JP
          </span>
          <span className="font-display text-base tracking-tight sm:text-lg">{portfolio.name}</span>
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {portfolio.nav.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? "true" : undefined}
                    onClick={(event) => follow(event, item.id)}
                    className={`relative rounded-full px-3 py-2 text-sm font-medium ${
                      current ? "text-ink" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute right-3 bottom-1 left-3 h-px origin-left bg-fill transition-transform duration-300 ${
                        current ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink"
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-bg px-6 py-8 lg:hidden"
            style={{ top: "var(--nav-h)" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              <ul className="grid gap-2">
                {portfolio.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active === item.id ? "true" : undefined}
                      onClick={(event) => follow(event, item.id)}
                      className="block rounded-2xl px-3 py-3 font-display text-3xl tracking-tight"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
