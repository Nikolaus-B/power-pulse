import React from 'react';
import {
  DayExercisesTitle,
  ExercisesContainer,
  ExercisesHeader,
  ExercisesLink,
  Exerciseslist,
  NotFoundExercises,
} from './DayExercises.styled';
import { Icon } from 'components/Icon/Icon';

export const DayExercises = () => {
  return (
    <ExercisesContainer>
      <ExercisesHeader>
        <DayExercisesTitle>Exercises</DayExercisesTitle>
        <ExercisesLink to="/exercises">
          Add Exercise <Icon height={16} width={16} />
        </ExercisesLink>
      </ExercisesHeader>
      <Exerciseslist>
        <NotFoundExercises>Not found exercises</NotFoundExercises>
      </Exerciseslist>
    </ExercisesContainer>
  );
};
