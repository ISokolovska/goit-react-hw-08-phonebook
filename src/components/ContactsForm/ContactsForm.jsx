import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number,
    };
    if (
      contacts.filter(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      ).length > 0
    ) {
      return Notiflix.Notify.warning(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <FormLabel variant="formLabelText" mr="0px" mb="0px" color="champagne">
          Name
        </FormLabel>
        <Input
          variant="formInput"
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel variant="formLabelText" mr="0px" mb="0px" color="champagne">
          Number
        </FormLabel>
        <Input
          variant="formInput"
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="formButton" type="submit">
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
