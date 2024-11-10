import React from 'react';  
import { Container, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';  
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';  
import Header from './Header';  
import theme from './theme';  
import Footer from './Footer';  

function Projects() {  
  const projectData = [  
    { name: 'Tale&Twist', description: 'Branching narratives where user choices influence the story outcome', repoLink: 'https://talentwist.vercel.app' },  
    { name: 'TicketTango', description: 'An online system for booking cinema tickets featuring JuzBird, M3', repoLink: 'https://ticket-tango.vercel.app/' },  
    { name: 'TaskCard', description: 'A task board with customizable columns and draggable cards. Each task card can include titles', repoLink: 'https://task-card-trello.netlify.app/' },  
    { name: 'Virtual Keyboard', description: 'A virtual keyboard controlled by hand gestures using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },  
    { name: 'TrueTrack', description: 'A tracker app helping users manage their finances by tracking income, expenses, and overall balance', repoLink: 'https://yemyat144.github.io/YOLO/' },  
    { name: 'TheTrend', description: 'A shopping website for ganja using JavaScript', repoLink: 'https://yemyat144.github.io/menu_page/' },  
  ];  

  return (  
    <Box  
      sx={{  
        display: 'flex',  
        flexDirection: 'column',  
        minHeight: '100vh',  
        bgcolor: theme.palette.text.secondary,  
      }}  
    >  
      <Header />  

      <Box sx={{ flex: 1, py: 1 }}>  
        <Typography variant="h4" align="center" gutterBottom>  
          My Projects  
        </Typography>  

        <TableContainer component={Paper} sx={{ marginTop: 4 }}>  
          <Table>  
            <TableHead>  
              <TableRow>  
                <TableCell><Typography variant="h6">Project Name</Typography></TableCell>  
                <TableCell><Typography variant="h6">Description</Typography></TableCell>  
                <TableCell><Typography variant="h6">Link</Typography></TableCell>  
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {projectData.map((project, index) => (  
                <TableRow key={index}>  
                  <TableCell>  
                    <Typography variant="body1" color={theme.palette.text.primary}>  
                      {project.name}  
                    </Typography>  
                  </TableCell>  
                  <TableCell>  
                    <Typography variant="body1" color={theme.palette.text.primary}>  
                      {project.description}  
                    </Typography>  
                  </TableCell>  
                  <TableCell >  
                    <Button  
                      variant="outlined"  
                      component="a"  
                      href={project.repoLink}  
                      target="_blank"  
                      rel="noopener noreferrer"  
                      sx={{  
                        border: 'none',  
                        color: theme.palette.secondary.main,  
                      }}  
                    >  
                      <ArrowForwardIcon />  
                    </Button>  
                  </TableCell>  
                </TableRow>  
              ))}  
            </TableBody>  
          </Table>  
        </TableContainer>  
      </Box>  

      <Footer />  
    </Box>  
  );  
}  

export default Projects;