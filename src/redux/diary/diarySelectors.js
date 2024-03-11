import { createSelector } from '@reduxjs/toolkit';
import { selectBMR, selectDailyRateSports } from '../user/userSelectors';

export const selectDate = state => state.diary.date;

export const selectDiaryProducts = state => state.diary.products;

export const selectDiaryExercises = state => state.diary.exercises;

export const selectCaloriesConsumed = createSelector(
  [selectDiaryProducts],
  products => {
    let calories = 0;
    products.map(el => {
      return (calories += el.calories);
    });

    return Math.floor(calories);
  }
);

export const selectCaloriesBurned = createSelector(
  [selectDiaryExercises],
  exercises => {
    let calories = 0;
    exercises.map(el => {
      return (calories += el.calories);
    });

    return Math.floor(calories);
  }
);

export const selectCaloriesRemaining = createSelector(
  [selectCaloriesConsumed, selectBMR, selectCaloriesBurned],
  (consumed, bmr, burned) => {
    return bmr + burned - consumed;
  }
);

export const selectSportRemaining = createSelector(
  [selectDiaryExercises, selectDailyRateSports],
  (exercises, rate) => {
    let minutes = 0;
    exercises.map(el => {
      return (minutes += el.time);
    });
    const isExceeded = rate - minutes;
    if (isExceeded < 0) {
      return `+${isExceeded.toString().split('-')[1]}`;
    }
    return isExceeded.toString();
  }
);
