import React from "react";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import NutritionalCover from "../components/products/NutritionalCover";
import WorkoutCover from "../components/products/WorkoutCover";
import { Helmet } from "react-helmet";

const PlansPage = ({ category }) => {
  const getHelmetContent = () => {
    if (category === 2) {
      return {
        title: "Productos | Nutrición",
        description:
          "Planes nutricionales de la mejor calidad y al mejor precio",
        keywords:
          "Angelina, nutrición, planes, planes nutricionales, planes nutricionales personalizados, dieta saludable, comer sano, comida fitness",
        canonical:
          "https://angelina-nutritionandworkout.netlify.app/nutritional-plans",
      };
    } else if (category === 1) {
      return {
        title: "Productos | Ejercicio",
        description:
          "Planes de ejercicio de la mejor calidad y al mejor precio, para que alcances tu mejor versión física",
        keywords:
          "Angelina, ejercicio, planes, planes de ejercicio, planes de musculación, rutinas de ejercicio, entrenamiento físico, cambio corporal",
        canonical:
          "https://angelina-nutritionandworkout.netlify.app/muscle-plans",
      };
    }
  };

  const helmetContent = getHelmetContent();

  return (
    <>
      <Helmet>
        <title>{helmetContent.title}</title>
        <meta name="description" content={helmetContent.description} />
        <meta name="keywords" content={helmetContent.keywords} />
        <link rel="canonical" href={helmetContent.canonical} />
      </Helmet>
      <Header />
      {category === 2 && <NutritionalCover />}
      {category === 1 && <WorkoutCover />}
      <Products category={category} />
      <Footer />
    </>
  );
};

export default PlansPage;
