import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

const Profile: React.FC = () => {
  const contactLinks = [
    {
      icon: <Email />,
      label: "Email",
      link: "mailto:phyowaiaung.pxyo@gmail.com",
    },
    // {
    //   icon: <Phone />,
    //   label: "Phone",
    //   link: "tel:+1234567890",
    //   position: { top: "40%", right: "-1vw" },
    // },
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
    // {
    //   icon: <Twitter />,
    //   label: "Twitter",
    //   link: "https://twitter.com/your-profile",
    //   position: { top: "50%", left: "10%" },
    // },
  ];

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid
        size={{ sm: 12, xs: 12, md: 6 }}
        sx={{
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            sx={{
              fontSize: "50px",
            }}
          >
            Hi,I'm{" "}
            <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
              PHYO
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "50px",
                md: "80px",
              },
            }}
            className="ont-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text font-bold tracking-tight text-gray-900 text-transparent hover:from-pink-600 hover:to-blue-700"
          >
            Web Developer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: "100%",
              color: "text.primary",
              textAlign: "left",
            }}
          >
            A passionate web developer with 2+ years of experience building
            user-friendly, responsive, and engaging websites and applications. I
            specialize in React, TypeScript, and modern web technologies to
            bring ideas to life.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              pt: "10px",
              justifyContent: "center",
            }}
          >
            <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-[20px] font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
              Connect With Me:
            </span>
            {contactLinks.map((contact) => (
              <IconButton
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{
                  backgroundColor: "secondary.light",
                  borderRadius: "50%",
                  boxShadow: 3,
                }}
              >
                {contact.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        size={{ sm: 12, xs: 12, md: 6 }}
        sx={{
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/profile.jpeg"
          alt="Profile"
          style={{
            width: "330px",
            height: "330px",
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
      </Grid>
    </Grid>
  );
};

export default Profile;
