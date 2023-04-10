import React from 'react';
import { Box, Container } from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavMob } from 'components/NavMob/NavMob';
import { NavTab } from 'components/NavTab/NavTab';
import { NavDesk } from 'components/NavDesk/NavDesk';

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
        maxWidth="1280px"
        m="auto"
        p="30px 16px"
      >
        <NavMob display={{ base: 'flex', lg: 'none' }} />
        <NavTab display={{ base: 'none', lg: 'flex', xl: 'none' }} />
        <NavDesk display={{ base: 'none', xl: 'flex' }} />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Container>
    </Box>
  );
}

export default Header;
