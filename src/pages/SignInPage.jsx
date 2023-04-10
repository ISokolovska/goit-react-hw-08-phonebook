import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { SignInForm } from 'components';
import { Box, Flex, Heading } from '@chakra-ui/react';

function SignInPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    navigate('/contacts');
  }, [user, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m="auto"
      bg="champagne"
      maxWidth="1280px"
      h="100vh"
      p="60px 30px "
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: '100%', md: '400px' }}
        p="30px"
        border="2px solid "
        borderColor="yellow"
        borderRadius="20px"
        bg="white"
      >
        <Heading variant="formTitleText" mb="30px">
          Please, log in !
        </Heading>
        {error.length > 0 && <p>Some error occured... With message {error}</p>}
        <SignInForm isLoading={isLoading} />
      </Flex>
    </Box>
  );
}

export default SignInPage;
