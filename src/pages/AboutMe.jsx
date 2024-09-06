import React, { useState } from 'react';  
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';  
import { AppBar, Toolbar, Typography, Container, Avatar, IconButton, Button, Box, Link as MuiLink, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';  
import { Link } from 'react-router-dom';  
import MenuIcon from '@mui/icons-material/Menu';  
import myPicture from '../assets/hero-img.png';  
import resumeFile from '../assets/cv.pdf';  
import logo from '../assets/temp.png';  

function AboutMe() {  
  const [drawerOpen, setDrawerOpen] = useState(false);  
  const isMobile = useMediaQuery('(max-width:600px)');  

  const toggleDrawer = () => {  
    setDrawerOpen(!drawerOpen);  
  };  

  return (  
    <Container sx={{ mt: 4 }}>  
      {/* AppBar with responsive navigation */}
      <AppBar position="static" color="transparent" sx={{ mb: 5 }}>  
        <Toolbar sx={{ justifyContent: 'space-between' }}>  
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>  
            <IconButton component={Link} to="/" sx={{ p: 0 }}>  
              <img src={logo} alt="Logo" style={{ width: 35, height: 35 }} />  
            </IconButton>  
          </Box>  

          {/* Desktop and Mobile Navigation */}
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
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
          )}
        </Toolbar>  
      </AppBar>  

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Me" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer}>
            <ListItemText primary="Projects" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" sx={{ color: 'black' }} />
          </ListItem>
        </List>
      </Drawer>

      {/* About Me Section */}
      <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>  
        <Avatar  
          src={myPicture}  
          alt="My Picture"  
          sx={{ width: 150, height: 150, mx: 'auto', mb: 4 }}  
        />  
        <Typography variant="h4" component="h2" color="text.dark" gutterBottom sx={{ width: 200, mx: 'auto', mb: 4 }}>  
          Ye Myat Moe  
          <br />
          <Typography variant="h6" color="text.dark" sx={{ width: 150, mx: 'auto', mb: 4 }}>  
            Web Developer  
          </Typography> 
        </Typography>  
          
        {/* Social Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>  
          <IconButton href="https://github.com/yemyat144" aria-label="GitHub">  
            <FaGithub size={28} style={{ color: 'black' }} />  
          </IconButton>  
          <IconButton href="https://linkedin.com" aria-label="LinkedIn">  
            <FaLinkedin size={29} style={{ color: 'black' }}/>  
          </IconButton>  
          <IconButton href="https://instagram.com/dest_voyage_" aria-label="Instagram">  
            <FaInstagram size={30} style={{ color: 'black' }}/>  
          </IconButton>  
          <IconButton href="https://www.researchgate.net/profile/Ye-Myat-Moe" aria-label="ResearchGate">  
            <FaResearchgate size={28} style={{ color: 'black' }}/>  
          </IconButton>  
          <IconButton href="https://www.kaggle.com/yemyatmoe" aria-label="Kaggle">  
            <FaKaggle size={23} style={{ color: 'black' }} />  
          </IconButton>  
        </Box>  

        {/* Resume Button */}
        <Button  
          variant="contained"      
          size="large"  
          href={resumeFile}  
          download  
          sx={{   
            textTransform: 'none',  
            width: 178,  
            mb: 4,  
            backgroundColor: 'black',   
            color: 'white',   
            '&:hover': {  
              backgroundColor: 'darkgrey',  
            }  
          }}  
        >  
          Download Resume  
        </Button> 
      </Container>
    </Container>  
  );  
}  

export default AboutMe;
