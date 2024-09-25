import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorScheme } from "@mui/material/styles";

const Header = () => {
  const { mode = "light", setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box
      sx={{
        zIndex: 1,
        top: 0,
        position: "sticky",
        height: "70px",
        backgroundColor: "secondary.main",
        opacity: 0.9,
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={toggleTheme}>
          {mode === "light" ? (
            <DarkModeIcon
              sx={{
                color: "primary.main",
                width: "40px",
                height: "40px",
              }}
            />
          ) : (
            <LightModeIcon
              sx={{
                color: "primary.main",
                width: "40px",
                height: "40px",
              }}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
