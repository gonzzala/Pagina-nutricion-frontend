import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CoverContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: 48,
}));

const CoverImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const AboutCover = () => {
  return (
    <CoverContainer>
      <CoverImage src="/about.jpg" alt="about" />
    </CoverContainer>
  );
};

export default AboutCover;
