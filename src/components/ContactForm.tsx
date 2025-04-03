
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

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
        'service_63dtiye',
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
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '30px',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
        }}
      >
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          sx={{ marginBottom: 2 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(to right, #2575fc, #6a11cb)',
            },
          }}
        >
          Send Message
        </Button>
      </form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
