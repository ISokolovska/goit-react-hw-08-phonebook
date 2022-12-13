import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './auth-operations';

const initialState = {
  userData: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(logIn.pending, (state, action) => {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      // state.userData = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      // state = initialState;
    });
  },
});

export const {} = authSlice.actions;
export const userReducer = authSlice.reducer;
