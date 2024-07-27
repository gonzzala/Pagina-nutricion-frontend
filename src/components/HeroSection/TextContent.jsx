import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const TextContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
}));

const ButtonsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const TextContent = ({ theme }) => (
  <TextContentWrapper>
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
      }}
    >
      Cambia tus hábitos,
      <br />
      <Typography
        variant="h2"
        component="span"
        color="primary"
        sx={{ fontWeight: 700 }}
      >
        Transforma tu vida
      </Typography>
    </Typography>
    <Typography variant="body1">
      Descubre cómo dos simples cambios pueden revolucionar tu bienestar.
      Estamos aquí para ayudarte a lograrlo de manera efectiva y sencilla.
    </Typography>
    <ButtonsWrapper>
      <ScrollLink to="benefits" smooth={true} duration={1000}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: 165,
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          }}
        >
          Ver beneficios
        </Button>
      </ScrollLink>
      <NavLink to="/nutritional-plans">
        <Button
          variant="outlined"
          color="primary"
          sx={{
            ml: theme.spacing(2),
            backgroundColor: "white",
            width: 165,
            [theme.breakpoints.down("md")]: {
              width: "100%",
              ml: 0,
              mt: theme.spacing(1.5),
            },
          }}
        >
          Ver planes
        </Button>
      </NavLink>
    </ButtonsWrapper>
  </TextContentWrapper>
);

export default TextContent;
