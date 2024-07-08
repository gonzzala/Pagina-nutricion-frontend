// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      50: "#C4C0E4",
      100: "#c6abd2",
      200: "#b38fc3",
      300: "#5D3A6D",
      400: "#4a2e57",
      main: "#5D3A6D",
      contrastText: "#fff",
    },
    secondary: {
      50: "#FBF4FB",
      100: "#EFD3EF",
      200: "#F4D7E4",
      300: "#e8aac6",
      400: "#db7da7",
      main: "#F4D7E4",
      contrastText: "#333333",
    },
    surface: {
      50: "#FFFFFF",
      100: "#F7F9FD",
      150: "#F5F5F5",
      200: "#ECEDEE",
      300: "#CBCFD2",
      400: "#A7AEB4",
      500: "#8E979F",
      600: "#6B767F",
      700: "#4F575E",
      800: "#333333",
      900: "#202323",
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
      disabled: "#BDBDBD",
      hint: "#9E9E9E",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
        containedPrimary: {
          backgroundColor: "#5D3A6D",
          color: "#fff",
        },
        outlinedSecondary: {
          borderColor: "#5D3A6D",
          color: "#5D3A6D",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
