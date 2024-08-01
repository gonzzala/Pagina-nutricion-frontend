import axios from "axios";
import Swal from "sweetalert2";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ECONNABORTED") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡La solicitud ha excedido el tiempo de espera!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Algo salió mal, por favor intentelo de nuevo más tarde!",
      });
    }

    return Promise.reject(error);
  }
);

/*RUTAS*/

export const getProducts = () => {
  return api.get("/products");
};

export const getProductDetail = (product_id) => {
  return api.get(`/products/${product_id}`);
};

export const saveCart = (cart, buyerUuid) => {
  return api.post("/carts", { cart, buyerUuid });
};

export const saveOrder = (orderData) => {
  return api.post("/orders", { orderData });
};

export const sendMessage = (name, email, message) => {
  return api.post("/messages", { name, email, message });
};

export default api;
