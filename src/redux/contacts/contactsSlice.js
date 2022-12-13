import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
    builder.addCase(addContact.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
    builder.addCase(deleteContact.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
