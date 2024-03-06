import { createSlice } from '@reduxjs/toolkit';
import { fetchDiary } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  diary: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDiary.fulfilled, (state, action) => {});
  },
});

export const diaryReducer = diarySlice.reducer;
