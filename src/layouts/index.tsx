import Header from "@/Header";
import { Box, Container, useColorScheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";

const MainLayout: React.FC = () => {
  const { mode } = useColorScheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100%",
        padding: "0 !important",
        overflow: "auto",
      }}
    >
      <Box className={mode === "light" ? "light-bg" : "dark-bg"}>
        <Header />
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
