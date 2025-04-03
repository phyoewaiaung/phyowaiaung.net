import { Box } from "@mui/material";
import React from "react";
import Experiences from "src/components/Experiences";
import Profile from "src/components/Profile";
import SkillsComponent from "src/components/SkillsComponent";
import ContactForm from "./ContactForm";

const HomePage: React.FC = () => {
  return (
    <Box p={"10px"}>
      {/** profile */}
      <Profile />

      {/** skills */}
      <SkillsComponent />

      {/** experiences */}
      <Experiences />
      <ContactForm />
    </Box>
  );
};

export default HomePage;
