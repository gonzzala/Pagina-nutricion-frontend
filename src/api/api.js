import axios from "axios";
import Swal from "sweetalert2";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de respuesta
api.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, simplemente retornar la respuesta
    return response;
  },
  (error) => {
    // Si ocurre un error, manejarlo aquí
    if (error.code === "ECONNABORTED") {
      // Manejar el timeout
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡La solicitud ha excedido el tiempo de espera!",
      });
    } else {
      // Manejar otros errores
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Algo salió mal, por favor intentelo de nuevo más tarde!",
      });
    }

    // Asegurarse de que la promesa rechazada sea manejada
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

export default api;
