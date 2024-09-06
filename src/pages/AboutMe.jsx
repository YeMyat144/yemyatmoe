import React from 'react';  
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';  
import { AppBar, Toolbar, Typography, Container, Avatar, Grid2, IconButton, Button, Box, Link as MuiLink } from '@mui/material';  
import { Link } from 'react-router-dom';  
import myPicture from '../assets/hero-img.png';  
import resumeFile from '../assets/cv.pdf';  
import logo from '../assets/temp.png';  

function AboutMe() {  
  return (  
    <Container sx={{ mt: 4 }}>  
      {/* Navbar */}  
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
        

      {/* Social Icons */}  
      <Grid2 container spacing={3} justifyContent="center" sx={{ mb: 4 }}>  
        <Grid2 item>  
          <IconButton href="https://github.com/yemyat144" aria-label="GitHub">  
            <FaGithub size={28} style={{ color: 'black' }} />  
          </IconButton>  
        </Grid2>  
        <Grid2 item>  
          <IconButton href="https://linkedin.com" aria-label="LinkedIn">  
            <FaLinkedin size={29} style={{ color: 'black' }}/>  
          </IconButton>  
        </Grid2>  
        <Grid2 item>  
          <IconButton href="https://instagram.com/dest_voyage_" aria-label="Instagram">  
            <FaInstagram size={30} style={{ color: 'black' }}/>  
          </IconButton>  
        </Grid2>  
        <Grid2 item>  
          <IconButton href="https://www.researchgate.net/profile/Ye-Myat-Moe" aria-label="ResearchGate">  
            <FaResearchgate size={28} style={{ color: 'black' }}/>  
          </IconButton>  
        </Grid2>  
        <Grid2 item>  
          <IconButton href="https://www.kaggle.com/yemyatmoe" aria-label="Kaggle">  
            <FaKaggle size={23} style={{ color: 'black' }} />  
          </IconButton>  
        </Grid2> 
      </Grid2>  
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