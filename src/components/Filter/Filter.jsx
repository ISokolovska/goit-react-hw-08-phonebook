import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/selectors';
// import { FilterText } from './Styled';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
// import { Search2Icon } from '@chakra-ui/icons';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilterContacts = event => {
    const { value } = event.target;
    dispatch(filterContact(value));
  };

  return (
    <FormControl display="flex" flexDirection="column" justifyContent="center">
      <FormLabel>Find contacts by name </FormLabel>
      <Input
        variant="primary"
        width="300px"
        placeholder="Find contacts by name"
        type="text"
        id="filter"
        value={filter}
        onChange={setFilterContacts}
      />
    </FormControl>
  );
};

export default Filter;
