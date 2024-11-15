import React from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  Paper,
  Divider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Chip,
  LinearProgress,
  Fade
} from '@mui/material';
import { styled } from '@mui/system';
import { Download as DownloadIcon, Code as CodeIcon, Brush as BrushIcon, Storage as StorageIcon } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';
import profilePic from '../assets/hero-img.png';

let theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#A9A9A9',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

theme = responsiveFontSizes(theme);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: 'none',
  transition: 'none',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  margin: '0 auto',
  marginBottom: theme.spacing(1),
  border: `3px solid ${theme.palette.primary.main}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius * 5,
  textTransform: 'none',
  fontWeight: 600,
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.3),
}));

function AboutMe() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 75 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          bgcolor: theme.palette.background.paper,
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box sx={{ flex: 1, py: 0.5 }}>
          <Fade in={true} timeout={1000}>
            <StyledPaper elevation={3}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <StyledAvatar alt="Ye Myat Moe" src={profilePic} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 1 }}>
                    <SkillChip icon={<CodeIcon />} label="Frontend" color="primary" />
                    <SkillChip icon={<StorageIcon />} label="Backend" color="secondary" />
                    <SkillChip icon={<BrushIcon />} label="UI/UX" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" component="h1" gutterBottom align="center">
                    Ye Myat Moe
                  </Typography>
                  <Typography variant="h6" color="textSecondary" paragraph align="center">
                    Full Stack Web Developer | Problem Solver | Lifelong Learner
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body1" paragraph sx={{ fontSize: '0.9rem' }}>
                    I am a passionate full stack web developer with a keen eye for creating functional websites.
                    With extensive experience in both front-end and back-end development, I thrive on tackling new challenges
                    and expanding my skill set. My goal is to build intuitive and efficient web solutions that make
                    a positive impact on users' lives and businesses.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Key Skills
                    </Typography>
                    {skills.map((skill) => (
                      <Box key={skill.name} sx={{ mt: 1 }}>
                        <Typography variant="body2" color="textSecondary">
                          {skill.name}
                        </Typography>
                        <LinearProgress variant="determinate" value={skill.level} color="primary" />
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <StyledButton
                      variant="contained"
                      color="primary"
                      startIcon={<DownloadIcon />}
                      href="/assets/cv.pdf"
                      download
                    >
                      Download Resume
                    </StyledButton>
                  </Box>
                </Grid>
              </Grid>
            </StyledPaper>
          </Fade>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default AboutMe;
