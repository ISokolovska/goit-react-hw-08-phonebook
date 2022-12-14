import { createAsyncThunk } from '@reduxjs/toolkit';
import localStorage from 'redux-persist/es/storage';
import {
  getAuthRequest,
  logOutRequest,
  signInRequest,
  signUpRequest,
} from 'services/api';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, thunkAPI) => {
    try {
      const userData = await signUpRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);
      // console.log(userData);

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (formData, thunkAPI) => {
    try {
      const userData = await signInRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAuth = createAsyncThunk('user/getAuth', async (_, thunkAPI) => {
  try {
    const userData = await getAuthRequest();
    console.log(userData);
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('user/logOut', async (_, thunkAPI) => {
  try {
    await logOutRequest();
    localStorage.removeItem('token');
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
