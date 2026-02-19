import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import ServicesSection from "@/components/ServicesSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsRow />
        <ServicesSection />
        <HowIWorkSection />
        <CompaniesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
