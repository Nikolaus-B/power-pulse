import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const productsReducer = productsSlice.reducer;
