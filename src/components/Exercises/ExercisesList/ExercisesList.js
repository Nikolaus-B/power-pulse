import React, { useState, useEffect } from 'react';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { List } from './ExercisesList.styled';
import { fetchExercises } from 'API/exercisesApi';
import { Loader } from '../../Loader/Loader';

export const ExercisesList = ({ selectedCategory, subCategory }) => {
  let category = '';
  if (selectedCategory === 'Body parts') {
    category = 'bodyPart';
  }
  if (selectedCategory === 'Muscles') {
    category = 'target';
  }
  if (selectedCategory === 'Equipment') {
    category = 'equipment';
  }

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSubcategory() {
      try {
        const exercises = await fetchExercises(category, subCategory);
        setExercises(exercises);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getSubcategory();
  }, [category, subCategory]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <List>
          {exercises.map(exercise => (
            <ExercisesItem key={exercise._id} exercise={exercise} />
          ))}
        </List>
      )}
    </>
  );
};
