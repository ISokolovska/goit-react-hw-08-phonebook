import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/selectors';
import { FilterText } from './Styled';
import { Input } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilterContacts = event => {
    const { value } = event.target;
    dispatch(filterContact(value));
  };

  return (
    <label htmlFor="filter">
      <FilterText>Find contacts by name</FilterText>
      <Input
        variant="outline"
        placeholder="Find contacts by name"
        bg="light"
        size="md"
        width="300px"
        type="text"
        id="filter"
        value={filter}
        onChange={setFilterContacts}
      />
    </label>
  );
};

export default Filter;
