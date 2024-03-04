import React from 'react';
import {
  DayExercisesTitle,
  ExercisesContainer,
  ExercisesHeader,
  ExercisesLink,
  Exerciseslist,
  NotFoundExercises,
} from './DayExercises.styled';

export const DayExercises = () => {
  return (
    <ExercisesContainer>
      <ExercisesHeader>
        <DayExercisesTitle>Exercises</DayExercisesTitle>
        <ExercisesLink to="/product">Add Exercise</ExercisesLink>
      </ExercisesHeader>
      <Exerciseslist>
        <NotFoundExercises>Not found exercises</NotFoundExercises>
      </Exerciseslist>
    </ExercisesContainer>
  );
};
