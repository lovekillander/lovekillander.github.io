import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";

const HowIWorkSection = () => {
  return (
    <section className="section-spacing">
      <div className="content-max">
        <h2 className="eyebrow mb-12 md:mb-16">How I Work</h2>
        <div className="space-y-0">
          {siteData.howIWork.map((block, i) => {
            const ref = useReveal<HTMLDivElement>(i * 120);
            return (
              <div key={block.number} ref={ref} className="reveal-up">
                <div className="divider" />
                <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <span className="text-sm text-muted-foreground font-medium tabular-nums">
                    {block.number}
                  </span>
                  <div className="max-w-lg">
                    <h3 className="heading-md mb-3">{block.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
