import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#2E8B57', // green
    },
    text: {
      primary: 'pink', // white
      secondary: '#FFFFFF', // White for text
      blue: '#0000ff', // Blue 
      main: '#2E8B57',
    },
    background: {
      default: '#1C1C2A', // Background color
    },
  },
  typography: {
    h4: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
