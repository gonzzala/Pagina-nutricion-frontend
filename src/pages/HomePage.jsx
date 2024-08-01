import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/benefits/Benefits";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Closing from "../components/closing/Closing";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Helmet>
        <title>Angelina | Nutrición y ejercicio</title>
        <meta
          name="description"
          content="Tienda online de Angelina Rodríguez dedicada a la venta de planes nutricionales y de ejercicio. Conocé las ventajas de una vida saludable y las caracteristicas de mis planes"
        />
        <meta
          name="keywords"
          content="Angelina, Angelina Rodríguez, nutrición, ejercicio, planes, planes nutricionales, planes de ejercicio, fitness, vida saludable"
        />
        <link
          rel="canonical"
          href="https://angelina-nutritionandworkout.netlify.app/"
        />
      </Helmet>
      <Header />
      <HeroSection />
      <Benefits />
      <Features />
      <Closing />
      <Footer />
    </Box>
  );
};

export default HomePage;
