import { Box } from '@chakra-ui/react';
import { ContactsForm, ContactsList, Filter } from 'components';
import WithAuthRedirect from 'components/HOK/WithAuthRedirect';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/selectors';

function ContactsPage() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box h="100vh" bg="darkBlue" w="100%" maxW="1200px" m="0 auto">
      <ContactsForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactsList />
    </Box>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
