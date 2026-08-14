import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServicesDetail from "@/components/ServicesDetail";
import WhyNuvio from "@/components/WhyNuvio";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServicesDetail />
        <WhyNuvio />
        <Process />
        <Technologies />
        <Portfolio />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
