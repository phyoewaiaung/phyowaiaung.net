import Header from "@/Header";
import { Box, Container, useColorScheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import { motion, useScroll } from "framer-motion";

const MainLayout: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { mode } = useColorScheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        // height: "100vh",
        width: "100%",
        padding: "0 !important",
        // overflow: "auto",
      }}
    >
      <Box className={mode === "light" ? "light-bg" : "dark-bg"}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Header />
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
