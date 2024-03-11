import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  categories: [],
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
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterQuery, setFilterCategory, setFilterRecommended } = productsSlice.actions;
