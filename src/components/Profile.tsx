import { Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Email, LinkedIn, GitHub, Phone, Download } from "@mui/icons-material";
import cvPdf from "../assets/resume-phyowaiaung.pdf";

const Profile: React.FC = () => {
  const contactLinks = [
    {
      icon: <Phone />,
      label: "Phone",
      link: "tel:+660629852876", // Replace with your phone number
    },
    {
      icon: <Email />,
      label: "Email",
      link: "mailto:phyowaiaung.pxyo@gmail.com",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/phyoewaiaung082/",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      link: "https://github.com/phyoewaiaung",
    },
  ];

  const handleOpenPdf = () => {
  window.open(cvPdf, '_blank');
};
  
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      sx={{ padding: { xs: "0", md: "40px" } }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "350px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ maxWidth: "600px", padding: "0" }}>
          <Typography 
            sx={{
              fontSize: { xs: "36px", md: "50px" },
              animation: "fadeIn 1s ease-in",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(-20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" }
              }
            }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-sky-600 bg-clip-text font-extrabold text-transparent animate-pulse">
              PHYO
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "40px", md: "80px" },
            }}
            className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text font-extrabold text-transparent"
          >
            Web Developer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: "100%",
              color: "text.primary",
              textAlign: { xs: "center", md: "left" },
              mt: "10px",
              px: { xs: "20px", md: "0" },
            }}
          >
            A versatile Full-Stack Developer with 3 years of experience crafting robust web solutions. 
            Proficient in both frontend (React, TypeScript, Vue.js) and backend (Node.js, PHP, Laravel) development,
            I bring a comprehensive approach to building scalable, performant applications.
            Experienced in developing enterprise-level solutions including network management systems,
            booking platforms, and HR management applications.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: "15px",
              pt: "15px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleOpenPdf}
              startIcon={<Download />}
              sx={{
                background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                borderRadius: "25px",
                padding: "10px 25px",
                textTransform: "none",
                fontSize: "16px",
                transition: "all 0.3s ease",
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(106, 17, 203, 0.2)',
                }
              }}
            >
              Download CV
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                }}
              >
                Connect With Me:
              </Typography>
              {contactLinks.map((contact, index) => (
                <IconButton
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    backgroundColor: "secondary.light",
                    borderRadius: "50%",
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  {contact.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "450px" },
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.3,
            zIndex: -1,
          }
        }}
      >
        <Box>
          <img
            src="/assets/profile.jpeg"
            alt="Profile"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(106, 17, 203, 0.15)",
              transition: "all 0.3s ease-in-out",
              border: "3px solid transparent",
              background: "linear-gradient(white, white) padding-box, linear-gradient(45deg, #6a11cb, #2575fc) border-box",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
