import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const WorkoutCover = () => {
  const theme = useTheme();
  const headerHeight = 56;
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          height: { xs: `calc(100vh - ${headerHeight}px - 50px)`, sm: "325px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: theme.palette.primary[50],
            display: "flex",
            flexDirection: "colum",
            justifyContent: "flex-start",
            [theme.breakpoints.up("sm")]: {
              flexDirection: "row",
              width: "100%",
              padding: theme.spacing(8),
            },
            [theme.breakpoints.down("md")]: {
              padding: theme.spacing(6),
            },
            "@media (min-width: 600px) and (max-width: 622px)": {
              paddingTop: theme.spacing(3),
            },
            "@media (min-height: 800px) and (max-height: 1000px)": {
              paddingTop: theme.spacing(15),
            },
          }}
        >
          <Box>
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }} // Empieza fuera de la pantalla a la izquierda
              animate={{ x: 0, opacity: 1 }} // Se mueve a la posición original y se vuelve completamente opaco
              transition={{ duration: 1, ease: "easeOut" }} // Duración de la animación y tipo de suavizado
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "50%",
                  },
                }}
              >
                Prepárate Para Tu
                {isMedium ? " " : <br />}
                <span
                  style={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  Cuerpo Ideal
                </span>
              </Typography>
            </motion.div>
            <Box
              sx={{
                background: theme.palette.secondary.main,
                position: "absolute",
                left: 0,
                marginTop: theme.spacing(1),
                width: { xs: "90%", sm: "50%", lg: "40%" },
                height: "10px",
                [theme.breakpoints.between("sm", "md")]: {
                  marginTop: theme.spacing(0.5),
                },
              }}
            />
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }} // Empieza fuera de la pantalla a la izquierda
              animate={{ x: 0, opacity: 1 }} // Se mueve a la posición original y se vuelve completamente opaco
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Duración de la animación y tipo de suavizado
            >
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: theme.spacing(3),
                  [theme.breakpoints.up("md")]: {
                    width: "70%",
                  },
                  [theme.breakpoints.between("sm", "md")]: {
                    marginTop: theme.spacing(2),
                  },
                  [theme.breakpoints.up("sm")]: {
                    width: "50%",
                  },
                }}
              >
                Nuestros planes de entrenamiento están diseñados para ayudarte a
                conseguirlo
              </Typography>
            </motion.div>
          </Box>
          <Box
            component="img"
            src="/WorkoutCover.png"
            alt="workout"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: { /*  xs: "100%", */ sm: "300px", md: "325px" },
              /* maxWidth: "325px", */
              height: "auto",
              "@media (max-width: 450px)": {
                width: "100%",
              },
              /* [theme.breakpoints.up("xs")]: {
              maxWidth: "375px",
            }, */
              /*  "@media (min-height: 801px) and (max-height: 1000px)": {
              minWidth: "400px",
            }, */
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          background: theme.palette.secondary.main,
          width: "100%",
          height: "50px",
        }}
      />
    </>
  );
};

export default WorkoutCover;
