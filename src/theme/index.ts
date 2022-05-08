import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const theme = createTheme(
  {
    spacing: 16,
    breakpoints: {
      values: {
        xs: 0,
        sm: 641,
        md: 1024,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      primary: {
        main: '#dfe1e2',
        dark: '#aabfb8',
        light: '#e5e7e7',
        contrastText: '#fff'
      },
      secondary: {
        main: '#9c9d9e',
        dark: '#dfe1e2',
        light: '#e5e7e7'
      },
      background: {
        default: '#FAFAFA',
        paper: '#fff'
      },
      error: {
        main: '#FF2F2F'
      },
      success: {
        main: '#9c9d9e'
      }
    },
    shape: { borderRadius: '3px' },
    typography: {
      fontFamily: ['JetBrains', 'sans-serif'].join(','),
      h6: {
        fontSize: '1rem',
        color: '#333333',
        fontWeight: 700,
        lineHeight: 1.5
      },
      body1: {
        color: '#424242',
        fontWeight: 400,
        fontSize: '1rem'
      },
      button: {
        borderRadius: 6
      }
    },
    shadows: [
      'none',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0px 35px 60px rgba(0, 0, 0, 0.25)',
      '20px 55px 60px rgba(0, 0, 0, 0.25)',
      '10px 15px 60px rgba(0, 0, 0, 0.25)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)',
      '0 2px 10px rgba(35, 0, 77, 0.2)'
    ],
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderWidth: '2px'
          }
        }
      }
    }
  },
  ptBR
);
