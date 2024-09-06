import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar,IconButton, Typography, Link as MuiLink, Container, Table, TableBody, TableFooter, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import logo from '../assets/temp.png';

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
      {/* Navigation */}
      <AppBar position="static" color="transparent" sx={{ mb: 5 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton component={Link} to="/" sx={{ p: 0 }}>
            <img src={logo} alt="Logo" style={{ width: 35, height: 35 }} /> {/* Adjust the height as needed */}
          </IconButton>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MuiLink component={Link} to="/" sx={{ mx: 2, color: 'black', textDecoration: 'none' }}>
            <Typography variant="h6">Me</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/projects" sx={{ mx: 2, color: 'black', textDecoration: 'none' }}>
            <Typography variant="h6">Projects</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/contact" sx={{ mx: 2, color: 'black', textDecoration: 'none' }}>
            <Typography variant="h6">Contact</Typography>
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>

      {/* Projects Table */}
      <Typography variant="h4" align="center" gutterBottom>My Projects</Typography>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Project Name</Typography></TableCell>
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
                      borderColor: 'black', // Custom border color  
                      color: 'black', // Custom text color  
                      '&:hover': {  
                        borderColor: 'darkgrey', // Change border color on hover  
                        color: 'darkgrey', // Change text color on hover  
                      }  
                    }}  
                  >
                    Link
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                <Typography variant="body2">Coming soon...</Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Projects;
