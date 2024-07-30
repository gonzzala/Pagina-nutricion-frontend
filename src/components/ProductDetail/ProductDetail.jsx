import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Stack,
  styled,
  Typography,
  Skeleton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useCart } from "../../hooks/useCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ImageSlider from "./Carousel";
import InfoIcon from "@mui/icons-material/Info";
import useProductDetail from "../../hooks/useProductDetail";

const imageStyles = {
  borderRadius: "10px",
  width: "100%",
  height: "auto",
};

const SliderBox = styled(Box)(({ theme }) => ({
  width: 400,
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ProductDetail = () => {
  const { product_id } = useParams();
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleDrawer } = useCart();
  const product = useProductDetail(product_id);

  const handleAddToCart = (product) => {
    addToCart(product, quantity);
    toggleDrawer(true)();
  };

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <Box
        sx={{
          padding: theme.spacing(8),
          mb: theme.spacing(5),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5),
          },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4, md: 8, lg: 5 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SliderBox>
              {product ? (
                product.images &&
                product.images.length > 0 && (
                  <ImageSlider
                    images={product.images}
                    imageStyles={imageStyles}
                  />
                )
              ) : (
                <Skeleton variant="rectangular" width={334} height={400} />
              )}
            </SliderBox>
          </Grid>
          <Grid item xs={12} md={6}>
            {product ? (
              <>
                <Typography gutterBottom fontWeight={700} variant="h4">
                  {product.name}
                </Typography>
                <Typography gutterBottom fontWeight={700} variant="h5">
                  $ {product.price}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.5}
                  sx={{
                    mb: theme.spacing(1),
                  }}
                >
                  <InfoIcon />
                  <Typography variant="subtitle2" color="text.secondary">
                    Plazo de entrega aproximado: 48 hs
                  </Typography>
                </Stack>
                <Typography gutterBottom fontWeight={700} variant="h6">
                  Cantidad
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AddCircleIcon onClick={handleAddQuantity} />
                  <Typography variant="body2" component="small">
                    {quantity}
                  </Typography>
                  <RemoveCircleIcon onClick={handleRemoveQuantity} />
                </Stack>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    my: theme.spacing(4),
                    width: "100%",
                    height: 45,
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </Button>
                <Typography
                  variant="body1"
                  sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                >
                  {product.description}
                </Typography>
              </>
            ) : (
              <>
                <Skeleton variant="text" width="80%" height={40} />
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="50%" height={20} />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={45}
                  sx={{ my: theme.spacing(4) }}
                />
                <Skeleton variant="text" width="100%" height={100} />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetail;
