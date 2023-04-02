import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const formTitleText = defineStyle({
  p: '27px 23px',
  color: 'primary',
  fontFamily: 'Montserrat',
  fontWeight: { base: '800', lg: '700' },
  fontSize: { base: '20px', md: '26px', lg: '16px' },
  lineHeight: { base: '1.8', lg: '1.2' },
  textTransform: 'uppercase',
});

const formLabelText = defineStyle({
  color: 'primary',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '1.5',
});

const userName = defineStyle({
  p: '15px',
  color: 'primary',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: { base: '20px', md: '26px', lg: '16px' },
  lineHeight: { base: '1.8', lg: '1.2' },
});

export const textTheme = defineStyleConfig({
  variants: {
    formTitleText,
    formLabelText,
    userName,
  },
});
