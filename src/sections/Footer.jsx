import { ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { scrollToId } from "../lib/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  const goHome = (event) => {
    event.preventDefault();
    scrollToId("home");
  };

  return (
    <>
      <footer className="border-t border-line py-10">
        <div className="shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight">{portfolio.name}</p>
            <p className="mt-1 max-w-md text-sm text-muted">{portfolio.title}</p>
            <p className="mt-3 text-sm text-muted">
              © {year} {portfolio.name}. {portfolio.location}.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {portfolio.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted"
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToId(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="#home" onClick={goHome} className="btn btn-ghost btn-sm">
              <ArrowUp size={15} aria-hidden="true" />
              {portfolio.actions.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
