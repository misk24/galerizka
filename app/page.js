import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import Hero from "@/components/sections/hero/Hero";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Services from "@/components/sections/services/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
