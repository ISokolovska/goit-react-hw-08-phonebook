import { Link, Flex, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const NavTab = ({ ...props }) => {
  const [display, changeDisplay] = useState('none');

  return (
    <Flex {...props}>
      <Flex top="1rem" right="1.5rem" align="center">
        <Button onClick={() => changeDisplay('flex')}>
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
