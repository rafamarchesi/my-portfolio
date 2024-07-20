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
    },
    body1:{
      fontSize: '18px'

    },
    body2:{
      fontSize: '22px',
      fontWeight: 'bold',

    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;