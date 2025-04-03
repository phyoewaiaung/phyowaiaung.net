import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Email, LinkedIn, GitHub, Phone } from "@mui/icons-material";

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
              alignItems: "center",
              gap: "10px",
              pt: "15px",
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
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "-10px",
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              borderRadius: "50%",
              padding: "10px",
              WebkitMask: 
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              animation: "rotate 4s linear infinite",
            }
          }}
        >
          <img
            src="/assets/profile.jpeg"
            alt="Profile"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
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
