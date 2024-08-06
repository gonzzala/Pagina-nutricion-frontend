import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function NutritionalProduct({ product, handleProductClick }) {
  const theme = useTheme();

  // Define media queries for breakpoints
  const isLargeScreen = useMediaQuery("(min-width: 800px)");

  // Variants for large screens
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variants for small screens
  const mobileTextVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Determine which variants to use based on the screen size
  const variants = isLargeScreen ? textVariants : mobileTextVariants;

  return (
    <Box
      id="cards"
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(10),
        paddingX: theme.spacing(20),
        alignItems: "center",
        maxWidth: "1500px",
        [theme.breakpoints.down("lg")]: {
          paddingX: theme.spacing(13),
        },
        [theme.breakpoints.down("md")]: {
          paddingX: theme.spacing(11),
        },
        "@media (max-width: 800px)": {
          flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(7),
        },
      }}
    >
      <Box
        component="img"
        height="auto"
        width="100%"
        maxWidth="300px"
        maxHeight={"400px"}
        src={product.images[0].image_url}
        alt={product.name}
        onClick={() => handleProductClick(product.product_id)}
        sx={{
          borderRadius: theme.spacing(1),
          filter: "brightness(0.9)",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "@media (max-width: 800px)": {
            display: "none",
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.surface[150],
          padding: {
            xs: theme.spacing(3),
            sm: theme.spacing(5),
            md: theme.spacing(6),
            lg: theme.spacing(8),
          },
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderTopRightRadius: theme.spacing(2),
          borderBottomRightRadius: theme.spacing(2),
          "@media (max-width: 800px)": {
            borderRadius: theme.spacing(2),
          },
        }}
      >
        <Box
          component="img"
          height="auto"
          width="100%"
          maxWidth="300px"
          maxHeight={"400px"}
          onClick={() => handleProductClick(product.product_id)}
          src={product.images[0].image_url}
          alt={product.name}
          sx={{
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(2),
            "@media (min-width: 800px)": {
              display: "none",
            },
            "@media (max-width: 800px)": {
              margin: "0 auto",
              marginBottom: theme.spacing(3),
            },
            "@media (min-width: 600px) and (max-width: 800px)": {
              marginBottom: theme.spacing(6),
            },
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            Planes Nutricionales Personalizados para Todos
          </Typography>
          <Typography
            variant="body2"
            /* sx={{
            width: {
              xs: theme.spacing(3),
              sm: theme.spacing(5),
              md: theme.spacing(6),
              lg: "80%",
            },
          }} */
          >
            Cada persona es única, por eso adaptamos nuestros planes a tus
            necesidades y objetivos. Al comprar, responderás algunas preguntas
            que nos ayudarán a crear una guía exclusiva para ti. No importa
            quién seas ni tus metas, estamos aquí para ayudarte a lograr una
            vida más saludable.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

export default NutritionalProduct;
