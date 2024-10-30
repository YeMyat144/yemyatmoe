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
      primary: '#000000', // white
      secondary: '#FEFEFE', // White for text
      blue: '#a7a7a7', // Blue 
      main: '#1C1C2A',
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
