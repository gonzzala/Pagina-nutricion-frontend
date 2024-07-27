import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Contact from "./Contact";
import { useTheme } from "@emotion/react";
import InstagramIcon from "@mui/icons-material/Instagram";

const pages = [
  { name: "Inicio", path: "/" },
  { name: "Planes nutricionales", path: "/nutritional-plans" },
  { name: "Planes musculación", path: "/muscle-plans" },
  { name: "Sobre mí", path: "/about" },
  { name: "Contacto", path: "#", action: "contact" },
];

const Footer = () => {
  const location = useLocation();
  const [contactOpen, setContactOpen] = React.useState(false);
  const theme = useTheme();

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          /* mt: "40px", */
          width: "100%",
          height: "auto",
          backgroundColor: "surface.200",
          paddingTop: theme.spacing(2),
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                color="surface.700"
                fontWeight={700}
                variant="subtitle1"
                align="center"
              >
                Explora
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                  gap: theme.spacing(1),
                  mt: theme.spacing(1),
                }}
              >
                {pages.map((page) => (
                  <ListItem
                    key={page.name}
                    component={page.action ? "div" : NavLink}
                    to={page.path}
                    onClick={
                      page.action === "contact" ? handleContactOpen : undefined
                    }
                    sx={{
                      padding: 0,
                      color:
                        location.pathname === page.path
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.text.secondary,
                      },
                      "&.active": {
                        color: theme.palette.primary.main,
                      },
                      textDecoration: "none",
                      width: "auto",
                    }}
                  >
                    <Typography variant="body2" textAlign="center">
                      {page.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                color="surface.700"
                fontWeight={700}
                variant="subtitle1"
                align="center"
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    mt: theme.spacing(2),
                  },
                }}
              >
                Redes sociales
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                  gap: 0,
                  mt: theme.spacing(1),
                }}
              >
                <ListItem sx={{ justifyContent: "center", padding: 0 }}>
                  <Link
                    href="https://www.instagram.com/angge.r"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{
                      color: "surface.700",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    <InstagramIcon />
                  </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center", padding: 0 }}>
                  <Link
                    href="https://www.instagram.com/angge.r"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{
                      color: "surface.700",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    <Typography variant="body2" textAlign="center">
                      angge.r
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                color="surface.700"
                fontWeight={700}
                variant="subtitle1"
                align="center"
                sx={{
                  [theme.breakpoints.down("md")]: {
                    mt: theme.spacing(2),
                  },
                }}
              >
                Contacto
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                  mt: theme.spacing(1),
                  gap: theme.spacing(1),
                }}
              >
                <ListItem sx={{ justifyContent: "center", padding: 0 }}>
                  <Link
                    href="mailto:angerodriguez0019@gmail.com"
                    underline="none"
                    sx={{
                      color: "surface.700",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    <Typography variant="body2" textAlign="center">
                      angerodriguez0019@gmail.com
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center", padding: 0 }}>
                  <Link
                    href="https://wa.me/+542281305634"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{
                      color: "surface.700",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    <Typography variant="body2" textAlign="center">
                      +54 2281 30-5634
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
        <Grid item xs={12} md={12}>
          <Typography
            color="surface.700"
            variant="body2"
            align="left"
            sx={{
              mt: theme.spacing(2),
              mb: theme.spacing(0.5),
              ml: theme.spacing(0.5),
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
                mt: 4,
              },
            }}
          >
            © {new Date().getFullYear()} Angelina Rodriguez.
            <br />
            Todos los derechos reservados.
          </Typography>
        </Grid>
      </Box>
      <Contact open={contactOpen} handleClose={handleContactClose} />
    </>
  );
};

export default Footer;
