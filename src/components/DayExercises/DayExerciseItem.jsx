import React from 'react';
import {
  MobileExercisesTitle,
  MobileExercisesValue,
  MobileExercisesValueContainer,
} from './DayExercises.styled';

export const DayExerciseItem = ({ title, value }) => {
  const defineSize = title => {
    return title === 'Body Part' || title === 'Equipment' || title === 'Name'
      ? 'big'
      : 'small ';
  };

  return (
    <div>
      <MobileExercisesTitle> {title}</MobileExercisesTitle>
      <MobileExercisesValueContainer className={defineSize(title)}>
        <MobileExercisesValue>{value}</MobileExercisesValue>
      </MobileExercisesValueContainer>
    </div>
  );
};
