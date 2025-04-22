import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Grid,
  Container,
  Chip,
  Tooltip,
  alpha,
  useMediaQuery,
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
  description?: string;
  proficiency?: number; // 1-5 scale
}

interface SkillCategory {
  category: string;
  description?: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Core Technologies",
    description: "Foundation of my development expertise",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        link: "https://www.javascript.com/",
        description: "ES6+, Promises, Async/Await",
        proficiency: 5,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
        description: "Type safety and scalable applications",
        proficiency: 4,
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        link: "https://www.php.net/",
        description: "OOP, MVC pattern implementation",
        proficiency: 4,
      },
    ],
  },
  {
    category: "Modern Frontend",
    description: "Creating responsive and interactive UIs",
    skills: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/",
        description: "SSR, ISR, and API routes",
        proficiency: 4,
      },
      {
        name: "Shadcn UI",
        icon: <SiRadixui />,
        link: "https://ui.shadcn.com/",
        description: "Accessible component systems",
        proficiency: 4,
      },
      {
        name: "React",
        icon: <SiReact />,
        link: "https://reactjs.org/",
        description: "Hooks, Context API, Redux",
        proficiency: 5,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs />,
        link: "https://vuejs.org/",
        description: "Vue 3, Composition API",
        proficiency: 4,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
        description: "Utility-first CSS framework",
        proficiency: 5,
      },
      {
        name: "Material-UI",
        icon: <SiMui />,
        link: "https://mui.com/",
        description: "Component customization, theming",
        proficiency: 5,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        link: "https://getbootstrap.com/",
        description: "Responsive layouts",
        proficiency: 4,
      },
      {
        name: "jQuery",
        icon: <SiJquery />,
        link: "https://jquery.com/",
        description: "DOM manipulation",
        proficiency: 4,
      },
    ],
  },
  {
    category: "Backend Development",
    description: "Building robust server-side applications",
    skills: [
      {
        name: "Node.js",
        icon: <TbBrandNodejs />,
        link: "https://nodejs.org/",
        description: "Event-driven architecture",
        proficiency: 5,
      },
      {
        name: "Laravel",
        icon: <TbBrandLaravel />,
        link: "https://laravel.com/",
        description: "MVC, Eloquent ORM",
        proficiency: 4,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
        description: "RESTful APIs, Middleware",
        proficiency: 5,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        link: "https://www.mysql.com/",
        description: "Complex queries, optimization",
        proficiency: 4,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
        description: "Aggregation, indexing",
        proficiency: 4,
      },
    ],
  },
  {
    category: "DevOps & CI/CD",
    description: "Streamlining development workflow",
    skills: [
      {
        name: "Git",
        icon: <SiGit />,
        link: "https://git-scm.com/",
        description: "Branching strategies, workflows",
        proficiency: 5,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        link: "https://www.docker.com/",
        description: "Containerization, multi-stage builds",
        proficiency: 4,
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        link: "https://github.com/features/actions",
        description: "Automated workflows",
        proficiency: 4,
      },
      {
        name: "GitLab CI",
        icon: <SiGitlab />,
        link: "https://docs.gitlab.com/ee/ci/",
        description: "Pipeline configuration",
        proficiency: 4,
      },
      {
        name: "Digital Ocean",
        icon: <SiDigitalocean />,
        link: "https://www.digitalocean.com/",
        description: "Deployment, scaling",
        proficiency: 3,
      },
      {
        name: "ESLint",
        icon: <SiEslint />,
        link: "https://eslint.org/",
        description: "Code quality, custom rules",
        proficiency: 4,
      },
      {
        name: "Webpack",
        icon: <SiWebpack />,
        link: "https://webpack.js.org/",
        description: "Module bundling, optimization",
        proficiency: 4,
      },
    ],
  },
];

const SkillsComponent: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Function to generate proficiency dots
  const renderProficiency = (level: number = 3) => {
    return (
      <Box sx={{ display: "flex", gap: 0.5, mt: 1, justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor:
                dot <= level
                  ? "linear-gradient(45deg, #6a11cb, #2575fc)"
                  : alpha(theme.palette.divider, 0.5),
              background:
                dot <= level
                  ? "linear-gradient(45deg, #6a11cb, #2575fc)"
                  : "transparent",
              border:
                dot <= level
                  ? "none"
                  : `1px solid ${alpha(theme.palette.divider, 0.5)}`,
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
        backgroundColor:
          theme.palette.mode === "light"
            ? alpha(theme.palette.background.paper, 0.7)
            : alpha(theme.palette.background.paper, 0.4),
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #6a11cb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #2575fc 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      />

      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Skills & Technologies
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            mb: 6,
            maxWidth: "700px",
            mx: "auto",
            color: theme.palette.text.secondary,
            px: 2,
          }}
        >
          A comprehensive toolkit I've mastered to build modern web applications
        </Typography>

        {skillCategories.map((category) => (
          <Box
            key={category.category}
            sx={{
              mb: 6,
              background:
                theme.palette.mode === "light"
                  ? alpha(theme.palette.background.paper, 0.7)
                  : alpha(theme.palette.background.default, 0.4),
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
              overflow: "hidden",
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              backdropFilter: "blur(8px)",
            }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background:
                  "linear-gradient(to right, rgba(106, 17, 203, 0.05), rgba(37, 117, 252, 0.05))",
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.mode === "light" ? "#6a11cb" : "#a78bfa",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {category.category}
              </Typography>
              {category.description && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: theme.palette.text.secondary,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {category.description}
                </Typography>
              )}
            </Box>

            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Grid container spacing={2}>
                {category.skills.map((skill) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
                    <Tooltip
                      title={skill.description || skill.name}
                      placement="top"
                      arrow
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          transition: "all 0.35s ease",
                          background:
                            theme.palette.mode === "light"
                              ? alpha(theme.palette.background.paper, 0.8)
                              : alpha(theme.palette.background.paper, 0.2),
                          borderRadius: "12px",
                          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                          overflow: "hidden",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background:
                              "linear-gradient(90deg, #6a11cb, #2575fc)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          },
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow:
                              theme.palette.mode === "light"
                                ? "0 10px 25px rgba(106, 17, 203, 0.15)"
                                : "0 10px 25px rgba(0, 0, 0, 0.3)",
                            border:
                              theme.palette.mode === "light"
                                ? `1px solid ${alpha("#6a11cb", 0.3)}`
                                : `1px solid ${alpha("#2575fc", 0.3)}`,
                            "&::before": {
                              opacity: 1,
                            },
                          },
                        }}
                        component="a"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.currentTarget.blur()}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            p: "16px !important",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: { xs: 30, md: 36 },
                              mb: 1.5,
                              color:
                                skill.name === "JavaScript"
                                  ? "#F7DF1E"
                                  : skill.name === "TypeScript"
                                    ? "#3178C6"
                                    : skill.name === "PHP"
                                      ? "#777BB4"
                                      : skill.name === "Next.js"
                                        ? theme.palette.mode === "light"
                                          ? "#000000"
                                          : "#FFFFFF"
                                        : skill.name === "Shadcn UI"
                                          ? theme.palette.mode === "light"
                                            ? "#000000"
                                            : "#FFFFFF"
                                          : skill.name === "React"
                                            ? "#61DAFB"
                                            : skill.name === "Vue"
                                              ? "#4FC08D"
                                              : skill.name === "jQuery"
                                                ? "#0769AD"
                                                : skill.name === "Bootstrap"
                                                  ? "#7952B3"
                                                  : skill.name === "Tailwind"
                                                    ? "#06B6D4"
                                                    : skill.name ===
                                                        "Material-UI"
                                                      ? "#007FFF"
                                                      : skill.name === "Node.js"
                                                        ? "#339933"
                                                        : skill.name ===
                                                            "Laravel"
                                                          ? "#FF2D20"
                                                          : skill.name ===
                                                              "Express.js"
                                                            ? theme.palette
                                                                .mode ===
                                                              "light"
                                                              ? "#000000"
                                                              : "#FFFFFF"
                                                            : skill.name ===
                                                                "MySQL"
                                                              ? "#4479A1"
                                                              : skill.name ===
                                                                  "MongoDB"
                                                                ? "#47A248"
                                                                : skill.name ===
                                                                    "Git"
                                                                  ? "#F05032"
                                                                  : skill.name ===
                                                                      "Docker"
                                                                    ? "#2496ED"
                                                                    : skill.name ===
                                                                        "ESLint"
                                                                      ? "#4B32C3"
                                                                      : skill.name ===
                                                                          "GitHub Actions"
                                                                        ? "#2088FF"
                                                                        : skill.name ===
                                                                            "GitLab CI"
                                                                          ? "#FCA121"
                                                                          : skill.name ===
                                                                              "Digital Ocean"
                                                                            ? "#0080FF"
                                                                            : skill.name ===
                                                                                "Webpack"
                                                                              ? "#8DD6F9"
                                                                              : theme
                                                                                  .palette
                                                                                  .primary
                                                                                  .main,
                              transition: "transform 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            {skill.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              mb: 0.5,
                              fontSize: { xs: "0.75rem", md: "0.875rem" },
                            }}
                          >
                            {skill.name}
                          </Typography>

                          {/* Display proficiency level */}
                          {skill.proficiency &&
                            renderProficiency(skill.proficiency)}
                        </CardContent>
                      </Card>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default SkillsComponent;
