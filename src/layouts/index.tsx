import Header from "@/Header";
import { Box, Container, useColorScheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";

const MainLayout: React.FC = () => {
  const {mode} = useColorScheme();
  return (
    <Container maxWidth={false} sx={{ p: "0 !important" }}>
      <Header />
      <Box className={mode === "light" ? "light-bg" : 'dark-bg'}>
      <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
