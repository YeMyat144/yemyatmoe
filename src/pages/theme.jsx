import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#757575', // Dark Grey
    },
    text: {
      primary: '#000000', // Black for text
      secondary: '#ffffff', // White for text
      blue: '#0000ff', // Blue for text
    },
    background: {
      default: '#000000', // Background color
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
