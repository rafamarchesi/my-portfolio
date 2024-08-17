import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2F1E99',
    },
    secondary: {
      main: '#FF7DAD',
    }        
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontWeight: 'bold',
      textShadow: '0.05em 0.02em 0em #FF7DAD'
    },
    h2: {
      color: 'black', 
      fontSize: '38px'
    },
    h3: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: 1
    },
    h4: {
      fontSize: '50px',
      fontWeight: 'bold',      
      lineHeight: 1
    },
    body1: {
      fontSize: '18px'
    },
    body2: {
      fontSize: '22px',
      fontWeight: 'bold'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
        '.transition-height': {
          overflow: 'hidden',
          transition: 'height 10s ease',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
