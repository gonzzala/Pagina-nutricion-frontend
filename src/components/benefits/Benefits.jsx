import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import BenefitFromLeft from "./BenefitFromLeft";
import BenefitFromRight from "./BenefitFromRight";

const benefits = [
  {
    title: "Transformación Física y Estética",
    description:
      "Comer bien y hacer ejercicio te ayuda a tonificar músculos y reducir grasa. Con nuestros planes, evitarás la mala alimentación y la inactividad que causan el aumento de peso y pérdida de tono muscular.",
    img: "/transformation.png",
  },
  {
    title: "Energía Inagotable y Productividad",
    description:
      "Una dieta saludable te proporciona la energía y vitalidad necesarias para enfrentar tu día a día con entusiasmo y eficiencia.",
    img: "/energy.png",
  },
  {
    title: "Longevidad y Calidad de Vida",
    description:
      "Vivir más y mejor es posible gracias a la nutrición adecuada y al ejercicio regular, que contribuyen a mantener un cuerpo y mente sanos.",
    img: "/longevity.png",
  },
  {
    title: "Salud Mental y Felicidad",
    description:
      "Una buena alimentación impacta positivamente en tu estado de ánimo y bienestar emocional, ayudándote a enfrentar el estrés y la ansiedad.",
    img: "/health.png",
  },
];

const Benefits = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          marginBottom: { xs: theme.spacing(5), sm: 8 },
        }}
      >
        <Box
          component="img"
          src="/wave.png"
          alt="wave"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
      <Typography
        id="benefits"
        variant="h4"
        component="h2"
        sx={{
          color: theme.palette.text.primary,
          textAlign: "center",
          fontWeight: 700,
          marginBottom: theme.spacing(10),
        }}
      >
        Alcanza Tu Mejor Versión:
        <br />
        <span style={{ color: theme.palette.primary.main }}>
          Los Poderosos Beneficios de Nuestros Planes
        </span>
      </Typography>
      {benefits.map((benefit, index) => (
        <Grid
          container
          justifyContent="center"
          key={index}
          sx={{
            marginBottom: theme.spacing(5),
            [theme.breakpoints.up("sm")]: {
              marginBottom: theme.spacing(10),
            },
          }}
        >
          {index % 2 === 0 ? (
            <BenefitFromLeft benefit={benefit} />
          ) : (
            <BenefitFromRight benefit={benefit} />
          )}
        </Grid>
      ))}
    </Box>
  );
};

export default Benefits;
