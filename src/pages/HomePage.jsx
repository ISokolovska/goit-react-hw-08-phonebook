import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

function HomePage() {
  const { isLoading, error } = useSelector(state => state.userData);

  return (
    <Box h="100vh" bg="darkBlue">
      {!isLoading && (
        <Text
          mt="150px"
          fontFamily="Roboto"
          fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          lineHeight="1.36"
          letterSpacing="0.06em"
          textAlign="center"
        >
          Hi, I'm your phonebook !
        </Text>
      )}
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
    </Box>
  );
}

export default HomePage;
