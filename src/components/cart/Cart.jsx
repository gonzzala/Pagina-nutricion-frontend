import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useCart } from "../../hooks/useCart";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import DrawerContent from "./DrawerContent";

const Cart = () => {
  const { open, toggleDrawer, getUniqueProductCount } = useCart();
  const theme = useTheme();

  return (
    <div>
      <IconButton
        size="large"
        onClick={toggleDrawer(true)}
        color={theme.palette.text.primary}
      >
        <Badge badgeContent={getUniqueProductCount()} color="primary">
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default Cart;
