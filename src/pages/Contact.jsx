import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, AppBar, IconButton, Toolbar, Link as MuiLink, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/temp.png';
import theme from './theme';
import Footer from './Footer';
import Header from './Header';

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
    <Container>
      <Header/>

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
      <br />
      <Footer/>
    </Container>
  );
}

export default Contact;
