import React from 'react';
import {
  DayExercisesTitle,
  ExercisesContainer,
  ExercisesHeader,
  ExercisesIcon,
  ExercisesLink,
  Exerciseslist,
  NotFoundExercises,
} from './DayExercises.styled';

export const DayExercises = () => {
  return (
    <ExercisesContainer>
      <ExercisesHeader>
        <DayExercisesTitle>Exercises</DayExercisesTitle>
        <ExercisesLink to="/exercises">
          Add Exercise{' '}
          <ExercisesIcon icon="ri:arrow-right-line" height={16} width={16} />
        </ExercisesLink>
      </ExercisesHeader>
      <Exerciseslist>
        <NotFoundExercises>Not found exercises</NotFoundExercises>
      </Exerciseslist>
    </ExercisesContainer>
  );
};
