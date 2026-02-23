import React, { useEffect, useMemo, useState } from "react";
import { siteData } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "leadmagnet_last_shown_ts";

function daysToMs(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

export default function LeadMagnetModal() {
  const cfg = siteData.leadMagnet;

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Soscale-ish timing defaults (feels intentional, not jumpy)
  const delayMs = cfg?.delayMs ?? 1800;
  const oncePerDays = cfg?.oncePerDays ?? 0.01;

  const shouldShow = useMemo(() => {
    if (!cfg?.enabled) return false;

    const lastRaw = localStorage.getItem(STORAGE_KEY);
    if (!lastRaw) return true;

    const last = Number(lastRaw);
    if (!Number.isFinite(last)) return true;

    return Date.now() - last > daysToMs(oncePerDays);
  }, [cfg?.enabled, oncePerDays]);

  useEffect(() => {
    if (!shouldShow) return;

    const t = window.setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [shouldShow, delayMs]);

  const close = (method: "button" | "backdrop") => {
    trackEvent(method === "button" ? "popup_close_button_click" : "popup_close_backdrop_click");
    setOpen(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("popup_email_submit");
    // TODO later: connect Mailchimp/ConvertKit/etc
    setOpen(false);
  };

  if (!cfg?.enabled) return null;

  const headline = cfg.headline ?? "Enter your email for a Creative Audit";
  const subheadline =
    cfg.subheadline ??
    "Get a short, actionable audit: positioning, offer, and performance signals.";
  const cta = cfg.cta ?? "Get it";
  const image = cfg.image;

  return (
    <>
      {/* Overlay (Soscale feel: soft blur, deep black) */}
      <div
        className={[
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => close("backdrop")} />
      </div>

      {/* Modal wrapper */}
      <div
        className={[
          "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Card */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Creative Audit popup"
          className={[
            "relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl",
            "transform transition-all duration-300 will-change-transform",
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]",
          ].join(" ")}
        >
          {/* Top subtle line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => close("button")}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
          >
            Close
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT: copy */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.2em] text-white/70">
                CREATIVE AUDIT
                <span className="h-1 w-1 rounded-full bg-white/40" />
                FREE
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {headline}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {subheadline}
              </p>

              {/* Form */}
              <form onSubmit={onSubmit} className="mt-10">
                <label className="block text-xs tracking-[0.18em] text-white/60">
                  YOUR EMAIL
                </label>

                <div className="mt-2 flex gap-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25"
                  />

                  <button
                    type="submit"
                    className="shrink-0 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-95"
                  >
                    {cta}
                  </button>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-white/40">
                  By submitting, you agree to be contacted. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* RIGHT: image */}
            <div className="relative min-h-[280px] md:min-h-full bg-black">
              {image ? (
                <img
                  src={image}
                  alt="Lead magnet visual"
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />
              ) : null}

              {/* Soscale-ish overlays */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
                Creative Audit • Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

