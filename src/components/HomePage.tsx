import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SkillUi from "src/components/SkillUi";
import Grid from "@mui/material/Grid2";

const HomePage: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ height: "calc(100vh - 4vw)", p: "1vw", overflow: "auto" }}
      className="scrollable-container"
    >
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={2}
      >
        <Grid
          size={{ sm: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Box textAlign={"left"}>
              <Typography variant="h3">
                Hi,I'm{" "}
                <span className="ont-extrabold bg-gradient-to-r from-purple-700 to-sky-600 bg-clip-text text-5xl font-bold tracking-tight text-gray-900 text-transparent hover:from-sky-600 hover:to-blue-700">
                  PHYO
                </span>
              </Typography>
              <Typography
                variant="h1"
                className="ont-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text font-bold tracking-tight text-gray-900 text-transparent hover:from-pink-600 hover:to-blue-700"
              >
                Web Developer
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth: "600px",
                color: "text.primary",
                textAlign: "left",
              }}
            >
              A passionate web developer with 2+ years of experience building
              user-friendly, responsive, and engaging websites and applications.
              I specialize in React, TypeScript, and modern web technologies to
              bring ideas to life.
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Grid>
      </Grid>
      {/** Skills Component */}
      <SkillUi />
    </Container>
  );
};

export default HomePage;
