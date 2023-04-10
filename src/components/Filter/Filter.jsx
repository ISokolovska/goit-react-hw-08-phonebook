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
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      mr="30px"
    >
      <FormLabel variant="formLabelText" mr="0px" mb="5px">
        Find contacts by name
      </FormLabel>
      <Input
        variant="formInput"
        w={{ base: '100%', lg: '370px' }}
        h="50px"
        m="0"
        border="2px solid"
        borderColor="yellow"
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
