import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, lessToCart, clearCart, open, toggleDrawer }}
    >
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
}
