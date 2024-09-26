import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 3,
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
        <br />
      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} Ye Myat Moe. All rights reserved.
      </Typography>
      <Typography variant="body2" gutterBottom>
        <MuiLink href="/privacy-policy" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', mx: 1 }}>
          Privacy Policy
        </MuiLink>
        |
        <MuiLink href="/terms-of-service" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', mx: 1 }}>
          Terms of Service
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Footer;
