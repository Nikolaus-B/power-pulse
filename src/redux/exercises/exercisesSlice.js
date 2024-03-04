import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.exercises = [...action.payload];
    });
  },
});

export const exercisesReducer = exercisesSlice.reducer;
