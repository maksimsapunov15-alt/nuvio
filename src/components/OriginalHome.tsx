import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capability from "@/components/Capability";
import LaptopScene from "@/components/scenes/LaptopScene";
import About from "@/components/About";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import PhoneScene from "@/components/scenes/PhoneScene";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Chapter sequence: brand (Hero) → product (Laptop) → information (About,
// Process) → technology (the Technologies seam) → product (Phone) → proof
// (Work) → pricing → CTA → contact.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capability />
        <LaptopScene />
        <About />
        <Process />
        <Technologies />
        <PhoneScene />
        <Work />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
