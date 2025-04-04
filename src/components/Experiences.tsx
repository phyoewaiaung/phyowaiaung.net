
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
  useTheme,
} from "@mui/material";
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

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StepIcon: React.FC<{ isCurrent?: boolean }> = ({ isCurrent }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isCurrent
          ? "linear-gradient(45deg, #6a11cb, #2575fc)"
          : theme.palette.grey[300],
        boxShadow: isCurrent ? "0 4px 10px rgba(106, 17, 203, 0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Work
        sx={{
          color: isCurrent ? "#fff" : theme.palette.grey[500],
          fontSize: 20,
        }}
      />
    </Box>
  );
};

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
        mb={5}
        sx={{
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "25%",
            width: "50%",
            height: 4,
            background: "linear-gradient(45deg, #6a11cb, #2575fc)",
            borderRadius: 2,
          },
        }}
      >
        <span className="font-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
          Professional Work Experiences
        </span>
      </Typography>

      <Stepper
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-line": {
            minHeight: 40,
            borderColor: "rgba(106, 17, 203, 0.2)",
          },
        }}
      >
        {experiences.map((exp, index) => {
          const isCurrent = index === 0;
          return (
            <Step
              key={index}
              active={true}
              sx={{
                animation: `${slideIn} 0.5s ease-out ${index * 0.2}s both`,
              }}
            >
              <StepLabel StepIconComponent={() => <StepIcon isCurrent={isCurrent} />}>
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
                      sx={{
                        width: 56,
                        height: 56,
                        boxShadow: '0 2px 8px rgba(106, 17, 203, 0.1)',
                        border: '1px solid rgba(106, 17, 203, 0.08)',
                        transition: 'all 0.3s ease',
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: '0 4px 12px rgba(106, 17, 203, 0.15)',
                          border: '1px solid rgba(106, 17, 203, 0.15)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{
                        background: isCurrent
                          ? "linear-gradient(45deg, #6a11cb, #2575fc)"
                          : "none",
                        WebkitBackgroundClip: isCurrent ? "text" : "none",
                        WebkitTextFillColor: isCurrent ? "transparent" : "inherit",
                        fontWeight: "bold",
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        "& a": {
                          textDecoration: "none",
                          color: "inherit",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#6a11cb",
                          },
                        },
                      }}
                    >
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    background: isCurrent
                      ? "linear-gradient(135deg, rgba(106, 17, 203, 0.08), rgba(37, 117, 252, 0.08))"
                      : theme.palette.background.paper,
                    borderRadius: "12px",
                    backdropFilter: "blur(8px)",
                    border: isCurrent
                      ? "1px solid rgba(106, 17, 203, 0.2)"
                      : "1px solid rgba(106, 17, 203, 0.1)",
                    transition: "all 0.3s ease",
                    animation: isCurrent
                      ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                      : "none",
                    "@keyframes pulse": {
                      "0%, 100%": {
                        boxShadow: "0 0 15px rgba(106, 17, 203, 0.2)",
                        transform: "scale(1)",
                      },
                      "50%": {
                        boxShadow: "0 0 25px rgba(106, 17, 203, 0.3)",
                        transform: "scale(1.005)",
                      },
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(106, 17, 203, 0.15)",
                    },
                    position: "relative",
                    overflow: "hidden",
                    "&::before": isCurrent ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: -1000,
                      width: "200%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      animation: `${shimmer} 3s infinite linear`,
                    } : {},
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        lineHeight: 1.8,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {exp.description}
                    </Typography>
                    <Grid container spacing={1}>
                      {exp.techStack.map((tech, techIndex) => (
                        <Grid item key={techIndex}>
                          <Chip
                            label={tech}
                            sx={{
                              background: "linear-gradient(45deg, rgba(106, 17, 203, 0.1), rgba(37, 117, 252, 0.1))",
                              border: "1px solid rgba(106, 17, 203, 0.2)",
                              color: theme.palette.text.primary,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                background: "linear-gradient(45deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2))",
                              },
                            }}
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
      <Paper
        sx={{
          p: 3,
          mt: 2,
          background: "linear-gradient(135deg, rgba(106, 17, 203, 0.05), rgba(37, 117, 252, 0.05))",
          border: "1px solid rgba(106, 17, 203, 0.1)",
          borderRadius: "12px",
          textAlign: "center",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography>End of Journey - for now!</Typography>
      </Paper>
    </Box>
  );
};

export default ExperienceStepper;
