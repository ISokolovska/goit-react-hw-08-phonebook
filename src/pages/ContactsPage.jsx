import { Box, Button } from '@chakra-ui/react';
import { ContactsForm, ContactsList, Filter } from 'components';
import WithAuthRedirect from 'components/HOK/WithAuthRedirect';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/selectors';

function ContactsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const handelKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        // reset();
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      // reset();
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handelKeyDown);

    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [handelKeyDown]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="0 auto"
      bg="champagne"
      maxWidth="1200px"
      h="100vh"
      p="60px 30px "
    >
      {isOpen && (
        <Box
          onClick={handleBackDropClick}
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          background="rgba(0, 0, 0, 0.25)"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="darkBlue"
            w="400px"
            p="15px 30px 30px"
            m="auto"
            border="1px solid darkBlue"
            borderRadius="20px"
          >
            <Button
              type="button"
              size="xs"
              p="0"
              mb="20px"
              left="48%"
              borderRadius="50px"
              onClick={() => {
                // reset();
                setIsOpen(!isOpen);
              }}
            >
              <CloseIcon boxSize="10px" />
            </Button>
            <ContactsForm />
          </Box>
        </Box>
      )}

      {isLoading && !error && <b>Request in progress...</b>}
      {!isOpen && (
        <>
          <Box display="flex" flexDir="row-reverse" alignItems="center">
            <Button
              type="click"
              variant="addButton"
              onClick={() => {
                // dispatch(cleanError());
                setIsOpen(!isOpen);
              }}
            >
              <AddIcon boxSize={6} />
            </Button>
            <Filter />
          </Box>
          <ContactsList />
        </>
      )}
    </Box>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
