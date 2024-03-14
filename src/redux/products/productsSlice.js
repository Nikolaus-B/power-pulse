import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { fetchCategories } from './operations';

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
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        toast.error('Oops, something went wrong. Try reloading page!');
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterQuery, setFilterCategory, setFilterRecommended } =
  productsSlice.actions;
