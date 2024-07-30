import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const TextContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
}));

const ButtonsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const TextContent = ({ theme }) => (
  <TextContentWrapper
    component={motion.div}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
      }}
      component={motion.div}
      variants={itemVariants}
    >
      Cambia tus hábitos,
      <br />
      <Typography
        variant="h2"
        /* component="span" */
        color="primary"
        sx={{ fontWeight: 700 }}
        component={motion.span}
        variants={itemVariants}
      >
        Transforma tu vida
      </Typography>
    </Typography>
    <Typography variant="body1" component={motion.div} variants={itemVariants}>
      Descubre cómo dos simples cambios pueden revolucionar tu bienestar.
      Estamos aquí para ayudarte a lograrlo de manera efectiva y sencilla.
    </Typography>
    <ButtonsWrapper component={motion.div} variants={itemVariants}>
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
