import React from 'react';
import { Container, Typography, Box, Avatar, IconButton, Button } from '@mui/material';
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';
import Header from './Header';
import { useTheme } from '@mui/material/styles';
import myPicture from '../assets/hero-img.png';
import resumeFile from '../assets/cv.pdf';
import theme from './theme';
import Footer from './Footer';

function AboutMe() {

  return (
    <>
    <Container sx={{ mt: 4 }}>
      <Header />

      <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
        <Avatar src={myPicture} alt="My Picture" sx={{ width: 150, height: 150, mx: 'auto', mb: 4 }} />
        <Typography variant="h4" component="h2" color="text.dark" gutterBottom sx={{ width: 200, mx: 'auto', mb: 4 }}>
          Ye Myat Moe
          <br />
          <Typography variant="h6" color={theme.palette.text.primary} sx={{ width: 150, mx: 'auto', mb: 4 }}>
            Web Developer
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <IconButton href="https://github.com/yemyat144" aria-label="GitHub">
            <FaGithub size={28} style={{ color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin size={29} style={{ color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton href="https://instagram.com/dest_voyage_" aria-label="Instagram">
            <FaInstagram size={30} style={{ color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton href="https://www.researchgate.net/profile/Ye-Myat-Moe" aria-label="ResearchGate">
            <FaResearchgate size={28} style={{ color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton href="https://www.kaggle.com/yemyatmoe" aria-label="Kaggle">
            <FaKaggle size={23} style={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          size="large"
          href={resumeFile}
          download
          sx={{
            textTransform: 'none',
            width: 178,
            mb: 4,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            }
          }}
        >
          Download Resume
        </Button>
        <Footer/>
      </Container>
      </Container>
    </>
  );
}

export default AboutMe;
