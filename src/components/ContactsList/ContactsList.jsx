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
    <Box display="flex" flexDirection="column" justifyContent="center">
      <List
        display="flex"
        flexDirection="column"
        alignItems="center"
        className="contacts-list"
      >
        {filteredContacts.map(contact => {
          return (
            <ListItem
              display="flex;"
              justifyContent="center"
              alignItems="center"
              mb="10px"
              key={contact.id}
            >
              <Text fontSize="20px" color="light">
                {contact.name}: {contact.number}
              </Text>
              <Button
                variant="primary"
                _active={{ background: 'hoverBtn' }}
                _hover={{ background: 'hoverBtn' }}
                type="submit"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <DeleteIcon boxSize={6} />
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
