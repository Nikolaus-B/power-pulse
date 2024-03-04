import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { productsReducer } from './products/productsSlice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { diaryReducer } from './diary/diarySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    exercises: exercisesReducer,
    diary: diaryReducer,
  },
});
