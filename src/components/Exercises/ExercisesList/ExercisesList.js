import React, { useState, useEffect} from 'react';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { List } from "./ExercisesList.styled"
import { fetchExercises } from 'API/exercisesApi';

export const ExercisesList = ({ selectedCategory, subCategory }) => {
  let category = '';
  if (selectedCategory === "Body parts") {
    category = 'bodyPart';
  } 
  if (selectedCategory === 'Muscles') {
    category = 'target';
  }
  if (selectedCategory === 'Equipment') {
    category = 'equipment';
  }


    const [exercises, setExercises] = useState([])
    useEffect(() => {
    async function getSubcategory() {
      try {
        const exercises = await fetchExercises(category, subCategory);
        setExercises(exercises);
      } catch (error) {
      }
    }
    getSubcategory();
  }, [category, subCategory]);

    return (
      <List>
        {exercises.map((exercise) => (
          <ExercisesItem key={exercise._id} exercise={exercise} />
        ))}
      </List>
    )
}