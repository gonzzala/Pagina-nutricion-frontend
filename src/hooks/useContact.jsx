import { useState } from "react";
import { sendMessage } from "../api/api";
import Swal from "sweetalert2";

export const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const newErrors = {};

    if (name.length < 3) {
      newErrors.name = "El nombre debe tener más caracteres.";
    }
    if (email.length < 10) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (message.length < 10) {
      newErrors.message = "El mensaje debe tener más caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    } else {
      setIsLoading(true);
      try {
        const response = await sendMessage(name, email, message);
        if (response.status === 200) {
          return true;
        } else {
          console.error("Failed to send message:", response.message);
          return false;
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        return false;
      } finally {
        setIsLoading(false);
      }
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Tu mensaje ha sido enviado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title:
        "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    handleSubmit,
    clearForm,
    isLoading,
    successAlert,
    errorAlert,
  };
};
