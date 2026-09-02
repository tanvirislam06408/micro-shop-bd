import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProductSection from "@/components/ProductSection";
import GoogleAISection from "@/components/GoogleAISection";
import Features from "@/components/Features";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <ProductSection />
      <GoogleAISection />
      <Features />
      <HowToOrder />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
