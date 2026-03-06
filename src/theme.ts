import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5A623',
      light: '#FFCC44',
      dark: '#C87D00',
    },
    secondary: {
      main: '#1A1A2E',
    },
    background: {
      default: '#0D0D1A',
      paper: '#16213E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B8CC',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 900,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          padding: '12px 32px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(245, 166, 35, 0.4)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
          color: '#0D0D1A',
          boxShadow: '0 4px 20px rgba(245, 166, 35, 0.3)',
        },
        outlinedPrimary: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#16213E',
          border: '1px solid rgba(245, 166, 35, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(245, 166, 35, 0.5)',
            boxShadow: '0 20px 60px rgba(245, 166, 35, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
