import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const ProductSummaryDesktop = ({ cart, totalAmount }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          border: "1px solid #202327",
          padding: theme.spacing(4),
          height: "350px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          fontWeight={700}
          sx={{
            color: theme.palette.text.primary,
            mt: theme.spacing(1),
            mb: theme.spacing(1),
          }}
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
    </Grid>
  );
};

export default ProductSummaryDesktop;
