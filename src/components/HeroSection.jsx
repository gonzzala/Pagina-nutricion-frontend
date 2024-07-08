import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  padding: theme.spacing(5, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 5),
  },
}));

const Content = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(2),
}));

const TextContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
}));

const ButtonsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "300px",
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "250px",
    marginBottom: theme.spacing(4),
  },
}));

const StyledImage = styled("img")(({ theme, position }) => ({
  borderRadius: theme.spacing(2),
  maxWidth: "80%",
  height: "400px",
  position: "absolute",
  transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
  transform:
    position === 0
      ? "translateX(0) scale(1.2)"
      : position === 1
      ? "translateX(40%) translateY(-2%) scale(1) rotate(15deg)"
      : "translateX(-40%) translateY(-2%) scale(1) rotate(-15deg)",
  zIndex: position === 0 ? 2 : 1,
  boxShadow: position === 0 ? "0px 10px 20px rgba(0,0,0,0.3)" : "none",
  opacity: position === 0 ? 1 : 0.8,
  [theme.breakpoints.down("lg")]: {
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "200px",
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "backtraining2.png", alt: "Fitness" },
    { src: "running2.png", alt: "Fitness" },
    { src: "eating2.png", alt: "Fitness" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const getPosition = (index) => {
    const positions = [0, 1, 2];
    return positions[(index - currentIndex + images.length) % images.length];
  };

  return (
    <HeroSectionWrapper>
      <Content>
        <Grid container /* spacing={4} */ alignItems="center">
          <Grid item xs={12} md={7}>
            <TextContent>
              <Typography
                variant="h2"
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                Cambia tus hábitos,
                <br />
                <Typography
                  variant="h2"
                  component="span"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  Transforma tu vida
                </Typography>
              </Typography>
              <Typography variant="body1" paragraph>
                Descubre cómo dos simples cambios pueden revolucionar tu
                bienestar. Estamos aquí para ayudarte a lograrlo de manera
                efectiva y sencilla.
              </Typography>
              <ButtonsWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 165,
                    [theme.breakpoints.down("md")]: {
                      width: "100%",
                    },
                  }}
                >
                  Ver beneficios
                </Button>
                <NavLink to="/nutritional-plans">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      ml: 2,
                      backgroundColor: "white",
                      width: 165,
                      [theme.breakpoints.down("md")]: {
                        width: "100%",
                        ml: 0,
                        mt: 1.5,
                      },
                    }}
                  >
                    Ver planes
                  </Button>
                </NavLink>
              </ButtonsWrapper>
            </TextContent>
          </Grid>
          <Grid item xs={12} md={5}>
            <ImageWrapper>
              {images.map((image, index) => (
                <StyledImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  position={getPosition(index)}
                />
              ))}
            </ImageWrapper>
          </Grid>
        </Grid>
      </Content>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
