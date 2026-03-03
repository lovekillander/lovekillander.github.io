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
  <div className="relative aspect-[16/7] w-full border border-border overflow-hidden bg-secondary mt-12">
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
        <section className="section-spacing pb-0">
          <div className="content-max">
            <div ref={refHeader} className="reveal-up">
              <p className="eyebrow mb-8">CASE STUDY</p>
              <h1 className="heading-xl mb-6">Room 48</h1>
              <p className="text-sm text-muted-foreground tracking-wide">
                Event + community som driver lojalitet och lönsamhet
              </p>
            </div>
          </div>
        </section>

        {/* ── Hero video (horizontal) ── */}
        <section className="mt-12 mb-0">
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

        {/* ── 01 Bakgrund ── */}
        <section className="section-spacing">
          <div className="content-max">
            <div ref={refS01} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">01</p>
                <div>
                  <h2 className="heading-lg mb-10">Bakgrund</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Room 48 är ett event och communityformat för studenter och unga
                      yrkesverksamma inom kommunikation, marknadsföring, PR och design.
                    </p>
                    <p>
                      Projektet byggdes utifrån ett tydligt glapp mellan utbildning och bransch.
                    </p>
                    <p>
                      Mycket teori och inspiration.<br />
                      Men få sammanhang där man förstår hur beslut, processer och verkligt
                      arbete faktiskt ser ut.
                    </p>
                    <p>
                      Det glappet var utgångspunkten.
                    </p>
                  </div>
                  {/* Image placed here — community format introduced */}
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

        {/* ── 02 Utmaning ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS02} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">02</p>
                <div>
                  <h2 className="heading-lg mb-10">Utmaning</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Utmaningen var att skapa ett format som känns kurerat och relevant
                      för målgruppen, men samtidigt är affärsmässigt hållbart över tid.
                    </p>
                    <p>
                      Dubbla målgrupper med olika drivkrafter.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>För studenter: värdet är relationer och riktning.</p>
                      <p>
                        För byråer: värdet är långsiktiga möten med framtida talang
                        utan att det känns som traditionell marknadsföring.
                      </p>
                    </div>
                    <p>
                      Formatet behövde tillgodose båda utan att kompromissa med någondera.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Data & PMF ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS03} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">03</p>
                <div>
                  <h2 className="heading-lg mb-10">Data & PMF</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Product market fit säkrades genom en mix av kvalitativ och kvantitativ data
                      innan formatet lanserades.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Enkäter till studenter.</p>
                      <p>Enkäter till byråer.</p>
                      <p>Råd och samtal med personer i branschen: Save Our Souls, Jung Relations, Seraya.</p>
                      <p>Intervju med marknadschefen för Föreningen Ekonomerna vid Stockholms universitet.</p>
                    </div>
                    <p>
                      Datan bekräftade efterfrågan och gav underlag för formatets struktur,
                      prissättning och kommunikation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Vad vi byggde ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS04} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">04</p>
                <div>
                  <h2 className="heading-lg mb-10">Vad vi byggde</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Infrastrukturen byggdes för att hantera två separata köpflöden
                      och en CRM logik som lever före och efter eventet.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Shopify som hub: landningssida och anmälningsflöde.</p>
                      <p>Typeform flöden för segmentering och intent, student respektive företag.</p>
                      <p>CRM logik med automatiserad uppföljning före och efter event.</p>
                      <p>B2B sponsring där företag finansierar studentplatser via fakturering.</p>
                    </div>
                    <p>
                      Strukturen gör det möjligt att skala antalet event utan att
                      skala den manuella insatsen proportionellt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 GM modell & lönsamhet ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS05} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">05</p>
                <div>
                  <h2 className="heading-lg mb-10">GM modell & lönsamhet</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Ekonomin modellerades med GM1, GM2 och GM3 för att säkra lönsamhet
                      per event och skapa en grund för skalbarhet.
                    </p>
                    <div className="space-y-4 pl-5 border-l border-border">
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM1: Event contribution margin</p>
                        <p>
                          Intäkter per event (sponsorpaket + övriga intäkter) minus direkta
                          eventkostnader: lokal, tillstånd, mat och dryck, produktion.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM2: Efter rörliga orderkostnader</p>
                        <p>
                          GM1 minus rörliga kostnader kopplade till leverans och hantering:
                          transaktionskostnader, administration per order, support.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">GM3: Efter förvärvskostnad</p>
                        <p>
                          GM2 minus CAC/CPA för att fylla eventet och få in företag som
                          sponsorer. Förbättras genom bättre B2B mix, återkommande relationer
                          och lägre beroende av betald räckvidd.
                        </p>
                      </div>
                    </div>
                    <p>
                      Vi byggde också en enkel kalkyl med definierade inputs och outputs.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Input: antal platser, kostnad per person, fasta kostnader per event, sponsorpris.</p>
                      <p>Output: break even, GM per event, GM3 krav och huruvida GM3 uppnås.</p>
                    </div>
                    <p>
                      Kalkylen används som beslutsunderlag inför varje event och
                      gör det enkelt att testa olika mix av intäkter och kostnader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 KPIer & mätplan ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS06} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">06</p>
                <div>
                  <h2 className="heading-lg mb-10">KPIer & mätplan</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      Mätplanen täcker hela kedjan från intresse till lönsamhet.
                    </p>
                    <div className="space-y-2 pl-5 border-l border-border">
                      <p>Interest to signup rate, student.</p>
                      <p>Företagsintresse till möte till signerat sponsorpaket, lead to close.</p>
                      <p>Show up rate.</p>
                      <p>Repeat attendance.</p>
                      <p>NPS och CSAT efter event.</p>
                      <p>GM per event: GM1, GM2 och GM3.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 Insikt ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refS07} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1">07</p>
                <div>
                  <h2 className="heading-lg mb-10">Insikt</h2>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                      När lojalitet byggs före och efter transaktionen blir CRM
                      ett upplevelsesystem, inte ett utskickssystem.
                    </p>
                    <p>
                      I Room 48 är biljetten starten på en relation.
                    </p>
                    <p>
                      Community är mekanismen som gör att värdet lever mellan eventen
                      och som reducerar beroendet av betald räckvidd för varje nytt tillfälle.
                    </p>
                  </div>
                  {/* Image placed here — community as mechanism, closing insight */}
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

        {/* ── Extra: Roll & Verktyg ── */}
        <section className="section-spacing pt-0">
          <div className="content-max">
            <div ref={refExtra} className="reveal-up">
              <div className="divider mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                <p className="eyebrow pt-1"></p>
                <div className="space-y-3 text-sm text-muted-foreground max-w-2xl">
                  <p>
                    <span className="text-foreground">Roll:</span>{" "}
                    Growth, CX/CRM och affärsmodellering.
                  </p>
                  <p>
                    <span className="text-foreground">Verktyg:</span>{" "}
                    Shopify, Typeform, epostautomation, CRM, analytics och spårning,
                    kalkylmodell för GM1/GM2/GM3.
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
