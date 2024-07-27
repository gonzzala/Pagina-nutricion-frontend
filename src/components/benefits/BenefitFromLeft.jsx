import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const BenefitFromLeft = ({ benefit }) => {
  const theme = useTheme();

  const [firstWord, ...rest] = benefit.title.split(" ");

  return (
    <Grid container item xs={12} spacing={2}>
      <Grid item xs={10} sm={10} lg={8}>
        <Box
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(3),
            borderBottomRightRadius: theme.spacing(2),
            borderTopRightRadius: theme.spacing(10),
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            "@media (max-width: 725px)": {
              flexDirection: "column",
            },
            "@media (min-width: 550px) and (max-width: 725px)": {
              alignItems: "center",
              textAlign: "center",
            },
            [theme.breakpoints.down("sm")]: {
              borderTopRightRadius: theme.spacing(6),
            },
          }}
        >
          <Box
            component="img"
            src={benefit.img}
            alt={benefit.title}
            sx={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: theme.shape.borderRadius,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: theme.spacing(5),
              "@media (max-width: 725px)": {
                paddingLeft: 0,
                paddingTop: theme.spacing(2),
              },
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                marginBottom: theme.spacing(2),
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>
                {firstWord}
              </span>{" "}
              {rest.join(" ")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                [theme.breakpoints.up("md")]: {
                  width: "68%",
                },
              }}
            >
              {benefit.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BenefitFromLeft;
