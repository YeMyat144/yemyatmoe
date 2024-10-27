import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent, CardActions } from '@mui/material';
import Header from './Header';
import theme from './theme';
import Footer from './Footer';

function Projects() {
  const projectData = [
    { name: 'Tale&Twist', description: 'Branching narratives where user choices influence the story outcome', repoLink: 'https://talentwist.vercel.app' },
    { name: 'TicketTango', description: 'An online system for booking cinema tickets featuring JuzBird, M3', repoLink: 'https://ticket-tango.vercel.app/' },
    { name: 'Virtual Keyboard', description: 'A virtual keyboard controlled by hand gestures using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },
    { name: 'Yolo', description: 'An e-commerce website', repoLink: 'https://yemyat144.github.io/YOLO/' },
    { name: 'TheTrend', description: 'A shopping website for ganja using JavaScript', repoLink: 'https://yemyat144.github.io/menu_page/' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Projects
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            mt: 4,
          }}
        >
          {projectData.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' },
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" color={theme.palette.text.primary} gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  component="a"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Projects;
