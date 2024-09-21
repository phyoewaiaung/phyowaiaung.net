import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light", // Default mode is light, will be toggled dynamically
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#b6c7cc",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#b6c7cc",
        },
        background: {
          default: "#f0f0f0",
        },
        text: {
          primary: "#000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9", // Light blue for dark mode
        },
        secondary: {
          main: "#4c585c", // Light pink for dark mode
        },
        background: {
          default: "#121212", // Dark background for dark mode
        },
        text: {
          primary: "#a39d9d",
        },
      },
    },
  },
});

export default theme;
