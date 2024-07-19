import React from "react";
import { TextField, Grid } from "@mui/material";

const ContactForm = ({
  email,
  emailConfirmed,
  name,
  surname,
  telephone,
  errors,
  setEmail,
  setEmailConfirmed,
  setName,
  setSurname,
  setTelephone,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          label="Correo electrónico"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="emailConfirmed"
          label="Confirmar correo electrónico"
          type="email"
          variant="outlined"
          value={emailConfirmed}
          onChange={(e) => setEmailConfirmed(e.target.value)}
          required
          fullWidth
          margin="normal"
          error={!!errors.emailConfirmed}
          helperText={errors.emailConfirmed}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="Nombre"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="surname"
          label="Apellido"
          type="text"
          variant="outlined"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          fullWidth
          margin="normal"
          error={!!errors.surname}
          helperText={errors.surname}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="telephone"
          label="Teléfono"
          type="number"
          variant="outlined"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
          fullWidth
          margin="normal"
          error={!!errors.telephone}
          helperText={errors.telephone}
        />
      </Grid>
    </>
  );
};

export default ContactForm;
