import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, AppBar, IconButton, Toolbar, Link as MuiLink, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/temp.png';
import theme from './theme';
import Footer from './Footer';

function Contact() {
  const form = useRef();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_til6i7c', 'template_s9okbkh', form.current, 'ZT3etSjViZ5HA5CJT')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <AppBar position="static" color="transparent" sx={{ mb: 5 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton component={Link} to="/" sx={{ p: 0 }}>
              <img src={logo} alt="Logo" style={{ width: 35, height: 35 }} />
            </IconButton>
          </Box>

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
              <MuiLink component={Link} to="/" sx={{ mx: 2, color: theme.palette.text.primary, textDecoration: 'none' }}>
                <Typography variant="h6">Me</Typography>
              </MuiLink>
              <MuiLink component={Link} to="/projects" sx={{ mx: 2, color: theme.palette.text.primary, textDecoration: 'none' }}>
                <Typography variant="h6">Projects</Typography>
              </MuiLink>
              <MuiLink component={Link} to="/contact" sx={{ mx: 2, color: theme.palette.text.primary, textDecoration: 'none' }}>
                <Typography variant="h6">Contact</Typography>
              </MuiLink>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Me" sx={{ color: theme.palette.text.primary }} />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer}>
            <ListItemText primary="Projects" sx={{ color: theme.palette.text.primary }} />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </List>
      </Drawer>

      <Typography variant="h4" align="center" gutterBottom>Get in Touch</Typography>

      <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <TextField
            label="Name"
            name="user_name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              py: 1,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Footer/>
    </Container>
  );
}

export default Contact;
