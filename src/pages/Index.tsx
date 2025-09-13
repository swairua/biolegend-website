import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AtAGlanceSection from "@/components/AtAGlanceSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AtAGlanceSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
