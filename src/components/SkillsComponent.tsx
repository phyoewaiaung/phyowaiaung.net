
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiWebpack,
  SiNextdotjs,
  SiRadixui,
  SiEslint,
  SiGithubactions,
  SiGitlab,
  SiDigitalocean,
} from "react-icons/si";
import { TbBrandNodejs, TbBrandLaravel } from "react-icons/tb";

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
    category: "Core Technologies",
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
        name: "PHP",
        icon: <SiPhp color="#777BB4" />,
        link: "https://www.php.net/",
      },
    ],
  },
  {
    category: "Modern Frontend",
    skills: [
      {
        name: "Next.js",
        icon: <SiNextdotjs color="#000000" />,
        link: "https://nextjs.org/",
      },
      {
        name: "Shadcn UI",
        icon: <SiRadixui color="#000000" />,
        link: "https://ui.shadcn.com/",
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
        name: "jQuery",
        icon: <SiJquery color="#0769AD" />,
        link: "https://jquery.com/",
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
    ],
  },
  {
    category: "Backend Development",
    skills: [
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
      {
        name: "Express.js",
        icon: <SiExpress color="#000000" />,
        link: "https://expressjs.com/",
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479A1" />,
        link: "https://www.mysql.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb color="#47A248" />,
        link: "https://www.mongodb.com/",
      },
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      {
        name: "Git",
        icon: <SiGit color="#F05032" />,
        link: "https://git-scm.com/",
      },
      {
        name: "Docker",
        icon: <SiDocker color="#2496ED" />,
        link: "https://www.docker.com/",
      },
      {
        name: "ESLint",
        icon: <SiEslint color="#4B32C3" />,
        link: "https://eslint.org/",
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions color="#2088FF" />,
        link: "https://github.com/features/actions",
      },
      {
        name: "GitLab CI",
        icon: <SiGitlab color="#FCA121" />,
        link: "https://docs.gitlab.com/ee/ci/",
      },
      {
        name: "Digital Ocean",
        icon: <SiDigitalocean color="#0080FF" />,
        link: "https://www.digitalocean.com/",
      },
      {
        name: "Webpack",
        icon: <SiWebpack color="#8DD6F9" />,
        link: "https://webpack.js.org/",
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
          xl: "300px",
          lg: "200px",
          md: "100px",
          sm: "15px",
        },
      }}
    >
      <Typography textAlign="center" mb={5}>
        <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
          Skills & Technologies
        </span>
      </Typography>

      {skillCategories.map((category, index) => (
        <Accordion
          key={category.category}
          defaultExpanded={index === 0}
          sx={{
            mb: 2,
            background: 'transparent',
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              background: theme.palette.background.paper,
              borderRadius: '8px',
              mb: 1,
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
              {category.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
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
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.2s',
                        background: theme.palette.background.paper,
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                          padding: '8px !important',
                          width: '100%',
                        }}
                      >
                        <Box sx={{ fontSize: 32 }}>{skill.icon}</Box>
                        <Typography
                          variant="caption"
                          sx={{
                            textAlign: 'center',
                            color: theme.palette.text.primary,
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SkillsComponent;
