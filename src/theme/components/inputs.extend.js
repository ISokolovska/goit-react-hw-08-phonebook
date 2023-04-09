import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const formInput = defineStyle({
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    m: 'auto',
    mt: '5px',
    p: '10px 15px',
    borderRadius: '20px',
    border: '1px solid #E0E0E0',
    color: 'primary',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: { base: '14px', md: '16px', lg: '18px' },
    lineHeight: '1.5',
    _placeholder: { color: 'grey' },
  },
});

export const inputTheme = defineStyleConfig({
  variants: {
    formInput,
  },
});
