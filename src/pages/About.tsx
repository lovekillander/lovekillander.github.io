import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const refText = useReveal<HTMLDivElement>();
  const refImage = useReveal<HTMLDivElement>(150);

  return (
    <>
      <SiteHeader />
      <main className="pt-14 md:pt-16">
        <section className="section-spacing">
          <div className="content-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Text */}
              <div ref={refText} className="reveal-up">
                <p className="eyebrow mb-8">ABOUT</p>

                <h1 className="heading-lg mb-10">Hello,<br />I'm Love.</h1>

                <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I'm 26 and currently studying Growth Marketing at Berghs School of
                    Communication in Stockholm. I've just completed an internship at Redgert
                    Comms, working hands on with Performance Marketing and E-commerce for
                    brand-driven clients, and I'm now stepping into a new chapter at a
                    DTC-focused Performance agency.
                  </p>
                  <p>
                    I grew up between Sweden, Brazil, Angola, Spain and Portugal. That shaped
                    how I see brands and markets. I think globally. I read culture fast. I move
                    comfortably between different worlds.
                  </p>
                  <p>
                    I work at the intersection of Creativity and Commercial logic. I build
                    brands that feel strong and scale profitably, with a focus on Paid Media,
                    E-commerce, and strategic expansion, anchored in contribution margin and
                    long-term scalability.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div ref={refImage} className="reveal-up">
                <div className="relative aspect-[3/2] w-full border border-border overflow-hidden bg-secondary">
                  <img
                    src="/images/about.jpg"
                    alt="Love Killander"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <p className="mt-4 text-xs text-muted-foreground/50 tracking-widest uppercase">
                  Love Killander — Stockholm
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default About;
