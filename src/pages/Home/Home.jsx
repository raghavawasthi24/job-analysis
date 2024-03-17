import React from "react";
// import Header from '../../components/Header'
import HeroSection from "./sections/HeroSection";
import Companies from "./sections/Companies";
import Pricing from "./sections/Pricing";
import Footer from "../../components/Footer";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
