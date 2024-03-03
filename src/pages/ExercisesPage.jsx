import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcategoriesList"
import React, { useState } from 'react';
import {data} from 'components/Exercises/data'
function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }
  return (
    <>
      <Title title={"Exercises"} />
      <ExercisesCategories onSelect={handleCategorySelect}/>
      <ExercisesSubcategoriesList category={selectedCategory} data={data} />
      {/* (selectedcategory && «ExercisesList category-(selectedCategory) data-{data)/›} */}
    </>
      
    )
}

export default ExercisesPage;
