import React from 'react';
import { NavDesk } from 'components/NavDesk/NavDesk';
import { Box, Container } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavMob } from 'components/NavMob/NavMob';

function Header() {
  const user = useSelector(getUser);
  const isLoggedIn = user?.email ?? null;
  return (
    <Box as="header" w="100%" bg="white">
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1200px"
        m="auto"
        p="30px 16px"
      >
        <NavMob display={{ base: 'flex', lg: 'none' }} />
        <NavDesk display={{ base: 'none', xl: 'flex' }} />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Container>
    </Box>
  );
}

export default Header;
