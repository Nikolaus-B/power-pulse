import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchUserAvatars,
  fetchUserCurrent,
  fetchUserLogIn,
  fetchUserLogout,
  fetchUserParams,
  fetchUserRegister,
  refreshing,
} from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  bmr: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchUserRegister.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.goToParams = true;
        state.isLoading = false;
        toast.success('Registration successful');
      })

      .addCase(fetchUserRegister.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(
          'This email address is already registered. Please enter another email address to proceed.'
        );
      })

      .addCase(fetchUserLogIn.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchUserLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.loading('Successful login.');
      })

      .addCase(fetchUserLogIn.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(
          'Unable to sign in. Please check your email and password. Please try again!'
        );
      })

      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.user = { ...action.payload.user };
        console.log(action.payload.user);
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.bmr = action.payload.bmr;
      })

      .addCase(fetchUserParams.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserAvatars.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserLogout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = action.payload.token;
        state.isRefreshing = false;
      })

      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const userReducer = userSlice.reducer;
