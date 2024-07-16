import React, { useState } from "react";
import HeaderForm from "./HeaderForm";
import {
  TextField,
  Grid,
  Button,
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { saveOrder } from "../api/api";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const { cart, totalAmount } = useCart(); // Asegúrate de que useCart devuelva cartItems
  const [paymentMethod, setPaymentMethod] = useState("mercadoPago");
  const [errors, setErrors] = useState({});
  const [initPoint, setInitPoint] = useState(""); // Estado para guardar el init_point
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  initMercadoPago("APP_USR-174a34d0-0e28-4167-ace0-7727157849f3", {
    locale: "es-AR",
  });

  const handleSubmit = async () => {
    const newErrors = {};

    // Validación de campos
    if (email.length < 5) {
      newErrors.email =
        "El correo electrónico debe tener al menos 5 caracteres.";
    }
    if (email !== emailConfirmed) {
      newErrors.emailConfirmed = "Los correos electrónicos no coinciden.";
    }
    if (name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (surname.length < 3) {
      newErrors.surname = "El apellido debe tener al menos 3 caracteres.";
    }
    if (telephone.length < 10) {
      newErrors.telephone = "El teléfono debe tener al menos 10 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return null;
    } else {
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
            const { init_point } = response.data; // Asegúrate de que la propiedad sea init_point o el nombre correcto
            setInitPoint(init_point); // Guardar el init_point en el estado
            return init_point; // Retornar el init_point
          } else {
            console.error("Failed to save order:", response.message);
          }
        } else {
          console.error("Something went wrong");
        }
      } catch (error) {
        console.error("Error al crear la orden:", error);
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

  return (
    <>
      <HeaderForm />
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          textAlign: "center",
          mb: 3,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDrawer(true)}
          sx={{ width: "95%" }}
        >
          Mis productos
        </Button>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 275,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              padding: "16px",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Typography variant="h6" align="center" sx={{ margin: 2 }}>
              Mis productos
            </Typography>
            <List sx={{ flexGrow: 1, overflowY: "auto" }}>
              {cart.map((item, index) => (
                <ListItem key={index} disableGutters>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        width: "60%",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      {`${item.quantity} x $${item.price}`}
                    </Typography>
                  </Stack>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ backgroundColor: "#202327" }} />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: "1rem 0", mx: 2 }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                TOTAL
              </Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                $ {totalAmount}
              </Typography>
            </Stack>
          </Box>
        </Drawer>
      </Box>
      <Box
        sx={{
          pl: 4,
          pr: 4,
          [theme.breakpoints.down("sm")]: {
            pl: 2,
            pr: 2,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700, color: theme.palette.text.primary }}
            >
              Contacto
            </Typography>
            <Typography variant="body1" paragraph>
              Usaremos el correo electrónico para entregarte tu compra
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit().then((init_point) => {
                  if (init_point) {
                    window.location.href = init_point; // Redirigir al usuario al proceso de pago con el init_point
                  }
                });
              }}
            >
              <Grid container spacing={2}>
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
                <Box
                  sx={{
                    my: 6,
                    marginRight: 2,
                    marginLeft: 2,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Pago
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Selecciona cómo quieres pagar tu compra
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="paymentMethod"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                      >
                        <FormControlLabel
                          value="mercadoPago"
                          control={<Radio />}
                          label="Mercado Pago"
                          /* sx={{ border: "1px solid #202327" }} */
                        />
                        <FormControlLabel
                          value="transferencia"
                          control={<Radio />}
                          label="Transferencia (muy pronto)"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Box>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between" sx={{ mb: 6 }}>
                    <Grid
                      item
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                        },
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/muscle-plans"
                        sx={{
                          [theme.breakpoints.down("md")]: {
                            width: "100%",
                            mb: 2,
                          },
                        }}
                      >
                        Volver a la tienda
                      </Button>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                        },
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          width: "172px",
                          [theme.breakpoints.down("md")]: {
                            width: "100%",
                          },
                        }}
                      >
                        Pagar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                border: "1px solid #202327",
                padding: "30px",
                height: "350px",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                fontWeight={700}
                sx={{
                  color: theme.palette.text.primary,
                  mt: 1,
                  mb: 1,
                }}
              >
                Mis productos
              </Typography>
              <List sx={{ flexGrow: 1, overflowY: "auto" }}>
                {cart.map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: "100%" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.primary,
                          width: "60%",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.primary,
                        }}
                      >
                        {`${item.quantity} x $${item.price}`}
                      </Typography>
                    </Stack>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ backgroundColor: "#202327" }} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ padding: "1rem 0" }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  TOTAL
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  $ {totalAmount}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CheckoutForm;

/* import React, { useState } from "react";
import HeaderForm from "./HeaderForm";
import {
  TextField,
  Grid,
  Button,
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { saveOrder } from "../api/api";
import { useCart } from "../hooks/useCart";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const { totalAmount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("mercadoPago");
  const [errors, setErrors] = useState({});
  const [preferenceId, setPreferenceId] = useState(null); // Estado para guardar el preference_id
  const theme = useTheme();
  initMercadoPago("APP_USR-174a34d0-0e28-4167-ace0-7727157849f3", {
    locale: "es-AR",
  });

  const handleSubmit = async () => {
    const newErrors = {};

    // Validación de campos
    if (email.length < 5) {
      newErrors.email =
        "El correo electrónico debe tener al menos 5 caracteres.";
    }
    if (email !== emailConfirmed) {
      newErrors.emailConfirmed = "Los correos electrónicos no coinciden.";
    }
    if (name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (surname.length < 3) {
      newErrors.surname = "El apellido debe tener al menos 3 caracteres.";
    }
    if (telephone.length < 10) {
      newErrors.telephone = "El teléfono debe tener al menos 10 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return null;
    } else {
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
            const { preference_id } = response.data; // Asegúrate de que la propiedad sea preference_id o el nombre correcto
            setPreferenceId(preference_id); // Guardar el preference_id en el estado
            return preference_id; // Retornar el preference_id
          } else {
            console.error("Failed to save order:", response.message);
          }
        } else {
          console.error("Something went wrong");
        }
      } catch (error) {
        alert("Error al crear la orden:", error);
      }
    }
    setErrors({});
    return null;
  };

  const handleBuy = async (event) => {
    event.preventDefault();
    const id = await handleSubmit();
    if (id) {
      console.log("Preference ID:", id); // Verificar que se obtiene el preference_id
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <HeaderForm />
      <Box
        sx={{
          pl: 4,
          pr: 4,
          [theme.breakpoints.down("sm")]: {
            pl: 2,
            pr: 2,
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: theme.palette.text.primary }}
        >
          Contacto
        </Typography>
        <Typography variant="body1" paragraph>
          Usaremos el mail para entregarte tu compra
        </Typography>
        <form onSubmit={handleBuy}>
          <Grid container spacing={2} md={8}>
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
            <Box
              sx={{
                my: 6,
                marginRight: 2,
                marginLeft: 2,
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 700, color: theme.palette.text.primary }}
                >
                  Pago
                </Typography>
                <Typography variant="body1" paragraph>
                  Selecciona como quieres pagar tu compra
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="paymentMethod"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <FormControlLabel
                      value="mercadoPago"
                      control={<Radio />}
                      label="Mercado Pago"
                    />
                    <FormControlLabel
                      value="transferencia"
                      control={<Radio />}
                      label="Transferencia"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Box>

            <Grid item xs={12}>
              <Grid container justifyContent="space-between" sx={{ mb: 6 }}>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Volver a la tienda
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Enviar
                  </Button>
                </Grid>
                <Grid item>
                  {preferenceId && (
                    <Wallet initialization={{ preferenceId: preferenceId }} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default CheckoutForm;
 */
