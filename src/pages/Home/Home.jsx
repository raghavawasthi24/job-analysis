import React from "react";
// import Header from '../../components/Header'
import HeroSection from "./sections/HeroSection";
import Companies from "./sections/Companies";
import Pricing from "./sections/Pricing";
import Footer from "../../components/Footer";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection />
      <Companies />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
