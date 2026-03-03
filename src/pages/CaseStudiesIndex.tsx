import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";

const cases = [
  {
    to: "/case-studies/under-your-skin",
    number: "01",
    title: "Under Your Skin",
    subtitle: "CRO Architecture for a Premium DTC Brand",
  },
  {
    to: "/case-studies/room-48",
    number: "02",
    title: "Room 48",
    subtitle: "Event + community driving loyalty and profitability",
  },
];

const CaseStudiesIndex = () => {
  const refHeader = useReveal<HTMLDivElement>();
  const refList   = useReveal<HTMLDivElement>(100);

  return (
    <>
      <SiteHeader />
      <main className="pt-14 md:pt-16">
        <section className="section-spacing">
          <div className="content-max">

            <div ref={refHeader} className="reveal-up mb-12 md:mb-16">
              <h1 className="eyebrow">Case Studies</h1>
            </div>

            <div ref={refList} className="reveal-up space-y-0">
              {cases.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="block group"
                >
                  <div className="divider" />
                  <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <span className="text-sm text-muted-foreground font-medium tabular-nums shrink-0">
                      {c.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="heading-md mb-2 group-hover:text-foreground/70 transition-colors duration-200">
                        {c.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="divider" />
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default CaseStudiesIndex;
