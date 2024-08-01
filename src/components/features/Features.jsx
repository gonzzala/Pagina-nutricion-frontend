import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Cards from "./Cards";
import SliderCards from "./SliderCards";

const cardData = [
  {
    title: "Personalización Total",
    description: "Planes adaptados a tus necesidades y objetivos únicos.",
    icon: "/icon1.webp",
    position: "top-left",
  },
  {
    title: "Variedad Deliciosa",
    description: "Comidas equilibradas, fáciles de preparar y llenas de sabor.",
    icon: "/icon2.webp",
    position: "top-right",
  },
  {
    title: "Equilibrio Saludable",
    description:
      "Disfruta de todos los grupos de alimentos sin restricciones extremas.",
    icon: "/icon3.webp",
    position: "bottom-left",
  },
  {
    title: "Resultados Comprobados",
    description:
      "Logra transformaciones reales y medibles con nuestros planes.",
    icon: "/icon4.webp",
    position: "bottom-right",
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.surface[150],
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          marginBottom: { xs: theme.spacing(3), sm: 8 },
        }}
      >
        <Box
          component="img"
          src="/wave2.webp"
          alt="wave"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: theme.palette.text.primary,
          textAlign: "center",
          fontWeight: 700,
          marginBottom: theme.spacing(3),
          [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
          },
        }}
      >
        Innovación y Resultados:
        <br />
        <span style={{ color: theme.palette.primary.main }}>
          Lo Que Nos Destaca
        </span>
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center" // Centra horizontalmente
        alignItems="center" // Centra verticalmente
        maxWidth={"1000px"}
        sx={{
          padding: theme.spacing(4),
          width: "60%",
          margin: "0 auto",
          "@media (max-width: 1030px)": {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "90%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        {cardData.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={card.title}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Cards
              title={card.title}
              description={card.description}
              icon={card.icon}
              position={card.position}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          padding: theme.spacing(5),
          pt: 0,
          display: { xs: "flex", sm: "none" },
        }} // Mostrar solo en xs
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <SliderCards />
        </Box>
      </Grid>
      {/* <Box
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
        > */}

      {/* </Box> */}
    </Box>
  );
};

export default Features;
