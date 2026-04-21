import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import BuiltForTeams from "@/components/BuiltForTeams";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden w-full relative max-w-[100vw]">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <BuiltForTeams />
      <Testimonials />
      <Pricing />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
