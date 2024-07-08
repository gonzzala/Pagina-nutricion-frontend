import { useId } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../hooks/useCart";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  Container,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: "90%",
  height: "130px",
}));

const Cart = () => {
  const { cart, addToCart, lessToCart, clearCart, open, toggleDrawer } =
    useCart();
  const theme = useTheme();
  const totalAmount = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  function CartItem({ name, price, images, quantity, addToCart, lessToCart }) {
    const imageUrl = images.length > 0 ? images[0].image_url : "";
    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            pt: 2,
          }}
        >
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Grid item xs={6} sm={5} md={4} lg={4}>
                <StyledImage src={imageUrl} alt={name} />
              </Grid>
              <Grid item xs={6} sm={7} md={8} lg={8}>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  fontWeight={700}
                  align="left"
                >
                  {name}
                </Typography>

                <Typography
                  gutterBottom
                  variant="body2"
                  fontWeight={400}
                  align="left"
                >
                  $ {price}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AddCircleIcon onClick={addToCart} />
                  <Typography variant="body2" component="small">
                    {quantity}
                  </Typography>
                  <RemoveCircleIcon onClick={lessToCart} />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }

  const DrawerList = (
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
          width: 250,
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
              padding: "0.5rem",
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
                Planes nustricionales
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
            sx={{ padding: "1rem" }}
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
          <Stack direction="row" alignItems="center" sx={{ padding: "1rem" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
              }}
            >
              Pagar | $ {totalAmount}
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        onClick={toggleDrawer(true)}
        color={theme.palette.text.primary}
      >
        <LocalGroceryStoreIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Cart;
