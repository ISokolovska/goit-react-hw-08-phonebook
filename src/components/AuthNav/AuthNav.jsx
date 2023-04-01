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
        variant={'headerLink'}
        mr={{ lg: '40px' }}
        as={NavLink}
        to="/sign-up"
      >
        Register
      </Link>
      <Link variant={'headerLink'} as={NavLink} to="/sign-in">
        Authorization
      </Link>
    </Box>
  );
};
