import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { Email, Phone, LinkedIn, Facebook, GitHub } from '@mui/icons-material';

export default function Contact() {
  return (
    <Box
      sx={{
        bgcolor: '#000000', // Black background
        color: 'white',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        height:"100vh"
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          GET IN TOUCH
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Email sx={{ mr: 1 }} />
          <Typography>momen.ehab.elsayed@gmail.com</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Phone sx={{ mr: 1 }} />
          <Typography>+20-115-419-8540</Typography>
        </Box>
      </Box>

     
      <Button
        variant="outlined"
        sx={{ color: 'white', borderColor: 'white' }}
        onClick={() => alert('Contact form coming soon!')} // Placeholder functionality
      >
        CONTACT ME
      </Button>


      <Box textAlign="right" id="contact">
        <Box mb={2}>
          <Link href="https://www.linkedin.com/in/momen-ehab/" color="inherit" sx={{ mx: 1 }}>
            <LinkedIn />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100009792337746" color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="https://github.com/MOMEN186" color="inherit" sx={{ mx: 1 }}>
            <GitHub />
          </Link>
        </Box>
        <Typography variant="body2">Copyright © 2019 KR</Typography>
      </Box>
    </Box>
  );
};

