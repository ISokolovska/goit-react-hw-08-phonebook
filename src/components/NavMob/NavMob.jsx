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
      <Flex top="1rem" right="1.5rem" flexDirection="column">
        <Button display="inline" onClick={() => changeDisplay('flex')}>
          <HamburgerIcon boxSize="30px" />
        </Button>
      </Flex>
      <Flex
        w="100vw"
        display={display}
        bgColor="white"
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
          p="30px 20px"
        >
          <Button
            type="button"
            size="md"
            p="0"
            mb="40px"
            left="38%"
            border="1px solid"
            borderColor="primary"
            borderRadius="50px"
            onClick={() => changeDisplay('none')}
          >
            <CloseIcon boxSize="12px" />
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
