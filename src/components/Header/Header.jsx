import React from 'react';
import { HeaderNav } from 'styles/theme';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Container } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

function Header() {
  const user = useSelector(getUser);
  const isLoggedIn = user?.email ?? null;
  return (
    <Box as="header" w="100%" bg="pink">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1200px"
        mx="auto"
        p="30px"
      >
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Container>
    </Box>
  );
}

export default Header;
