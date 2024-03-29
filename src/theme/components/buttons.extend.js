import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const formButton = defineStyle({
  mt: '40px',
  width: { base: '100%', md: '300px' },
  height: '50px',
  backgroundColor: 'yellow',
  borderRadius: '20px',
  border: '1px solid',
  borderColor: 'yellow',
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  fontSize: { base: '14px', md: '16px', lg: '18px' },
  lineHeight: '27px',
  textAlign: 'center',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  _focus: {
    backgroundColor: 'white',
    color: 'yellow',
    border: '1px solid',
    borderColor: 'yellow',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    backgroundColor: 'white',
    color: 'yellow',
    border: '1px solid ',
    borderColor: 'yellow',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
});

const addButton = defineStyle({
  width: '100px',
  height: '50px',
  backgroundColor: 'yellow',
  borderRadius: '20px',
  border: '1px solid',
  borderColor: 'yellow',
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '27px',
  textAlign: 'center',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  _focus: {
    backgroundColor: 'white',
    color: 'yellow',
    border: '1px solid',
    borderColor: 'yellow',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    backgroundColor: 'white',
    color: 'yellow',
    border: '1px solid ',
    borderColor: 'yellow',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
});

const logOutButton = defineStyle({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: { base: '15px', md: '20px', lg: '25px' },
  height: { base: '33px', lg: '50px' },
  backgroundColor: 'seeblue',
  borderRadius: '20px',
  border: '1px solid',
  borderColor: 'seeblue',
  color: 'white',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: { base: '14px', md: '16px', lg: '18px' },
  lineHeight: { base: '1.8', lg: '1.2' },
  textAlign: 'center',
  letterSpacing: '0.1em',

  _focus: {
    textDecoration: 'none',
    backgroundColor: 'white',
    color: 'seeblue',
    border: '1px solid',
    borderColor: 'seeblue',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    textDecoration: 'none',
    backgroundColor: 'white',
    color: 'seeblue',
    border: '1px solid ',
    borderColor: 'seeblue',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    formButton,
    addButton,
    logOutButton,
  },
});
