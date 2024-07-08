import axios from "axios";
const baseURL = "http://localhost:4000/api";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/*RUTAS*/

export const getProducts = () => {
  return api.get("/products");
};

export const getProductDetail = (product_id) => {
  return api.get(`/products/${product_id}`);
};

export default api;
