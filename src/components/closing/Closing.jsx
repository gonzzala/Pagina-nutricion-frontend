import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";

const Closing = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.surface[150],
        paddingTop: theme.spacing(5),
      }}
    >
      <Grid container xs={12}>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: theme.palette.secondary.main,
              padding: theme.spacing(10),
              borderTopRightRadius: theme.spacing(10),
              borderTopLeftRadius: theme.spacing(10),
              boxShadow:
                "0 -5px 8px rgba(0, 0, 0, 0.1), 0 -7px 20px rgba(0, 0, 0, 0.1)", // Sombra hacia arriba
              [theme.breakpoints.down("md")]: {
                padding: theme.spacing(8),
              },
              "@media (max-width: 825px)": {
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",

                padding: theme.spacing(6),
              },
              [theme.breakpoints.down("sm")]: {
                borderTopRightRadius: theme.spacing(7),
                borderTopLeftRadius: theme.spacing(7),
                padding: theme.spacing(4),
              },
            }}
          >
            <Box
              component="img"
              src="/palti.png"
              alt="palti"
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                order: { xs: 2, sm: 1 },
                "@media (max-width: 825px)": {
                  order: 2,
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                order: { xs: 1, sm: 2 },
                paddingLeft: theme.spacing(5),
                "@media (max-width: 825px)": {
                  order: 1,
                  paddingLeft: 0,
                  paddingTop: theme.spacing(2),
                  marginBottom: theme.spacing(8),
                },
              }}
            >
              <Typography
                align="center"
                variant="h3"
                component="h3"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  marginBottom: theme.spacing(2),
                }}
              >
                ¡ Transformá tu vida hoy mismo !
              </Typography>
              <Typography align="center" variant="body1">
                Ya conoces los beneficios y las características únicas de
                nuestros planes nutricionales y de musculación! No esperes más,
                hacé como Palti y transformate en tu mejor versión.
              </Typography>
              <Box
                sx={{
                  mt: theme.spacing(4),
                  [theme.breakpoints.down("lg")]: {
                    width: "100%",
                  },
                }}
              >
                <NavLink to="/nutritional-plans">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: 250,
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                    }}
                  >
                    Planes nutricionales
                  </Button>
                </NavLink>
                <NavLink to="/muscle-plans">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      ml: theme.spacing(2),
                      backgroundColor: "white",
                      width: 250,
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                        ml: 0,
                        mt: theme.spacing(1.5),
                      },
                    }}
                  >
                    Planes de musculación
                  </Button>
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Closing;
