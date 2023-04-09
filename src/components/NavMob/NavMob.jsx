import { Link, Flex, Button } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export const NavMob = ({ ...props }) => {
  const [display, changeDisplay] = useState('none');
  const location = useLocation().pathname;

  useEffect(() => {
    changeDisplay('none');
  }, [location]);

  return (
    <Flex {...props}>
      <Flex top="1rem" right="1.5rem" align="center">
        <Button display="inline" onClick={() => changeDisplay('flex')}>
          <HamburgerIcon size="40px" />
        </Button>
      </Flex>
      <Flex
        w="100vw"
        display={display}
        bgColor="mainColor"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button
            type="button"
            // size="xs"
            // p="0"
            // mb="20px"
            // left="48%"
            // borderRadius="50px"
            onClick={() => changeDisplay('none')}
          >
            <CloseIcon boxSize="10px" />
          </Button>
          <Link
            // _selected={{ color: 'white', bg: 'dark' }}
            variant={'headerLink'}
            mr={{ lg: '40px' }}
            as={NavLink}
            to="/"
            onClick={() => changeDisplay('none')}
          >
            Home
          </Link>
          <Link
            // _selected={{ color: 'white', bg: 'dark' }}
            variant="headerLink"
            as={NavLink}
            to="/contacts"
            onClick={() => changeDisplay('none')}
          >
            Contacts
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
