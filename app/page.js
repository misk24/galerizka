"use client";

import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Cta from "@/components/section/cta/Cta";
import Hero from "@/components/section/hero/Hero";
import Portfolio from "@/components/section/portfolio/Portfolio";
import Services from "@/components/section/services/Services";



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
