import React from "react";
import { Box, Container, Grid, Typography, Stack, styled } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: "90%",
  height: "130px",
}));

const CartItem = ({ name, price, images, quantity, addToCart, lessToCart }) => {
  const imageUrl = images.length > 0 ? images[0].image_url : "";
  return (
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
  );
};

export default CartItem;
