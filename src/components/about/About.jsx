import React from "react";
import { Box, Grid, Typography, useTheme, styled } from "@mui/material";

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "500px",
  },
}));

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: theme.spacing(2),
          [theme.breakpoints.down("sm")]: {
            height: "60px",
          },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: theme.palette.text.primary }}
        >
          Un poco sobre{" "}
          <span style={{ fontWeight: 700, color: theme.palette.primary.main }}>
            quién soy
          </span>
        </Typography>
      </Box>
      <Box
        sx={{
          padding: theme.spacing(4),
          "@media (min-width: 1300px)": {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Grid container spacing={4} alignItems="center" maxWidth={"1300px"}>
          <Grid item xs={12} md={5}>
            <StyledImage src="backtraining.jpg" alt="About me" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" paragraph>
              Antes de contarte quién soy, quiero hacerte una pregunta:{" "}
              <span
                style={{ fontWeight: 700, color: theme.palette.primary.main }}
              >
                ¿Alguna vez has intentado seguir una dieta o un plan de
                ejercicios aburrido que te dejó frustrado/a y sin ganas de
                continuar?
              </span>
            </Typography>
            <Typography variant="body1" paragraph>
              Si la respuesta es sí, no estás solo/a. Mucha gente ha pasado por
              lo mismo. Mi objetivo es cambiar eso. Creo firmemente que la salud
              y el fitness deben ser accesibles, disfrutables y sostenibles. No
              se trata de sufrir para alcanzar tus metas, sino de encontrar un
              equilibrio que te permita vivir de manera más saludable y feliz.
              <br />
              Utilizo el entrenamiento de fuerza como una herramienta clave, no
              solo para mejorar tu forma física, sino para mostrarte de lo que
              eres capaz. Verás cómo tu cuerpo se vuelve más fuerte y cómo tu
              confianza crece con cada paso que das.
              <br /> En cuanto a la nutrición, se trata de comer bien sin
              complicaciones. No creo en las dietas restrictivas que te hacen
              sentir culpable por disfrutar de tus comidas favoritas. En lugar
              de eso, te enseñaré a comer de manera balanceada, disfrutando de
              los alimentos que amas sin caer en hábitos obsesivos.
              <br /> La salud y el fitness no deben ser una carga. Deben ser una
              fuente de alegría y bienestar. Mi misión es ayudarte a encontrar
              un camino que te haga sentir bien contigo mismo/a, que sea
              sostenible a largo plazo y que te permita disfrutar de cada
              momento del viaje hacia una mejor versión de ti.
            </Typography>
            <Typography variant="body1" paragraph>
              Soy Angelina Rodríguez, y estoy aquí para acompañarte en este
              camino. Con mi experiencia y dedicación, te proporcionaré las
              herramientas y el apoyo que necesitas para alcanzar tus metas de
              salud y fitness. Juntos, encontraremos la manera de hacer que este
              viaje sea emocionante y gratificante.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary[50],
          height: "100px",
          mt: theme.spacing(2),
          mb: theme.spacing(5),
          [theme.breakpoints.down("sm")]: {
            height: "60px",
          },
        }}
      ></Box>
    </>
  );
};

export default About;
