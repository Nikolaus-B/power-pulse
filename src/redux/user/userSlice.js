import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserAvatars,
  fetchUserCurrent,
  fetchUserLogIn,
  fetchUserLogout,
  fetchUserParams,
  fetchUserRegister,
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
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
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

      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlice.reducer;
