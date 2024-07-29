import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, List, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { useTheme } from "@emotion/react";
import { useCart } from "../../hooks/useCart";

const DrawerContent = () => {
  const {
    cart,
    clearCart,
    toggleDrawer,
    save,
    totalAmount,
    addToCart,
    lessToCart,
  } = useCart();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        [theme.breakpoints.down("md")]: {
          width: 325,
        },
        [theme.breakpoints.down("sm")]: {
          width: 275,
        },
      }}
      role="presentation"
    >
      {cart.length === 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: theme.spacing(1),
            }}
          >
            <CloseIcon onClick={toggleDrawer(false)} />
          </Box>
          <Typography align="center" variant="body1" sx={{ pt: 5 }}>
            No tienes productos en el carrito. <br /> ¿ Qué estas esperando ? 👇
          </Typography>

          <Stack direction="column" spacing={2} sx={{ padding: 5 }}>
            <NavLink to="/nutritional-plans">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                }}
                onClick={toggleDrawer(false)}
              >
                Planes nutricionales
              </Button>
            </NavLink>
            <NavLink to="/muscle-plans">
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  width: "100%",
                }}
                onClick={toggleDrawer(false)}
              >
                Planes musculación
              </Button>
            </NavLink>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={1}
            sx={{ padding: theme.spacing(2), paddingBottom: 0 }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={clearCart}
              sx={{
                width: "50%",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
              }}
            >
              Vaciar carro
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={toggleDrawer(false)}
              sx={{
                width: "50%",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
              }}
            >
              Seguir comprando
            </Button>
          </Stack>
          <List sx={{ flexGrow: 1 }}>
            {cart.map((product) => (
              <CartItem
                key={product.product_id}
                addToCart={() => addToCart(product)}
                lessToCart={() => lessToCart(product)}
                {...product}
              />
            ))}
          </List>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ padding: theme.spacing(2) }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
              }}
              onClick={save}
            >
              Iniciar compra | $ {totalAmount}
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default DrawerContent;
