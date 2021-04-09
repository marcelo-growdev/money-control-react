import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createMuiTheme(
  {
    palette: {
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: '#2b385b',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        main: '#e16e0e',
      },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'serif',
      ].join(','),
      fontSize: 12,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html, body': {
            WebkitFontSmoothing: 'auto',
            backgroundColor: '#f7f7f7',
            color: '#2b385b',
          },
        },
      },
    },
  },
  ptBR,
);
