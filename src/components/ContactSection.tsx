import { useState } from "react";
import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";
import { trackEvent } from "@/lib/analytics";

const ContactSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("send_message");

    if (!siteData.formspree) {
      // Fallback until Formspree is configured
      window.location.href = `mailto:${siteData.contact.email}?subject=Hello from ${form.name}&body=${form.message}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${siteData.formspree}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New message from your portfolio" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="content-max">
        <div ref={ref} className="reveal-up max-w-lg">
          <h2 className="heading-lg mb-6 whitespace-pre-line">{siteData.contact.headline}</h2>
          <p className="text-sm text-muted-foreground mb-8">{siteData.contact.subheadline}</p>

          {status === "success" ? (
            <div className="py-8 text-sm text-muted-foreground">
              Message sent — I'll be in touch soon.
            </div>
          ) : (
            <form className="space-y-4 mb-8" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors duration-200 mt-2 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          )}

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="hover:text-foreground transition-colors"
              onClick={() => trackEvent("email")}
            >
              Email
            </a>
            <a
              href={siteData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              onClick={() => trackEvent("linkedin")}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
