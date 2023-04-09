import { Link, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box
      display={'flex'}
      flexDirection="row"
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Link
        as={NavLink}
        variant="authLink"
        mr={{ base: '20px', lg: '40px' }}
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
