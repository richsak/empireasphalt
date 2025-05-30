import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import QualityWorkSection from "@/components/QualityWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactEstimateSection from "@/components/ContactEstimateSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-rubik)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <QualityWorkSection />
        <ServiceAreasSection />
        <ContactEstimateSection />
      </main>
      <Footer />
    </div>
  );
}
