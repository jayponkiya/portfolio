export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenis = window.__lenis;
  if (lenis && !reduce) {
    lenis.scrollTo(el, { offset: -84 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  }

  const hash = `#${id}`;
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
