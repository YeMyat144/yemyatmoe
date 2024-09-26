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
    </Box>
  );
};

export default Footer;
