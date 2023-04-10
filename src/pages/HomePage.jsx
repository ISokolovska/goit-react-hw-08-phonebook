import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import image from './../images/phone_removebg.png';

function HomePage() {
  const { isLoading, error } = useSelector(state => state.userData);

  return (
    <Flex
      flexDirection={{ base: 'column', xl: 'row' }}
      // justifyContent={{ base: 'flex-start', lg: 'center' }}
      justifyContent="center"
      alignItems="center"
      maxW="1280px"
      h="100vh"
      m="auto"
      p="60px 30px"
      bg="champagne"
    >
      <Image
        boxSize="100px"
        objectFit="cover"
        src={image}
        alt="Phone"
        w={{ base: '350px', lg: '450px' }}
        h={{ base: '350px', lg: '450px' }}
        mb={{ base: '50px' }}
      />
      <Box w="50vw">
        {!isLoading && (
          <Text
            fontFamily="Montserrat"
            fontSize={{ base: '26px', md: '34px', lg: '54px' }}
            fontWeight={{ base: '700', lg: '800' }}
            lineHeight="1.3"
            letterSpacing="0.03em"
            textAlign="center"
          >
            Hi, I'm your phonebook !
          </Text>
        )}
        {error.length > 0 && <p>Some error occured... With message {error}</p>}
      </Box>
    </Flex>
  );
}

export default HomePage;
