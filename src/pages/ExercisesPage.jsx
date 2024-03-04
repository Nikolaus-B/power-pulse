import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCatigories/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcatigoriesList/ExercisesSubcategoriesList"
import React, { useState } from 'react';
import {filters} from 'components/Exercises/filters'
import { ExercisesList } from 'components/Exercises/ExercisesList/ExercisesList';

function ExercisesPage() {
  // const [pageTitle, setPageTitle] = useState("Exercises");
  const [selectedCategory, setSelectedCategory] = useState("Body parts");
  // const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  // const [showSubcategories, setShowSubcategories] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [title, setTitle] = useState('Exercises');

  const handleSubcategorySelect = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    setTitle(subcategoryName);
    setShowBackButton(true);
  };

  const handleBackButtonClick = () => {
    setSelectedSubcategory(null);
    setTitle('Exercises');
    setShowBackButton(false);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // setShowSubcategories(true);
  }
  // const handleSubcategorySelect = (subcategory) => {
  //   setSelectedSubcategory(subcategory);
  //   setShowSubcategories(false);
  // };
  // const handleBackButtonClick = () => {
  //   setPageTitle("Exercises");
  //   setSelectedSubcategory("");
  //   setShowSubcategories(true);
  // };
  return (
    <>
      <div>
      <Title title={title} />
      {showBackButton && <button onClick={handleBackButtonClick}>Back</button>}
        <ExercisesCategories onSelect={handleCategorySelect} />

      {selectedSubcategory ? (
        <ExercisesList exercises={selectedSubcategory} />
      ) : (
            <ExercisesSubcategoriesList
              category={selectedCategory}
              subcategories={filters}
              onSelect={handleSubcategorySelect}
              filters={filters}
        />
      )}
    </div>
      {/* <Title title={pageTitle} />
      {showSubcategories
        ? (<div>
          <ExercisesCategories onSelect={handleCategorySelect} />
          <ExercisesSubcategoriesList category={selectedCategory} onSelect={handleSubcategorySelect} filters={filters} />
        </div>)
        : (
          <div>
            <button onClick={handleBackButtonClick}>Back</button>
            <ExercisesList subcategory={selectedSubcategory}/>
          </div>
        )} */}

      {/* {selectedCategory && <ExercisesList category={selectedCategory} filters={filters} />} */}
    </>
      
    )
}

export default ExercisesPage;
