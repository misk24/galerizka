"use client";

import Hero from "@/components/section/Hero";
import Navbar from "@/components/layout/header/Navbar";
import Services from "@/components/section/Services";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Footer from "@/components/layout/footer/Footer";
import Portfolio from "@/components/section/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
