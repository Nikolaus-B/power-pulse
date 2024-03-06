import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
  fetchCategories,
  fetchRecommended,
} from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  products: [],
  categories: [],
  recommended: [],
  notRecommended: [],
  filter: {
    query: '',
    category: '',
    recommended: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterQuery: (state, action) => {
      state.filter.query = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filter.category = action.payload;
    },
    setFilterRecommended: (state, action) => {
      state.filter.recommended = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products.products = action.payload;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(fetchRecommended.fulfilled, (state, action) => {
        state.products.recommended = action.payload[0];
        state.products.notRecommended = action.payload[1];
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.products.categories = action.payload;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterQuery, setFilterCategory, setFilterRecommended } = productsSlice.actions;
