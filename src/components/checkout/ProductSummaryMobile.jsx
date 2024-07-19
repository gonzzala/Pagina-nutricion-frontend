import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Stack,
  Divider,
  Button,
  Drawer,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const ProductSummaryMobile = ({
  cart,
  totalAmount,
  drawerOpen,
  toggleDrawer,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        textAlign: "center",
        mb: theme.spacing(3),
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer(true)}
        sx={{ width: "95%" }}
      >
        Mis productos
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: theme.spacing(4),
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: theme.spacing(1), mb: theme.spacing(1) }}
          >
            Mis productos
          </Typography>
          <List sx={{ flexGrow: 1, overflowY: "auto" }}>
            {cart.map((item, index) => (
              <ListItem key={index} disableGutters>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ width: "100%" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "60%",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    {`${item.quantity} x $${item.price}`}
                  </Typography>
                </Stack>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: "#202327" }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: theme.spacing(2), px: 0 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              TOTAL
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              $ {totalAmount}
            </Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ProductSummaryMobile;
