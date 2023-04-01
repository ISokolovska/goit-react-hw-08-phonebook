import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const formButton = defineStyle({
  mt: '30px',
  width: '300px',
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

export const buttonTheme = defineStyleConfig({
  variants: {
    formButton,
  },
});
