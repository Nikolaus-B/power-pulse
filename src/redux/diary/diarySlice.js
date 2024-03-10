import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddExercises,
  fetchAddProduct,
  fetchDeleteExercise,
  fetchDeleteProduct,
  fetchDiary,
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
  exercises: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDiary.fulfilled, (state, action) => {});
    builder.addCase(fetchAddProduct.fulfilled, (state, action) => {
      state.products = action.payload.data.addProducts;
    });
    builder.addCase(fetchAddExercises.fulfilled, (state, action) => {
      state.exercises.push(action.payload.addExercises);
    });
    builder.addCase(fetchDeleteProduct.fulfilled, (state, action) => {});
    builder.addCase(fetchDeleteExercise.fulfilled, (state, action) => {});
  },
});

export const diaryReducer = diarySlice.reducer;
