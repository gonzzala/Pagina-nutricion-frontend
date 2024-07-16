import { createContext, useEffect, useState } from "react";
import { saveCart } from "../api/api";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [open, setOpen] = useState(false);
  const [uuid, setUuid] = useState(() => {
    const savedUuid = localStorage.getItem("uuid");
    if (!savedUuid) {
      const newUuid = crypto.randomUUID();
      localStorage.setItem("uuid", newUuid);
      return newUuid;
    }
    return savedUuid;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(
      "Carrito obtenido del local storage:",
      JSON.parse(localStorage.getItem("cart"))
    );
    console.log("ID obtenido del local storage:", localStorage.getItem("uuid"));
  }, [cart]);

  const save = async () => {
    try {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const parsedCart = JSON.parse(cart); // Convierte el string a un objeto JSON
        const buyerUuid = localStorage.getItem("uuid");
        const response = await saveCart(parsedCart, buyerUuid);
        console.log(response);
        if (response.status === 200) {
          // Verifica si la respuesta es exitosa
          window.location.href = "/checkout";
        } else {
          console.error("Failed to save cart:", response.status);
        }
      } else {
        console.error("Cart is empty");
      }
    } catch (error) {
      alert("Error al iniciar la compra:", error);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const addToCart = (product, quantity) => {
    if (!quantity) {
      quantity = 1;
    }
    const productInCartIndex = cart.findIndex(
      (item) => item.product_id === product.product_id
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += quantity;
      setCart(newCart);
    } else {
      const newCart = [
        ...cart,
        {
          ...product,
          quantity: quantity,
        },
      ];
      setCart(newCart);
    }
  };

  const lessToCart = (product) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.product_id === product.product_id
    );

    if (productInCartIndex >= 0 && cart[productInCartIndex].quantity > 1) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;
      setCart(newCart);
    } else {
      cart.splice(productInCartIndex, 1);
      setCart([...cart]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        lessToCart,
        clearCart,
        totalAmount,
        open,
        toggleDrawer,
        save,
      }}
    >
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
}
