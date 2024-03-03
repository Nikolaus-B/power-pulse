import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcategoriesList"
import React, { useState } from 'react';
import {filters} from 'components/Exercises/filters'
function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Body parts");
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }
  return (
    <>
      <Title title={"Exercises"} />
      <ExercisesCategories onSelect={handleCategorySelect}/>
      <ExercisesSubcategoriesList category={selectedCategory} filters={filters} />
      {selectedCategory && <ExercisesList category={selectedCategory} data={data} />}
    </>
      
    )
}

export default ExercisesPage;
