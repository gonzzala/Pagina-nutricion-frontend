import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "300px",
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "250px",
    marginBottom: theme.spacing(4),
  },
}));

const StyledImage = styled("img")(({ theme, position }) => ({
  borderRadius: theme.spacing(2),
  maxWidth: "80%",
  height: "400px",
  position: "absolute",
  transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
  transform:
    position === 0
      ? "translateX(0) scale(1.2)"
      : position === 1
      ? "translateX(40%) translateY(-2%) scale(1) rotate(15deg)"
      : "translateX(-40%) translateY(-2%) scale(1) rotate(-15deg)",
  zIndex: position === 0 ? 2 : 1,
  boxShadow: position === 0 ? "0px 10px 20px rgba(0,0,0,0.3)" : "none",
  opacity: position === 0 ? 1 : 0.8,
  [theme.breakpoints.down("lg")]: {
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "200px",
  },
}));

const ImageCarousel = ({ images, getPosition }) => (
  <ImageWrapper>
    {images.map((image, index) => (
      <StyledImage
        key={index}
        src={image.src}
        alt={image.alt}
        position={getPosition(index)}
      />
    ))}
  </ImageWrapper>
);

export default ImageCarousel;
