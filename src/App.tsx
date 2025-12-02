import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "src/routes";
import theme from "src/theme/theme";
import VersionAlert from "src/components/VersionAlert";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <VersionAlert />
    </ThemeProvider>
  );
}

export default App;
