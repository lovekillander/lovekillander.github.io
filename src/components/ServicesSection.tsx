import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof siteData.services)[0];
  index: number;
}) => {
  const ref = useReveal<HTMLDivElement>(index * 120);

  return (
    <div
      ref={ref}
      className="reveal-up p-6 md:p-8 border border-border rounded-lg hover:bg-secondary/50 transition-colors duration-300"
    >
      <h3 className="heading-md mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        {service.description}
      </p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        What you get
      </p>
      <ul className="space-y-2">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="text-sm text-muted-foreground flex items-start gap-2"
          >
            <span className="text-foreground mt-1 text-[6px]">●</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="content-max">
        <h2 className="eyebrow mb-12 md:mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {siteData.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
