import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).style.display = "none";
};

const CaseImage = ({
  src,
  alt,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  aspect?: string;
}) => (
  <div className={`relative ${aspect} w-full border border-border overflow-hidden bg-secondary mt-12`}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover object-center grayscale"
      onError={hideOnError}
    />
  </div>
);

const CaseStudies = () => {
  const refHeader  = useReveal<HTMLDivElement>();
  const refHero    = useReveal<HTMLDivElement>(100);
  const refS01     = useReveal<HTMLDivElement>();
  const refS02     = useReveal<HTMLDivElement>();
  const refS03     = useReveal<HTMLDivElement>();
  const refS04     = useReveal<HTMLDivElement>();
  const refS05     = useReveal<HTMLDivElement>();

  return (
    <>
      <SiteHeader />
      <main className="pt-14 md:pt-16">

        {/* ── Page header ── */}
        <section className="section-spacing pb-0">
          <div className="content-max">
            <div ref={refHeader} className="reveal-up">
              <p className="eyebrow mb-8">CASE STUDY</p>
              <h1 className="heading-xl mb-6">Under Your Skin</h1>
              <p className="text-sm text-muted-foreground tracking-wide">
                CRO Architecture for a Premium DTC Brand
              </p>
            </div>
          </div>
        </section>

        {/* ── Hero image ── */}
        <section className="mt-12 mb-0">
          <div className="content-max">
            <div ref={refHero} className="reveal-up">
              <CaseImage src="/images/uys-hero.jpg" alt="Under Your Skin — hero" aspect="aspect-[16/7]" />
            </div>
          </div>
        </section>

        {/* ── 01 The Challenge ── */}
        <section className="section-spacing">
          <div className="content-max">
            <div ref={refS01} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">01</p>
                <div>
                  <h2 className="heading-lg mb-10">The Challenge</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Under Your Skin had strong brand equity.
                    </p>
                    <p>
                      But the buying experience introduced friction in key moments.
                    </p>
                    <p>
                      On mobile especially, the cart and checkout added cognitive load through
                      visible discount fields, layered payment options, and competing calls to action.
                    </p>
                    <p>
                      The ambition was premium.<br />
                      The behavior was transactional.
                    </p>
                    <p>
                      That gap was the opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Cart Optimization ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS02} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">02</p>
                <div>
                  <h2 className="heading-lg mb-10">Cart Optimization</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The original cart introduced distraction before commitment.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Visible discount entry triggered code hunting behavior.</p>
                      <p>Payment logos competed for attention.</p>
                      <p>The visual hierarchy diluted focus from the primary action.</p>
                    </div>
                    <p>
                      The redesigned structure simplifies momentum.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Discount field reduced to secondary interaction.</p>
                      <p>Express payment positioned intentionally.</p>
                      <p>Clear primary action.</p>
                      <p>Supporting trust signals integrated without noise.</p>
                    </div>
                    <p>
                      The goal was not minimalism for aesthetics.<br />
                      It was behavioral alignment.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Reduce friction.</p>
                      <p>Preserve brand equity.</p>
                    </div>
                  </div>
                  <CaseImage src="/images/uys-cart.jpg" alt="Under Your Skin — cart redesign" aspect="aspect-[16/9]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Value Reinforcement ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS03} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">03</p>
                <div>
                  <h2 className="heading-lg mb-10">Value Reinforcement</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Instead of pushing harder toward checkout, we introduced controlled
                      value reinforcement.
                    </p>
                    <p>
                      Optional sample selection inside the cart increases perceived value
                      while maintaining forward motion.
                    </p>
                    <p>
                      When customers actively choose something, ownership increases.<br />
                      Ownership increases completion probability.
                    </p>
                    <p>
                      It strengthens brand relationship without discount dependency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Payment Architecture ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS04} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">04</p>
                <div>
                  <h2 className="heading-lg mb-10">Payment Architecture</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The checkout required structural clarity.
                    </p>
                    <p>
                      Multiple payment methods are positive only when hierarchy is controlled.
                    </p>
                    <p>
                      We structured payment selection to prioritize clarity, reduce visual
                      stress, and maintain calm visual rhythm across mobile.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Each section separated.</p>
                      <p>Each action intentional.</p>
                      <p>Each step reinforcing progress.</p>
                    </div>
                    <p>
                      This is applied web psychology, not decoration.
                    </p>
                  </div>
                  <div className="max-w-xs">
                    <CaseImage src="/images/uys-payment.jpg" alt="Under Your Skin — payment architecture" aspect="aspect-[616/1058]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Conclusion ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS05} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">05</p>
                <div>
                  <h2 className="heading-lg mb-10">Conclusion</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      CRO is not about adding urgency banners.
                    </p>
                    <p>
                      It is about aligning brand, behavior, structure, and decision psychology.
                    </p>
                    <p>
                      When premium positioning is supported by frictionless architecture,
                      performance follows naturally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
};

export default CaseStudies;
