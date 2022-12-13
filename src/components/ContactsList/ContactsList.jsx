import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Button } from '../ContactsForm/Styled';
import { Contact, ContactsItem, ContactsWrapper } from './Styled';

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
    <ContactsWrapper className="contacts-list">
      {filteredContacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <Contact>
              {contact.name}: {contact.phone}
            </Contact>
            <Button
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </ContactsWrapper>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
