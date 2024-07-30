import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Cards = ({ title, description, icon, position }) => {
  const theme = useTheme();

  const getBorderRadius = () => {
    switch (position) {
      case "top-left":
        return {
          borderTopLeftRadius: theme.spacing(10),
          borderTopRightRadius: theme.spacing(1),
          borderBottomLeftRadius: theme.spacing(1),
          borderBottomRightRadius: theme.spacing(1),
        };
      case "top-right":
        return {
          borderTopLeftRadius: theme.spacing(1),
          borderTopRightRadius: theme.spacing(10),
          borderBottomLeftRadius: theme.spacing(1),
          borderBottomRightRadius: theme.spacing(1),
        };
      case "bottom-left":
        return {
          borderTopLeftRadius: theme.spacing(1),
          borderTopRightRadius: theme.spacing(1),
          borderBottomLeftRadius: theme.spacing(10),
          borderBottomRightRadius: theme.spacing(1),
        };
      case "bottom-right":
        return {
          borderTopLeftRadius: theme.spacing(1),
          borderTopRightRadius: theme.spacing(1),
          borderBottomLeftRadius: theme.spacing(1),
          borderBottomRightRadius: theme.spacing(10),
        };
      default:
        return {};
    }
  };

  return (
    <Box
      data-aos="flip-left"
      data-aos-duration="700"
      data-aos-delay="200"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        ...getBorderRadius(),
        border: `3px solid ${theme.palette.primary[100]}`,
        height: "325px",
        "@media (max-width: 805px)": {
          height: "300px",
        },
        [theme.breakpoints.down("sm")]: {
          borderRadius: theme.spacing(2),
          mb: theme.spacing(2),
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{ width: "150px", height: "150px", marginBottom: theme.spacing(2) }}
      />
      <Typography
        variant="h6"
        align="center"
        component="h3"
        sx={{ fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        width={"70%"}
        sx={{
          "@media (max-width: 805px)": {
            width: "80%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Cards;
