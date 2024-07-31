import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const NutritionalCover = () => {
  const theme = useTheme();
  const headerHeight = 56;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: { xs: `calc(100vh - ${headerHeight}px)`, sm: "375px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          flex: 1,
          background: theme.palette.primary[50],
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("sm")]: {
            width: "50%",
            padding: theme.spacing(8),
            paddingTop: theme.spacing(6),
          },
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5),
          },
          "@media (min-width: 1500px)": {
            alignItems: "center",
          },
          "@media (max-width: 599px) and (min-height: 601px) and (max-height: 800px)":
            {
              alignItems: "center",
              textAlign: "center",
              padding: theme.spacing(3),
            },
          "@media (max-width: 599px) and (min-height: 801px) and (max-height: 1000px)":
            {
              alignItems: "center",
              textAlign: "center",
              padding: theme.spacing(5),
              paddingTop: theme.spacing(13),
            },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Inicialmente invisible y arriba
          animate={{ opacity: 1, y: 0 }} // Después de la animación, visible y en su lugar
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "left",
              fontWeight: 700,
              color: theme.palette.text.primary,
              [theme.breakpoints.down("md")]: {
                width: "80%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                textAlign: "center",
              },
            }}
          >
            A Tu Medida,
            <br />
            <span
              style={{ fontWeight: 700, color: theme.palette.primary.main }}
            >
              A Tu Gusto
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              marginTop: theme.spacing(2),
              width: "90%",
              [theme.breakpoints.down("md")]: {
                width: "80%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                textAlign: "center",
              },
            }}
          >
            Nuestros planes nutricionales <br /> se personalizan para ti.
          </Typography>
        </motion.div>
        <Box
          component="img"
          src="/NutritionalCover.png"
          alt="Healthy Food"
          sx={{
            position: "absolute",
            bottom: { xs: "50%", sm: 0 },
            left: { xs: 0, sm: "50%" },
            transform: {
              xs: "translateY(50%) rotate(90deg)",
              sm: "translateX(-50%)",
            },
            width: { xs: "80%", sm: "60%" },
            maxWidth: "300px",
            height: "auto",
            [theme.breakpoints.up("md")]: {
              maxWidth: "350px",
            },
            "@media (max-width: 599px) and (min-height: 801px) and (max-height: 1000px)":
              {
                minWidth: "400px",
              },
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          background: theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          padding: theme.spacing(2),
          textAlign: "center",
          [theme.breakpoints.up("sm")]: {
            width: "50%",
            padding: theme.spacing(8),
            paddingBottom: theme.spacing(6),
          },
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5),
          },
          "@media (max-width: 599px) and (min-height: 601px) and (max-height: 800px)":
            {
              padding: theme.spacing(3),
            },
          "@media (max-width: 599px) and (min-height: 801px) and (max-height: 1000px)":
            {
              padding: theme.spacing(5),
              paddingBottom: theme.spacing(13),
            },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Inicialmente invisible y abajo
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Box
            sx={{
              pl: theme.spacing(5),
              [theme.breakpoints.down("md")]: {
                textAlign: "right",
              },
              [theme.breakpoints.down("sm")]: {
                textAlign: "center",
                pl: theme.spacing(0),
              },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 700, color: theme.palette.text.primary }}
            >
              ¡Consigue tu plan de <br /> comidas{" "}
              <span
                style={{ fontWeight: 700, color: theme.palette.primary.main }}
              >
                ya!
              </span>
            </Typography>
            <ScrollLink to="cards" smooth={true} duration={1000}>
              <Button
                variant="outlined"
                sx={{ marginTop: theme.spacing(2), backgroundColor: "white" }}
              >
                Comprar
              </Button>
            </ScrollLink>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default NutritionalCover;
