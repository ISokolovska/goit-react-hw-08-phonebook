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
      justifyContent="center"
      alignItems="center"
      m="0 auto"
      bg="champagne"
      maxWidth="1200px"
      h="100vh"
      p="60px 30px "
    >
      {isOpen && (
        <Box onClick={handleBackDropClick}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg="darkBlue"
            w="400px"
            p="30px"
            m="auto"
            border="1px solid darkBlue"
            borderRadius="20px"
          >
            <Button
              type="button"
              w="40px"
              h="40px"
              mb="20px"
              borderRadius="50px"
              onClick={() => {
                // reset();
                setIsOpen(!isOpen);
              }}
            >
              <CloseIcon />
            </Button>

            <ContactsForm />
          </Box>
        </Box>
      )}
      {!isOpen && (
        <Button
          type="click"
          w="40px"
          h="40px"
          borderRadius="50px"
          onClick={() => {
            // dispatch(cleanError());
            setIsOpen(!isOpen);
          }}
        >
          <AddIcon boxSize={6} />
        </Button>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      {!isOpen && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Box>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
