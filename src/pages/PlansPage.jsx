import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const PlansPage = ({ category }) => {
  return (
    <>
      <Header />
      <Products category={category} />
      <Footer />
    </>
  );
};

export default PlansPage;
