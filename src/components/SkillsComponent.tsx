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
    category: "Frontend Development",
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
      {
        name: "Material-UI",
        icon: <SiMui color="#007FFF" />,
        link: "https://mui.com/",
      },
      {
        name: "CoreUI",
        icon: <img src="/assets/coreui.png" width={"50px"} height={"50px"} />,
        link: "https://coreui.io/",
      },
    ],
  },
  {
    category: "Backend Development",
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
  // {
  //   category: "UI Frameworks",
  //   skills: [
  //     {
  //       name: "Bootstrap",
  //       icon: <SiBootstrap color="#7952B3" />,
  //       link: "https://getbootstrap.com/",
  //     },
  //     {
  //       name: "Tailwind",
  //       icon: <SiTailwindcss color="#06B6D4" />,
  //       link: "https://tailwindcss.com/",
  //     },
  //     {
  //       name: "Material-UI",
  //       icon: <SiMui color="#007FFF" />,
  //       link: "https://mui.com/",
  //     },
  //     {
  //       name: "CoreUI",
  //       icon: <img src="/assets/coreui.png" width={"50px"} height={"50px"} />,
  //       link: "https://coreui.io/",
  //     }, // Placeholder for CoreUI
  //   ],
  // },
];

const SkillsComponent: React.FC = () => {
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
        // minHeight: "100vh",
      }}
    >
      <Typography textAlign={"center"} mb={"50px"}>
        <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
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
              <Grid item xs={6} sm={4} md={4} lg={3} key={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      padding: "10px",
                      height: "100%",
                      transition: "all 0.4s ease-in-out",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      transform: "translateY(0)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: `0 20px 30px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                        backgroundImage: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0))",
                      },
                      animation: "fadeInUp 0.6s ease-out",
                      "@keyframes fadeInUp": {
                        "0%": { opacity: 0, transform: "translateY(20px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" }
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "start",
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
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
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
