import { Link, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box
      separator=" "
      display={'flex'}
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Link
        // _selected={{ color: 'white', bg: 'dark' }}
        variant={'headerLink'}
        mr={{ lg: '40px' }}
        as={NavLink}
        to="/"
      >
        Home
      </Link>
      <Link
        // _selected={{ color: 'white', bg: 'dark' }}
        variant={'headerLink'}
        as={NavLink}
        to="/contacts"
      >
        Contacts
      </Link>
    </Box>
  );
};
