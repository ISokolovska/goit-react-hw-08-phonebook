import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SignUpForm } from 'components';
import { useNavigate } from 'react-router';
import { Box, Flex, Heading } from '@chakra-ui/react';

function SignUpPage() {
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
          Please, register !
        </Heading>
        {error.length > 0 && <p>Some error occured... With message {error}</p>}
        <SignUpForm isLoading={isLoading} />
      </Flex>
    </Box>
  );
}
export default SignUpPage;
