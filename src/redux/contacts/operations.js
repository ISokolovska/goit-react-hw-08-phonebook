import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from 'services/api';
import axios from 'axios';

axios.defaults.baseURL = 'https://6391cb6eac688bbe4c52c11a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContactsRequest();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await addContactRequest(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContactRequest(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
