import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const headerLink = defineStyle({
  p: '27px 23px',
  color: 'primary',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: { base: '800', lg: '700' },
  fontSize: { base: '20px', md: '26px', lg: '16px' },
  lineHeight: { base: '1.8', lg: '1.2' },
  textTransform: 'uppercase',
  _focus: {
    textDecoration: 'none',
    color: 'red',
    border: '1px solid',
    borderColor: 'accentOrange',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    textDecoration: 'none',
    color: 'red',
    border: '1px solid',
    borderColor: 'accentOrange',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
});

export const linkTheme = defineStyleConfig({
  variants: {
    headerLink,
  },
});
