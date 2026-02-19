import { siteData } from "@/data/siteData";
import { useReveal } from "@/hooks/useReveal";

const StatsRow = () => {
  return (
    <section className="content-max">
      <div className="divider" />
      <div className="grid grid-cols-2 md:grid-cols-4">
        {siteData.stats.map((stat, i) => {
          const ref = useReveal<HTMLDivElement>(i * 100);
          return (
            <div
              key={stat.label}
              ref={ref}
              className="reveal-up py-10 md:py-14 px-2 md:px-4 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="divider" />
    </section>
  );
};

export default StatsRow;
