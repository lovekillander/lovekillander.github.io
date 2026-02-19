import { siteData } from "@/data/siteData";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-spacing pt-32 md:pt-40">
      <div className="content-max">
        <p className="eyebrow mb-2 md:mb-3">{siteData.eyebrow}</p>
        <p className="text-xs tracking-wide text-muted-foreground mb-6 md:mb-8">{siteData.microCopy}</p>
        <h1 className="heading-xl mb-8 md:mb-10">{siteData.headline}</h1>
        <p className="body-lg mb-10 md:mb-14">{siteData.subheadline}</p>
        <div className="flex items-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors duration-200"
          >
            {siteData.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:bg-secondary transition-colors duration-200"
          >
            {siteData.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
