import React from 'react';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { data } from 'components/Exercises/data';

export const ExercisesList = () => {
  const sortedExercises = data.slice().sort((a, b) => a.name.localeCompare(b.name));
    return (
      <div>
      <ul>
        {sortedExercises.map((exercise) => (
          <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
        ))}
      </ul>
    </div>
    // <div>
    //   {data.map((exercise) => (
    //     <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
    //   ))}
    // </div>
    )
}