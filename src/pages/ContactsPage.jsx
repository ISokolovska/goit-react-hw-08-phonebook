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
    <Box h="100vh" bg="darkBlue" w="100%" maxW="1200px" m="0 auto">
      {isOpen && (
        <Box onClick={handleBackDropClick}>
          <Box>
            <Button
              type="button"
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
          onClick={() => {
            // dispatch(cleanError());
            setIsOpen(!isOpen);
          }}
        >
          <AddIcon boxSize={6} />
        </Button>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactsList />
    </Box>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
