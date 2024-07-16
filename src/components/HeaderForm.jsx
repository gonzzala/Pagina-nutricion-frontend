import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "150px",
  marginBottom: 48,
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.down("lg")]: {
    height: "130px",
  },
  [theme.breakpoints.down("md")]: {
    height: "110px",
    marginBottom: 24,
  },
  [theme.breakpoints.down("sm")]: {
    height: "80px",
  },
}));

const HeaderImage = styled("img")(({ theme }) => ({
  width: "30%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "45%",
  },
}));

const HeaderForm = ({ sx }) => {
  return (
    <HeaderContainer sx={sx}>
      <HeaderImage src="/HeaderForm.png" alt="" />
    </HeaderContainer>
  );
};

export default HeaderForm;
