import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { signUpRequest } from 'services/api';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, thunkAPI) => {
    try {
      const userData = await signUpRequest(formData);
      // token.set(data.token);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async formData => {
  try {
    const { data } = await axios.post('/users/login', formData);
    // token.set(data.token);
    return data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async formData => {
  try {
    await axios.post('/users/logout', formData);
    // token.unset();
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
  }
});
