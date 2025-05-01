import Contact from "@/components/ContactSection/Contact";
import { FAQ } from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/Hero";
import { Process } from "@/components/ProcessSection/Process";
import Services from "@/components/ServicesSection/Services";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className={cn(
      "min-h-screen w-full bg-black",
      "bg-grid-white/[0.04]",
      "relative overflow-hidden"
    )}>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-85% via-gray-900 to-[#112661] animate-gradient-shift" />
      <div className="absolute inset-0 z-10 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light" />
      <div className="relative z-20">
        {/* components */}
        <Header />
        <HeroSection />
        <Services />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
        {/* components */}
      </div>
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-900/20 blur-[100px]" />
      <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-indigo-800/10 blur-[80px]" />
    </div>
  );
}