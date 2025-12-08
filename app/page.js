"use client";

import Hero from "@/components/section/hero/Hero";
import Navbar from "@/components/layout/header/Navbar";
import Services from "@/components/section/services/Services";
import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Footer from "@/components/layout/footer/Footer";
import Portfolio from "@/components/section/portfolio/Portfolio";
import Cta from "@/components/section/cta/Cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}
