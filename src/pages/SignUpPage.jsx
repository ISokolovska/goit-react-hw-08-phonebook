import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SignUpForm } from 'components';
import { useNavigate } from 'react-router';
import { Box, Heading } from '@chakra-ui/react';

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
    >
      <Heading variant="formTitleText" mb="30px">
        Please, register !
      </Heading>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignUpForm isLoading={isLoading} />
    </Box>
  );
}
export default SignUpPage;
