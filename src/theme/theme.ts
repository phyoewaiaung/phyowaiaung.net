import { createTheme } from "@mui/material";

// Extend MUI theme with custom properties
declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      lightShadow: string;
      darkShadow: string;
    };
    customSpacing: {
      largeSpacing: number;
    };
    cardBackground: {
      main: string;
      light: string;
    };
  }

  // Allow configuration using `createTheme`
  interface ThemeOptions {
    customShadows?: {
      lightShadow?: string;
      darkShadow?: string;
    };
    customSpacing?: {
      largeSpacing?: number;
    };
    cardBackground: {
      main?: string;
      light?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light", // Default mode is light, will be toggled dynamically
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#b6c7cc",
      light: "#fff",
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
          light: "#fff",
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
          light: "#43484a",
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
  // Add custom properties
  customShadows: {
    lightShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    darkShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
  },
  customSpacing: {
    largeSpacing: 24,
  },
  cardBackground: {
    main: "#c9d3d6",
    light: "#7dc5db",
  },
});

export default theme;
