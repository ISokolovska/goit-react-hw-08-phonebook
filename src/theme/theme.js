import { extendTheme } from '@chakra-ui/react';
import styled from 'styled-components';
// import { ButtonStyles as Button } from 'theme/componentsStyles';
// import { InputStyles as Input } from 'theme/componentsStyles';
import { linkTheme } from './components/links.extend';
import { textTheme } from './components/texts.extend';
import { inputTheme } from './components/input.extends';
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
// Input: inputTheme,
// Textarea: textareaTheme,
// Button: buttonTheme,
// IconButton: buttonTheme,
// Heading: headingTheme,
// };

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    primary: '#111518',
    white: '#FFFFFF',
    grey: '#BDBDBD',
    red: '#FF0000',
    yellow: '#FFBF00',
    accentOrange: '#FF6101',
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

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const UserMenuItem = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const UserText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;
