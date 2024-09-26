import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/temp.png';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
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
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
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
    </>
  );
};

export default Header;
