import { Box } from "@mui/material";
import React from "react";
import Profile from "src/components/Profile";
import SkillsComponent from "src/components/SkillsComponent";

const HomePage: React.FC = () => {
  return (
    <Box p={"10px"}>
      {/** profile */}
      <Profile />

      {/** skills */}
      <SkillsComponent />
    </Box>
  );
};

export default HomePage;
