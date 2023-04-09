import { Link, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavDesk = ({ ...props }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      {...props}
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
        variant="headerLink"
        as={NavLink}
        to="/contacts"
      >
        Contacts
      </Link>
    </Box>
  );
};
