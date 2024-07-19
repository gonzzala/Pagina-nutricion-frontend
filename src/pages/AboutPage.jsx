import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Footer from "../components/Footer";
import AboutCover from "../components/about/AboutCover";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutCover />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
