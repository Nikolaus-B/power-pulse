import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises, fetchFilters } from './operations';


// const setFilter = (filter, value) => ({
//   type: 'SET_FILTER',
//   payload: { filter, value }
// });

// const setExercises = (exercises) => ({
//   type: 'SET_EXERCISES',
//   payload: exercises
// })

const initialState = {
  exercises: [],
  filters: []
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExercises.fulfilled, (state, action) => {
      state.exercises = [...action.payload];
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = [...action.payload];
      });
  },
});

export const exercisesReducer = exercisesSlice.reducer;

