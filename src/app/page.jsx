import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import DemoSection from "@/components/DemoSection";
import ImpactSection from "@/components/ImpactSection";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <WorkflowSection />
      <DemoSection />
      <ImpactSection />
      <CompetitiveAdvantageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}