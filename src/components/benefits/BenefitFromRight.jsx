import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const BenefitFromRight = ({ benefit }) => {
  const theme = useTheme();

  const [firstWord, ...rest] = benefit.title.split(" ");

  return (
    <Grid container item xs={12} justifyContent="flex-end">
      <Grid item xs={10} sm={10} lg={8}>
        <Box
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="200"
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: theme.palette.primary[50],
            padding: theme.spacing(3),
            borderBottomLeftRadius: theme.spacing(2),
            borderTopLeftRadius: theme.spacing(10),
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            "@media (max-width: 725px)": {
              flexDirection: "column",
            },
            "@media (min-width: 550px) and (max-width: 725px)": {
              alignItems: "center",
              textAlign: "center",
            },
            [theme.breakpoints.down("sm")]: {
              borderTopLeftRadius: theme.spacing(6),
            },
            marginLeft: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, sm: 1 },
              "@media (max-width: 725px)": {
                order: 2,
                paddingRight: 0,
                paddingTop: theme.spacing(2),
              },
              width: { xs: "100%", sm: "auto" },
              paddingRight: theme.spacing(3),
              [theme.breakpoints.up("md")]: {
                marginLeft: theme.spacing(10),
                paddingRight: theme.spacing(0),
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
          <Box
            component="img"
            src={benefit.img}
            alt={benefit.title}
            sx={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: theme.shape.borderRadius,
              order: { xs: 1, sm: 2 },
              "@media (max-width: 725px)": {
                order: 1,
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BenefitFromRight;
