import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Cart from "../cart/Cart";
import { Drawer } from "@mui/material";
import Logo from "../Logo";
import { useTheme } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import Contact from "../Contact";
import DrawerList from "./DrawerList";

const pages = [
  { name: "Inicio", path: "/" },
  { name: "Planes nutricionales", path: "/nutritional-plans" },
  { name: "Planes musculación", path: "/muscle-plans" },
  { name: "Sobre mí", path: "/about" },
  { name: "Contacto", path: "#", action: "contact" },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.palette.surface[50] }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* logo desktop */}
            <Logo
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            />
            {/* menu mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color={theme.palette.text.primary}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                onClick={toggleDrawer(false)}
              >
                <DrawerList
                  pages={pages}
                  handleContactOpen={handleContactOpen}
                />
              </Drawer>
            </Box>
            {/* logo mobile */}
            <Logo
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            />
            {/* paginas desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={page.action ? "button" : NavLink}
                  to={page.path}
                  onClick={
                    page.action === "contact" ? handleContactOpen : undefined
                  }
                  sx={{
                    my: theme.spacing(2),
                    color:
                      location.pathname === page.path
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    display: "block",
                    "&.active": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            {/* carro de compras */}
            <Box sx={{ flexGrow: 0 }}>
              <Cart />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Contact open={contactOpen} handleClose={handleContactClose} />
    </>
  );
}

export default Header;
