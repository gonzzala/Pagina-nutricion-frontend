import { useState } from "react";
import { CartProvider } from "./context/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlansPage from "./pages/PlansPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./components/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/nutritional-plans"
            element={<PlansPage category={2} />}
          />
          <Route path="/muscle-plans" element={<PlansPage category={1} />} />
          <Route path="/products/:product_id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
