import { Box } from "@mui/material";
import React from "react";
import Experiences from "src/components/Experiences";
import Profile from "src/components/Profile";
import SkillsComponent from "src/components/SkillsComponent";

const HomePage: React.FC = () => {
  return (
    <Box p={"10px"}>
      {/** profile */}
      <Profile />

      {/** skills */}
      <SkillsComponent />

      {/** experiences */}
      <Experiences />
    </Box>
  );
};

export default HomePage;
