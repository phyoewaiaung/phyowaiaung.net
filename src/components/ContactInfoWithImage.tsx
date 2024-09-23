import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const ContactInfoWithImage: React.FC = () => {
  const contactLinks = [
    {
      icon: <Email />,
      label: "Email",
      link: "mailto:phyowaiaung.pxyo@gmail.com",
      position: { top: "25%", right: "-1vw" },
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
      position: { top: "45%", right: "-1vw" },
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      link: "https://github.com/phyoewaiaung",
      position: { top: "65%", right: "-1vw" },
    },
    // {
    //   icon: <Twitter />,
    //   label: "Twitter",
    //   link: "https://twitter.com/your-profile",
    //   position: { top: "50%", left: "10%" },
    // },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "24vw",
        height: "21vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Profile Image */}
      <img
        src="/assets/profile.jpeg"
        alt="Profile"
        style={{
          width: "20vw",
          height: "20vw",
          objectFit: "cover",
          borderRadius: "50%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      {/* Contact Information */}
      {contactLinks.map((contact, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            ...contact.position,
            // transform: "translate(-50%, -50%)",
            width: "2.3vw",
            height: "2.3vw",
          }}
        >
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
          <Typography
            variant="caption"
            sx={{
              mt: 1,
              display: "block",
              textAlign: "center",
              color: "text.primary",
            }}
          >
            {contact.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ContactInfoWithImage;
