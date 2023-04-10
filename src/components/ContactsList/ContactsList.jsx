import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  const filteredContacts = onFilterContacts();

  return (
    <Box
    // display="flex" flexDirection="column" justifyContent="center"
    >
      <List
        mt="40px"
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
        // className="contacts-list"
      >
        {filteredContacts.map(contact => {
          return (
            <ListItem
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              w={{ base: '100%', lg: '500px' }}
              p="5px 10px"
              mb="15px"
              border="2px solid"
              borderColor="yellow"
              key={contact.id}
            >
              <Text variant="formLabelText" w={{ base: '110px', md: '150px' }}>
                {contact.name}:
              </Text>
              <Text variant="formLabelText" w={{ base: '110px', md: '150px' }}>
                {contact.number}
              </Text>

              <Button
                w="40px"
                h="40px"
                borderRadius="50px"
                type="submit"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <DeleteIcon boxSize={6} color="#FF0000" />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
