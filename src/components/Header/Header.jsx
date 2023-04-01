import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Container } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';

function Header() {
  const user = useSelector(getUser);
  const isLoggedIn = user?.email ?? null;
  return (
    <Box as="header" w="100%" bg="white">
      <Container
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ lg: 'space-between' }}
        alignItems="center"
        maxWidth="1200px"
        mx="auto"
        p="40px 16px"
      >
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Container>
    </Box>
  );
}

export default Header;
