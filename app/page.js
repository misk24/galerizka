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
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-white px-4 py-3 font-medium text-mulberry-deep shadow-lg focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-dusty-rose focus-visible:ring-offset-2"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
