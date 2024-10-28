import React from 'react';
import { Box, IconButton, Typography, Link as MuiLink } from '@mui/material';
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <IconButton href="https://github.com/yemyat144" aria-label="GitHub">
            <FaGithub size={35} style={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin size={35} style={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href="https://instagram.com/dest_voyage_" aria-label="Instagram">
            <FaInstagram size={35} style={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href="https://www.researchgate.net/profile/Ye-Myat-Moe" aria-label="ResearchGate">
            <FaResearchgate size={35} style={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href="https://www.kaggle.com/yemyatmoe" aria-label="Kaggle">
            <FaKaggle size={30} style={{ color: theme.palette.text.primary }} />
        </IconButton>
    </Box>
  );
};

export default Footer;
