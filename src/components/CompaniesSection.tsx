import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";

const CompaniesSection = () => {
  const ref = useReveal<HTMLDivElement>();

  const logos = [...siteData.companies, ...siteData.companies];

  return (
    <section id="companies" className="section-spacing">
      <div className="content-max">
        <h2 className="eyebrow mb-12 md:mb-16">Companies I've worked with</h2>
      </div>

      <div ref={ref} className="reveal-up relative overflow-hidden">
        {/* Left fade mask */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade mask */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex items-center w-max">
          {logos.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center justify-center px-10 md:px-14 border-r border-border/40 flex-shrink-0"
              style={{ height: "56px" }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-5 md:h-6 w-auto opacity-40 hover:opacity-75 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="content-max">
        <p className="text-xs text-muted-foreground/60 mt-10 tracking-wide">
          Selected work across retail, beauty, and lifestyle.
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
