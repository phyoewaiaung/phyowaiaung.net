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
        icon: <SiJavascript />,
        link: "https://www.javascript.com/",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      { name: "jQuery", icon: <SiJquery />, link: "https://jquery.com/" },
      { name: "React", icon: <SiReact />, link: "https://reactjs.org/" },
      { name: "Vue", icon: <SiVuedotjs />, link: "https://vuejs.org/" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", icon: <SiPhp />, link: "https://www.php.net/" },
      { name: "Node.js", icon: <TbBrandNodejs />, link: "https://nodejs.org/" },
      {
        name: "Laravel",
        icon: <TbBrandLaravel />,
        link: "https://laravel.com/",
      },
    ],
  },
  {
    category: "UI Frameworks",
    skills: [
      { name: "Material-UI", icon: <SiMui />, link: "https://mui.com/" },
      { name: "CoreUI", icon: <SiBootstrap />, link: "https://coreui.io/" }, // Placeholder for CoreUI
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        link: "https://getbootstrap.com/",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
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
        padding: 4,
        minHeight: "100vh",
      }}
    >
      <Typography textAlign={"center"} gutterBottom>
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
                      padding: 2,
                      height: "100%",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, background 0.5s",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: theme.shadows[6],
                        // background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                    }}
                  >
                    <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                      <Box
                        sx={{
                          fontSize: 50,
                          color: theme.palette.primary.main,
                          transition: "color 0.3s",
                          // "&:hover": { color: theme.palette.secondary.main },
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
