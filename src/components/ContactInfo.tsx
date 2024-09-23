import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { Email, Phone, LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const AnimatedBox = animated(Box);

const ContactInfo: React.FC = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  const contactLinks = [
    { icon: <Email />, label: 'Email', link: 'mailto:your-email@example.com' },
    { icon: <Phone />, label: 'Phone', link: 'tel:+1234567890' },
    { icon: <LinkedIn />, label: 'LinkedIn', link: 'https://linkedin.com/in/your-profile' },
    { icon: <GitHub />, label: 'GitHub', link: 'https://github.com/your-username' },
    { icon: <Twitter />, label: 'Twitter', link: 'https://twitter.com/your-profile' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <AnimatedBox style={animationProps} sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Stack direction="column" spacing={2}>
          {contactLinks.map((contact, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton href={contact.link} target="_blank" rel="noopener noreferrer" color="primary">
                {contact.icon}
              </IconButton>
              <Typography variant="body1">{contact.label}</Typography>
            </Box>
          ))}
        </Stack>
      </AnimatedBox>
    </Box>
  );
};

export default ContactInfo;
