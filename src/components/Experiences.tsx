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

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  techStack: string[];
  description: string;
  logo: string; // New field for company logo URL
};

const experiences: ExperienceProps[] = [
  {
    title: "Frontend Developer",
    company: "Xenoptics Comp Ltd.",
    period: "16 Oct 2023 - present",
    techStack: [
      "Javascript",
      "Typescript",
      "React",
      "CytoscapeJs",
      "Material-UI",
    ],
    description:
      "Built full-stack applications, focusing on backend with PHP and Laravel.",
    logo: "/assets/xenoptics.png", // Example logo path
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
      "Developed responsive web applications with modern tech stack.",
    logo: "/assets/brycen.png", // Example logo path
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
      "Developed responsive web applications with modern tech stack.",
    logo: "/assets/brycen.png", // Example logo path
  },
  // Add more experiences here
];

const ExperienceStepper = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: {
          md: "300px",
          sm: "15px",
        },
        // minHeight: "100vh",
      }}
    >
      <Typography textAlign={"center"} mb={"50px"}>
        <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
          Professional Work Experiences
        </span>
      </Typography>
      <Stepper orientation="vertical">
        {experiences.map((exp, index) => (
          <Step key={index} active={true}>
            <StepLabel>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  {/* Company logo */}
                  <Avatar
                    alt={exp.company}
                    src={exp.logo}
                    sx={{ width: 56, height: 56 }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{exp.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {exp.company} | {exp.period}
                  </Typography>
                </Grid>
              </Grid>
            </StepLabel>
            <StepContent>
              <Card variant="outlined" sx={{ mb: 2 }}>
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
        ))}
      </Stepper>
      <Paper square elevation={0} sx={{ p: 3, mt: 2 }}>
        <Typography>End of Journey - for now!</Typography>
      </Paper>
    </Box>
  );
};

export default ExperienceStepper;
