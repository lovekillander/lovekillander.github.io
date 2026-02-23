import { siteData } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-spacing pt-32 md:pt-40">
      <div className="content-max">
      <h1 className="heading-xl mb-8 md:mb-10">{siteData.headline}</h1>

<p className="body-lg mb-10 md:mb-14">{siteData.subheadline}</p>

<div className="mt-4 mb-10 md:mb-14">
  <p className="text-xs tracking-wide text-muted-foreground">{siteData.microCopy}</p>
  <p className="eyebrow mt-2">{siteData.eyebrow}</p>
</div>

<div className="flex items-center gap-4">
  <a
    href="#services"
    className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition"
    onClick={() => trackEvent("view_work")}
  >
    {siteData.ctaPrimary}
  </a>

  <a
    href="#contact"
    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:bg-foreground hover:text-background transition"
    onClick={() => trackEvent("get_in_touch")}
  >
    {siteData.ctaSecondary}
  </a>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
