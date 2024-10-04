import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';  
import theme from './theme';
import Footer from './Footer';

function Projects() {

  const projectData = [
    { name: 'Tale&Twist', description: 'Branching narratives where user choose that influence the story outcome', repoLink: 'https://talentwist.vercel.app' },
    { name: 'TicketTango', description: 'An online system for booking cinema tickets ft. JuzBird, M3 ', repoLink: 'https://ticket-tango.vercel.app/'},
    { name: 'Virtual Keyboard', description: 'A virtual keyboard controlled by hand gesture controls using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },
    { name: 'Yolo', description: 'An e-commerce website', repoLink: 'https://yemyat144.github.io/YOLO/' },
    { name: 'TheTrend', description: 'A shopping website for ganja using JavaScript', repoLink: 'https://yemyat144.github.io/menu_page/' },
  ];

  return (
    <Container>
      <Header />

      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>

      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Name</Typography></TableCell>
              <TableCell><Typography variant="h6">Description</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Repository</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectData.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell align="center">
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
                      }
                    }}
                  >
                    Link
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer/>
    </Container>
  );
}

export default Projects;
