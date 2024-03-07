import React from 'react';
import {
  DayExercisesIcon,
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
        <ExercisesLink to="/exercises">
          Add Exercise{' '}
          <DayExercisesIcon height={15} width={15} iconid={'arrow'} />
        </ExercisesLink>
      </ExercisesHeader>
      <Exerciseslist>
        <NotFoundExercises>Not found exercises</NotFoundExercises>
      </Exerciseslist>
    </ExercisesContainer>
  );
};
