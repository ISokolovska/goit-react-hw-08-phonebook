import { Link, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box
      separator=" "
      display={'flex'}
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Link
        as={NavLink}
        variant="authLink"
        mr={{ lg: '40px' }}
        mb={{ base: '30px', lg: '0' }}
        to="/sign-up"
      >
        Register
      </Link>
      <Link as={NavLink} variant="authLink" to="/sign-in">
        Login
      </Link>
    </Box>
  );
};
