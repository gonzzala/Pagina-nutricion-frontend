import React from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import ProductSummaryMobile from "./ProductSummaryMobile";
import ContactForm from "./ContactForm";
import PaymentMethod from "./PaymentMethod";
import ProductSummaryDesktop from "./ProductSummaryDesktop";

const CheckoutForm = () => {
  const {
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
    handlePaymentMethodChange,
    errors,
    drawerOpen,
    handleSubmit,
    toggleDrawer,
    isLoading,
  } = useCheckoutForm();

  const theme = useTheme();

  return (
    <>
      <ProductSummaryMobile
        cart={cart}
        totalAmount={totalAmount}
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <Box
        sx={{
          pl: theme.spacing(4),
          pr: theme.spacing(4),
          [theme.breakpoints.down("sm")]: {
            pl: theme.spacing(2),
            pr: theme.spacing(2),
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
                    window.location.href = init_point;
                  }
                });
              }}
            >
              <Grid container spacing={2}>
                <ContactForm
                  email={email}
                  emailConfirmed={emailConfirmed}
                  name={name}
                  surname={surname}
                  telephone={telephone}
                  errors={errors}
                  setEmail={setEmail}
                  setEmailConfirmed={setEmailConfirmed}
                  setName={setName}
                  setSurname={setSurname}
                  setTelephone={setTelephone}
                />

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

                  <PaymentMethod
                    paymentMethod={paymentMethod}
                    handlePaymentMethodChange={handlePaymentMethodChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    sx={{
                      mb: theme.spacing(6),
                      [theme.breakpoints.down("md")]: {
                        mb: theme.spacing(3),
                      },
                    }}
                  >
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
                            mb: theme.spacing(2),
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
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <ProductSummaryDesktop cart={cart} totalAmount={totalAmount} />
        </Grid>
      </Box>
    </>
  );
};

export default CheckoutForm;
