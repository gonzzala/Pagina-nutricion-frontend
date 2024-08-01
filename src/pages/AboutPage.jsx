import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Footer from "../components/Footer";
import AboutCover from "../components/about/AboutCover";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre mí</title>
        <meta
          name="description"
          content="Conocé más a detalle quien soy y cuales son mis expectativas con la venta de mis planes"
        />
        <meta
          name="keywords"
          content="Angelina, nutrición, ejercicio, planes, Sobre mí, quién soy, Angelina Rodríguez"
        />
        <link
          rel="canonical"
          href="https://angelina-nutritionandworkout.netlify.app/about"
        />
      </Helmet>
      <Header />
      <AboutCover />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
