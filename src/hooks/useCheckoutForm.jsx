import { useState } from "react";
import { useCart } from "./useCart";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { saveOrder } from "../api/api";

export const useCheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const { cart, totalAmount, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("mercadoPago");
  const [errors, setErrors] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  initMercadoPago("APP_USR-174a34d0-0e28-4167-ace0-7727157849f3", {
    locale: "es-AR",
  });

  const handleSubmit = async () => {
    const newErrors = {};

    if (email.length < 10) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (email !== emailConfirmed) {
      newErrors.emailConfirmed = "Los correos electrónicos no coinciden.";
    }
    if (name.length < 3) {
      newErrors.name = "El nombre debe tener más caracteres.";
    }
    if (surname.length < 3) {
      newErrors.surname = "El apellido debe tener más caracteres.";
    }
    if (telephone.length < 10) {
      newErrors.telephone = "El teléfono debe tener más caracteres.";
    }
    if (telephone.length > 20) {
      newErrors.telephone = "El teléfono tiene demasiados caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return null;
    } else {
      setIsLoading(true);
      try {
        const cart = localStorage.getItem("cart");
        if (cart) {
          const parsedCart = JSON.parse(cart);
          const buyerUuid = localStorage.getItem("uuid");
          const orderData = {
            parsedCart,
            buyerUuid,
            email,
            name,
            surname,
            telephone,
            totalAmount,
          };
          const response = await saveOrder(orderData);
          if (response.status === 200) {
            const { init_point } = response.data;
            localStorage.removeItem("cart");
            localStorage.removeItem("uuid");
            clearCart();
            return init_point;
          } else {
            console.error("Failed to save order:", response.message);
          }
        } else {
          console.error("Something went wrong");
        }
      } catch (error) {
        console.error("Failed to save order:", error);
      } finally {
        setIsLoading(false);
      }
    }
    setErrors({});
    return null;
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return {
    email,
    setEmail,
    emailConfirmed,
    setEmailConfirmed,
    name,
    setName,
    surname,
    setSurname,
    telephone,
    setTelephone,
    cart,
    totalAmount,
    paymentMethod,
    setPaymentMethod,
    errors,
    drawerOpen,
    handleSubmit,
    handlePaymentMethodChange,
    toggleDrawer,
    isLoading,
  };
};
