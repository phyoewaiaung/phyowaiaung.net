import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { Work } from "@mui/icons-material";
import { keyframes } from "@emotion/react"; // Import keyframes for animation

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  techStack: string[];
  description: string;
  logo: string;
  link: string; // Added link
  location: string; // Added location
};

const experiences: ExperienceProps[] = [
  {
    title: "Frontend Developer",
    company: "Xenoptics Comp Ltd.",
    period: "16 Oct 2023 - present",
    techStack: [
      "JavaScript",
      "Typescript",
      "React",
      "CytoscapeJs",
      "Material-UI",
    ],
    description:
      "As a frontend developer, I am currently working on a network management system designed to monitor and manage machines across a network. My responsibilities include building user-friendly interfaces and creating interactive visualizations for real-time monitoring of machine statuses, performance metrics, and alert notifications. I collaborate closely with backend teams to integrate APIs, utilizing technologies such as React, TypeScript, and Redux for state management, along with Cytoscape.js for visualizing network topologies.",
    logo: "/assets/xenoptics.png",
    link: "https://xenoptics.com/", // Company website
    location: "THAILAND", // Company location
  },
  {
    title: "Software Engineer",
    company: "BrycenMyanmar Comp Ltd.",
    period: "26 August 2022 - 15 Sept 2023 (1 year)",
    techStack: [
      "JavaScript",
      "React",
      "TypeScript",
      "Core-UI",
      "PHP",
      "Laravel",
    ],
    description:
      "As a Software Engineer, I mainly focused on frontend development using React to build user interfaces for an online booking system, resume management system, and HR system, while collaborating on backend integration with Laravel.",
    logo: "/assets/brycen.png",
    link: "https://www.brycenmyanmar.com.mm/", // Company website
    location: "MYANMAR", // Company location
  },
  {
    title: "Software Engineer Intern",
    company: "BrycenMyanmar Comp Ltd.",
    period: "9 May 2022 - 10 August 2022 (3 Months)",
    techStack: [
      "JavaScript",
      "React",
      "TypeScript",
      "Core-UI",
      "PHP",
      "Laravel",
    ],
    description:
      "During my Software Engineer Internship, I worked with JavaScript, PHP, React, and Laravel to develop student and employee registration systems.",
    logo: "/assets/brycen.png",
    link: "https://www.brycenmyanmar.com.mm/", // Company website
    location: "MYANMAR", // Company location
  },
];

// StepIcon Component
const StepIcon: React.FC<{ isCurrent?: boolean }> = ({ isCurrent }) => {
  return (
    <Work
      sx={{
        color: isCurrent ? "primary.main" : "action.disabled", // Color only applied for the current step
      }}
    />
  );
};

// Define the fade-in fade-out animation
const fadeAnimation = keyframes`
  0% { background-color: rgba(0, 128, 0, 0.2); }
  50% { background-color: rgba(0, 128, 0, 0.5); }
  100% { background-color: rgba(0, 128, 0, 0.2); }
`;

const ExperienceStepper = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: {
          xl: "300px",
          lg: "200px",
          md: "100px",
          sm: "15px",
        },
      }}
    >
      <Typography textAlign={"center"} mb={"50px"}>
        <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
          Professional Work Experiences
        </span>
      </Typography>
      <Stepper orientation="vertical">
        {experiences.map((exp, index) => {
          const isCurrent = index === 0; // Check if it's the first experience
          return (
            <Step key={index} active={true}>
              <StepLabel
                StepIconComponent={() => <StepIcon isCurrent={isCurrent} />}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  flexWrap={"nowrap"}
                >
                  <Grid item>
                    {/* Company logo */}
                    <Avatar
                      alt={exp.company}
                      src={exp.logo}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{
                        color: isCurrent ? "primary.main" : "text.primary",
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "underline",
                          color: "inherit",
                        }}
                      >
                        {exp.company} ({exp.location})
                      </a>
                      , {exp.period}
                    </Typography>
                  </Grid>
                </Grid>
              </StepLabel>
              <StepContent>
                <Card
                  variant="outlined"
                  sx={{
                    mb: 2,
                    backgroundColor: isCurrent
                      ? "rgba(0, 128, 0, 0.2)"
                      : "background.paper", // Initial background color for current experience
                    borderColor: isCurrent ? "green" : undefined,
                    animation: isCurrent
                      ? `${fadeAnimation} 2s ease-in-out infinite` // Apply the fade animation
                      : undefined,
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      {exp.description}
                    </Typography>
                    <Grid container spacing={1}>
                      {exp.techStack.map((tech, techIndex) => (
                        <Grid item key={techIndex}>
                          <Chip
                            icon={
                              tech === "JavaScript" ? (
                                <JavascriptIcon />
                              ) : tech === "PHP" ? (
                                <PhpIcon />
                              ) : undefined
                            }
                            label={tech}
                            variant="outlined"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Paper square elevation={0} sx={{ p: 3, mt: 2 }}>
        <Typography>End of Journey - for now!</Typography>
      </Paper>
    </Box>
  );
};

export default ExperienceStepper;
