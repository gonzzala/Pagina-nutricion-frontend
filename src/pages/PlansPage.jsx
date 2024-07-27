import React from "react";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import NutritionalCover from "../components/products/NutritionalCover";
import WorkoutCover from "../components/products/WorkoutCover";

const PlansPage = ({ category }) => {
  return (
    <>
      <Header />
      {category === 2 && <NutritionalCover />}
      {category === 1 && <WorkoutCover />}
      <Products category={category} />
      <Footer />
    </>
  );
};

export default PlansPage;
