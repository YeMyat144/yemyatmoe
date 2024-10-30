import React from 'react';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import Header from './Header';
import myPicture from '../assets/hero-img.png';
import resumeFile from '../assets/cv.pdf';
import theme from './theme';
import Footer from './Footer';

function AboutMe() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        bgcolor: theme.palette.background.default,
      }}
    >
      <Header />

      <Box
        sx={{
          textAlign: 'center',
          flex: 1, 
          py: 1,
        }}
      >
        <Avatar src={myPicture} alt="My Picture" sx={{ width: 150, height: 150, mx: 'auto', mb: 4 }} />
        <Typography variant="h4" color={theme.palette.text.main} component="h4" gutterBottom>
          Ye Myat Moe
        </Typography>
        <Typography variant="h6" color={theme.palette.text.primary} sx={{ width: '70%', mx: 'auto', mb: 4 }}>
          I am a web developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking for new challenges to expand my skills.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href={resumeFile}
          download
          sx={{
            textTransform: 'none',
            width: 178,
            mb: 4,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.secondary,
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          Download Resume
        </Button>
      </Box>

      <Footer />
    </Box>
  );
}

export default AboutMe;
