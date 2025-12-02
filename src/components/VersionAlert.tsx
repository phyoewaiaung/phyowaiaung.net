import { useEffect, useState } from "react";
import { Alert, AlertTitle, Box, Fade, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VersionAlert = () => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setVisible(true), 100);
        const timer2 = setTimeout(() => setSlideIn(true), 200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 5,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9999,
                width: "90%",
                maxWidth: 600,
            }}
        >
            <Slide direction="down" in={slideIn} timeout={800}>
                <Fade in={visible} timeout={1000}>
                    <Alert
                        severity="info"
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: 3,
                            boxShadow: theme.customShadows.lightShadow,
                            border: `2px solid ${theme.palette.primary.dark}`,
                            fontSize: "1.1rem",
                            padding: "4px 24px",
                            "& .MuiAlert-icon": {
                                color: "white",
                                fontSize: "1.5rem",
                                animation: "pulse 2s infinite",
                            },
                            "&:hover": {
                                transform: "scale(1.02)",
                                transition: "transform 0.3s ease-in-out",
                                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                            },
                            "@keyframes pulse": {
                                "0%": { transform: "scale(1)" },
                                "50%": { transform: "scale(1.1)" },
                                "100%": { transform: "scale(1)" },
                            },
                            "@keyframes glow": {
                                "0%": { boxShadow: "0 0 5px rgba(255,255,255,0.5)" },
                                "50%": { boxShadow: "0 0 20px rgba(255,255,255,0.8)" },
                                "100%": { boxShadow: "0 0 5px rgba(255,255,255,0.5)" },
                            },
                            animation: "glow 3s ease-in-out infinite",
                        }}
                    >
                        <AlertTitle
                            sx={{ color: "white", fontSize: "1.2rem", marginBottom: "4px" }}
                        >
                            🚀 Exciting News!
                        </AlertTitle>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <span>Portfolio Version 2.0 is coming soon!</span>
                            <Box
                                component="span"
                                sx={{
                                    animation: "bounce 1.5s infinite",
                                    "@keyframes bounce": {
                                        "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                                        "40%": { transform: "translateY(-10px)" },
                                        "60%": { transform: "translateY(-5px)" },
                                    },
                                }}
                            >
                                ✨
                            </Box>
                        </Box>
                    </Alert>
                </Fade>
            </Slide>
        </Box>
    );
};

export default VersionAlert;
