import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMui,
  SiReact,
  SiVuedotjs,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNodejs, TbBrandLaravel } from "react-icons/tb";

// Skill Category and Skill types
interface Skill {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript color="#F7DF1E" />,
        link: "https://www.javascript.com/",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript color="#3178C6" />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "jQuery",
        icon: <SiJquery color="#0769AD" />,
        link: "https://jquery.com/",
      },
      {
        name: "React",
        icon: <SiReact color="#61DAFB" />,
        link: "https://reactjs.org/",
      },
      {
        name: "Vue",
        icon: <SiVuedotjs color="#4FC08D" />,
        link: "https://vuejs.org/",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "PHP",
        icon: <SiPhp color="#777BB4" />,
        link: "https://www.php.net/",
      },
      {
        name: "Node.js",
        icon: <TbBrandNodejs color="#339933" />,
        link: "https://nodejs.org/",
      },
      {
        name: "Laravel",
        icon: <TbBrandLaravel color="#FF2D20" />,
        link: "https://laravel.com/",
      },
    ],
  },
  {
    category: "UI Frameworks",
    skills: [
      {
        name: "Material-UI",
        icon: <SiMui color="#007FFF" />,
        link: "https://mui.com/",
      },
      {
        name: "CoreUI",
        icon: <SiBootstrap color="#563D7C" />,
        link: "https://coreui.io/",
      }, // Placeholder for CoreUI
      {
        name: "Bootstrap",
        icon: <SiBootstrap color="#7952B3" />,
        link: "https://getbootstrap.com/",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss color="#06B6D4" />,
        link: "https://tailwindcss.com/",
      },
    ],
  },
];

const SkillsComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        px: {
          md: "300px",
          sm: "15px",
        },
        minHeight: "100vh",
      }}
    >
      <Typography textAlign={"center"} mb={"50px"}>
        <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-2xl text-3xl text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
          Core Technologies
        </span>
      </Typography>

      {skillCategories.map((category) => (
        <Box key={category.category} sx={{ marginBottom: 4 }}>
          <Typography gutterBottom>
            <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-2xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
              {category.category}
            </span>
          </Typography>
          <Grid container spacing={3}>
            {category.skills.map((skill) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      padding: 1.5,
                      height: "100%",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, background 0.5s",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        padding: 0,
                        paddingBottom: "0 !important",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: 50,
                          color: theme.palette.primary.main,
                          transition: "color 0.3s",
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ marginTop: 1, fontWeight: "bold" }}
                      >
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsComponent;
