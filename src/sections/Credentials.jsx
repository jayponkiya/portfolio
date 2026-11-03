import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

function splitCertificate(label) {
  const index = label.indexOf(":");
  if (index === -1) return { kicker: "", title: label };
  return { kicker: label.slice(0, index).trim(), title: label.slice(index + 1).trim() };
}

export function Credentials() {
  return (
    <section id="background" aria-labelledby="background-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="background-title" index="05" title="Background" />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="glass rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="font-display text-2xl tracking-tight">Education</h3>
            <div className="mt-6 space-y-6">
              {portfolio.education.map((item) => (
                <article key={`${item.credential}-${item.dates}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-semibold">{item.credential}</h4>
                    <p className="text-sm text-accent">{item.dates}</p>
                  </div>
                  <p className="mt-1 text-muted">{item.school}</p>
                  <p className="text-sm text-muted">{item.location}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="glass rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="font-display text-2xl tracking-tight">Certificates</h3>
            <div className="mt-6 space-y-6">
              {portfolio.certificates.map((label) => {
                const cert = splitCertificate(label);
                return (
                  <article key={label}>
                    {cert.kicker ? <p className="text-sm font-medium text-accent">{cert.kicker}</p> : null}
                    <h4 className="mt-1 text-lg font-semibold">{cert.title || label}</h4>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal className="glass rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="font-display text-2xl tracking-tight">Languages</h3>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {portfolio.languages.map((language) => (
                <li key={language} className="font-display text-3xl tracking-tight">
                  {language}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="glass rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="font-display text-2xl tracking-tight">Interests</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {portfolio.interests.map((interest) => (
                <li key={interest} className="chip">
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
