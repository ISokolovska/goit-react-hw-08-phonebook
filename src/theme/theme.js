import { extendTheme } from '@chakra-ui/react';
import { linkTheme } from './components/links.extend';
import { textTheme } from './components/texts.extend';
import { inputTheme } from './components/inputs.extend';
import { buttonTheme } from './components/buttons.extend';

export const breakpoints = {
  sm: '320px',
  md: '480px',
  lg: '768px',
  xl: '1280px',
};

// const components = {
// Link: linksTheme,
// Text: textTheme,
// Modal: {
//   baseStyle: {
//     dialog: {
//       // maxWidth: ['95%', '95%', '95%'],
//       // minWidth: '95%',
//       padding: () => ({ base: '40px 23px', md: '40px 80px' }),
//       maxWidth: () => ({ base: '608px' }),
//       // width: '100%',
//       bg: 'white',
//     },
//   },
//   sizes: {
//     custom: {
//       content: {
//         maxWidth: '608px',
//       },
//     },
//   },
// },

// };

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    primary: '#000000',
    white: '#FFFFFF',
    champagne: '#EBE8BF',
    grey: '#BDBDBD',
    red: '#FF0000',
    yellow: '#FFBF00',
    seeblue: '#66C3B1',
    accentOrange: '#FF6101',
    darkBlue: '#3B4255',
  },
  components: {
    Text: textTheme,
    Link: linkTheme,
    Input: inputTheme,
    Button: buttonTheme,
    FormLabel: textTheme,
  },
});

export default theme;
