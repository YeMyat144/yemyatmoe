import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';  
import theme from './theme';
import Footer from './Footer';

function Projects() {

  const projectData = [
    { name: 'Virtual Keyboard', description: 'A virtual keyboard controlled by hand gesture controls using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },
    { name: 'Face Landmark Detection', description: 'A real-time facial landmark detection system using TensorFlow.js', repoLink: 'https://github.com/YeMyat144/facemesh' },
    { name: 'Gallery', description: 'Use Electron to build a gallery cross-platform application', repoLink: 'https://github.com/YeMyat144/Electron_Gallery' },
    { name: 'ToDo List', description: 'Practice Vue with a task list website', repoLink: 'https://github.com/YeMyat144/todo-list' },
    { name: 'Yolo', description: 'An e-commerce website', repoLink: 'https://github.com/yourusername/project-three' },
    { name: 'HangMan Game', description: 'A word-finding game using TypeScript', repoLink: 'https://github.com/YeMyat144/Typescript' },
    { name: 'Ganja', description: 'A shopping website for ganja using JavaScript', repoLink: 'https://github.com/YeMyat144/Menu_Page_javascript' },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Header />

      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: theme.shadows[3], mt: 3 }}>
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
