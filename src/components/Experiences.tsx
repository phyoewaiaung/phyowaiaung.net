import React from "react";
import { useTheme } from "@mui/material/styles";
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
import { keyframes } from "@emotion/react";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  techStack: string[];
  description: string;
  logo: string;
  link: string;
  location: string;
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
    link: "https://xenoptics.com/",
    location: "THAILAND",
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
    link: "https://www.brycenmyanmar.com.mm/",
    location: "MYANMAR",
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
    link: "https://www.brycenmyanmar.com.mm/",
    location: "MYANMAR",
  },
];

// StepIcon Component
const StepIcon: React.FC<{ isCurrent?: boolean }> = ({ isCurrent }) => {
  return (
    <Work
      sx={{
        color: isCurrent ? "primary.main" : "action.disabled",
      }}
    />
  );
};

// Define animations
const fadeAnimation = keyframes`
  0% { background-color: rgba(25, 118, 210, 0.05); }
  50% { background-color: rgba(25, 118, 210, 0.15); }
  100% { background-color: rgba(25, 118, 210, 0.05); }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1.02); }
  50% { transform: scale(1.025); }
  100% { transform: scale(1.02); }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ExperienceStepper = () => {
  const theme = useTheme();

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
      <Typography
        textAlign="center"
        mb={6}
        variant="h4"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(to right, #9333ea, #0284c7)",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "tight",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(to right, #0284c7, #1d4ed8)",
            backgroundClip: "text",
          },
        }}
      >
        Professional Work Experiences
      </Typography>

      <Stepper orientation="vertical">
        {experiences.map((exp, index) => {
          const isCurrent = index === 0;
          return (
            <Step key={index} active={true}>
              <StepLabel
                StepIconComponent={() => <StepIcon isCurrent={isCurrent} />}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  flexWrap="nowrap"
                >
                  <Grid item>
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
                        animation: `${slideInFromLeft} 0.5s ease-out`,
                        fontWeight: isCurrent ? 700 : 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          letterSpacing: "0.5px",
                          color: "primary.main",
                        },
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
                      ? theme.palette.mode === "light"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "rgba(144, 202, 249, 0.08)"
                      : "background.paper",
                    borderColor: isCurrent
                      ? theme.palette.primary.main
                      : undefined,
                    borderWidth: isCurrent ? "2px" : "1px",
                    borderRadius: "16px",
                    backdropFilter: "blur(8px)",
                    boxShadow: isCurrent
                      ? theme.palette.mode === "light"
                        ? "0 8px 32px rgba(25, 118, 210, 0.25)"
                        : "0 8px 32px rgba(144, 202, 249, 0.25)"
                      : undefined,
                    animation: isCurrent
                      ? `${fadeAnimation} 3s ease-in-out infinite, ${scaleAnimation} 2s ease-in-out infinite`
                      : undefined,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: isCurrent ? "scale(1.03)" : "scale(1.01)",
                      boxShadow: isCurrent
                        ? theme.palette.mode === "light"
                          ? "0 12px 28px rgba(106, 17, 203, 0.2)"
                          : "0 12px 28px rgba(144, 202, 249, 0.2)"
                        : "0 4px 20px rgba(0, 0, 0, 0.1)",
                    },
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
