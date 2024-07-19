import { Box, Typography, Divider, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo";

const DrawerList = ({ pages, handleContactOpen }) => (
  <Box sx={{ width: 250 }} role="presentation">
    <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
      <CloseIcon />
    </Box>
    <Box sx={{ textAlign: "center", margin: 3, mt: 0 }}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </NavLink>
    </Box>
    <Divider />
    {pages.map((page) => (
      <MenuItem
        key={page.name}
        component={page.action ? "div" : NavLink}
        to={page.path}
        onClick={page.action === "contact" ? handleContactOpen : undefined}
      >
        <Typography textAlign="center">{page.name}</Typography>
      </MenuItem>
    ))}
  </Box>
);

export default DrawerList;
