import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllProducts,
  fetchCategories,
  fetchIsRecommended,
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
  isRecommended: [],
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
        state.products = action.payload;
      })
      .addCase(fetchIsRecommended.fulfilled, (state, action) => {
        state.isRecommended = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterQuery, setFilterCategory, setFilterRecommended } = productsSlice.actions;
