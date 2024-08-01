import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import HeroSectionWrapper from "./HeroSectionWrapper";
import TextContent from "./TextContent";
import ImageCarousel from "./ImageCarousel";

const Content = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(2),
}));

const HeroSection = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "backtraining.webp", alt: "Fitness" },
    { src: "running.webp", alt: "Fitness" },
    { src: "eating.webp", alt: "Fitness" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getPosition = (index) => {
    const positions = [0, 1, 2];
    return positions[(index - currentIndex + images.length) % images.length];
  };

  return (
    <HeroSectionWrapper>
      <Content>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <TextContent theme={theme} />
          </Grid>
          <Grid item xs={12} md={5}>
            <ImageCarousel images={images} getPosition={getPosition} />
          </Grid>
        </Grid>
      </Content>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
