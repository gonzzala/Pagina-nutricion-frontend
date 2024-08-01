import React from "react";
import HeaderForm from "../components/checkout/HeaderForm";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { Helmet } from "react-helmet";

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Procesar compra</title>
        <meta
          name="description"
          content="Ingresa tu información para llevar a cabo la compra"
        />
        <meta
          name="keywords"
          content="Angelina, productos saludables, planes, compra"
        />
        <link
          rel="canonical"
          href="https://angelina-nutritionandworkout.netlify.app/checkout"
        />
      </Helmet>
      <HeaderForm />
      <CheckoutForm />
    </>
  );
};

export default CheckoutPage;
