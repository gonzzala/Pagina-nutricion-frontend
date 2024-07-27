import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/benefits/Benefits";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Closing from "../components/closing/Closing";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <Features />
      <Closing />
      <Footer />
    </>
  );
};

export default HomePage;
