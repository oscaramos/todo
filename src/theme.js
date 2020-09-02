import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#668CE8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9FCFF',
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 400
    },
    h2: {
      color: 'white',
      fontSize: '1rem',
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 500
    },
    body1: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 400
    }
  }
});

export default theme;
