import React from 'react';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { data } from 'components/Exercises/data';
import { List } from "./ExercisesList.styled"

export const ExercisesList = ({subCategory}) => {
  const sortedExercises = data.filter(item => item.bodyPart === subCategory || item.equipment === subCategory || item.target === subCategory);
    return (
      <List>
        {sortedExercises.map((exercise) => (
          <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
        ))}
      </List>
    )
}