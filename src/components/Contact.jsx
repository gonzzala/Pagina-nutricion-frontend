import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useContact } from "../hooks/useContact";

const Contact = ({ open, handleClose }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    handleSubmit,
    isLoading,
    clearForm,
    successAlert,
    errorAlert,
  } = useContact();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, completa el siguiente formulario para enviarme un mensaje.
        </DialogContentText>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit().then((success) => {
              if (success) {
                handleClose();
                clearForm();
                successAlert();
              } else {
                handleClose();
                errorAlert();
              }
            });
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            id="email"
            label="Correo Electrónico"
            type="email"
            fullWidth
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="dense"
            id="message"
            label="Mensaje"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
            helperText={errors.message}
          />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Enviar
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
};

export default Contact;
