
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert, Snackbar, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  useEffect(() => {
    emailjs.init('_8MCgBAjAyAEQQ7PJ');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_nx9b1rk',
        'template_b0734n8',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Phyo',
        }
      );
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: { xs: '20px', md: '60px' },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '40px',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        Get In Touch
      </Typography>
      <Paper
        elevation={6}
        sx={{
          padding: { xs: '20px', md: '40px' },
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{
              marginBottom: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6a11cb',
                },
              },
            }}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            sx={{
              marginBottom: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6a11cb',
                },
              },
            }}
            required
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={5}
            variant="outlined"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            sx={{
              marginBottom: 4,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(106, 17, 203, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6a11cb',
                },
              },
            }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              padding: '12px 30px',
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
              borderRadius: '30px',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(106, 17, 203, 0.3)',
                background: 'linear-gradient(45deg, #2575fc, #6a11cb)',
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          severity={snackbar.severity} 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
