import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const CoverContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: theme.spacing(6),
}));

const CoverImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    height: `calc(100vh - 56px)`,
  },
}));

const AboutCover = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [coverImage, setCoverImage] = useState("/AboutCover.png");

  useEffect(() => {
    if (isSmallScreen) {
      setCoverImage("/AboutCoverMobile.png");
    } else {
      setCoverImage("/AboutCover.png");
    }
  }, [isSmallScreen]);

  return (
    <CoverContainer>
      <CoverImage src={coverImage} alt="about" />
    </CoverContainer>
  );
};

export default AboutCover;
