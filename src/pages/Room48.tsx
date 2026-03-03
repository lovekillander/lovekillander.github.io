import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).style.display = "none";
};

const CaseImage = ({
  src,
  alt,
  position = "object-top",
}: {
  src: string;
  alt: string;
  position?: string;
}) => (
  <div className="relative aspect-[16/7] w-full border border-border overflow-hidden bg-secondary mt-10">
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover ${position}`}
      onError={hideOnError}
    />
  </div>
);

const Room48 = () => {
  const refHeader = useReveal<HTMLDivElement>();
  const refHero   = useReveal<HTMLDivElement>(100);
  const refS01    = useReveal<HTMLDivElement>();
  const refS02    = useReveal<HTMLDivElement>();
  const refS03    = useReveal<HTMLDivElement>();
  const refS04    = useReveal<HTMLDivElement>();
  const refS05    = useReveal<HTMLDivElement>();
  const refS06    = useReveal<HTMLDivElement>();
  const refS07    = useReveal<HTMLDivElement>();
  const refExtra  = useReveal<HTMLDivElement>();

  return (
    <>
      <SiteHeader />
      <main className="pt-14 md:pt-16">

        {/* ── Page header ── */}
        <section className="pt-12 md:pt-16 pb-0">
          <div className="content-max">
            <div ref={refHeader} className="reveal-up">
              <p className="eyebrow mb-8">CASE STUDY</p>
              <h1 className="heading-xl mb-6">Room 48</h1>
              <p className="text-sm text-muted-foreground tracking-wide">
                Event + community driving loyalty and profitability
              </p>
            </div>
          </div>
        </section>

        {/* ── Hero video (horizontal) ── */}
        <section className="mt-10 mb-0">
          <div className="content-max">
            <div ref={refHero} className="reveal-up">
              <div className="relative aspect-[16/9] w-full border border-border overflow-hidden bg-secondary">
                <video
                  src="/images/room48-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 01 Background ── */}
        <section className="py-10 md:py-14">
          <div className="content-max">
            <div ref={refS01} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">01</p>
                <div>
                  <h2 className="heading-lg mb-6">Background</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Room 48 is an event and community format for students and young
                      professionals in communication, marketing, PR, and design.
                    </p>
                    <p>
                      The project was built around a clear gap between education and industry.
                    </p>
                    <p>
                      Plenty of theory and inspiration.<br />
                      But few contexts where you understand how decisions, processes,
                      and real work actually look.
                    </p>
                    <p>
                      That gap was the starting point.
                    </p>
                  </div>
                  <CaseImage
                    src="/images/room48-hero.jpg"
                    alt="Room 48 community"
                    position="object-[center_65%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Challenge ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS02} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">02</p>
                <div>
                  <h2 className="heading-lg mb-6">Challenge</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The challenge was to build a format that feels curated and relevant
                      for the audience, while remaining commercially sustainable over time.
                    </p>
                    <p>
                      Two audiences with different motivations.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>For students: the value is relationships and direction.</p>
                      <p>
                        For agencies: the value is long-term access to future talent
                        without feeling like traditional marketing.
                      </p>
                    </div>
                    <p>
                      The format had to serve both without compromising either.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Data & PMF ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS03} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">03</p>
                <div>
                  <h2 className="heading-lg mb-6">Data & PMF</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Product market fit was validated through a mix of qualitative and
                      quantitative data before the format launched.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Surveys with students.</p>
                      <p>Surveys with agencies.</p>
                      <p>Conversations with industry professionals: Save Our Souls, Jung Relations, Seraya.</p>
                      <p>Interview with the marketing director of Föreningen Ekonomerna at Stockholm University.</p>
                    </div>
                    <p>
                      The data confirmed demand and informed the format's structure,
                      pricing, and communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 What We Built ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS04} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">04</p>
                <div>
                  <h2 className="heading-lg mb-6">What We Built</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The infrastructure was built to handle two separate purchase flows
                      and a CRM logic that operates before and after each event.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Shopify as hub: landing page and registration flow.</p>
                      <p>Typeform flows for segmentation and intent, student and company respectively.</p>
                      <p>CRM logic with automated follow-up before and after each event.</p>
                      <p>B2B sponsorship where companies fund student seats via invoicing.</p>
                    </div>
                    <p>
                      The structure allows scaling the number of events without scaling
                      manual effort proportionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 GM Model & Profitability ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS05} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">05</p>
                <div>
                  <h2 className="heading-lg mb-6">GM Model & Profitability</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The economics were modeled with GM1, GM2, and GM3 to ensure
                      profitability per event and create a foundation for scale.
                    </p>
                    <div className="space-y-4 pl-5 border-l border-border">
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM1: Event contribution margin</p>
                        <p>
                          Revenue per event (sponsorship packages + other income) minus direct
                          event costs: venue, permits, food and beverage, production.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM2: After variable order costs</p>
                        <p>
                          GM1 minus variable costs tied to delivery and handling:
                          transaction fees, per-order administration, support.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM3: After acquisition cost</p>
                        <p>
                          GM2 minus CAC/CPA for filling the event and acquiring company sponsors.
                          Improves through better B2B mix, returning relationships,
                          and lower dependency on paid reach.
                        </p>
                      </div>
                    </div>
                    <p>
                      We also built a simple model with defined inputs and outputs.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Input: number of seats, cost per person, fixed costs per event, sponsorship price.</p>
                      <p>Output: break even, GM per event, GM3 target, and whether GM3 is achieved.</p>
                    </div>
                    <p>
                      The model is used as a decision tool before each event, making it
                      easy to test different revenue and cost combinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 KPIs & Measurement ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS06} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">06</p>
                <div>
                  <h2 className="heading-lg mb-6">KPIs & Measurement</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      The measurement plan covers the full chain from interest to profitability.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Interest to signup rate, student.</p>
                      <p>Company interest to meeting to signed sponsorship package, lead to close.</p>
                      <p>Show up rate.</p>
                      <p>Repeat attendance.</p>
                      <p>NPS and CSAT post-event.</p>
                      <p>GM per event: GM1, GM2, and GM3.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 Insight ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refS07} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">07</p>
                <div>
                  <h2 className="heading-lg mb-6">Insight</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      When loyalty is built before and after the transaction, CRM becomes
                      an experience system, not a broadcast system.
                    </p>
                    <p>
                      In Room 48, the ticket is the start of a relationship.
                    </p>
                    <p>
                      Community is the mechanism that keeps value alive between events
                      and reduces dependency on paid reach for each new occasion.
                    </p>
                  </div>
                  <CaseImage
                    src="/images/room48-event.jpg"
                    alt="Room 48 event"
                    position="object-[center_30%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Extra: Role & Tools ── */}
        <section className="pb-10 md:pb-14">
          <div className="content-max">
            <div ref={refExtra} className="reveal-up">
              <div className="divider mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1"></p>
                <div className="space-y-3 text-sm text-muted-foreground max-w-2xl">
                  <p>
                    <span className="text-foreground">Role:</span>{" "}
                    Growth, CX/CRM, and business modeling.
                  </p>
                  <p>
                    <span className="text-foreground">Tools:</span>{" "}
                    Shopify, Typeform, email automation, CRM, analytics and tracking,
                    GM1/GM2/GM3 financial model.
                  </p>
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

export default Room48;
