import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { emailjsConfigured, sendMessage } from "../lib/contact";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const direct = emailjsConfigured();

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (String(data.get("company") || "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const result = await sendMessage({
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        message: String(data.get("message") || "").trim(),
        to: portfolio.email,
      });
      setStatus(result);
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-10 sm:py-14">
      <div className="shell">
        <SectionHeading id="contact-title" index="06" title="Contact" />
        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="glass rounded-[1.75rem] p-6 sm:p-8">
            <address className="grid gap-5">
              <a href={`mailto:${portfolio.email}`} className="group flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted">Email</span>
                  <span className="font-medium break-all">{portfolio.email}</span>
                </span>
              </a>
              <a href={`tel:${portfolio.phone}`} className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted">Phone</span>
                  <span className="font-medium">{portfolio.phone}</span>
                </span>
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted">Location</span>
                  <span className="font-medium">{portfolio.location}</span>
                </span>
              </p>
            </address>
          </Reveal>

          <Reveal delay={0.06} className="glass relative rounded-[1.75rem] p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true" inert>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <label className="grid gap-2 text-sm font-medium" htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={120}
                  className="field font-normal"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium" htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={160}
                  className="field font-normal"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium" htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  className="field resize-y font-normal"
                />
              </label>
              <p className="text-sm text-muted">
                {direct
                  ? "Sends the message directly by email."
                  : "Opens your email app with this message ready to send."}
              </p>
              <div>
                <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? portfolio.actions.sending : portfolio.actions.send}
                </button>
              </div>
              <p role="status" aria-live="polite" className="min-h-6 text-sm">
                {status === "sent" ? "Message sent." : null}
                {status === "mailto"
                  ? "Your email app should open with this message ready to send."
                  : null}
                {status === "error"
                  ? "The message could not be sent. Please use the email address on this page."
                  : null}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
