import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { SignInForm } from 'components';
import { Box, Heading } from '@chakra-ui/react';

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
    >
      <Heading variant="formTitleText" mb="40px">
        Please, log in !
      </Heading>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignInForm isLoading={isLoading} />
    </Box>
  );
}

export default SignInPage;
