import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";

const CompaniesSection = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="companies" className="section-spacing">
      <div className="content-max">
        <h2 className="eyebrow mb-12 md:mb-16">Companies I've worked with</h2>
        <div
          ref={ref}
          className="reveal-up flex flex-wrap items-center justify-start gap-x-10 md:gap-x-16 gap-y-8"
        >
          {siteData.companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-6 md:h-8 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground/60 mt-10 tracking-wide">
          Selected work across retail, beauty, and lifestyle.
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
