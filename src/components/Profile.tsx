import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { Email, LinkedIn, GitHub, Phone, Download } from "@mui/icons-material";

const Profile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const contactLinks = [
    {
      icon: <Phone />,
      label: "Phone",
      link: "tel:+660629852876",
      color: "#25D366",
    },
    {
      icon: <Email />,
      label: "Email",
      link: "mailto:phyowaiaung.pxyo@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/phyoewaiaung082/",
      color: "#0A66C2",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      link: "https://github.com/phyoewaiaung",
      color: "#171515",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 4, md: 8 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background gradient blobs */}
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(106, 17, 203, 0.08), rgba(37, 117, 252, 0.08))",
          filter: "blur(80px)",
          top: "-300px",
          left: "-200px",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(37, 117, 252, 0.06), rgba(106, 17, 203, 0.06))",
          filter: "blur(60px)",
          bottom: "-200px",
          right: "-100px",
          zIndex: -1,
        }}
      />

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: "700px",
              mx: { xs: "auto", md: 0 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                mb: 1,
                animation: "fadeIn 1.2s ease-out",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(-20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                className="animate-pulse bg-gradient-to-r from-purple-700 via-pink-500 to-sky-600 bg-clip-text font-extrabold text-transparent"
                sx={{
                  background:
                    "linear-gradient(to right, #6a11cb, #9333ea, #2575fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(106, 17, 203, 0.2)",
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.8 },
                  },
                }}
              >
                PHYO
              </Box>
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                background:
                  "linear-gradient(to right, #6a11cb, #9333ea, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color:
                  theme.palette.mode === "light"
                    ? "text.secondary"
                    : "text.primary",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "600px",
                mx: { xs: "auto", md: 0 },
              }}
            >
              A versatile Full-Stack Developer with 3 years of experience
              crafting robust web solutions. Proficient in both frontend (React,
              TypeScript, Vue.js) and backend (Node.js, PHP, Laravel)
              development, I bring a comprehensive approach to building
              scalable, performant applications. Experienced in developing
              enterprise-level solutions including network management systems,
              booking platforms, and HR management applications.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start", md: "center" },
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 3,
                mb: 4,
              }}
            >
              <Button
                variant="contained"
                href="/assets/cv-phyowaiaung.pdf"
                target="_blank"
                startIcon={<Download />}
                sx={{
                  background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                  borderRadius: "30px",
                  padding: "12px 30px",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(106, 17, 203, 0.3)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(106, 17, 203, 0.4)",
                    background: "linear-gradient(45deg, #5c0fb3, #2069e0)",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  fontWeight: 600,
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Connect With Me:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {contactLinks.map((contact, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(30,30,30,0.9)",
                      boxShadow: `0 4px 12px rgba(${theme.palette.mode === "light" ? "0,0,0,0.1" : "255,255,255,0.05"})`,
                      border: `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}`,
                      transition: "all 0.3s ease",
                      color: contact.color,
                      "&:hover": {
                        transform: "translateY(-4px) scale(1.1)",
                        boxShadow: `0 8px 16px rgba(${theme.palette.mode === "light" ? "0,0,0,0.15" : "255,255,255,0.1"})`,
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "rgba(255,255,255,1)"
                            : "rgba(40,40,40,0.9)",
                      },
                    }}
                  >
                    {contact.icon}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              mb: { xs: 6, md: 0 },
            }}
          >
            {/* Profile image gradient ring effect */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "280px", md: "320px" },
                height: { xs: "280px", md: "320px" },
                borderRadius: "20px",
                background: "linear-gradient(45deg, #6a11cb, #2575fc, #6a11cb)",
                backgroundSize: "200% 200%",
                animation: "gradientAnimation 4s ease infinite",
                "@keyframes gradientAnimation": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" },
                },
                filter: "blur(20px)",
                opacity: 0.5,
              }}
            />

            <Box
              component="img"
              src="/assets/profile.jpeg"
              alt="Phyo Wai Aung - Web Developer"
              sx={{
                width: { xs: "260px", md: "300px" },
                height: { xs: "260px", md: "300px" },
                objectFit: "cover",
                borderRadius: "15px",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                border: "4px solid rgba(255, 255, 255, 0.8)",
                transition: "all 0.5s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
