import { useState } from "react";
import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";
import { trackEvent } from "@/lib/analytics";

const ContactSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="content-max">
        <div ref={ref} className="reveal-up max-w-lg">
          <h2 className="heading-lg mb-6 whitespace-pre-line">{siteData.contact.headline}</h2>

          <form
            className="space-y-4 mb-8"
            onSubmit={(e) => {
              e.preventDefault();
              trackEvent("contact_form_submit");
              window.location.href = `mailto:${siteData.contact.email}?subject=Hello from ${form.name}&body=${form.message}`;
            }}
          >
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
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors duration-200 mt-2"
            >
              Send message
            </button>
          </form>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="hover:text-foreground transition-colors"
              onClick={() => trackEvent("contact_email_click")}
            >
              Email
            </a>
            <a
              href={siteData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              onClick={() => trackEvent("contact_linkedin_click")}
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
