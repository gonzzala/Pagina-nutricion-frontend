import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Stack,
  Skeleton,
} from "@mui/material";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import TuneIcon from "@mui/icons-material/Tune";

const Products = ({ category }) => {
  const filteredProducts = useProducts(category);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleProductClick = (product_id) => {
    navigate(`/products/${product_id}`);
  };

  return (
    <>
      {/* <Grid container>
        <Grid item lg={2}>
          <Box
            sx={{
              margin: 2,
              padding: 2,
              marginTop: 5,
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: theme.palette.surface[150],
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                mb: 2,
              }}
            >
              <TuneIcon />
              <Typography variant="h6">Filtros</Typography>
            </Stack>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
              Más comprado
            </Typography>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
              Más barato
            </Typography>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
              Principiantes
            </Typography>
          </Box>
        </Grid>
      </Grid> */}

      {filteredProducts.length > 0 ? (
        <Grid container columnSpacing={1} justifyContent="left" /* lg={10} */>
          {filteredProducts.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              key={product.product_id}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => handleProductClick(product.product_id)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={product.images[0].image_url}
                    alt={product.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      $ {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <IconButton size="large" color="inherit">
                  <AddShoppingCartIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container columnSpacing={1} justifyContent="left">
          {[1, 2, 3, 4].map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              key={index}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Skeleton variant="rectangular" width={300} height={400} />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Skeleton width="80%" />
                  <Skeleton width="60%" />
                </CardContent>
                <IconButton size="large" color="inherit">
                  <AddShoppingCartIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default Products;
