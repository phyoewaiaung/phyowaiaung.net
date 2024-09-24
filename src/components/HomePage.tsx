import { Container } from "@mui/material";
import React from "react";
import Profile from "src/components/Profile";
import SkillsComponent from "src/components/SkillsComponent";

const HomePage: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", width: "100%", padding: "12px", overflow: "auto" }}
    >
      {/** profile */}
      <Profile />

      {/** skills */}
      <SkillsComponent />
    </Container>
  );
};

export default HomePage;
