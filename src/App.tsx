import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "src/routes";
import theme from "src/theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
